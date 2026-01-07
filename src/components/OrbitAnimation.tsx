import { useEffect, useRef } from "react";

interface Planet {
  label: string;
  color: string;
  radius: number;
  offsetY: number;
  speedFactor: number;
  x: number;
  phase: number;
  amplitude: number;
  wavelength: number;
  trail: { x: number; y: number }[];
  isMain: boolean;
}

const config = {
  starCount: 80,
  trailLength: 300,
  baseSpeed: 0.6,
  lineOpacity: 0.4
};

function hexToRgba(hex: string, alpha: number): string {
  let h = hex.replace("#", "");
  if (h.length === 3) {
    h = h.split("").map(c => c + c).join("");
  }
  const num = parseInt(h, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

export const OrbitAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; r: number; twinkle: number }[] = [];
    let planets: Planet[] = [];

    const generateStars = () => {
      stars = [];
      for (let i = 0; i < config.starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1 + 0.2,
          twinkle: Math.random() * 0.03 + 0.01
        });
      }
    };

    const initPlanets = () => {
      const baseAmplitude = canvas.height * 0.15;
      const wavelength = canvas.width * 0.4;

      const planetConfigs = [
  { label: "Securotix", color: "#d62828", radius: 28, offsetY: 0, speedFactor: 0.95, isMain: true },
  { label: "Customers", color: "#b81f24", radius: 16, offsetY: 0.12, speedFactor: 0.85, isMain: false },
  { label: "Vendors", color: "#c71f28", radius: 18, offsetY: -0.08, speedFactor: 1.0, isMain: false },
  { label: "Partners", color: "#8b0f18", radius: 17, offsetY: -0.18, speedFactor: 1.1, isMain: false }
];


      planets = planetConfigs.map((p, index) => {
        const startX = canvas.width * 0.15 + index * 25;
        const phase = index * Math.PI * 0.5;
        return {
          ...p,
          x: startX,
          phase,
          amplitude: p.isMain ? baseAmplitude * 0.3 : baseAmplitude * (0.7 + index * 0.12),
          wavelength,
          trail: []
        };
      });
    };

    const setCanvasSize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
      generateStars();
      initPlanets();
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const drawStars = () => {
      for (const s of stars) {
        s.r += (Math.random() - 0.5) * s.twinkle;
        if (s.r < 0.15) s.r = 0.15;
        if (s.r > 1.2) s.r = 1.2;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();
      }
    };

    const drawPlanetTrails = () => {
      ctx.lineWidth = 2;
      for (const p of planets) {
        if (p.trail.length < 2) continue;

        const gradient = ctx.createLinearGradient(
          p.trail[0].x,
          p.trail[0].y,
          p.trail[p.trail.length - 1].x,
          p.trail[p.trail.length - 1].y
        );
        gradient.addColorStop(0, "rgba(255,255,255,0)");
        gradient.addColorStop(1, hexToRgba(p.color, p.isMain ? 0.5 : config.lineOpacity));

        ctx.beginPath();
        ctx.lineWidth = p.isMain ? 3 : 2;
        for (let i = 0; i < p.trail.length; i++) {
          const pt = p.trail[i];
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = gradient;
        ctx.stroke();
      }
    };

    const updatePlanets = () => {
      const midY = canvas.height * 0.5;
      for (const p of planets) {
        p.x += config.baseSpeed * p.speedFactor;
        if (p.x > canvas.width + 50) {
          p.x = canvas.width * 0.12;
          p.trail = [];
        }

        const y =
          midY +
          p.amplitude * Math.sin((p.x / p.wavelength) * Math.PI * 2 + p.phase) +
          p.offsetY * canvas.height * 0.3;

        p.trail.push({ x: p.x, y });
        if (p.trail.length > config.trailLength) p.trail.shift();
      }
    };

    const drawPlanets = () => {
      const minDim = Math.min(canvas.width, canvas.height);

      for (const p of planets) {
        const last = p.trail[p.trail.length - 1];
        if (!last) continue;

        const glowRadius = p.radius * 2.5;
        const g = ctx.createRadialGradient(
          last.x,
          last.y,
          p.radius * 0.3,
          last.x,
          last.y,
          glowRadius
        );
        g.addColorStop(0, hexToRgba(p.color, 0.8));
        g.addColorStop(1, "rgba(0,0,0,0)");

        ctx.beginPath();
        ctx.arc(last.x, last.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        const planetGradient = ctx.createRadialGradient(
          last.x - p.radius * 0.35,
          last.y - p.radius * 0.35,
          p.radius * 0.1,
          last.x,
          last.y,
          p.radius
        );
        planetGradient.addColorStop(0, p.isMain ? "#ff6b6b" : "#ff4d4d");
planetGradient.addColorStop(0.5, p.color);
planetGradient.addColorStop(1, "#330000");

        ctx.beginPath();
        ctx.arc(last.x, last.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = planetGradient;
        ctx.fill();

        ctx.font = `bold ${p.isMain ? minDim * 0.022 : minDim * 0.018}px system-ui, sans-serif`;
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.label, last.x, last.y + p.radius + minDim * 0.03);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawStars();
      updatePlanets();
      drawPlanetTrails();
      drawPlanets();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};
