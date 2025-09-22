'use client';

import React from 'react';

const FluidBackground = () => {
  return (
    <>
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        {/* Large floating circles with theme colors */}
        {Array.from({ length: 10 }, (_, i) => {
          const colors = ['#FF2D55', '#00C8B5', '#786EFF'];
          const color = colors[i % colors.length];
          const size = 120 + Math.random() * 200;
          const delay = i * 3;

          return (
            <div
              key={`large-circle-${i}-${color}-${size}`}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, ${color}12 0%, ${color}06 50%, transparent 100%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(3px)',
                animation: `float-${(i % 3) + 1} ${25 + i * 3}s ease-in-out infinite ${delay}s`,
              }}
            />
          );
        })}

        {/* Medium floating circles */}
        {Array.from({ length: 5 }, (_, i) => {
          const colors = ['#FF2D55', '#00C8B5', '#786EFF'];
          const color = colors[i % colors.length];
          const size = 80 + Math.random() * 100;
          const delay = i * 2;

          return (
            <div
              key={`medium-circle-${i}-${color}-${size}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, ${color}25 0%, ${color}10 50%, transparent 100%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(2px)',
                animation: `float-reverse-${(i % 3) + 1} ${20 + i * 2}s ease-in-out infinite ${delay}s`,
              }}
            />
          );
        })}

        {/* Small floating particles */}
        {Array.from({ length: 8 }, (_, i) => {
          const colors = ['#FF2D55', '#00C8B5', '#786EFF'];
          const color = colors[i % colors.length];
          const size = 30 + Math.random() * 50;
          const delay = i * 1.2;

          return (
            <div
              key={`small-particle-${i}-${color}-${size}`}
              className="absolute rounded-full animate-ping"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, ${color}15 0%, ${color}08 60%, transparent 100%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${4 + Math.random() * 5}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* CSS animations for fluid movement */}
      <style jsx global>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(100px, -80px) scale(1.1) rotate(90deg); }
          50% { transform: translate(-80px, -120px) scale(0.9) rotate(180deg); }
          75% { transform: translate(-120px, 80px) scale(1.05) rotate(270deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-150px, 100px) scale(1.15) rotate(120deg); }
          66% { transform: translate(120px, -150px) scale(0.85) rotate(240deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          20% { transform: translate(80px, -100px) scale(1.2) rotate(72deg); }
          40% { transform: translate(-100px, -80px) scale(0.8) rotate(144deg); }
          60% { transform: translate(130px, 60px) scale(1.1) rotate(216deg); }
          80% { transform: translate(-80px, 120px) scale(0.9) rotate(288deg); }
        }
        
        @keyframes float-reverse-1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(360deg); }
          25% { transform: translate(-80px, 100px) scale(0.9) rotate(270deg); }
          50% { transform: translate(100px, 80px) scale(1.1) rotate(180deg); }
          75% { transform: translate(80px, -100px) scale(1.05) rotate(90deg); }
        }
        
        @keyframes float-reverse-2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(360deg); }
          33% { transform: translate(120px, -80px) scale(0.85) rotate(240deg); }
          66% { transform: translate(-80px, 120px) scale(1.15) rotate(120deg); }
        }
        
        @keyframes float-reverse-3 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(360deg); }
          20% { transform: translate(-60px, 80px) scale(0.8) rotate(288deg); }
          40% { transform: translate(80px, 60px) scale(1.2) rotate(216deg); }
          60% { transform: translate(-100px, -40px) scale(0.9) rotate(144deg); }
          80% { transform: translate(60px, -80px) scale(1.1) rotate(72deg); }
        }
      `}</style>
    </>
  );
};

export default FluidBackground;
