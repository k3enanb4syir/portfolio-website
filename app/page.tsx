'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Code, Mail, Database, Terminal, Code2, BarChart3, Target, PieChart } from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  
  // Reusable animation variants - Fixed TypeScript ease typing
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    // The [zoom:90%] class scales the entire layout down globally
    <div className="relative min-h-screen bg-[#050505] [zoom:90%] overflow-x-hidden">
      
      {/* Background Noise and Grid */}
      <div className="noise opacity-40" />
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-70" />
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-6xl flex justify-between items-center px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)]"
      >
        <span className="font-bold tracking-tight text-white text-sm md:text-base drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">MUHAMMAD KEENAN BASYIR</span>
        <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest text-muted mono">
          <Link href="#about" className="hover:text-blue-400 transition-colors">ABOUT</Link>
          <Link href="#experience" className="hover:text-emerald-400 transition-colors">EXPERIENCE</Link>
          <Link href="#projects" className="hover:text-purple-400 transition-colors">PROJECTS</Link>
        </div>
        <a href="/Muhammad_Keenan_Basyir_CV.pdf" target="_blank" className="flex items-center gap-2 text-xs font-medium text-blue-400 hover:text-blue-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all mono">
          RESUME <ArrowUpRight size={14} />
        </a>
      </motion.nav>

      <main className="relative z-10 flex flex-col items-center">
        
        {/* 01: HERO */}
        <section className="relative w-full max-w-6xl min-h-screen flex flex-col justify-center px-6 pt-32">
          
          {/* Abstract Data Network Visual */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] opacity-30 pointer-events-none hidden lg:block">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-blue-500/20 rounded-full border-dashed shadow-[0_0_30px_rgba(59,130,246,0.1)]" />
             <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="absolute inset-12 border border-emerald-500/20 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.1)]" />
             <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />
          </div>

          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="max-w-4xl relative z-10">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]"></span>
              </span>
              <span className="mono text-xs text-emerald-400 uppercase tracking-widest">Open to opportunities</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 text-white">
              BUILDING INTELLIGENT <br className="hidden md:block"/>
              SOLUTIONS WITH <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">CODE, DATA & AI.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
              I'm Muhammad Keenan Basyir, a Computer Science undergraduate at Universitas Gadjah Mada building intelligent solutions at the intersection of AI, data, software, and user experience.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#projects" className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition-colors hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                VIEW MY WORK <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#contact" className="group flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-8 py-4 rounded-full font-medium hover:bg-white/10 hover:border-white/20 transition-all">
                LET'S CONNECT <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 mono text-xs text-neutral-500">
              <div><p className="text-blue-300 mb-1">01 / INSTITUTION</p><p>UGM Computer Science</p></div>
              <div><p className="text-emerald-300 mb-1">02 / METRIC</p><p>GPA 3.79 / 4.00</p></div>
              <div><p className="text-purple-300 mb-1">03 / FOCUS</p><p>AI • ML • Data • Software</p></div>
              <div><p className="text-red-300 mb-1">04 / STATUS</p><p>2024 — 2028</p></div>
            </motion.div>
          </motion.div>
        </section>

        {/* 02: THE JOURNEY MARQUEE */}
        <section className="w-full mt-32 py-20 border-y border-white/10 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent overflow-hidden flex items-center">
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex whitespace-nowrap text-4xl md:text-5xl font-bold tracking-tighter text-neutral-800 uppercase"
          >
            <span className="mx-12 hover:text-blue-500 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300 cursor-default">Computer Science</span>
            <span className="mx-12 hover:text-emerald-500 hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-300 cursor-default">UI/UX & Product Design</span>
            <span className="mx-12 hover:text-purple-500 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-300 cursor-default">Software Development</span>
            <span className="mx-12 hover:text-red-500 hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] transition-all duration-300 cursor-default">Machine Learning</span>
            <span className="mx-12 hover:text-cyan-500 hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-300 cursor-default">Data Science</span>
            <span className="mx-12 hover:text-yellow-500 hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.8)] transition-all duration-300 cursor-default">AI Engineering</span>
            <span className="mx-12 hover:text-blue-500 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300 cursor-default">Computer Science</span>
            <span className="mx-12 hover:text-emerald-500 hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-300 cursor-default">UI/UX & Product Design</span>
          </motion.div>
        </section>

        {/* 03: ABOUT */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp} id="about" className="w-full max-w-6xl px-6 py-32">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">More than just code.</h2>
              <p className="text-neutral-400 leading-relaxed">
                My background combines the rigorous logic of software development with the strategic clarity of consulting. I am driven by understanding both how technology works and how people interact with it, pushing progressively toward AI Engineering.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* UGM Card */}
              <div className="p-8 bg-neutral-950 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-8 right-8 w-16 h-16 opacity-30 group-hover:opacity-80 transition-opacity rounded-full overflow-hidden">
                  <img src="/ugm.jpg" alt="UGM Logo" className="w-full h-full object-cover drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </div>
                <p className="mono text-xs text-blue-400 mb-4 relative z-10 tracking-widest">ACADEMIC HIGHLIGHT</p>
                <h3 className="text-4xl font-bold mb-2 relative z-10 text-white group-hover:text-blue-100 transition-colors">3.79 <span className="text-lg text-neutral-500 font-normal">/ 4.00</span></h3>
                <p className="text-blue-50 font-medium mb-1 relative z-10">Universitas Gadjah Mada</p>
                <p className="text-sm text-neutral-400 relative z-10">Bachelor's Degree in Computer Science</p>
              </div>

              {/* Yonsei Card */}
              <div className="p-8 bg-neutral-950 border border-white/10 rounded-2xl hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-8 right-8 w-16 h-16 opacity-30 group-hover:opacity-80 transition-opacity rounded-full overflow-hidden bg-white/90">
                  <img src="/yonsei.png" alt="Yonsei Logo" className="w-full h-full object-contain p-1" />
                </div>
                <p className="mono text-xs text-indigo-400 mb-4 relative z-10 tracking-widest">INTERNATIONAL EXP</p>
                <h3 className="text-4xl font-bold mb-2 relative z-10 text-white group-hover:text-indigo-100 transition-colors">4.30 <span className="text-lg text-neutral-500 font-normal">/ 4.30</span></h3>
                <p className="text-indigo-50 font-medium mb-1 relative z-10">Yonsei University, Seoul</p>
                <p className="text-sm text-neutral-400 relative z-10">Yonsei International Summer School</p>
              </div>

            </div>
          </div>
        </motion.section>

        {/* 04: FLAGSHIP PROJECTS */}
        <section id="projects" className="w-full max-w-6xl px-6 py-32 border-t border-white/10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={fadeUp} className="mb-24">
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Things I've built.</h2>
            <p className="text-neutral-400 text-lg max-w-2xl">From algorithms to applications — projects where code, data, and problem-solving come together.</p>
          </motion.div>

          <div className="space-y-40">
            
            {/* Project 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp} className="group relative flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-7/12 aspect-video bg-gradient-to-br from-neutral-950 to-blue-950/30 rounded-2xl border border-white/10 group-hover:border-blue-500/40 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 overflow-hidden relative flex items-center justify-center">
                <div className="flex items-center gap-4 text-blue-900 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-500 group-hover:scale-110">
                   <Terminal size={40} /> <div className="h-[1px] w-12 bg-blue-500/20 group-hover:bg-blue-400/50 transition-colors" /> <Code2 size={40} /> <div className="h-[1px] w-12 bg-blue-500/20 group-hover:bg-blue-400/50 transition-colors" /> <Database size={40} />
                </div>
              </div>
              <div className="w-full lg:w-5/12 space-y-6">
                <div className="mono text-xs tracking-widest text-blue-500 font-semibold">01 / DISTRIBUTED SYSTEMS</div>
                <h3 className="text-3xl font-bold text-blue-500 group-hover:text-blue-300 group-hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.6)] transition-all duration-300">Scalable Online Quiz Platform</h3>
                <p className="text-neutral-400 leading-relaxed">A distributed platform engineered to support high-traffic activity, handling 100+ concurrent students through a robust microservices architecture.</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Docker', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Nginx'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mono text-[10px] text-blue-300 tracking-wider font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp} className="group relative flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="w-full lg:w-7/12 aspect-video bg-gradient-to-br from-neutral-950 to-red-950/30 rounded-2xl border border-white/10 group-hover:border-red-500/40 group-hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] transition-all duration-500 overflow-hidden relative flex items-center justify-center">
                <div className="grid grid-cols-7 grid-rows-6 gap-3 p-6 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105">
                  {Array.from({ length: 42 }).map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full border transition-all duration-500 ${i === 18 ? 'border-blue-500 bg-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,1)]' : i === 24 ? 'border-red-500 bg-red-500 group-hover:shadow-[0_0_15px_rgba(239,68,68,1)]' : 'border-neutral-800 group-hover:border-neutral-700'}`} />
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-5/12 space-y-6">
                <div className="mono text-xs tracking-widest text-red-500 font-semibold">02 / ARTIFICIAL INTELLIGENCE</div>
                <h3 className="text-3xl font-bold text-red-500 group-hover:text-red-400 group-hover:drop-shadow-[0_0_15px_rgba(248,113,113,0.6)] transition-all duration-300">Connect 4 AI Game</h3>
                <p className="text-neutral-400 leading-relaxed">A Python-based graphical engine featuring an AI opponent capable of selecting optimal moves using advanced search algorithms and decision-making logic.</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Minimax', 'Alpha-Beta Pruning', 'Game Search', 'Pygame'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full mono text-[10px] text-red-300 tracking-wider font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }} variants={fadeUp} className="group relative flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-7/12 aspect-video bg-gradient-to-br from-neutral-950 to-emerald-950/30 rounded-2xl border border-white/10 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500 overflow-hidden relative flex items-center justify-center">
                <div className="flex items-center gap-4 text-emerald-900 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-500 group-hover:scale-110">
                   <PieChart size={40} /> <div className="h-[1px] w-12 bg-emerald-500/20 group-hover:bg-emerald-400/50 transition-colors" /> <BarChart3 size={40} /> <div className="h-[1px] w-12 bg-emerald-500/20 group-hover:bg-emerald-400/50 transition-colors" /> <Target size={40} />
                </div>
              </div>
              <div className="w-full lg:w-5/12 space-y-6">
                <div className="mono text-xs tracking-widest text-emerald-500 font-semibold">03 / MACHINE LEARNING</div>
                <h3 className="text-3xl font-bold text-emerald-500 group-hover:text-emerald-300 group-hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.6)] transition-all duration-300">Marketing Optimization</h3>
                <p className="text-neutral-400 leading-relaxed">A machine learning pipeline combining customer segmentation and predictive classification to optimize mall marketing strategies through data clustering.</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Scikit-Learn', 'Feature Preparation', 'Data Clustering', 'Python'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mono text-[10px] text-emerald-300 tracking-wider font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 05: EXPERIENCE */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} id="experience" className="w-full max-w-6xl px-6 py-32 border-t border-white/10">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-white">Where I've contributed.</h2>
          
          <div className="space-y-16">
            
            {/* Experience 1 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 group hover:bg-white/[0.02] p-6 -mx-6 rounded-3xl transition-colors">
              <div className="w-full md:w-32 flex flex-row md:flex-col items-center md:items-start gap-3 shrink-0">
                <div className="mono text-xs text-neutral-500 pt-1 group-hover:text-blue-400 transition-colors">2024 — 2025</div>
                <div className="w-24 h-24 bg-white/5 border border-white/10 group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] rounded-2xl flex items-center justify-center p-4 transition-all duration-300">
                  <img src="/2e6197de-3ef9-4f63-b7b8-76a6d948e3a3_980x980.png" alt="Google Developer Group Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-grow pb-12 border-b border-white/10 group-last:border-0 group-hover:border-transparent transition-colors">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">UI/UX Designer & Programmer / Hipster</h3>
                <p className="text-blue-400/70 text-sm mb-4">Google Developer Group on Campus UGM</p>
                <p className="text-neutral-400 leading-relaxed text-sm">Led UX research and co-designed a gamified fitness application utilizing the Google Gemini API for the Google Solution project to deliver an innovative digital solution for healthier lifestyles.</p>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 group hover:bg-white/[0.02] p-6 -mx-6 rounded-3xl transition-colors">
              <div className="w-full md:w-32 flex flex-row md:flex-col items-center md:items-start gap-3 shrink-0">
                <div className="mono text-xs text-neutral-500 pt-1 group-hover:text-emerald-400 transition-colors">2025 — 2026</div>
                <div className="w-24 h-24 bg-white border border-white/10 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] rounded-2xl flex items-center justify-center p-3 transition-all duration-300">
                  <img src="/f9bb52_c625b6fd81d1444ba936bf90d87ad3ef~mv2.png" alt="180 Degrees Consulting Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-grow pb-12 border-b border-white/10 group-last:border-0 group-hover:border-transparent transition-colors">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">Consulting Trainee</h3>
                <p className="text-emerald-400/70 text-sm mb-4">180 Degrees Consulting UGM</p>
                <p className="text-neutral-400 leading-relaxed text-sm">Mastered structured problem-solving methodologies by developing a scalable campus expansion strategy and hub-and-spoke operational model for Nusantara Coffee.</p>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 group hover:bg-white/[0.02] p-6 -mx-6 rounded-3xl transition-colors">
              <div className="w-full md:w-32 flex flex-row md:flex-col items-center md:items-start gap-3 shrink-0">
                <div className="mono text-xs text-neutral-500 pt-1 group-hover:text-purple-400 transition-colors">2024 — 2025</div>
                <div className="w-24 h-24 bg-[#1a1b41] border border-white/10 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] rounded-full flex items-center justify-center overflow-hidden transition-all duration-300">
                  <img src="/himakom_logo.jpg" alt="Himakom UGM Logo" className="w-full h-full object-cover scale-110" />
                </div>
              </div>
              <div className="flex-grow pb-12 border-b border-white/10 group-last:border-0 group-hover:border-transparent transition-colors">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">Staff of Public Relations</h3>
                <p className="text-purple-400/70 text-sm mb-4">Himpunan Mahasiswa Ilmu Komputer UGM</p>
                <p className="text-neutral-400 leading-relaxed text-sm">Managed internal and external networking, leading the communication and coordination of events between organizations and securing vital sponsorship funding.</p>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 group hover:bg-white/[0.02] p-6 -mx-6 rounded-3xl transition-colors">
              <div className="w-full md:w-32 flex flex-row md:flex-col items-center md:items-start gap-3 shrink-0">
                <div className="mono text-xs text-neutral-500 pt-1 group-hover:text-yellow-400 transition-colors">2024 — Present</div>
                <div className="w-24 h-24 bg-white/5 border border-white/10 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] rounded-full flex items-center justify-center overflow-hidden transition-all duration-300">
                  <img src="/ugmmun_logo.jpg" alt="UGM MUN Logo" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-grow pb-12 border-b border-white/10 group-last:border-0 group-hover:border-transparent transition-colors">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors">Digital Marketing Staff & Delegate</h3>
                <p className="text-yellow-400/70 text-sm mb-4">UGM Model United Nations</p>
                <p className="text-neutral-400 leading-relaxed text-sm">Debated with delegates across global universities, enhancing critical communication, public speaking, and strategic marketing skills on digital platforms.</p>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 06: CERTIFICATIONS */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeUp} className="w-full max-w-6xl px-6 py-32 border-t border-white/10">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-white">Verified Certifications.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Cert 1 */}
            <div className="p-8 bg-neutral-950 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="mono text-xs text-neutral-500 mb-4 uppercase tracking-widest group-hover:text-blue-400 transition-colors">Aug 17, 2025</p>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">Google Prompting Essentials</h3>
              <p className="text-sm text-neutral-400 group-hover:text-blue-200/70 transition-colors">Google</p>
            </div>

            {/* Cert 2 */}
            <div className="p-8 bg-neutral-950 border border-white/10 rounded-2xl hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="mono text-xs text-neutral-500 mb-4 uppercase tracking-widest group-hover:text-emerald-400 transition-colors">Jan 11, 2026</p>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-100 transition-colors">Intro to Generative AI: Core Concepts</h3>
              <p className="text-sm text-neutral-400 group-hover:text-emerald-200/70 transition-colors">Google Cloud Training</p>
            </div>

            {/* Cert 3 */}
            <div className="p-8 bg-neutral-950 border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="mono text-xs text-neutral-500 mb-4 uppercase tracking-widest group-hover:text-cyan-400 transition-colors">Sep 22, 2025</p>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">Foundations: Data, Data, Everywhere</h3>
              <p className="text-sm text-neutral-400 group-hover:text-cyan-200/70 transition-colors">Google</p>
            </div>

            {/* Cert 4 */}
            <div className="p-8 bg-neutral-950 border border-white/10 rounded-2xl hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="mono text-xs text-neutral-500 mb-4 uppercase tracking-widest group-hover:text-indigo-400 transition-colors">Sep 22, 2025</p>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-100 transition-colors">What is Data Science?</h3>
              <p className="text-sm text-neutral-400 group-hover:text-indigo-200/70 transition-colors">IBM</p>
            </div>

          </div>
        </motion.section>

        {/* 07: CONTACT */}
        <section id="contact" className="w-full px-6 py-40 border-t border-white/10 text-center relative overflow-hidden">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white relative z-10">
            LET'S BUILD SOMETHING <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">MEANINGFUL.</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeUp} className="text-xl text-neutral-400 max-w-2xl mx-auto mb-16 relative z-10">
            I'm always looking to learn, build, and collaborate on interesting technology problems.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeUp} className="flex flex-wrap justify-center gap-6 relative z-10">
            <a href="mailto:k3enanb4syir@gmail.com" className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-blue-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
              <Mail size={18} /> EMAIL ME
            </a>
            <a href="https://www.linkedin.com/in/muhammad-keenan-basyir-336153337/" target="_blank" className="flex items-center gap-2 bg-white/5 border border-white/10 px-8 py-4 rounded-full font-medium text-white hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all">
              <Globe size={18} /> LINKEDIN
            </a>
            <a href="https://github.com/k3enanb4syir" target="_blank" className="flex items-center gap-2 bg-white/5 border border-white/10 px-8 py-4 rounded-full font-medium text-white hover:bg-white/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all">
              <Code size={18} /> GITHUB
            </a>
          </motion.div>
        </section>
        
      </main>

      <footer className="relative z-10 w-full px-6 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 mono bg-[#020202]">
        <p>© 2026 MUHAMMAD KEENAN BASYIR</p>
        <p className="mt-4 md:mt-0">YOGYAKARTA / INDONESIA</p>
      </footer>
    </div>
  );
}
