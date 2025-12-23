import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GlobalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Particle configuration
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    // Reduced density significantly for better performance
    const particleCount = Math.min(Math.floor((width * height) / 15000), 80);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5, 
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Add glow effect to particles - #1fc6be
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#1fc6be';

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges smoothly
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2); // Larger dots (2px)
        // RGB for #1fc6be is 31, 198, 190
        ctx.fillStyle = 'rgba(31, 198, 190, 0.6)'; 
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Connection threshold
          if (distance < 180) {
            ctx.beginPath();
            // Connection lines using same teal color
            ctx.strokeStyle = `rgba(31, 198, 190, ${0.25 * (1 - distance / 180)})`;
            ctx.lineWidth = 1; // Slightly thicker lines
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      
      {/* 1. The Grid Layer - Static, providing structure - Updated to #1fc6be */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #1fc6be 1px, transparent 1px), linear-gradient(to bottom, #1fc6be 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />

      {/* 2. Network Animation - Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* 3. Moving Spotlights - Using #1fc6be directly */}
      <motion.div 
        animate={{ 
          x: [0, 100, -50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.08, 0.1, 0.08]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[#1fc6be] rounded-full blur-[120px]" 
      />

      <motion.div 
        animate={{ 
          x: [0, -100, 50, 0],
          y: [0, -50, -100, 0],
          scale: [1, 1.3, 1, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#1fc6be] rounded-full blur-[150px]" 
      />

      {/* 4. Subtle Vignette to focus attention on center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-70" />
      
      {/* 5. Film Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

export default GlobalBackground;