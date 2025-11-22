import React, { useEffect, useRef } from 'react';
import './CelebrationEffects.css';

// Lightweight confetti / floating particles effect using canvas
export default function CelebrationEffects({ active = true, density = 60 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const colors = ['#ff6b6b', '#ffd93d', '#6bcB77', '#4d96ff', '#845ef7', '#f06595'];

    const makeParticle = () => {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: 4 + Math.random() * 6,
        vx: -0.5 + Math.random(),
        vy: 0.2 + Math.random() * 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: Math.random() < 0.5 ? 'circle' : 'rect',
        rotation: Math.random() * Math.PI,
        vr: (-0.02 + Math.random() * 0.04)
      };
    };

    particlesRef.current = Array.from({ length: density }, makeParticle);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vr;
        if (p.y > height + 20) p.y = -10;
        if (p.x > width + 20) p.x = -10;
        if (p.x < -20) p.x = width + 10;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.r, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 2);
        }
        ctx.restore();
      });
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [active, density]);

  return <div className="celebration-wrapper"><canvas ref={canvasRef} className="celebration-canvas" /></div>;
}
