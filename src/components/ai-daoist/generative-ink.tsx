'use client';

import { useEffect, useRef, useCallback } from 'react';

// 生成式水墨背景 - 道生一，一生二，二生三，三生万物
export function GenerativeInk() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // 生成新粒子 - 代表"道生万物"
    const spawnParticle = () => {
      if (particles.length > 50) return; // 限制数量
      
      // 从鼠标位置或随机位置生成
      const fromMouse = Math.random() > 0.7;
      const x = fromMouse ? mouseRef.current.x : Math.random() * canvas.width;
      const y = fromMouse ? mouseRef.current.y : Math.random() * canvas.height;
      
      // 五行颜色
      const colors = [
        'rgba(201, 201, 201, 0.03)',  // 金
        'rgba(74, 124, 89, 0.03)',    // 木
        'rgba(44, 95, 124, 0.03)',    // 水
        'rgba(139, 69, 19, 0.03)',    // 火
        'rgba(139, 105, 20, 0.03)',   // 土
      ];
      
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: 0,
        maxLife: 300 + Math.random() * 200,
        size: 20 + Math.random() * 80,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    const animate = () => {
      // 半透明清除，产生拖尾效果
      ctx.fillStyle = 'rgba(250, 248, 245, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // 生成新粒子（道生万物）
      if (Math.random() > 0.9) spawnParticle();

      // 更新和绘制粒子
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        
        // 流动（上善若水）
        p.x += p.vx + Math.sin(time + p.y * 0.01) * 0.2;
        p.y += p.vy + Math.cos(time + p.x * 0.01) * 0.2;
        
        // 鼠标影响（无为而治 - 自然响应）
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx += dx * 0.0001;
          p.vy += dy * 0.0001;
        }

        // 绘制墨点
        const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.05;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, p.color.replace('0.03', alpha.toString()));
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // 生命周期结束
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      // 绘制流动线条（气的流动）
      ctx.strokeStyle = 'rgba(139, 115, 85, 0.01)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        let x = 0;
        let y = canvas.height * (0.3 + i * 0.2);
        ctx.moveTo(x, y);
        
        while (x < canvas.width) {
          x += 10;
          y += Math.sin(x * 0.01 + time + i) * 5;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
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
