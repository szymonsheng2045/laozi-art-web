'use client';

import { useEffect, useRef } from 'react';
import { Wuxing } from '@/lib/bazi';

interface QiFlowCleanProps {
  wuxingDistribution: Record<Wuxing, number>;
  isActive?: boolean;
}

// 优化版：干净优雅的五行展示
export function QiFlowClean({ wuxingDistribution, isActive = true }: QiFlowCleanProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const wuxingColors: Record<Wuxing, string> = {
      metal: 'rgba(201, 201, 201, 0.3)',
      wood: 'rgba(74, 124, 89, 0.3)',
      water: 'rgba(44, 95, 124, 0.3)',
      fire: 'rgba(139, 69, 19, 0.3)',
      earth: 'rgba(139, 105, 20, 0.3)',
    };

    const resize = () => {
      canvas.width = 200;
      canvas.height = 200;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 60;

      // 绘制五个静态点（五行位置）
      (Object.keys(wuxingDistribution) as Wuxing[]).forEach((element, i) => {
        const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        const intensity = wuxingDistribution[element] / 100;
        
        // 极淡的圆环
        ctx.strokeStyle = wuxingColors[element].replace('0.3', (0.1 + intensity * 0.2).toString());
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, 8 + intensity * 4, 0, Math.PI * 2);
        ctx.stroke();
        
        // 极淡的填充
        ctx.fillStyle = wuxingColors[element].replace('0.3', (0.05 + intensity * 0.1).toString());
        ctx.beginPath();
        ctx.arc(x, y, 4 + intensity * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // 极简的连接线（相生关系）
      ctx.strokeStyle = 'rgba(139, 115, 85, 0.06)';
      ctx.lineWidth = 0.5;
      
      const shengCycle: Wuxing[] = ['metal', 'water', 'wood', 'fire', 'earth'];
      shengCycle.forEach((element, i) => {
        const nextElement = shengCycle[(i + 1) % 5];
        const idx1 = (Object.keys(wuxingDistribution) as Wuxing[]).indexOf(element);
        const idx2 = (Object.keys(wuxingDistribution) as Wuxing[]).indexOf(nextElement);
        
        const angle1 = (idx1 / 5) * Math.PI * 2 - Math.PI / 2;
        const angle2 = (idx2 / 5) * Math.PI * 2 - Math.PI / 2;
        
        const x1 = centerX + Math.cos(angle1) * radius;
        const y1 = centerY + Math.sin(angle1) * radius;
        const x2 = centerX + Math.cos(angle2) * radius;
        const y2 = centerY + Math.sin(angle2) * radius;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      // 中心 - 极淡的太极
      const centerBreathe = Math.sin(time * 0.5) * 0.1 + 0.9;
      ctx.strokeStyle = `rgba(139, 115, 85, ${0.1 * centerBreathe})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
      ctx.stroke();

      time += 0.016;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isActive, wuxingDistribution]);

  if (!isActive) return null;

  return (
    <div className="relative w-48 h-48 mx-auto my-6">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}
