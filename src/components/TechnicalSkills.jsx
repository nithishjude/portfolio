import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SiPython, SiHtml5, SiCss,
  SiReact, SiNodedotjs, SiGit, SiGithub,
  SiVercel, SiLangchain,
} from 'react-icons/si';
import { FaJava, FaDatabase, FaAws } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { FiCode, FiLayers, FiServer, FiTool, FiCpu } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: <FiCode size={16} />,
    color: 'blue',
    skills: [
      { name: 'Java',   icon: <FaJava size={22} /> },
      { name: 'Python', icon: <SiPython size={22} /> },
      { name: 'SQL',    icon: <FaDatabase size={22} /> },
      { name: 'HTML',   icon: <SiHtml5 size={22} /> },
      { name: 'CSS',    icon: <SiCss size={22} /> },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    icon: <FiLayers size={16} />,
    color: 'violet',
    skills: [
      { name: 'React.js',      icon: <SiReact size={22} /> },
      { name: 'Node.js',       icon: <SiNodedotjs size={22} /> },
      { name: 'LangChain.js',  icon: <SiLangchain size={22} /> },
    ],
  },
  {
    id: 'databases',
    label: 'Databases & Backend',
    icon: <FiServer size={16} />,
    color: 'cyan',
    skills: [
      { name: 'SQL',       icon: <FaDatabase size={22} /> },
      { name: 'REST APIs', icon: <TbApi size={22} /> },
      { name: 'AWS',       icon: <FaAws size={22} /> },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: <FiTool size={16} />,
    color: 'emerald',
    skills: [
      { name: 'Git',    icon: <SiGit size={22} /> },
      { name: 'GitHub', icon: <SiGithub size={22} /> },
      { name: 'AWS',    icon: <FaAws size={22} /> },
      { name: 'Vercel', icon: <SiVercel size={22} /> },
    ],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    icon: <FiCpu size={16} />,
    color: 'amber',
    skills: [
      { name: 'REST API Design',          icon: <TbApi size={22} /> },
      { name: 'Object-Oriented Programming', icon: <FiCpu size={22} /> },
    ],
  },
];

const colorMap = {
  blue:    { border: 'border-blue-500/30',    text: 'text-blue-400',    glow: 'rgba(59,130,246,0.08)',   label: 'text-blue-400',   bar: '#3b82f6' },
  violet:  { border: 'border-violet-500/30',  text: 'text-violet-400',  glow: 'rgba(139,92,246,0.08)',   label: 'text-violet-400', bar: '#8b5cf6' },
  cyan:    { border: 'border-cyan-500/30',    text: 'text-cyan-400',    glow: 'rgba(6,182,212,0.08)',    label: 'text-cyan-400',   bar: '#06b6d4' },
  emerald: { border: 'border-emerald-500/30', text: 'text-emerald-400', glow: 'rgba(16,185,129,0.08)',   label: 'text-emerald-400',bar: '#10b981' },
  amber:   { border: 'border-amber-500/30',   text: 'text-amber-400',   glow: 'rgba(245,158,11,0.08)',   label: 'text-amber-400',  bar: '#f59e0b' },
};

export default function TechnicalSkills() {
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);

  useLayoutEffect(() => {
    const triggers = [];
    const ctx = gsap.context(() => {

      // Header fade-in
      triggers.push(
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.12,
            scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        ).scrollTrigger
      );

      // Category cards stagger
      triggers.push(
        gsap.fromTo(
          '.skill-category',
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        ).scrollTrigger
      );

      // Skill pills
      triggers.push(
        gsap.fromTo(
          '.skill-pill',
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(1.5)', stagger: 0.04,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
            delay: 0.2,
          }
        ).scrollTrigger
      );

      // Scanning line
      triggers.push(
        gsap.fromTo(
          '.scan-line',
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1, opacity: 1, duration: 1.2, ease: 'power2.inOut',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        ).scrollTrigger
      );

      // Corner lines
      triggers.push(
        gsap.fromTo(
          '.ts-corner',
          { scale: 0 },
          {
            scale: 1, duration: 0.4, ease: 'back.out(2)', stagger: 0.05,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        ).scrollTrigger
      );

    }, sectionRef);

    return () => {
      // Kill all ScrollTriggers first, then revert GSAP context
      triggers.forEach(t => t && t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#000] text-white overflow-hidden scroll-mt-24"
    >
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow top-left */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none z-0" />
      {/* Radial glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/5 blur-[100px] pointer-events-none z-0" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div ref={headerRef} className="text-center mb-20">
          <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">
            SYSTEM / STACK
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
            Technical<span className="text-blue-500">.</span> Skills
          </h2>
          {/* Animated scan line */}
          <div className="scan-line w-32 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8 origin-left" />
          <p className="max-w-2xl mx-auto text-gray-500 font-light text-base leading-relaxed">
            A curated overview of the languages, frameworks, tools and concepts I use to build production-grade applications.
          </p>
        </div>

        {/* ── Skills Grid ── */}
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const c = colorMap[cat.color];
            return (
              <div
                key={cat.id}
                className={`skill-category group relative p-7 bg-[#0a0a0a] border ${c.border} hover:shadow-[0_0_40px_var(--glow)] transition-all duration-500 rounded-sm overflow-hidden`}
                style={{ '--glow': c.glow }}
              >
                {/* HUD corners */}
                <div className={`ts-corner absolute top-2 left-2 w-4 h-4 border-t border-l ${c.border}`} />
                <div className={`ts-corner absolute top-2 right-2 w-4 h-4 border-t border-r ${c.border}`} />
                <div className={`ts-corner absolute bottom-2 left-2 w-4 h-4 border-b border-l ${c.border}`} />
                <div className={`ts-corner absolute bottom-2 right-2 w-4 h-4 border-b border-r ${c.border}`} />

                {/* Inner glow blob */}
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: c.glow.replace('0.08', '0.6') }}
                />

                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 bg-white/5 border border-white/10 rounded-sm ${c.text}`}>
                    {cat.icon}
                  </div>
                  <h3 className={`text-[10px] font-mono uppercase tracking-[0.3em] ${c.label}`}>
                    {cat.label}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`skill-pill flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07] rounded-sm transition-all duration-200 cursor-default`}
                    >
                      <span className={`${c.text} opacity-80`}>{skill.icon}</span>
                      <span className="text-gray-300 text-[11px] font-mono tracking-wide">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── HUD footer bar ── */}
        <div className="mt-14 flex justify-between items-center font-mono text-[9px] text-gray-700 tracking-[0.2em] px-2 opacity-40">
          <span>&gt; SKILLS MODULE LOADED</span>
          <span>0x07ACF</span>
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.03] z-10" />
    </section>
  );
}
