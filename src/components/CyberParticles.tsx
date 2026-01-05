import { useEffect, useRef } from "react";

export const CyberParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particleCount = 900;
    const baseRadius = 320;
    const depth = 1400;

    const points = Array.from({ length: particleCount }).map(() => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      return { theta, phi };
    });

    let angle = 0;
    let pulse = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      angle += 0.01;
      pulse += 0.015;

      const blastStrength = (Math.sin(pulse) + 1) / 2;

      const radius =
        baseRadius + blastStrength * (canvas.width * 0.7);

      points.forEach((p) => {
        const x = radius * Math.sin(p.phi) * Math.cos(p.theta + angle);
        const y = radius * Math.sin(p.phi) * Math.sin(p.theta + angle);
        const z = radius * Math.cos(p.phi);

        const perspective = 420 / (z + depth);

        const sx = x * perspective + cx;
        const sy = y * perspective + cy;

        const size = Math.max(1.8, perspective * 4.2);

        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);

        const brightness = 0.9 + blastStrength * 0.6;

        ctx.fillStyle = `rgba(255, 40, 40, ${Math.min(
          1,
          perspective * brightness
        )})`;

        // glow removed
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  );
};
