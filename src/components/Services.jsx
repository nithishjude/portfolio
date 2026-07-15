import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const sidebarRef = useRef(null);



  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // 1. Header Animation
      tl.fromTo(headerRef.current.children, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.4, ease: "none", stagger: 0.1 }
      );


      // 3. Experience Sidebar Slide
      tl.fromTo(sidebarRef.current, 
        { opacity: 0, x: 50 }, 
        { opacity: 1, x: 0, duration: 0.5, ease: "none" },
        "-=0.3"
      );

      // UI corner lines animation for sidebar
      tl.fromTo(".corner-line",
        { scale: 0 },
        { scale: 1, duration: 0.3, ease: "none", stagger: 0.05 },
        "-=0.2"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#000] text-white overflow-hidden scroll-mt-24"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      {/* Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
          Experience<span className="text-blue-500">.</span>
        </h2>
        <div className="w-24 h-[1px] bg-blue-500/40 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-gray-500 font-light text-base leading-relaxed">
          Leveraging my experience from production-level applications and real-time startup incubation projects to build scalable digital solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
        
        {/* Featured Experience Card */}
        <div ref={sidebarRef} className="lg:col-span-12 h-full relative">
          <div className="sticky top-32 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Infosys Card */}
            <div className="p-8 bg-[#0c0c0c] border border-white/[0.08] rounded-sm group overflow-hidden relative">
              {/* HUD Corner Lines */}
              <div className="corner-line absolute top-2 left-2 w-4 h-4 border-t border-l border-blue-500/50"></div>
              <div className="corner-line absolute top-2 right-2 w-4 h-4 border-t border-r border-blue-500/50"></div>
              <div className="corner-line absolute bottom-2 left-2 w-4 h-4 border-b border-l border-blue-500/50"></div>
              <div className="corner-line absolute bottom-2 right-2 w-4 h-4 border-b border-r border-blue-500/50"></div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-all duration-1000" />

              <div className="relative z-10">
                <div className="flex gap-3 mb-6">
                  <div className="h-9 px-3 bg-white flex items-center justify-center rounded-sm">
                    <span className="text-black font-black text-[10px] tracking-tighter">INFOSYS</span>
                  </div>
                  <div className="h-9 px-3 border border-white/20 flex items-center justify-center rounded-sm">
                    <span className="text-white font-bold text-[10px] tracking-widest">SPRINGBOARD</span>
                  </div>
                </div>
                <p className="text-[10px] font-mono text-blue-400 tracking-widest mb-3 uppercase">Mar 2026 – Apr 2026</p>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                  Completed an internship at <span className="text-white font-medium">Infosys SpringBoard</span>, delivering responsive interfaces, authentication, and dynamic polling interfaces for a governance dashboard.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/nithishjude/civix-portal"
                    target="_blank" rel="noopener noreferrer"
                    className="w-full py-3 border border-white/10 text-white font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300 rounded-sm flex items-center justify-center"
                  >
                    View Case Study
                  </a>
                  <a
                    href="https://drive.google.com/file/d/180yCsG1YaDhNHBJjf4SjNJA9ONa5F-YW/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"
                    className="w-full py-3 border border-blue-500/30 text-blue-400 font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-sm flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    View Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* P2B Cloud Card */}
            <div className="p-8 bg-[#0c0c0c] border border-white/[0.08] rounded-sm group overflow-hidden relative">
              <div className="corner-line absolute top-2 left-2 w-4 h-4 border-t border-l border-blue-500/50"></div>
              <div className="corner-line absolute top-2 right-2 w-4 h-4 border-t border-r border-blue-500/50"></div>
              <div className="corner-line absolute bottom-2 left-2 w-4 h-4 border-b border-l border-blue-500/50"></div>
              <div className="corner-line absolute bottom-2 right-2 w-4 h-4 border-b border-r border-blue-500/50"></div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-all duration-1000" />

              <div className="relative z-10">
                <div className="flex gap-3 mb-6">
                  <div className="h-9 px-3 bg-blue-600 flex items-center justify-center rounded-sm">
                    <span className="text-white font-black text-[10px] tracking-tighter">P2B</span>
                  </div>
                  <div className="h-9 px-3 border border-white/20 flex items-center justify-center rounded-sm">
                    <span className="text-white font-bold text-[10px] tracking-widest">CLOUD</span>
                  </div>
                </div>
                <p className="text-[10px] font-mono text-blue-400 tracking-widest mb-3 uppercase">Apr 2026 – Jun 2026</p>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                  Built a <span className="text-white font-medium">Kubernetes Dashboard</span> for centralized cluster monitoring and real-time visualization of pods, nodes, and deployments using React.js, Prometheus & Grafana.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/nithishjude/k8s-dashboard.git"
                    target="_blank" rel="noopener noreferrer"
                    className="w-full py-3 border border-white/10 text-white font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300 rounded-sm flex items-center justify-center"
                  >
                    View Case Study
                  </a>
                  <a
                    href="#"
                    target="_blank" rel="noopener noreferrer"
                    className="w-full py-3 border border-blue-500/30 text-blue-400 font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-sm flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Micro HUD Footer */}
          <div className="mt-6 flex justify-between items-center font-mono text-[9px] text-gray-700 tracking-[0.2em] px-2 opacity-50">
            <span>&gt; SYSTEM DATA LOADED</span>
            <span>0x034FB</span>
          </div>
        </div>

      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.03] z-10"></div>
      <div className="absolute top-0 right-1/2 w-[1px] h-full bg-white/[0.03] z-10"></div>
    </section>
  );
}
