
import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  theme: 'cyber' | 'neon' | 'galaxy';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
      pulse: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.alpha = Math.random() * 0.8 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
        
        // Theme-based colors
        switch (theme) {
          case 'cyber':
            this.color = `hsl(${180 + Math.random() * 60}, 70%, 60%)`;
            break;
          case 'neon':
            this.color = `hsl(${300 + Math.random() * 60}, 80%, 70%)`;
            break;
          case 'galaxy':
            this.color = `hsl(${240 + Math.random() * 60}, 60%, 65%)`;
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.02;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Pulsing effect
        this.alpha = 0.3 + Math.sin(this.pulse) * 0.3;
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      particles.length = 0;
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      switch (theme) {
        case 'cyber':
          gradient.addColorStop(0, '#0f172a');
          gradient.addColorStop(0.5, '#1e293b');
          gradient.addColorStop(1, '#0c4a6e');
          break;
        case 'neon':
          gradient.addColorStop(0, '#1a0b2e');
          gradient.addColorStop(0.5, '#16213e');
          gradient.addColorStop(1, '#0f0735');
          break;
        case 'galaxy':
          gradient.addColorStop(0, '#0f0b27');
          gradient.addColorStop(0.5, '#24176b');
          gradient.addColorStop(1, '#020024');
          break;
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = theme === 'cyber' ? '#06b6d4' : theme === 'neon' ? '#d946ef' : '#6366f1';
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.globalAlpha = 0.3 * (1 - distance / 100);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedBackground;
