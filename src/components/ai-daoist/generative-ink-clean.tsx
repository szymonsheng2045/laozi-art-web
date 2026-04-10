'use client';

import { useEffect, useRef } from 'react';

// 优化版：更干净、更 subtle 的生成式背景
export function GenerativeInkClean() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // 大幅减少粒子数量，从 50 减到 8
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // 初始化几个非常淡的墨点
    const initParticles = () => {
      for (let i = 0; i < 3; i++) {
        particles.push(createParticle());
      }
    };

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.1, // 更慢
      vy: (Math.random() - 0.5) * 0.1,
      life: 0,
      maxLife: 600 + Math.random() * 400, // 更长生命周期
      size: 100 + Math.random() * 150, // 更大但更淡
    });

    const draw = () => {
      // 极慢的清除，留下拖尾
      ctx.fillStyle = 'rgba(250, 248, 245, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.005; // 更慢的时间流逝

      // 偶尔生成新粒子（很少）
      if (particles.length < 5 && Math.random() > 0.995) {
        particles.push(createParticle());
      }

      // 绘制粒子
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        
        // 极慢的流动
        p.x += p.vx;
        p.y += p.vy + Math.sin(time * 0.5 + p.x * 0.001) * 0.05;

        // 极淡的墨点 - 几乎看不见
        const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.015;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `rgba(139, 115, 85, ${alpha})`);
        gradient.addColorStop(0.4, `rgba(139, 115, 85, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    initParticles();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }} // 整体降低透明度
    />
  );
}
