import React, { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const projectData = [
  {
    image: "/projects/blood.jpeg",
    title: "Real-Time Blood Donation",
    description: "Emergency blood donation platform with real-time stock monitoring, 10 km radius location-based donor alerts, automated SMS via Twilio, and a reward system.",
    tags: ["Node.js", "Twilio API", "Geolocation"],
    categories: ["ALL", "FULLSTACK", "REAL-TIME"],
    link: null,
    github: "https://github.com/nithishjude/Blood-Connect.git",
  },
  {
    image: "/projects/provenance_pay.png",
    title: "Provenance Pay",
    description: "Real-time USDC royalty disbursement system on Arc Testnet using Circle infrastructure and MusicBrainz metadata. Features a Solidity smart contract for automated on-chain royalty splits.",
    tags: ["Node.js", "Arc Testnet", "Solidity", "Circle"],
    categories: ["ALL", "FULLSTACK"],
    link: "https://lepton-two.vercel.app/",
    github: "https://github.com/nithishjude/Lepton.git",
  },
  {
    image: "/projects/super.png",
    title: "The Super App",
    description: "Personalized React dashboard with user registration, weather, news, notes, countdown timers, and local storage-based movie recommendations.",
    tags: ["React", "Node.js", "Local Storage", "APIs"],
    categories: ["ALL", "FRONTEND"],
    link: "https://superapp-tan-three.vercel.app",
    github: "https://github.com/nithishjude/superapp.git",
  },
  {
    image: "/projects/gamepayx.png",
    title: "GamePayX",
    description: "A decentralized game store powered by Avail Nexus SDK for true cross-chain ownership. Purchase in-game items on one blockchain and access them on ALL supported chains through Avail's Data Availability layer.",
    tags: ["Avail Nexus SDK", "Blockchain", "React", "Cross-Chain"],
    categories: ["ALL", "FULLSTACK", "BLOCKCHAIN"],
    link: "https://gamepayx-j00ljy0dv-sanjay-s-projects-49dd4896.vercel.app/",
    github: "https://github.com/nithishjude/gamepayx.git",
  },
  {
    image: "/projects/rental car.png",
    title: "Roadie Rental Biz",
    description: "A modern, full-stack car rental web application designed to provide a seamless and intuitive car booking experience. Built with React, Supabase, and Tailwind CSS for elegant browsing, selecting, and booking cars online.",
    tags: ["React", "Supabase", "Tailwind CSS"],
    categories: ["ALL", "FULLSTACK", "FRONTEND"],
    link: "https://car-rental-app-umber.vercel.app/",
    github: "https://github.com/nithishjude/Car-Rental-App.git",
  },
  {
    image: "/projects/online course.png",
    title: "Online Course Registration",
    description: "A full-featured online course registration system with secure login, course browsing, enrollment management, and an intuitive dashboard for both students and administrators.",
    tags: ["React", "Node.js", "Authentication"],
    categories: ["ALL", "FULLSTACK", "FRONTEND"],
    link: "https://onlinecoursesystem.vercel.app/login",
    github: "https://github.com/nithishjude/onlinecourse.git",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const categories = ["ALL", "FULLSTACK", "REAL-TIME", "FRONTEND", "BLOCKCHAIN"];

  const filteredProjects = projectData.filter(project =>
    project.categories.includes(activeCategory)
  );

  return (
    <section id="portfolio" className="bg-[#020202] py-24 px-6 md:px-12 lg:px-24 scroll-mt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
        >
          Project Showcase<span className="text-blue-500">.</span>
        </motion.h2>

        <div className="w-24 h-[1px] bg-blue-500/40 mx-auto"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-16 max-w-7xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative px-6 py-2.5 text-[10px] font-mono tracking-[0.2em] uppercase rounded-sm border transition-all duration-300 ${
              activeCategory === category
                ? "border-blue-500 text-white bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                : "border-white/5 text-gray-500 hover:text-white hover:border-white/20 bg-transparent"
            }`}
          >
            <span className="relative z-10">{category}</span>
            {activeCategory === category && (
              <motion.span
                layoutId="activeFilterTab"
                className="absolute inset-0 bg-blue-500/5 z-0"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.title}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-colors duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/3] rounded-[1.5rem] m-2">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight uppercase group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs font-light tracking-wide leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest font-mono px-3 py-1 bg-white/5 border border-white/5 text-blue-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Github Repository" className="p-3.5 bg-white/5 text-white rounded-xl hover:bg-blue-600 hover:text-white transition-all border border-white/10 hover:border-blue-500/50 shadow-lg">
                    <FiGithub size={18} />
                  </a>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="p-3.5 bg-white/5 text-white rounded-xl hover:bg-blue-600 hover:text-white transition-all border border-white/10 hover:border-blue-500/50 shadow-lg">
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;
