import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PROPERTIES } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import {
  MapPin, ShieldCheck, Calendar, Download, Zap, Home,
  PencilRuler, ArrowRight, ChevronRight, Phone, Plus, Minus,
  Sparkles, Check, Award, Users, ChevronDown, Waves, Dumbbell,
  Gamepad2, Film, Leaf, Move, Maximize2
} from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const HOTSPOTS: Record<string, any[]> = {
  '2 BHK': [
    { id: 1, x: 32, y: 45, title: "Master Bedroom", desc: "12' x 14' premium hardwood flooring." },
    { id: 2, x: 58, y: 35, title: "Living Lounge", desc: "18' wide hall with floor-to-ceiling glass." },
    { id: 3, x: 42, y: 72, title: "Kitchen", desc: "L-shaped modular with quartz countertops." }
  ],
  '3 BHK': [
    { id: 1, x: 28, y: 38, title: "Master Suite", desc: "14' x 16' with walk-in closet & deck." },
    { id: 2, x: 62, y: 28, title: "Grand Lounge", desc: "Double height architectural ceiling." },
    { id: 3, x: 45, y: 68, title: "Dry Balcony", desc: "Dedicated outdoor storage zone." },
    { id: 4, x: 78, y: 52, title: "Kids Room", desc: "Generous windows for natural light." }
  ],
  '4 BHK': [
    { id: 1, x: 22, y: 32, title: "Royal Master", desc: "18' x 20' ultra-luxury pool-view suite." },
    { id: 2, x: 52, y: 22, title: "Formal Dining", desc: "Designed for high-end hosting." },
    { id: 3, x: 38, y: 62, title: "Home Office", desc: "Acoustically treated quiet zone." },
    { id: 4, x: 72, y: 48, title: "Media Room", desc: "Pre-wired for 7.1 Dolby Atmos." },
    { id: 5, x: 82, y: 82, title: "Gourmet Kitchen", desc: "Island layout, commercial-grade fits." }
  ]
};

const Hotspot = ({ x, y, title, desc }: { x: number; y: number; title: string; desc: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="absolute z-30" style={{ left: `${x}%`, top: `${y}%` }}>
      <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], boxShadow: ["0 0 0 0px rgba(0,113,186,0.4)", "0 0 0 12px rgba(0,113,186,0)", "0 0 0 0px rgba(0,113,186,0.4)"] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-5 h-5 bg-primary rounded-full border-2 border-white shadow-lg cursor-pointer flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 bg-slate-900 p-4 rounded-2xl shadow-2xl z-50 pointer-events-none border border-white/10"
            >
              <p className="text-[10px] font-black text-white uppercase tracking-widest mb-1">{title}</p>
              <p className="text-[11px] text-white/50 leading-relaxed">{desc}</p>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45 border-r border-b border-white/10" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const ProjectDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('3 BHK');
  const [activeImg, setActiveImg] = useState(0);

  const project = useMemo(() => {
    const base = PROPERTIES.find(p => p.id === id);
    if (!base) return null;
    return {
      ...base,
      rera: "P52100050860",
      possession: "Dec 2026",
      amenities: [
        { label: "Infinity Pool", icon: Waves },
        { label: "Pro Gym", icon: Dumbbell },
        { label: "Club House", icon: Home },
        { label: "Kids Play", icon: Gamepad2 },
        { label: "Mini Theatre", icon: Film },
        { label: "Zen Garden", icon: Leaf },
        { label: "24/7 Security", icon: ShieldCheck },
        { label: "EV Charging", icon: Zap },
      ],
      gallery: [
        base.img,
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop",
      ]
    };
  }, [id]);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);
  if (!project) return <div className="min-h-screen flex items-center justify-center text-slate-400">Project not found</div>;

  const similar = PROPERTIES.filter(p => p.id !== id).slice(0, 4);
  const tabs = ['2 BHK', '3 BHK', '4 BHK'];
  const sqft = activeTab === '2 BHK' ? '785' : activeTab === '3 BHK' ? '1,240' : '1,850';
  const price = activeTab === '2 BHK' ? '1.2' : activeTab === '3 BHK' ? '2.1' : '3.8';

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Header />
      <main className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <ChevronRight size={12} />
            <span className="text-slate-700">{project.title}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* ── Main Content ── */}
            <div className="lg:col-span-8 space-y-10">

              {/* Gallery */}
              <section className="space-y-3">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImg}
                      src={project.gallery[activeImg]}
                      alt={project.title}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                      <ShieldCheck size={10} /> RERA Verified
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {project.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${activeImg === i ? 'border-primary shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img src={img} className="w-full h-full object-cover" alt="" />
                      {i === 3 && (
                        <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center text-white text-[9px] font-black uppercase tracking-wider">
                          +12 More
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </section>

              {/* Title Block */}
              <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="space-y-3">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">Premium Listing</span>
                    <h1 className="text-3xl font-black text-slate-900 font-headline tracking-tight leading-tight">{project.title}</h1>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-primary shrink-0" />
                      <span className="text-slate-500 text-sm font-semibold">{project.loc}</span>
                    </div>
                    <span className="inline-block text-[10px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg">
                      RERA: {project.rera}
                    </span>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-right shrink-0">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Starting From</p>
                    <p className="text-4xl font-black text-slate-900 tracking-tight leading-none">{project.price.split(' ')[0]}</p>
                    <p className="text-sm font-bold text-primary mt-1">{project.price.split(' ').slice(1).join(' ') || 'Onwards'}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-50">
                  {[
                    { label: "Config", val: project.bhk, icon: Home },
                    { label: "Area", val: project.sqft, icon: PencilRuler },
                    { label: "Possession", val: project.possession, icon: Calendar },
                    { label: "Amenities", val: "40+ Elite", icon: Sparkles },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                        <s.icon size={16} />
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
                        <p className="text-xs font-black text-slate-800">{s.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* About */}
              <section className="space-y-4">
                <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">About the Project</h2>
                <p className="text-slate-600 text-base leading-relaxed font-medium">{project.description}</p>
              </section>

              {/* Highlights */}
              <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-6">
                <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">Key Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Prime growth corridor location",
                    "Tri-level security systems",
                    "Gold certified green building",
                    "World-class clubhouse",
                    "High rental yield potential",
                    "Oxygen-rich landscaped gardens",
                  ].map((h, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-7 h-7 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <Check size={13} strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{h}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Amenities */}
              <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-8">
                <div className="text-center space-y-2">
                  <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">World-Class Amenities</h2>
                  <p className="text-2xl font-black text-slate-900 font-headline">Life at {project.title}</p>
                </div>
                <div className="grid grid-cols-4 gap-6">
                  {project.amenities.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex flex-col items-center gap-3 group"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <a.icon size={22} />
                      </div>
                      <span className="text-[11px] font-bold text-slate-600 text-center leading-tight">{a.label}</span>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Floor Plans */}
              <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Interactive Floor Plans</h2>
                      <div className="flex gap-2">
                        {tabs.map(t => (
                          <button
                            key={t}
                            onClick={() => setActiveTab(t)}
                            className={`px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all border ${activeTab === t ? 'bg-primary text-white border-primary' : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-slate-200'}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-slate-900">{sqft} <span className="text-xs text-slate-400">sq.ft</span></p>
                      <p className="text-sm font-bold text-primary">₹ {price} Cr*</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="bg-slate-50 rounded-2xl min-h-[380px] flex items-center justify-center relative overflow-hidden border border-slate-100">
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-100 text-[9px] font-black uppercase tracking-widest text-slate-500">
                      <Move size={10} /> Pan & Zoom
                    </div>
                    <TransformWrapper initialScale={1} minScale={0.5} centerOnInit>
                      <TransformComponent wrapperClass="!w-full !h-full">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, filter: 'blur(8px)' }}
                          animate={{ opacity: 1, filter: 'blur(0px)' }}
                          transition={{ duration: 0.5 }}
                          className="relative flex items-center justify-center w-full"
                        >
                          <img
                            src={activeTab === '2 BHK' ? "/floorplans/floorplan_2bhk.png" : activeTab === '3 BHK' ? "/floorplans/floorplan_3bhk.png" : "/floorplans/floorplan_4bhk.png"}
                            className="max-w-full max-h-[340px] object-contain drop-shadow-lg"
                            alt={`${activeTab} Floor Plan`}
                          />
                          <div className="absolute inset-0 pointer-events-none">
                            {HOTSPOTS[activeTab]?.map(h => (
                              <div key={h.id} className="pointer-events-auto">
                                <Hotspot {...h} />
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </TransformComponent>
                    </TransformWrapper>
                  </div>
                </div>
              </section>

              {/* Location */}
              <section className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                <div className="grid md:grid-cols-2">
                  {/* Left Side: Connectivity Data */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-8">
                      <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Location & Connectivity</h2>
                      <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                        Seamless access to business hubs, airports, and metro stations from <span className="text-slate-800 font-bold">{project.loc.split(',')[0]}</span>.
                      </p>
                    </div>
                    <div className="space-y-0">
                      {[
                        { label: "Metro Station", time: "5 Mins" },
                        { label: "International Airport", time: "20 Mins" },
                        { label: "City Center", time: "10 Mins" },
                        { label: "Business Park", time: "8 Mins" },
                      ].map((item, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex justify-between items-center py-4 border-b border-slate-50 last:border-0 group"
                        >
                          <span className="text-sm font-bold text-slate-600 group-hover:text-primary transition-colors">{item.label}</span>
                          <span className="text-sm font-black text-primary">{item.time}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Advanced Map Visualization */}
                  <div className="relative min-h-[320px] bg-slate-50 border-l border-slate-100 overflow-hidden group">
                    {/* Abstract Grid & Map Overlay */}
                    <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                    <img
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                      className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-30 grayscale"
                      alt="Map Background"
                    />
                    
                    {/* Animated Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 400 300" preserveAspectRatio="none">
                       <motion.path d="M200,150 Q100,50 20,80" fill="none" stroke="#0071ba" strokeWidth="1.5" strokeDasharray="4 4" animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                       <motion.path d="M200,150 Q300,250 380,180" fill="none" stroke="#0071ba" strokeWidth="1.5" strokeDasharray="4 4" animate={{ strokeDashoffset: [0, 100] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
                       <motion.path d="M200,150 Q280,40 350,60" fill="none" stroke="#0071ba" strokeWidth="1.5" strokeDasharray="4 4" animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />
                    </svg>

                    {/* Radar & Pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {/* Expanding Radar Rings */}
                      <motion.div 
                        animate={{ scale: [1, 3], opacity: [0.4, 0] }} 
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }} 
                        className="absolute inset-0 bg-primary rounded-full -m-10" 
                      />
                      <motion.div 
                        animate={{ scale: [1, 3], opacity: [0.3, 0] }} 
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }} 
                        className="absolute inset-0 bg-primary rounded-full -m-10" 
                      />
                      <motion.div 
                        animate={{ scale: [1, 3], opacity: [0.2, 0] }} 
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 2 }} 
                        className="absolute inset-0 bg-primary rounded-full -m-10" 
                      />
                      
                      {/* Solid Backdrop */}
                      <div className="absolute inset-0 bg-primary/5 rounded-full -m-16 border border-primary/20 backdrop-blur-[2px] transition-transform duration-700 group-hover:scale-110" />
                      
                      {/* Central Pin Card */}
                      <div className="w-14 h-14 bg-white rounded-full shadow-[0_10px_40px_rgba(0,113,186,0.3)] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                        <MapPin size={24} className="text-primary fill-primary/10" />
                        
                        {/* Live Ping Indicator */}
                        <div className="absolute 0 right-0 top-0 flex h-3.5 w-3.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
                        </div>
                      </div>
                    </div>

                    {/* Floating Map Labels */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                      className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/50 shadow-lg pointer-events-none"
                    >
                       <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-0.5">Strategic</p>
                       <p className="text-xs font-bold text-slate-800">Growth Corridor</p>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                      className="absolute top-8 right-8 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg pointer-events-none flex items-center gap-2"
                    >
                       <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                       <p className="text-[9px] font-bold text-white uppercase tracking-widest">Live Map</p>
                    </motion.div>
                  </div>
                </div>
              </section>

            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-5">

                {/* Lead Form */}
                <div className="bg-slate-900 rounded-2xl p-7 relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                  <div className="relative space-y-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/50">Advisory Active</span>
                      </div>
                      <h3 className="text-xl font-black text-white font-headline">Book a Site Visit</h3>
                      <p className="text-white/40 text-xs mt-1 leading-relaxed">Connect with a senior property advisor today.</p>
                    </div>

                    <div className="space-y-3">
                      <div className="relative">
                        <Users size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                        <input type="text" placeholder="Full Name" className="w-full bg-white/8 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-all" />
                      </div>
                      <div className="flex gap-2">
                        <div className="w-14 bg-white/8 border border-white/10 rounded-xl flex items-center justify-center text-[11px] font-bold text-white/50 shrink-0">+91</div>
                        <div className="relative flex-1">
                          <input type="tel" placeholder="Mobile Number" className="w-full bg-white/8 border border-white/10 rounded-xl py-3.5 px-4 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-all" />
                        </div>
                      </div>
                      <select className="w-full bg-white/8 border border-white/10 rounded-xl py-3.5 px-4 text-sm text-white/40 focus:outline-none focus:border-white/25 transition-all appearance-none">
                        <option className="bg-slate-900">{project.bhk} — Priority Unit</option>
                        <option className="bg-slate-900">Investor Package</option>
                        <option className="bg-slate-900">Luxury Floor</option>
                      </select>
                      <button className="w-full bg-primary hover:brightness-110 active:scale-95 text-white py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2 group">
                        Express Interest <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="flex items-center justify-center gap-2 bg-white/8 border border-white/10 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/15 transition-all">
                          <Download size={12} /> Brochure
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white/8 border border-white/10 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/15 transition-all">
                          <Calendar size={12} /> Schedule
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Widget */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Corridor Growth</h4>
                    <span className="text-[9px] font-black bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-1 rounded-full uppercase tracking-wider">Live Data</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-slate-900 tracking-tighter">+12.5%</span>
                    <span className="text-xs font-bold text-emerald-500">YoY</span>
                  </div>
                  <div className="relative h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">Outperforming the regional benchmark by 4.2% annually.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Premium Similar Projects */}
      <section className="relative py-24 bg-[#0a1e3b] overflow-hidden border-t border-white/5">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-secondary/5 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[1px] bg-secondary" />
                <p className="text-[9px] font-black text-secondary uppercase tracking-[0.3em]">Curated Collection</p>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white font-headline tracking-tight">
                Similar <span className="italic text-primary">Estates</span>
              </h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/projects" className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full text-[10px] font-black text-white uppercase tracking-widest transition-all backdrop-blur-md">
                View All Portfolio <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform"><ChevronRight size={12} className="text-white" /></div>
              </Link>
            </motion.div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similar.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Ambient glow behind card on hover */}
                <div className="absolute -inset-4 bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" />
                
                <div className="relative">
                  <ProjectCard property={p} index={i} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
