import React, { useEffect, useMemo, useRef } from "react";

export type CyberWebDataFlowRedBGProps = {
  className?: string;
  nodes?: number;
  maxLinksPerNode?: number;
  packetRate?: number; // higher = more packets
};

type Point = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  energy: number;
};

type Edge = {
  a: number;
  b: number;
  dist: number;
};

type Packet = {
  ei: number;
  t: number;
  v: number;
  life: number;
  maxLife: number;
  dir: 1 | -1;
};

export const CyberWebDataFlowRedBG: React.FC<CyberWebDataFlowRedBGProps> = ({
  className = "",
  nodes = 130,
  maxLinksPerNode = 3,
  packetRate = 0.16,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // memoized random seed to keep stable look
  const seed = useMemo(() => Math.random() * 10000, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;

    const getBounds = () => {
      const p = canvas.parentElement;
      if (!p) return { w: window.innerWidth, h: window.innerHeight };
      const r = p.getBoundingClientRect();
      return { w: Math.max(1, r.width), h: Math.max(1, r.height) };
    };

    const resize = () => {
      const { w, h } = getBounds();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const rnd = (min: number, max: number) => min + Math.random() * (max - min);
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

    // -------------------------------------------------------
    // Build a stable full-width graph (screen-space nodes)
    // -------------------------------------------------------
    let pts: Point[] = [];
    let edges: Edge[] = [];
    let neighbors: number[][] = [];

    const buildGraph = () => {
      const { w, h } = getBounds();

      // Nodes distributed across entire canvas
      pts = Array.from({ length: nodes }).map((_, i) => ({
        id: i,
        x: rnd(w * -0.05, w * 1.05),
        y: rnd(h * -0.05, h * 1.05),
        vx: rnd(-0.08, 0.08),
        vy: rnd(-0.06, 0.06),
        phase: rnd(0, Math.PI * 2),
        energy: 0,
      }));

      // Build edges by local proximity (fast-ish)
      edges = [];
      neighbors = Array.from({ length: nodes }, () => []);

      const linkRadius = Math.max(140, Math.min(w, h) * 0.22);

      for (let i = 0; i < pts.length; i++) {
        const candidates: Array<{ j: number; d: number }> = [];

        for (let j = 0; j < pts.length; j += 2) {
          if (i === j) continue;
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < linkRadius) candidates.push({ j, d });
        }

        candidates.sort((a, b) => a.d - b.d);

        let made = 0;
        for (let c = 0; c < candidates.length && made < maxLinksPerNode; c++) {
          const j = candidates[c].j;

          // prevent duplicates (rough)
          if (neighbors[i].some((ei) => edges[ei]?.b === j)) continue;

          const a = i;
          const b = j;

          const dx = pts[a].x - pts[b].x;
          const dy = pts[a].y - pts[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const edgeIndex = edges.length;
          edges.push({ a, b, dist });

          neighbors[a].push(edgeIndex);
          neighbors[b].push(edgeIndex);

          made++;
        }
      }
    };

    buildGraph();

    // -------------------------------------------------------
    // Cyber packets traveling along edges
    // -------------------------------------------------------
    const packets: Packet[] = [];

    const spawnPacket = () => {
      if (edges.length < 2) return;

      const ei = Math.floor(Math.random() * edges.length);

      packets.push({
        ei,
        t: Math.random(),
        v: 0.008 + Math.random() * 0.018,
        life: 0,
        maxLife: 220 + Math.random() * 140,
        dir: Math.random() < 0.5 ? 1 : -1,
      });
    };

    // occasional ping bursts (adds cyber "scan" effect)
    const triggerPing = () => {
      const idx = Math.floor(Math.random() * pts.length);
      if (!pts[idx]) return;
      pts[idx].energy = 1;
    };

    let time = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);

      const { w, h } = getBounds();
      time += 0.016;

      // Background (dark + subtle red haze)
      ctx.clearRect(0, 0, w, h);

      const bg = ctx.createRadialGradient(
        w * 0.55,
        h * 0.45,
        0,
        w * 0.5,
        h * 0.55,
        Math.max(w, h)
      );
      bg.addColorStop(0, "rgba(255,0,60,0.10)");
      bg.addColorStop(0.5, "rgba(140,0,35,0.05)");
      bg.addColorStop(1, "rgba(0,0,0,0.94)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Move nodes gently (keeps it alive without spinning)
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;

        // bounce off edges softly
        if (p.x < -40 || p.x > w + 40) p.vx *= -1;
        if (p.y < -40 || p.y > h + 40) p.vy *= -1;

        // decay ping energy
        p.energy *= 0.94;
      }

      // Spawn packets
      if (Math.random() < packetRate) spawnPacket();
      if (Math.random() < 0.02) triggerPing();

      // -------------------------------------------------------
      // Draw edges (THICKER + MORE VISIBLE)
      // -------------------------------------------------------
      ctx.globalCompositeOperation = "lighter";

      for (const e of edges) {
        const a = pts[e.a];
        const b = pts[e.b];
        if (!a || !b) continue;

        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Fade edges by distance (closer = brighter)
        const closeness = clamp(1 - dist / 260, 0, 1);

        // Pings brighten connected edges
        const pingBoost = clamp(a.energy + b.energy, 0, 1);

        // boosted alpha so it's visible
        const alpha = clamp(0.1 + closeness * 0.22 + pingBoost * 0.28, 0.08, 0.55);

        // thickness scales slightly by brightness
        const thick = 1.6 + closeness * 1.8 + pingBoost * 1.2;

        // Pass 1: glow stroke (thicker, softer)
        ctx.lineWidth = thick + 1.6;
        ctx.strokeStyle = `rgba(255, 0, 60, ${alpha * 0.22})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        // Pass 2: core stroke (sharp + bright)
        ctx.lineWidth = thick;
        ctx.strokeStyle = `rgba(255, 40, 60, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // -------------------------------------------------------
      // Update + draw packets (data flow)
      // -------------------------------------------------------
      for (let i = packets.length - 1; i >= 0; i--) {
        const pk = packets[i];
        const e = edges[pk.ei];
        if (!e) {
          packets.splice(i, 1);
          continue;
        }

        pk.life += 1;

        // travel
        pk.t += pk.v * pk.dir;
        if (pk.t > 1) pk.t = 0;
        if (pk.t < 0) pk.t = 1;

        const a = pts[e.a];
        const b = pts[e.b];
        if (!a || !b) continue;

        const x = a.x + (b.x - a.x) * pk.t;
        const y = a.y + (b.y - a.y) * pk.t;

        // packet glow dot
        const pulse = 0.7 + 0.3 * Math.sin(time * 3 + pk.life * 0.1);
        const alpha = 0.25 * pulse;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 40, 60, ${alpha})`;
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fill();

        // slight glow core
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 190, 190, ${alpha * 0.35})`;
        ctx.arc(x, y, 0.9, 0, Math.PI * 2);
        ctx.fill();

        // retire packet
        if (pk.life > pk.maxLife) packets.splice(i, 1);
      }

      // -------------------------------------------------------
      // Draw nodes (with ping halo)
      // -------------------------------------------------------
      for (const p of pts) {
        const base = 0.1 + 0.06 * Math.sin(time * 1.3 + p.phase);
        const ping = p.energy;

        // outer halo (only on ping)
        if (ping > 0.02) {
          const r = 10 + ping * 22;
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
          g.addColorStop(0, `rgba(255,0,60,${0.12 * ping})`);
          g.addColorStop(1, "rgba(255,0,60,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();
        }

        // node dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 0, 60, ${base + ping * 0.25})`;
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // Scanline shimmer (tiny cyber feel)
      ctx.globalCompositeOperation = "screen";
      const scanAlpha = 0.03 + 0.02 * Math.sin(time * 1.2 + seed);
      ctx.fillStyle = `rgba(255,0,60,${scanAlpha})`;
      ctx.fillRect(0, (h * ((time * 0.08) % 1)) | 0, w, 2);

      // Vignette for readability
      ctx.globalCompositeOperation = "source-over";
      const vig = ctx.createRadialGradient(
        w * 0.5,
        h * 0.45,
        0,
        w * 0.5,
        h * 0.55,
        Math.max(w, h) * 0.95
      );
      vig.addColorStop(0, "rgba(0,0,0,0.00)");
      vig.addColorStop(0.75, "rgba(0,0,0,0.35)");
      vig.addColorStop(1, "rgba(0,0,0,0.75)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "source-over";
    };

    animate();

    const onResize = () => {
      resize();
      buildGraph();
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [nodes, maxLinksPerNode, packetRate, seed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity: 0.95 }}
    />
  );
};

export default CyberWebDataFlowRedBG;
