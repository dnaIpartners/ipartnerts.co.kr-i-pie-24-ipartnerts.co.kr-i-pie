import { useEffect, useRef } from 'react';

export default function BackgroundSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    // Fibonacci sphere points
    const numPoints = 6000;
    const points: {x: number, y: number, z: number, baseX: number, baseY: number, baseZ: number, textX: number, textY: number, textZ: number}[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({ x, y, z, baseX: x, baseY: y, baseZ: z, textX: x, textY: y, textZ: z });
    }

    // Generate text points for "IPARTNERS"
    const textCanvas = document.createElement('canvas');
    const textCtx = textCanvas.getContext('2d', { willReadFrequently: true });
    if (textCtx) {
      textCanvas.width = 1200;
      textCanvas.height = 400;
      textCtx.fillStyle = 'black';
      textCtx.fillRect(0, 0, 1200, 400);
      textCtx.fillStyle = 'white';
      textCtx.font = '900 180px Inter, sans-serif';
      textCtx.textAlign = 'center';
      textCtx.textBaseline = 'middle';
      textCtx.fillText('IPARTNERS', 600, 200);

      const imgData = textCtx.getImageData(0, 0, 1200, 400).data;
      const validPoints: {x: number, y: number}[] = [];
      for (let y = 0; y < 400; y += 1) { // Maximum density (step 1)
        for (let x = 0; x < 1200; x += 1) {
          const idx = (y * 1200 + x) * 4;
          if (imgData[idx] > 128) {
            validPoints.push({
              x: (x - 600) / 600, // -1 to 1
              y: (y - 200) / 200  // -1 to 1
            });
          }
        }
      }

      // Shuffle valid points for random assignment
      for (let i = validPoints.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [validPoints[i], validPoints[j]] = [validPoints[j], validPoints[i]];
      }

      // Map the 6000 sphere points to the text points
      for (let i = 0; i < numPoints; i++) {
        const p = points[i];
        if (validPoints.length > 0) {
          const target = validPoints[i % validPoints.length];
          // Zero random scatter to make text perfectly sharp
          p.textX = target.x * 2.2;
          p.textY = target.y * 0.7;
          p.textZ = 0; // Completely flat Z
        }
      }
    }

    let time = 0;
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;
    let introProgress = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    const draw = () => {
      time += 0.003;
      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.1;
      
      // Intro animation (binding)
      if (introProgress < 1) {
        introProgress += 0.015;
        if (introProgress > 1) introProgress = 1;
      }
      const easedIntro = 1 - Math.pow(1 - introProgress, 4); // easeOutQuart

      ctx.clearRect(0, 0, width, height);
      
      const cx = width / 2;
      const cy = height / 2;
      
      let morphProgress = 0;
      const ctaSection = document.getElementById('cta-section');
      if (ctaSection) {
        const absoluteTop = ctaSection.getBoundingClientRect().top + window.scrollY;
        const startScroll = absoluteTop - height;
        const endScroll = absoluteTop - height * 0.3; // Fully morphed when CTA is 30% from the top
        
        morphProgress = (scrollY - startScroll) / (endScroll - startScroll);
        morphProgress = Math.max(0, Math.min(1, morphProgress));
      } else {
        // Fallback
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - height);
        const scrollRatio = Math.max(0, Math.min(1, scrollY / maxScroll));
        morphProgress = Math.max(0, Math.min(1, (scrollRatio - 0.8) * 5));
      }
      
      const morphEase = morphProgress * morphProgress * (3 - 2 * morphProgress); // Smoothstep

      // Base radius of the sphere, scales up during intro
      const R = Math.min(width, height) * 0.35 * (0.2 + 0.8 * easedIntro); 

      // Calculate text scale based on screen width to prevent cutting off on mobile
      const maxTextWidth = width * 0.9;
      const currentTextWidth = 4.4 * R; // base text width
      const textScale = Math.min(1.2, maxTextWidth / currentTextWidth);

      // Rotation based on time and scroll
      const rotX = time * 0.5 + scrollY * 0.0005;
      const rotY = time * 0.3 + scrollY * 0.001;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      for (let i = 0; i < numPoints; i++) {
        const p = points[i];
        
        // Wavy surface effect (Quantum Stretch) - more pronounced
        const wave1 = Math.sin(p.baseY * 10 + time * 2 + scrollY * 0.002);
        const wave2 = Math.cos(p.baseX * 10 + time * 2);
        const wave3 = Math.sin(p.baseZ * 10 + time * 2);
        
        // Reduce wave effect as it morphs into text
        const wave = (wave1 + wave2 + wave3) * 0.06 * easedIntro * (1 - morphEase);
        const currentR = R * (1 + wave);

        let x = p.baseX * currentR;
        let y = p.baseY * currentR;
        let z = p.baseZ * currentR;

        // Rotate X
        let y1 = y * cosX - z * sinX;
        let z1 = y * sinX + z * cosX;
        y = y1;
        z = z1;

        // Rotate Y
        let x1 = x * cosY - z * sinY;
        let z1_new = x * sinY + z * cosY;
        x = x1;
        z = z1_new;

        // Morph to Text "IPARTNERS"
        let targetX = p.textX * R * textScale; 
        let targetY = p.textY * R * textScale;
        let targetZ = p.textZ * R * textScale;

        x = x * (1 - morphEase) + targetX * morphEase;
        y = y * (1 - morphEase) + targetY * morphEase;
        z = z * (1 - morphEase) + targetZ * morphEase;

        // Perspective projection
        const perspective = 1200 / (1200 - z);
        
        // Horizontal movement based on scroll (moves left and right)
        const scrollOffsetX = Math.sin(scrollY * 0.0015) * 200 * (1 - morphEase);
        
        // Intro scatter effect
        const scatter = (1 - easedIntro) * 500 * (Math.random() - 0.5);
        
        const px = cx + x * perspective + scrollOffsetX + scatter;
        
        // Keep the sphere centered vertically
        const py = cy + y * perspective + scatter;

        // Draw points
        // Fade out points in the back
        if (z > -R * 1.5) {
          // Calculate size and opacity based on depth (z)
          const depthRatio = (z + R) / (2 * R); // roughly 0 to 1
          
          // Increase size massively when morphed to make text look solid
          const baseSize = Math.max(0.5, depthRatio * 2.5) * perspective;
          const size = baseSize * (1 - morphEase) + (baseSize * 4.0) * morphEase;
          
          // Reduced brightness by ~10%
          const baseAlpha = Math.max(0.045, depthRatio * 0.61) * easedIntro;
          const alpha = baseAlpha * (1 - morphEase) + 1.0 * morphEase; // Fully opaque when text
          
          // Interpolate color from golden to #E2E2E2 (226, 226, 226)
          const r = Math.round(255 * (1 - morphEase) + 226 * morphEase);
          const g = Math.round(250 * (1 - morphEase) + 226 * morphEase);
          const b = Math.round(220 * (1 - morphEase) + 226 * morphEase);
          
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          
          // Add glow to front particles
          if (depthRatio > 0.8) {
            ctx.shadowBlur = 8 * (1 - morphEase) + 0 * morphEase; // Remove glow when text for sharpness
            
            const shadowR = Math.round(255 * (1 - morphEase) + 226 * morphEase);
            const shadowG = Math.round(240 * (1 - morphEase) + 226 * morphEase);
            const shadowB = Math.round(180 * (1 - morphEase) + 226 * morphEase);
            const shadowAlpha = (0.54 * easedIntro) * (1 - morphEase) + 0 * morphEase;
            
            ctx.shadowColor = `rgba(${shadowR}, ${shadowG}, ${shadowB}, ${shadowAlpha})`;
          } else {
            ctx.shadowBlur = 0;
          }

          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}
