'use client';

import { useEffect, useRef } from 'react';

// 神经网络符咒 - AI思考的道家可视化
export function NeuralTalisman() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // 节点（神经元）
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      connections: number[];
    }> = [];

    // 初始化节点 - 如符箓上的符文排列
    const nodeCount = 12;
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 60 + Math.random() * 20;
      nodes.push({
        x: canvas.width / 2 + Math.cos(angle) * radius,
        y: canvas.height / 2 + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        connections: [],
      });
    }

    // 建立连接 - 如符箓的连接线
    nodes.forEach((node, i) => {
      const connectionCount = 2 + Math.floor(Math.random() * 2);
      for (let j = 0; j < connectionCount; j++) {
        const target = Math.floor(Math.random() * nodeCount);
        if (target !== i && !node.connections.includes(target)) {
          node.connections.push(target);
        }
      }
    });

    const resize = () => {
      canvas.width = 200;
      canvas.height = 200;
      // 重新居中节点
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      nodes.forEach((node, i) => {
        const angle = (i / nodeCount) * Math.PI * 2 + time * 0.1;
        const radius = 60;
        node.x = centerX + Math.cos(angle) * radius;
        node.y = centerY + Math.sin(angle) * radius;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // 绘制连接线（气脉）
      nodes.forEach((node, i) => {
        node.connections.forEach((targetIndex) => {
          const target = nodes[targetIndex];
          
          // 线条透明度随时间脉动
          const pulse = Math.sin(time * 2 + i + targetIndex) * 0.5 + 0.5;
          ctx.strokeStyle = `rgba(139, 115, 85, ${0.1 + pulse * 0.2})`;
          ctx.lineWidth = 0.5;
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();

          // 绘制能量流动点
          if (pulse > 0.7) {
            const t = (time * 0.5 + i) % 1;
            const x = node.x + (target.x - node.x) * t;
            const y = node.y + (target.y - node.y) * t;
            
            ctx.fillStyle = 'rgba(139, 115, 85, 0.6)';
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });

      // 绘制节点（符文）
      nodes.forEach((node, i) => {
        // 节点呼吸效果
        const breathe = Math.sin(time * 1.5 + i * 0.5) * 0.3 + 0.7;
        
        // 外圈
        ctx.strokeStyle = `rgba(139, 115, 85, ${0.2 * breathe})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4 * breathe, 0, Math.PI * 2);
        ctx.stroke();

        // 内核
        ctx.fillStyle = `rgba(139, 115, 85, ${0.4 * breathe})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2 * breathe, 0, Math.PI * 2);
        ctx.fill();
      });

      // 中心太极 - 缓慢旋转
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time * 0.2);
      
      // 太极图简化版
      ctx.strokeStyle = 'rgba(139, 115, 85, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, 20, 0, Math.PI * 2);
      ctx.stroke();
      
      // S曲线
      ctx.beginPath();
      ctx.arc(0, -10, 10, 0, Math.PI, false);
      ctx.arc(0, 10, 10, 0, Math.PI, true);
      ctx.stroke();
      
      ctx.restore();

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
      className="fixed bottom-8 right-8 w-[200px] h-[200px] pointer-events-none z-40 opacity-60"
      style={{ 
        filter: 'blur(0.5px)',
      }}
    />
  );
}
