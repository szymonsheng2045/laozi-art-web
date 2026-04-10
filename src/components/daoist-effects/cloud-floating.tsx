'use client';

import { useEffect, useRef } from 'react';

export function CloudFloating() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // 云朵粒子
    const clouds: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      speed: number;
      phase: number;
    }> = [];

    // 初始化云朵
    for (let i = 0; i < 5; i++) {
      clouds.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 0.5,
        radius: 100 + Math.random() * 200,
        opacity: 0.02 + Math.random() * 0.03,
        speed: 0.2 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawCloud = (cloud: typeof clouds[0]) => {
      const gradient = ctx.createRadialGradient(
        cloud.x,
        cloud.y,
        0,
        cloud.x,
        cloud.y,
        cloud.radius
      );
      
      gradient.addColorStop(0, `rgba(250, 248, 245, ${cloud.opacity})`);
      gradient.addColorStop(0.5, `rgba(245, 240, 232, ${cloud.opacity * 0.5})`);
      gradient.addColorStop(1, 'rgba(245, 240, 232, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2);
      ctx.fill();

      // 绘制多个重叠圆形成云朵形状
      for (let i = 0; i < 3; i++) {
        const offsetX = Math.cos(cloud.phase + i) * cloud.radius * 0.3;
        const offsetY = Math.sin(cloud.phase + i * 0.5) * cloud.radius * 0.2;
        ctx.beginPath();
        ctx.arc(
          cloud.x + offsetX,
          cloud.y + offsetY,
          cloud.radius * (0.6 + i * 0.1),
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 16;
      
      clouds.forEach((cloud) => {
        // 缓慢移动
        cloud.x += cloud.speed;
        cloud.phase += 0.001;
        
        // 上下浮动
        cloud.y += Math.sin(time * 0.0005 + cloud.phase) * 0.2;
        
        // 循环
        if (cloud.x > canvas.width + cloud.radius) {
          cloud.x = -cloud.radius;
        }
        
        drawCloud(cloud);
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        mixBlendMode: 'soft-light',
        opacity: 0.6,
      }}
    />
  );
}
