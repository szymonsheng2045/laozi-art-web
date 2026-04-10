'use client';

import { useEffect, useRef } from 'react';

export function InkWashBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawInkWash = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 创建多个水墨晕染点
      const inkSpots = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: 150, opacity: 0.03 },
        { x: canvas.width * 0.8, y: canvas.height * 0.6, radius: 200, opacity: 0.02 },
        { x: canvas.width * 0.5, y: canvas.height * 0.8, radius: 180, opacity: 0.025 },
        { x: canvas.width * 0.1, y: canvas.height * 0.7, radius: 120, opacity: 0.02 },
      ];

      inkSpots.forEach((spot, index) => {
        const gradient = ctx.createRadialGradient(
          spot.x + Math.sin(time * 0.001 + index) * 20,
          spot.y + Math.cos(time * 0.001 + index) * 20,
          0,
          spot.x,
          spot.y,
          spot.radius
        );
        
        gradient.addColorStop(0, `rgba(139, 115, 85, ${spot.opacity})`);
        gradient.addColorStop(0.5, `rgba(139, 115, 85, ${spot.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(139, 115, 85, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      time += 16;
      animationId = requestAnimationFrame(drawInkWash);
    };

    resize();
    window.addEventListener('resize', resize);
    drawInkWash();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}
