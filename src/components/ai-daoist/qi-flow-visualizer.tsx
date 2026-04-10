'use client';

import { useEffect, useRef } from 'react';
import { Wuxing } from '@/lib/bazi';

interface QiFlowVisualizerProps {
  wuxingDistribution: Record<Wuxing, number>;
  isActive?: boolean;
}

// 气数流动可视化 - AI计算八字时的能量流动
export function QiFlowVisualizer({ wuxingDistribution, isActive = true }: QiFlowVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // 五行粒子流
    const streams: Record<Wuxing, Array<{
      x: number;
      y: number;
      progress: number;
      speed: number;
      size: number;
    }>> = {
      metal: [],
      wood: [],
      water: [],
      fire: [],
      earth: [],
    };

    const wuxingColors: Record<Wuxing, string> = {
      metal: 'rgba(201, 201, 201, 0.6)',
      wood: 'rgba(74, 124, 89, 0.6)',
      water: 'rgba(44, 95, 124, 0.6)',
      fire: 'rgba(139, 69, 19, 0.6)',
      earth: 'rgba(139, 105, 20, 0.6)',
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };

    const spawnParticle = (element: Wuxing) => {
      const intensity = wuxingDistribution[element] / 100;
      if (Math.random() > intensity * 0.8) return;

      streams[element].push({
        x: Math.random() * (canvas.width / 2),
        y: canvas.height / 2 + (Math.random() - 0.5) * 100,
        progress: 0,
        speed: 0.005 + Math.random() * 0.005,
        size: 2 + Math.random() * 3,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2);
      
      const centerX = canvas.width / 4;
      const centerY = canvas.height / 4;
      const radius = 80;

      // 绘制五行轨道
      (Object.keys(streams) as Wuxing[]).forEach((element, i) => {
        const angle = (i / 5) * Math.PI * 2 + time * 0.2;
        const orbitX = centerX + Math.cos(angle) * radius;
        const orbitY = centerY + Math.sin(angle) * radius;

        // 轨道线
        ctx.strokeStyle = wuxingColors[element].replace('0.6', '0.1');
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, angle - 0.5, angle + 0.5);
        ctx.stroke();

        // 五行标识
        ctx.fillStyle = wuxingColors[element];
        ctx.beginPath();
        ctx.arc(orbitX, orbitY, 6, 0, Math.PI * 2);
        ctx.fill();

        // 发射粒子
        if (Math.random() > 0.7) spawnParticle(element);
      });

      // 更新和绘制粒子
      (Object.keys(streams) as Wuxing[]).forEach((element) => {
        streams[element] = streams[element].filter((p) => {
          p.progress += p.speed;
          
          // 螺旋向中心
          const spiralAngle = p.progress * Math.PI * 4;
          const currentRadius = 150 * (1 - p.progress);
          p.x = centerX + Math.cos(spiralAngle) * currentRadius;
          p.y = centerY + Math.sin(spiralAngle) * currentRadius;

          // 绘制粒子
          const alpha = Math.sin(p.progress * Math.PI);
          ctx.fillStyle = wuxingColors[element].replace('0.6', (alpha * 0.6).toString());
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
          ctx.fill();

          // 绘制拖尾
          ctx.strokeStyle = wuxingColors[element].replace('0.6', (alpha * 0.3).toString());
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(
            centerX + Math.cos(spiralAngle - 0.2) * (currentRadius + 10),
            centerY + Math.sin(spiralAngle - 0.2) * (currentRadius + 10)
          );
          ctx.stroke();

          return p.progress < 1;
        });
      });

      // 中心能量球
      const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 30);
      centerGradient.addColorStop(0, 'rgba(139, 115, 85, 0.4)');
      centerGradient.addColorStop(0.5, 'rgba(139, 115, 85, 0.2)');
      centerGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = centerGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 30 + Math.sin(time * 2) * 5, 0, Math.PI * 2);
      ctx.fill();

      time += 0.016;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [isActive, wuxingDistribution]);

  if (!isActive) return null;

  return (
    <div className="relative w-64 h-64 mx-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          filter: 'blur(0.5px)',
        }}
      />
      {/* 标签 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-xs tracking-[0.2em] text-[#8b7355] opacity-60">AI计算中...</span>
      </div>
    </div>
  );
}
