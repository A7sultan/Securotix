import { useEffect, useRef } from "react";

export const RedVelvetRibbonsBG = ({ className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;

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

    const noise = (x) => {
      return (
        Math.sin(x * 0.9) * 0.5 +
        Math.sin(x * 0.37 + 1.7) * 0.3 +
        Math.sin(x * 0.13 + 4.2) * 0.2
      );
    };

    const draw = () => {
      raf = requestAnimationFrame(draw);

      const { w, h } = getBounds();
      t += 0.008;

      // Smooth trail (keeps motion silky)
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0,0,0,0.22)";
      ctx.fillRect(0, 0, w, h);

      // Subtle red wash (boost visibility without blowing out)
      const wash = ctx.createRadialGradient(
        w * (0.52 + Math.sin(t * 0.55) * 0.035),
        h * (0.42 + Math.cos(t * 0.5) * 0.035),
        0,
        w * 0.5,
        h * 0.55,
        Math.max(w, h) * 0.9
      );
      wash.addColorStop(0, "rgba(255,0,60,0.10)");
      wash.addColorStop(0.45, "rgba(160,0,35,0.06)");
      wash.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, w, h);

      // Ribbons (slightly more additive but not neon)
      ctx.globalCompositeOperation = "lighter";

      const ribbonCount = 8;
      const steps = 260;

      for (let r = 0; r < ribbonCount; r++) {
        const band = r / (ribbonCount - 1);

        const speed = 0.45 + band * 0.85;
        const phase = t * speed + r * 0.7;

        const yMid =
          h * (0.20 + band * 0.62) +
          noise(phase * 1.1) * (h * 0.035);

        const amp = h * (0.05 + band * 0.04);

        // ✅ v3: thin-but-visible
        const thickness = 10 + band * 18;

        // ✅ v3: more visible than v2
        const alpha = 0.045 + (1 - band) * 0.05;

        ctx.beginPath();

        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * w;

          const wave =
            Math.sin(x * 0.008 + phase * 2.0) * 0.65 +
            Math.sin(x * 0.013 - phase * 1.15) * 0.35 +
            noise(x * 0.003 + phase) * 0.55;

          const twist = Math.sin(x * 0.012 + phase * 1.45);
          const y = yMid + wave * amp * (0.55 + 0.45 * twist);

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        // ✅ v3: deeper reds, but with one tasteful highlight
        const grad = ctx.createLinearGradient(0, yMid - 80, w, yMid + 80);
        grad.addColorStop(0, `rgba(130, 0, 26, ${alpha * 0.65})`);
        grad.addColorStop(0.42, `rgba(210, 0, 55, ${alpha * 1.0})`);
        grad.addColorStop(0.62, `rgba(255, 35, 85, ${alpha * 0.75})`);
        grad.addColorStop(1, `rgba(90, 0, 18, ${alpha * 0.50})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = thickness;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // ✅ v3: glow restored but still controlled
        ctx.shadowBlur = 18 + band * 14;
        ctx.shadowColor = `rgba(255,0,60,${alpha * 1.4})`;

        ctx.stroke();
      }

      // ✅ v3: lighter vignette (lets ribbons stay visible)
      ctx.globalCompositeOperation = "source-over";
      const vignette = ctx.createRadialGradient(
        w * 0.5,
        h * 0.45,
        0,
        w * 0.5,
        h * 0.55,
        Math.max(w, h) * 0.9
      );
      vignette.addColorStop(0, "rgba(0,0,0,0.05)");
      vignette.addColorStop(0.78, "rgba(0,0,0,0.35)");
      vignette.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      // reset
      ctx.shadowBlur = 0;
      ctx.globalCompositeOperation = "source-over";
    };

    draw();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity: 0.95 }}
    />
  );
};
