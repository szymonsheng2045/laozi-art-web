'use client';

import { useEffect, useRef } from 'react';

// 优化版：更干净的神经网络符咒 - 极简主义
export function NeuralTalismanClean() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // 极简：只保留几个节点
    const nodes = [
      { x: 50, y: 50 },
      { x: 100, y: 80 },
      { x: 80, y: 120 },
      { x: 120, y: 50 },
    ];

    const resize = () => {
      canvas.width = 150;
      canvas.height = 150;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // 极简的线条 - 几乎看不见
      ctx.strokeStyle = 'rgba(139, 115, 85, 0.08)';
      ctx.lineWidth = 0.5;
      
      nodes.forEach((node, i) => {
        const nextNode = nodes[(i + 1) % nodes.length];
        ctx.beginPath();
        ctx.moveTo(centerX + (node.x - 75) * 0.5, centerY + (node.y - 75) * 0.5);
        ctx.lineTo(centerX + (nextNode.x - 75) * 0.5, centerY + (nextNode.y - 75) * 0.5);
        ctx.stroke();
      });

      // 极简的节点 - 几乎看不见
      nodes.forEach((node, i) => {
        const breathe = Math.sin(time * 0.5 + i) * 0.3 + 0.7;
        const x = centerX + (node.x - 75) * 0.5;
        const y = centerY + (node.y - 75) * 0.5;
        
        ctx.fillStyle = `rgba(139, 115, 85, ${0.15 * breathe})`;
        ctx.beginPath();
        ctx.arc(x, y, 2 * breathe, 0, Math.PI * 2);
        ctx.fill();
      });

      time += 0.016;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed bottom-8 right-8 w-[150px] h-[150px] pointer-events-none z-40"
      style={{ opacity: 0.3 }} // 大幅降低透明度
    />
  );
}
