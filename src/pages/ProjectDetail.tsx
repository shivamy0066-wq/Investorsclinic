import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PROPERTIES } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { 
  MapPin, 
  ShieldCheck, 
  Calendar, 
  Download, 
  Zap, 
  Home, 
  PencilRuler, 
  Star, 
  ArrowRight,
  ChevronLeft,
  Navigation,
  Sparkles,
  Building2,
  Check,
  Award,
  CircleDot,
  TowerControl as Control,
  ChevronRight,
  Phone,
  Plus,
  Minus,
  Maximize2,
  Move,
  Users,
  ChevronDown,
  Waves,
  Dumbbell,
  Gamepad2,
  Film,
  Leaf,
  Share2,
  Linkedin,
  Twitter
} from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const HOTSPOTS: Record<string, any[]> = {
  '2 BHK': [
    { id: 1, x: 32, y: 45, title: "Master Bedroom", desc: "12' x 14' with premium hardwood flooring and ensuite bath." },
    { id: 2, x: 58, y: 35, title: "Living Lounge", desc: "Expansive 18' wide hall with floor-to-ceiling glass windows." },
    { id: 3, x: 42, y: 72, title: "Kitchen", desc: "L-shaped modular kitchen with quartz stone countertops." }
  ],
  '3 BHK': [
    { id: 1, x: 28, y: 38, title: "Master Suite", desc: "14' x 16' with private walk-in closet and deck access." },
    { id: 2, x: 62, y: 28, title: "Grand Lounge", desc: "Double height ceiling for an architectural statement." },
    { id: 3, x: 45, y: 68, title: "Dry Balcony", desc: "Dedicated space for washing & outdoor storage." },
    { id: 4, x: 78, y: 52, title: "Kids Room", desc: "Generous window sized for maximum natural light." }
  ],
  '4 BHK': [
    { id: 1, x: 22, y: 32, title: "Royal Master", desc: "18' x 20' ultra-luxury suite with direct pool view." },
    { id: 2, x: 52, y: 22, title: "Formal Dining", desc: "Elegant space designed for high-end institutional hosting." },
    { id: 3, x: 38, y: 62, title: "Home Office", desc: "Acoustically treated quiet zone for focused productivity." },
    { id: 4, x: 72, y: 48, title: "Media Room", desc: "Pre-wired for 7.1 Dolby Atmos home cinema experience." },
    { id: 5, x: 82, y: 82, title: "Gourmet Kitchen", desc: "Island layout with commercial-grade appliance fits." }
  ]
};

const Hotspot = ({ x, y, title, desc }: { x: number; y: number; title: string; desc: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className="absolute z-30" 
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            boxShadow: [
              "0 0 0 0px rgba(188, 0, 17, 0.4)",
              "0 0 0 15px rgba(188, 0, 17, 0)",
              "0 0 0 0px rgba(188, 0, 17, 0.4)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-6 bg-secondary rounded-full border-2 border-white shadow-xl cursor-pointer flex items-center justify-center transition-transform hover:scale-125"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full transition-transform" />
        </motion.div>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-60 bg-[#0a1e3b] backdrop-blur-xl p-5 rounded-[1.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] z-50 pointer-events-none border border-white/10"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-3 bg-secondary rounded-full" />
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{title}</p>
                </div>
                <p className="text-[11px] font-medium text-white/50 leading-relaxed font-sans">{desc}</p>
              </div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a1e3b] rotate-45 border-r border-b border-white/10" />
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
  
  const project = useMemo(() => {
    const baseProject = PROPERTIES.find(p => p.id === id);
    if (!baseProject) return null;

    return {
      ...baseProject,
      rera: baseProject.rera || "P52100050860",
      possession: baseProject.possession || "Dec 2026",
      amenities: [
        { label: "Infinity Pool", icon: Waves },
        { label: "Pro Gym", icon: Dumbbell },
        { label: "Club House", icon: Home },
        { label: "Kids Play Area", icon: Gamepad2 },
        { label: "Mini Theatre", icon: Film },
        { label: "Zen Garden", icon: Leaf },
        { label: "24/7 Security", icon: ShieldCheck },
        { label: "EV Charging", icon: Zap }
      ],
      description: baseProject.description || "Investors Clinic brings you a masterpiece of architectural excellence. Designed for those who seek more than just a home, it offers a sanctuary where luxury meets lifestyle. Every square foot is meticulously planned to provide expansive living spaces that breathe and inspire.",
      gallery: [
        baseProject.img,
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop"
      ]
    };
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="min-h-screen flex items-center justify-center">Project not found</div>;

  const similarProjects = PROPERTIES.filter(p => p.id !== id).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#fcfdff]">
      <Header />
      
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Image Gallery */}
              <section id="overview" className="space-y-4">
                <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,113,186,0.15)] border-4 border-white bg-white group relative">
                  <img src={project.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={project.title} />
                  <div className="absolute bottom-8 left-8">
                    <span className="bg-emerald-500 text-white px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-3 shadow-xl backdrop-blur-md">
                      <ShieldCheck size={14} strokeWidth={3} /> Verified Property
                    </span>
                  </div>
                  {/* Brand Watermark Overlay */}
                  <div className="absolute top-8 right-8 opacity-20 pointer-events-none">
                    <div className="text-[10px] font-black text-white uppercase tracking-[0.5em] writing-mode-vertical">Investors Clinic</div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="aspect-video rounded-2xl overflow-hidden cursor-pointer group border-2 border-transparent hover:border-secondary transition-all shadow-sm hover:shadow-lg">
                      <div className="relative w-full h-full">
                        <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        {i === 3 && (
                          <div className="absolute inset-0 bg-primary/80 flex items-center justify-center text-white font-black text-[10px] uppercase tracking-widest">View 12+ More</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Title & Key Stats */}
              <section className="space-y-10 bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-[0_20px_60px_-10px_rgba(0,113,186,0.05)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
                  <div className="space-y-6 max-w-2xl">
                    <div className="space-y-2">
                       <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em]">Premium Property Listing</span>
                       <h1 className="text-3xl lg:text-5xl font-headline font-black text-primary tracking-tighter uppercase leading-[0.9]">
                         {project.title}
                       </h1>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                        <MapPin size={18} strokeWidth={2.5} className="text-secondary" />
                        <span className="text-primary font-black text-xs tracking-tight">{project.loc}</span>
                      </div>
                      <div className="px-4 py-2 bg-primary/5 border border-primary/10 rounded-xl text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-2">
                        RERA APP: {project.rera}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start lg:items-end gap-2 bg-slate-50 p-5 rounded-[1.5rem] border border-slate-100 min-w-[200px]">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Market Value Appraisal</p>
                    <div className="flex flex-col items-start lg:items-end">
                      <div className="text-4xl lg:text-5xl font-headline font-black text-primary tracking-tighter leading-none">
                        {project.price.split(' ')[0]}
                      </div>
                      <span className="text-lg font-black text-secondary uppercase tracking-widest mt-1">{project.price.split(' ').slice(1).join(' ') || 'onwards'}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: "Configuration", val: project.bhk, icon: Home },
                    { label: "Carpet Area", val: project.sqft, icon: PencilRuler },
                    { label: "Possession", val: project.possession, icon: Calendar },
                    { label: "Amenities", val: "40+ Premium", icon: Sparkles }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm text-center space-y-4 hover:border-primary/20 hover:shadow-xl transition-all duration-500 group cursor-default">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 shadow-inner flex items-center justify-center mx-auto transition-all group-hover:bg-primary group-hover:scale-110 group-hover:-rotate-3">
                        <stat.icon size={24} strokeWidth={2.5} className="text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{stat.label}</p>
                        <p className="text-[15px] font-black text-primary tracking-tight">{stat.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Description */}
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-0.5 w-10 bg-secondary" />
                  <h3 className="text-2xl font-black text-primary uppercase tracking-tight">About The Project</h3>
                </div>
                <div className="prose prose-slate max-w-none text-slate-500 text-lg font-medium leading-relaxed space-y-4 opacity-90">
                  <p>{project.description}</p>
                </div>
              </section>

              {/* Key Highlights */}
              <section className="space-y-8 bg-slate-50/50 p-10 rounded-[3rem] border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="h-0.5 w-10 bg-secondary" />
                  <h3 className="text-2xl font-black text-primary uppercase tracking-tight">Key Highlights</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {(project.highlights || [
                    "Strategically located in prime growth corridor",
                    "Tri-level Security Systems",
                    "Gold Certified Green Building",
                    "World-class clubhouse and amenities",
                    "High rental yield potential",
                    "Oxygen-rich landscaped gardens"
                  ]).map((highlight, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                        <Check size={18} strokeWidth={3} />
                      </div>
                      <p className="text-slate-700 font-bold text-sm tracking-tight">{highlight}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Amenities Grid - Brand Themed Look */}
              <section id="amenities" className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,113,186,0.08)] space-y-12 relative overflow-hidden">
                 {/* Brand Background Accents */}
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full -mr-64 -mt-64 blur-[120px]" />
                 <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full -ml-48 -mb-48 blur-[100px]" />
                 
                 <div className="text-center space-y-3 relative z-10">
                   <div className="flex items-center justify-center gap-4 mb-2">
                     <div className="h-0.5 w-10 bg-secondary" />
                     <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em]">Life at {project.title}</span>
                     <div className="h-0.5 w-10 bg-secondary" />
                   </div>
                   <h3 className="text-3xl md:text-5xl font-headline font-black text-primary uppercase tracking-tighter leading-none">
                     Elite <span className="text-secondary italic">Amenities</span>
                   </h3>
                   <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] max-w-sm mx-auto">Luxury Curated for the Distinctive Few</p>
                 </div>

                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10">
                   {project.amenities?.map((amenity, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex flex-col items-center gap-6"
                     >
                        <div className="relative">
                           <div className="absolute inset-0 bg-primary/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150" />
                           <div className="w-20 h-20 rounded-[2.2rem] bg-white border border-slate-100 flex items-center justify-center relative z-10 group-hover:bg-primary group-hover:border-primary transition-all transform group-hover:scale-110 group-hover:-rotate-6 duration-500 shadow-[0_20px_40px_-15px_rgba(0,113,186,0.15)]">
                              <amenity.icon size={32} strokeWidth={2.5} className="text-primary group-hover:text-white transition-colors duration-300" />
                           </div>
                           {/* Brand Tag */}
                           <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-xl flex items-center justify-center text-[11px] font-black text-white shadow-lg transform translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                             {i + 1}
                           </div>
                        </div>
                        <div className="text-center space-y-2">
                           <h4 className="text-sm font-black text-primary uppercase tracking-tight group-hover:text-secondary transition-colors duration-300">{amenity.label}</h4>
                           <div className="h-0.5 w-4 bg-slate-100 mx-auto group-hover:w-16 group-hover:bg-secondary transition-all duration-500 rounded-full" />
                        </div>
                     </motion.div>
                   ))}
                 </div>
                 
                 <div className="pt-8 flex justify-center relative z-10">
                    <button className="bg-primary text-white px-10 py-5 rounded-2xl text-[12px] font-black uppercase tracking-[0.2em] transform hover:scale-105 active:scale-95 transition-all flex items-center gap-4 shadow-[0_25px_50px_-12px_rgba(0,113,186,0.4)] group">
                       <span>Explore Amenities Directory</span>
                       <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center group-hover:translate-x-1 transition-transform">
                         <ArrowRight size={14} strokeWidth={3} />
                       </div>
                    </button>
                 </div>
              </section>

              {/* Premium Floor Plans Section - Redesigned for Maximum Impact */}
              <section id="floor-plans" className="space-y-10">
                <div className="bg-white rounded-[3rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] overflow-hidden relative">
                  {/* Decorative background accent */}
                  <div className="absolute top-0 right-0 w-1/2 h-40 bg-gradient-to-l from-slate-50/50 to-transparent pointer-events-none" />
                  
                  {/* Header Area */}
                  <div className="p-8 md:p-14 pb-0 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-6 bg-secondary rounded-full" />
                          <h3 className="text-2xl font-black text-primary uppercase tracking-tighter">
                            {project.title} <span className="text-slate-400 font-medium">Floor Plans</span>
                          </h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {['2 BHK', '3 BHK', '4 BHK', 'Retail Shop'].map(tab => (
                            <button 
                              key={tab} 
                              onClick={() => {
                                if (tab !== 'Retail Shop') setActiveTab(tab);
                              }}
                              className={`px-7 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all border ${
                                activeTab === tab || (tab === '3 BHK' && activeTab === '3 BHK') // Simplified logic for demo
                                  ? activeTab === tab ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20' : 'bg-white text-slate-400 border-slate-100'
                                  : tab === 'Retail Shop' ? 'bg-slate-50 text-slate-300 border-slate-100 opacity-50 cursor-not-allowed' : 'bg-white text-slate-400 border-slate-100 hover:border-slate-200 active:scale-95'
                              }`}
                            >
                              {tab}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="bg-slate-50 border border-slate-100 rounded-2xl px-8 py-4 text-right">
                        <div className="flex flex-col">
                          <span className="text-2xl font-black text-primary tracking-tighter">
                            {activeTab === '2 BHK' ? '785' : activeTab === '3 BHK' ? '1240' : '1850'} <span className="text-[10px] uppercase text-slate-400 font-extrabold ml-1">SQ.FT</span>
                          </span>
                          <span className="text-sm font-bold text-secondary uppercase tracking-widest">
                            ₹ {activeTab === '2 BHK' ? '1.2' : activeTab === '3 BHK' ? '2.1' : '3.8'} Cr*
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image & Controls Area */}
                  <div className="px-8 md:px-14 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                      <div className="lg:col-span-9 relative group/floorplan">
                         <div className="bg-[#f8faff] rounded-[2.5rem] p-6 md:p-16 flex items-center justify-center min-h-[450px] border border-slate-50 shadow-inner relative overflow-hidden">
                           {/* Zoom Hints */}
                           <div className="absolute top-6 left-6 z-20 flex flex-col gap-2 opacity-0 group-hover/floorplan:opacity-100 transition-all">
                              <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm flex items-center gap-2">
                                <Move size={12} className="text-secondary" />
                                <span className="text-[8px] font-black uppercase tracking-widest text-primary">Pan & Zoom Active</span>
                              </div>
                           </div>

                           <TransformWrapper
                             initialScale={1}
                             minScale={0.5}
                             centerOnInit
                           >
                             <TransformComponent wrapperClass="!w-full !h-full">
                                <motion.div
                                  key={activeTab}
                                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
                                  className="relative flex items-center justify-center w-full"
                                >
                                  <img 
                                    src={activeTab === '2 BHK' 
                                      ? "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop"
                                      : activeTab === '3 BHK'
                                        ? "https://images.unsplash.com/photo-1628592102751-ba83b03bc67e?q=80&w=1200&auto=format&fit=crop"
                                        : "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1200&auto=format&fit=crop"
                                    } 
                                    className="max-w-full max-h-[550px] object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.15)] transition-transform duration-700" 
                                    alt={`Luxury ${activeTab} Isometric Plan`}
                                    referrerPolicy="no-referrer"
                                  />
                                  <div className="absolute inset-0 pointer-events-none">
                                    {HOTSPOTS[activeTab]?.map((hotspot) => (
                                      <div key={hotspot.id} className="pointer-events-auto">
                                        <Hotspot {...hotspot} />
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                             </TransformComponent>
                           </TransformWrapper>
                         </div>
                      </div>

                      {/* Side Actions Column */}
                      <div className="lg:col-span-3 space-y-4">
                         <div className="p-1 whitespace-nowrap bg-slate-100/50 rounded-2xl border border-slate-100">
                           <button className="w-full bg-white border border-slate-200/50 rounded-xl px-5 py-4 flex items-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Maximize2 size={18} />
                              </div>
                              <div className="text-left">
                                <span className="block text-[11px] font-black uppercase tracking-widest text-primary">2D View</span>
                                <span className="block text-[8px] font-bold text-slate-400 uppercase">Classic Ortho</span>
                              </div>
                           </button>
                         </div>
                         
                         <div className="p-1 whitespace-nowrap bg-slate-100/50 rounded-2xl border border-slate-100">
                           <button className="w-full bg-white border border-slate-200/50 rounded-xl px-5 py-4 flex items-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                                <Sparkles size={18} />
                              </div>
                              <div className="text-left">
                                <span className="block text-[11px] font-black uppercase tracking-widest text-primary">Virtual Tour</span>
                                <span className="block text-[8px] font-bold text-slate-400 uppercase">360° Vision</span>
                              </div>
                           </button>
                         </div>

                         <div className="pt-6">
                            <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-6 text-white overflow-hidden relative">
                               <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 blur-2xl" />
                               <ArrowRight size={40} className="absolute -bottom-2 -right-2 text-white/10" />
                               <p className="text-[9px] font-black uppercase tracking-widest text-white/60 mb-2">Exclusive Offer</p>
                               <p className="text-sm font-bold leading-tight">Book before weekend and get <span className="text-secondary font-black">20% Off</span> on modular kitchen.</p>
                            </div>
                         </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>


              {/* Location & Connectivity Section */}
              <section id="location" className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-primary rounded-full" />
                  <h3 className="text-2xl md:text-3xl font-headline font-black text-primary tracking-tight">Location & Connectivity</h3>
                </div>
                
                <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    {/* Information Side */}
                    <div className="p-8 md:p-12 space-y-10">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                          <Navigation size={20} className="text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xl font-black text-primary tracking-tight">Strategic Location</h4>
                          <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                            Located in the heart of {project.loc.split(',')[0]}, offering seamless connectivity to major business hubs.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {[
                          { label: "Metro Station", time: "5 Mins" },
                          { label: "International Airport", time: "20 Mins" },
                          { label: "City Center", time: "10 Mins" },
                          { label: "Business Park", time: "8 Mins" }
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between items-center group cursor-default border-b border-slate-50 pb-4 last:border-0">
                            <span className="text-slate-600 font-bold text-sm group-hover:text-primary transition-colors">{item.label}</span>
                            <span className="text-primary font-black text-sm">{item.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Map Side */}
                    <div className="p-4 md:p-8 md:pl-0">
                      <div className="relative aspect-square md:aspect-auto md:h-full rounded-[2rem] overflow-hidden border-2 border-slate-50 shadow-inner group">
                        <img 
                          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop" 
                          className="w-full h-full object-cover grayscale opacity-50 contrast-125" 
                          alt="Neighborhood Map"
                        />
                        {/* Mock Markers */}
                        <div className="absolute inset-0 bg-[#0a1e3b]/5" />
                        <div className="absolute top-[20%] left-[30%] -translate-x-1/2 -translate-y-1/2">
                          <div className="relative group/pin">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-[8px] font-black uppercase whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity">Metro Station</div>
                            <MapPin size={28} className="text-primary fill-primary/20" />
                          </div>
                        </div>
                        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                           <MapPin size={28} className="text-primary fill-primary/20" />
                        </div>
                        <div className="absolute top-[70%] left-[40%] -translate-x-1/2 -translate-y-1/2">
                           <MapPin size={28} className="text-primary fill-primary/20" />
                        </div>
                        <div className="absolute top-[60%] left-[80%] -translate-x-1/2 -translate-y-1/2">
                           <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1.1 }}
                              transition={{ duration: 0.8, type: "spring" }}
                              className="relative"
                           >
                              {/* Pulse Effect */}
                              <motion.div 
                                 animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                                 transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                 className="absolute inset-0 bg-secondary rounded-full -m-2"
                              />
                              <div className="w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center border border-slate-100 relative z-10">
                                 <MapPin size={24} className="text-secondary fill-secondary/20" />
                              </div>
                              <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-secondary text-white text-[7px] font-black uppercase px-2 py-1 rounded-sm shadow-lg whitespace-nowrap">Your Location</div>
                           </motion.div>
                        </div>
                        
                        {/* Zoom Controls Mock */}
                        <div className="absolute top-4 left-4 flex flex-col items-center bg-white/90 backdrop-blur-md rounded-lg border border-slate-200 overflow-hidden shadow-lg">
                           <button className="w-8 h-8 flex items-center justify-center text-slate-600 font-bold hover:bg-slate-100 transition-colors border-b border-slate-100"><Plus size={14} /></button>
                           <button className="w-8 h-8 flex items-center justify-center text-slate-600 font-bold hover:bg-slate-100 transition-colors"><Minus size={14} /></button>
                        </div>

                        <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded text-[8px] font-bold text-slate-400">
                           Leaflet | © OpenStreetMap
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Private Advisory Desk - Refined Compact Lead Module */}
                <div className="bg-[#081b35] rounded-[2.5rem] p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] relative overflow-hidden border border-white/10">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 blur-[60px] pointer-events-none" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-3 py-1 rounded-lg border border-white/20">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse shadow-[0_0_8px_rgba(237,28,36,0.6)]" />
                        <span className="text-[7px] font-black uppercase tracking-[0.4em] text-white">Advisory Active</span>
                      </div>
                      <h3 className="text-2xl font-headline font-black text-white tracking-widest leading-none uppercase">
                        Private <br /><span className="text-secondary italic text-xl">Concierge</span>
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                       <Award size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <p className="text-white/60 text-[9px] font-black uppercase tracking-widest leading-none">Commitment to Excellence</p>
                    <p className="text-white/40 text-[9px] font-medium leading-relaxed">Direct pipeline to high-value inventory. Connect with a senior property advisor.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group relative">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <Users size={14} strokeWidth={2.5} className="text-white/30 group-focus-within:text-white transition-colors" />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Investor Name" 
                        className="w-full bg-white/10 border border-white/10 rounded-xl py-4 pl-12 pr-5 text-[13px] font-black text-white placeholder:text-white/30 focus:bg-white/20 focus:border-white/40 outline-none transition-all shadow-inner" 
                      />
                    </div>

                    <div className="flex gap-3">
                      <div className="w-16 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center text-[10px] font-black text-white">+91</div>
                      <div className="group relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                          <Phone size={14} strokeWidth={2.5} className="text-white/30 group-focus-within:text-white transition-colors" />
                        </div>
                        <input 
                          type="tel" 
                          placeholder="Contact Number" 
                          className="w-full bg-white/10 border border-white/10 rounded-xl py-4 pl-12 pr-5 text-[13px] font-black text-white placeholder:text-white/30 focus:bg-white/20 focus:border-white/40 outline-none transition-all shadow-inner" 
                        />
                      </div>
                    </div>

                    <div className="group relative">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <Sparkles size={14} strokeWidth={2.5} className="text-white/30 group-focus-within:text-white transition-colors" />
                      </div>
                      <select className="w-full bg-white/10 border border-white/10 rounded-xl py-4 pl-12 pr-10 text-[11px] font-black text-white/50 focus:bg-white/20 focus:border-white/40 outline-none transition-all appearance-none cursor-pointer shadow-inner">
                        <option className="bg-primary text-xs">Priority Unit: {project.bhk}</option>
                        <option className="bg-primary text-xs">Investors Package</option>
                        <option className="bg-primary text-xs">Luxury Floor Selection</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none text-white/30">
                        <ChevronDown size={12} strokeWidth={3} />
                      </div>
                    </div>
                    
                    <button className="w-full bg-secondary hover:bg-white text-white hover:text-primary py-4.5 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(237,28,36,0.4)] transition-all active:scale-95 group overflow-hidden relative border-2 border-secondary">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Express Interest <ArrowRight size={16} strokeWidth={3} className="group-hover:translate-x-1.5 transition-transform" />
                      </span>
                    </button>

                    <div className="flex items-center gap-3 pt-1">
                       <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-black py-3 rounded-lg text-[8px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg">
                         <Download size={12} strokeWidth={3} /> Prospectus
                       </button>
                       <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-black py-3 rounded-lg text-[8px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg">
                         <Calendar size={12} strokeWidth={3} /> Site Visit
                       </button>
                    </div>
                  </div>
                </div>
              </div>

                {/* Market Appreciation Widget */}
                <div className="p-10 bg-gradient-to-br from-blue-50 to-white rounded-[2.5rem] border border-blue-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                       <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest animate-pulse">ROI Monitor</span>
                    </div>
                    <div className="space-y-6">
                       <div className="space-y-1">
                          <h4 className="text-[10px] font-black text-[#0a1e3b] uppercase tracking-widest leading-none">Corridor Growth</h4>
                          <p className="text-[9px] font-bold text-slate-400">Historical 12-month data</p>
                       </div>
                       <div className="flex items-baseline gap-3">
                          <p className="text-4xl font-black text-[#0a1e3b] tracking-tighter">+12.5%</p>
                          <p className="text-[11px] font-black text-emerald-600 uppercase">Projection</p>
                       </div>
                       <div className="relative h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '85%' }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-secondary"
                          />
                       </div>
                       <p className="text-[10px] font-bold text-slate-400 leading-tight">This asset is outperforming the regional benchmark by 4.2% annually.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Similar Projects Carousel-like Grid */}
      <section className="bg-[#051124] pt-12 pb-16 relative overflow-hidden">
         {/* Subtle background decoration */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(237,28,36,0.1),transparent)] pointer-events-none" />
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
               <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="h-0.5 w-8 bg-secondary" />
                    <span className="text-secondary font-black text-[10px] uppercase tracking-[0.4em]">Intelligence Pick</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-headline font-black text-white uppercase tracking-tighter">Recommended <span className="text-secondary italic">Projects</span></h3>
               </div>
               <Link to="/projects" className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-[9px] font-black text-white uppercase tracking-widest hover:bg-secondary hover:border-secondary transition-all flex items-center gap-3 group shrink-0">
                  Explore Full Portfolio <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {similarProjects.map((p, i) => (
                 <ProjectCard key={p.id} property={p} index={i} />
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};
