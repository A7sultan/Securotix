import { useEffect, useRef } from "react";
import coreLogo from "@/assets/logo_2.png";

const TAU = Math.PI * 2;

type RGB = { r: number; g: number; b: number };

type Electron = {
  ring: number;
  t: number;
  speed: number;
  label: string;
};

type Ring = {
  rot: number;
};

export default function NeonAtomicOrbit() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const logoImg = new Image();
    logoImg.src = coreLogo;

    let animationId = 0;
    let last = performance.now();

    /* ---------- RESPONSIVE PROFILE ---------- */

    const getProfile = (size: number) => {
      if (size < 260)
        return {
          scale: 0.85,
          showLabels: true,
          labelScale: 0.78,
          glow: 0.55,
          electrons: 2,
        };

      if (size < 360)
        return {
          scale: 1,
          showLabels: true,
          labelScale: 0.88,
          glow: 0.7,
          electrons: 3,
        };

      if (size < 480)
        return {
          scale: 1.12,
          showLabels: true,
          labelScale: 0.95,
          glow: 0.9,
          electrons: 3,
        };

      return {
        scale: 1.25,
        showLabels: true,
        labelScale: 1,
        glow: 1,
        electrons: 3,
      };
    };

    /* ---------- RESIZE ---------- */

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);

      canvas.width = Math.max(1, rect.width * dpr);
      canvas.height = Math.max(1, rect.height * dpr);

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // IMPORTANT: switch drawing back to CSS pixel space
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    /* ---------- DRAW HELPERS ---------- */

    const neonStrokePath = (
      strokeColor: string,
      glowColor: string,
      glowWidth: number,
      coreWidth: number,
    ) => {
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.shadowColor = glowColor;
      ctx.shadowBlur = glowWidth * 1.8;
      ctx.strokeStyle = glowColor;
      ctx.lineWidth = glowWidth;
      ctx.stroke();

      ctx.shadowBlur = glowWidth;
      ctx.lineWidth = (glowWidth + coreWidth) * 0.55;
      ctx.stroke();

      ctx.shadowBlur = 0;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = coreWidth;
      ctx.stroke();

      ctx.restore();
    };

    const ellipsePath = (
      cx: number,
      cy: number,
      rx: number,
      ry: number,
      rot: number,
    ) => {
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, rot, 0, TAU);
    };

    const glossySphere = (
      x: number,
      y: number,
      r: number,
      base: RGB,
      highlight: RGB,
    ) => {
      const halo = ctx.createRadialGradient(x, y, r * 0.25, x, y, r * 2);
      halo.addColorStop(0, `rgba(${base.r},${base.g},${base.b},0.5)`);
      halo.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(x, y, r * 2, 0, TAU);
      ctx.fill();

      const body = ctx.createRadialGradient(
        x - r * 0.35,
        y - r * 0.35,
        r * 0.25,
        x,
        y,
        r,
      );

      body.addColorStop(
        0,
        `rgba(${highlight.r},${highlight.g},${highlight.b},0.95)`,
      );
      body.addColorStop(0.45, `rgba(${base.r},${base.g},${base.b},0.95)`);
      body.addColorStop(1, "rgba(20,0,0,0.95)");

      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, TAU);
      ctx.fill();
    };

    const drawLabel = (text: string, x: number, y: number, size: number) => {
      ctx.save();
      ctx.font = `600 ${size}px Inter, system-ui, sans-serif`;
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.shadowColor = "rgba(255,0,0,0.45)";
      ctx.shadowBlur = size * 0.4;
      ctx.fillText(text, x, y + size * 0.25);

      ctx.restore();
    };

    /* ---------- SCENE ---------- */

    const rings: Ring[] = [{ rot: 0 }, { rot: 1.05 }, { rot: -1.05 }];

    const electrons: Electron[] = [
      { ring: 0, t: 0, speed: 0.6, label: "Partners" },
      { ring: 1, t: 2.2, speed: 0.55, label: "Customers" },
      { ring: 2, t: 4.1, speed: 0.58, label: "Vendors" },
    ];

    const look = {
      core: "rgba(255,40,40,1)",
      glow: "rgba(255,0,0,0.85)",
    };

    const pointOnRotEllipse = (
      cx: number,
      cy: number,
      rx: number,
      ry: number,
      rot: number,
      t: number,
    ) => {
      const ex = rx * Math.cos(t);
      const ey = ry * Math.sin(t);
      const cr = Math.cos(rot);
      const sr = Math.sin(rot);

      return {
        x: cx + ex * cr - ey * sr,
        y: cy + ex * sr + ey * cr,
      };
    };

    /* ---------- FRAME LOOP ---------- */

    const frame = (now: number) => {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;

      const rect = container.getBoundingClientRect();
      const min = Math.min(rect.width, rect.height);
      const profile = getProfile(min);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // IMPORTANT: center in CSS pixels, not device pixels
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const rx = min * 0.26 * profile.scale;
      const ry = min * 0.14 * profile.scale;
      const nucleusRadius = min * 0.055 * profile.scale;
      const electronRadius = min * 0.03 * profile.scale;
      const labelSize = Math.max(
        9,
        min * 0.025 * profile.scale * profile.labelScale,
      );

      rings.forEach((r) => {
        ellipsePath(cx, cy, rx, ry, r.rot);
        neonStrokePath(
          look.core,
          look.glow,
          min * 0.01 * profile.glow,
          min * 0.0035,
        );
      });

      

      if (logoImg.complete) {
        const logoSize = nucleusRadius * 2.2; 
        ctx.save();
        ctx.globalAlpha = 0.95;
        ctx.drawImage(
          logoImg,
          cx - logoSize / 2,
          cy - logoSize / 2,
          logoSize,
          logoSize,
        );
        ctx.restore();
      }

      electrons.slice(0, profile.electrons).forEach((e) => {
        e.t = (e.t + dt * e.speed) % TAU;
        const ring = rings[e.ring];
        const p = pointOnRotEllipse(cx, cy, rx, ry, ring.rot, e.t);

        glossySphere(
          p.x,
          p.y,
          electronRadius,
          { r: 160, g: 0, b: 0 },
          { r: 255, g: 70, b: 70 },
        );

        if (profile.showLabels) {
          const labelOffset = electronRadius + labelSize * 0.6;
          drawLabel(e.label, p.x, p.y + labelOffset, labelSize * 0.9);
        }
      });

      animationId = requestAnimationFrame(frame);
    };

    animationId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
