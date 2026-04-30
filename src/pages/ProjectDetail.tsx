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
  Leaf
} from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

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
                <div className="aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img src={project.img} className="w-full h-full object-cover" alt={project.title} />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
                      <ShieldCheck size={12} /> Verified Property
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="aspect-video rounded-2xl overflow-hidden cursor-pointer group border-2 border-transparent hover:border-secondary transition-all">
                      <div className="relative w-full h-full">
                        <img src={img} className="w-full h-full object-cover" />
                        {i === 3 && (
                          <div className="absolute inset-0 bg-[#0a1e3b]/80 flex items-center justify-center text-white font-black text-xs">+12 More</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Title & Key Stats */}
              <section className="space-y-8 bg-white p-6 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                  <div className="space-y-4 max-w-2xl">
                    <h1 className="text-3xl lg:text-5xl font-headline font-black text-primary tracking-tighter uppercase leading-[1.1]">
                      {project.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-1.5 text-slate-400 font-bold text-xs">
                        <MapPin size={16} className="text-secondary" />
                        {project.loc}
                      </div>
                      <div className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        RERA: {project.rera}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start lg:items-end gap-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Starting Life-Value</p>
                    <div className="flex flex-col items-start lg:items-end">
                      <div className="text-4xl lg:text-5xl font-headline font-black text-primary tracking-tighter leading-none">
                        {project.price.split(' ')[0]}
                      </div>
                      <span className="text-lg font-black text-secondary uppercase tracking-widest mt-1">{project.price.split(' ').slice(1).join(' ') || 'onwards'}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Configuration", val: project.bhk, icon: Home },
                    { label: "Carpet Area", val: project.sqft, icon: PencilRuler },
                    { label: "Possession", val: project.possession, icon: Calendar },
                    { label: "Amenities", val: "40+ Premium", icon: Sparkles }
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#fcfdff] p-5 rounded-[1.5rem] border border-slate-50 text-center space-y-3 hover:bg-white hover:shadow-xl transition-all duration-500 group cursor-default">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto transition-transform group-hover:scale-110 group-hover:rotate-6">
                        <stat.icon size={18} className="text-secondary" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none opacity-60">{stat.label}</p>
                        <p className="text-[13px] font-black text-primary tracking-tight">{stat.val}</p>
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

              {/* Amenities Grid */}
              <section id="amenities" className="bg-[#0a1e3b] p-8 md:p-12 rounded-[3rem] text-white space-y-12 relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full -mr-40 -mt-40 blur-3xl" />
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full -ml-32 -mb-32 blur-3xl" />
                 
                 <div className="text-center space-y-3 relative z-10">
                   <h3 className="text-2xl md:text-3xl font-headline font-black text-primary uppercase tracking-tighter leading-none">
                     World-Class <span className="text-secondary italic">Amenities</span>
                   </h3>
                   <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.3em]">Institutional Grade Facilities</p>
                 </div>

                 <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 relative z-10">
                   {project.amenities?.map((amenity, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="text-center group cursor-default"
                     >
                        <div className="relative mb-4">
                           <div className="absolute inset-0 bg-secondary/10 rounded-full scale-125 transition-all duration-700 blur-xl opacity-0 group-hover:opacity-100" />
                           <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto relative z-10 group-hover:bg-secondary group-hover:border-secondary transition-all transform group-hover:scale-110 duration-500 shadow-xl">
                              <amenity.icon size={22} strokeWidth={1.5} className="text-white group-hover:text-primary transition-colors" />
                           </div>
                        </div>
                        <h4 className="text-[8px] font-black text-white/40 uppercase tracking-[0.2em] group-hover:text-secondary transition-colors duration-300">{amenity.label}</h4>
                     </motion.div>
                   ))}
                 </div>
                 
                 <div className="pt-4 flex justify-center relative z-10">
                    <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-[8px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-white transition-all flex items-center gap-2">
                       View Catalog <ArrowRight size={10} className="text-secondary" />
                    </button>
                 </div>
              </section>

              {/* Floor Plans */}
              <section id="floor-plans" className="space-y-10">
                <div className="space-y-8">
                   <h3 className="text-3xl font-headline font-black text-primary uppercase tracking-tighter">Floor Plans</h3>
                   
                   <div className="flex border-b border-slate-100 max-w-full overflow-x-auto scrollbar-hide">
                    {['2 BHK', '3 BHK', '4 BHK'].map(tab => (
                      <button 
                        key={tab} 
                        onClick={() => setActiveTab(tab)}
                        className={`px-10 py-5 text-[14px] font-black uppercase tracking-[0.05em] transition-all relative shrink-0 ${activeTab === tab ? 'text-[#0a1e3b]' : 'text-slate-400 hover:text-slate-600'}`}
                      >
                        {tab}
                        {activeTab === tab && (
                          <motion.div 
                            layoutId="activeTabUnderline"
                            className="absolute bottom-0 left-0 right-0 h-1 bg-[#2b6fc6] rounded-t-full"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
 
                <div className="bg-white border border-slate-50 rounded-[1rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-500 overflow-hidden">
                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                     
                     {/* Image Column */}
                     <div className="lg:col-span-7 w-full">
                        <div className="bg-slate-50 rounded-xl p-4 md:p-8 relative group overflow-hidden border border-slate-100 shadow-inner">
                          <TransformWrapper
                            initialScale={1}
                            initialPositionX={0}
                            initialPositionY={0}
                            doubleClick={{ disabled: false }}
                            wheel={{ wheelDisabled: false }}
                            panning={{ velocityDisabled: false }}
                          >
                            {({ zoomIn, zoomOut, resetTransform }) => (
                              <div className="relative">
                                {/* Interactive Controls */}
                                <div className="absolute bottom-4 left-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button 
                                    onClick={() => zoomIn()}
                                    className="w-10 h-10 bg-white shadow-lg border border-slate-100 rounded-xl flex items-center justify-center text-[#0a1e3b] hover:bg-secondary hover:text-white transition-all"
                                    title="Zoom In"
                                  >
                                    <Plus size={18} />
                                  </button>
                                  <button 
                                    onClick={() => zoomOut()}
                                    className="w-10 h-10 bg-white shadow-lg border border-slate-100 rounded-xl flex items-center justify-center text-[#0a1e3b] hover:bg-secondary hover:text-white transition-all"
                                    title="Zoom Out"
                                  >
                                    <Minus size={18} />
                                  </button>
                                  <button 
                                    onClick={() => resetTransform()}
                                    className="w-10 h-10 bg-white shadow-lg border border-slate-100 rounded-xl flex items-center justify-center text-[#0a1e3b] hover:bg-secondary hover:text-white transition-all"
                                    title="Reset View"
                                  >
                                    <Maximize2 size={18} />
                                  </button>
                                </div>
 
                                <TransformComponent wrapperClass="!w-full !h-auto">
                                  <motion.img 
                                    key={activeTab}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop" 
                                    className="w-full h-auto drop-shadow-2xl cursor-grab active:cursor-grabbing rounded-lg" 
                                    alt="Detailed technical floor plan showing room layout and dimensions" 
                                    referrerPolicy="no-referrer"
                                  />
                                </TransformComponent>
                              </div>
                            )}
                          </TransformWrapper>
                        </div>
                     </div>
 
                     {/* Details Column */}
                     <div className="lg:col-span-5 space-y-10">
                        <div className="space-y-3">
                          <h4 className="text-3xl font-headline font-black text-primary tracking-tight">Premium {activeTab} Unit</h4>
                          <p className="text-slate-400 font-medium text-base leading-relaxed">
                            A perfect balance of space and utility for small families looking for premium comfort.
                          </p>
                        </div>
 
                        <div className="space-y-0 divide-y divide-slate-100">
                           {[
                             { label: "Carpet Area", val: activeTab === '2 BHK' ? '785 Sqft' : activeTab === '3 BHK' ? '1240 Sqft' : '1850 Sqft' },
                             { label: "Bedrooms", val: activeTab.split(' ')[0] + " Rooms" },
                             { label: "Bathrooms", val: activeTab === '2 BHK' ? '2 Bath' : activeTab === '3 BHK' ? '3 Bath' : '4 Bath' }
                           ].map((item, i) => (
                             <div key={i} className="flex justify-between items-center py-6">
                                <span className="text-slate-500 font-medium text-[15px]">{item.label}</span>
                                <span className="text-primary font-black text-[15px] tracking-tight">{item.val}</span>
                             </div>
                           ))}
                        </div>
 
                        <button className="w-full bg-primary hover:bg-[#005a96] text-white py-5 rounded-xl font-black text-[13px] uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/10 group">
                           <Download size={18} className="group-hover:-translate-y-1 transition-transform" /> Download Detailed Plan
                        </button>
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
                {/* Private Advisory Desk - Upgraded Lead Module */}
                <div className="bg-[#0a1e3b] rounded-[2.5rem] p-8 shadow-[0_40px_80px_-20px_rgba(10,30,59,0.4)] relative overflow-hidden border border-white/5">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full -ml-24 -mb-24 blur-3xl pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(43,111,198,0.05)_0,transparent_50%)]" />
                
                <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 bg-secondary/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-secondary/20">
                        <div className="w-1 h-1 bg-secondary rounded-full animate-ping" />
                        <span className="text-[6px] font-black uppercase tracking-[0.4em] text-secondary">Verified Advisory</span>
                      </div>
                      <h3 className="text-2xl font-headline font-black text-white tracking-widest leading-none uppercase">Private <br /><span className="text-secondary italic">Desk</span></h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary/30">
                       <Award size={24} strokeWidth={1} />
                    </div>
                  </div>
                  
                  <p className="text-white/40 text-[10px] font-medium leading-relaxed">Secured allocation for institutional Grade-A inventory. Connect with a senior wealth partner instantly.</p>
                  
                  <div className="space-y-4">
                    <div className="group relative">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <Users size={12} className="text-white/20 group-focus-within:text-secondary transition-colors" />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Investor Name" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-5 text-sm font-bold text-white placeholder:text-white/20 focus:bg-white/10 focus:border-secondary/30 outline-none transition-all" 
                      />
                    </div>

                    <div className="flex gap-3">
                      <div className="w-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[11px] font-black text-white/50">+91</div>
                      <div className="group relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                          <Phone size={12} className="text-white/20 group-focus-within:text-secondary transition-colors" />
                        </div>
                        <input 
                          type="tel" 
                          placeholder="Phone Number" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-5 text-sm font-bold text-white placeholder:text-white/20 focus:bg-white/10 focus:border-secondary/30 outline-none transition-all" 
                        />
                      </div>
                    </div>

                    <div className="group relative">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <Sparkles size={12} className="text-white/20 group-focus-within:text-secondary transition-colors" />
                      </div>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-10 text-[12px] font-bold text-white/50 focus:bg-white/10 focus:border-secondary/30 outline-none transition-all appearance-none cursor-pointer">
                        <option className="bg-[#0a1e3b]">Exclusive 3 BHK Lounge</option>
                        <option className="bg-[#0a1e3b]">Signature 4 BHK Suite</option>
                        <option className="bg-[#0a1e3b]">Imperial Penthouse</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none text-white/20">
                        <ChevronDown size={12} />
                      </div>
                    </div>
                    
                    <button className="w-full bg-secondary hover:bg-white text-[#0a1e3b] py-4.5 rounded-xl font-black text-[12px] uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(255,255,255,0.05)] transition-all active:scale-95 group overflow-hidden relative">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Secure My Slot <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>

                    <div className="flex items-center gap-3 pt-1">
                       <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/5 text-white/30 hover:text-white py-3.5 rounded-lg text-[8px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                         <Download size={12} /> Digital Catalog
                       </button>
                       <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/5 text-white/30 hover:text-white py-3.5 rounded-lg text-[8px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                         <Calendar size={12} /> Book Concierge
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
      <section className="bg-slate-50 pt-12 pb-20">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
               <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="h-0.5 w-10 bg-secondary" />
                    <span className="text-secondary font-black text-[12px] uppercase tracking-[0.4em]">Intelligence Pick</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-headline font-black text-primary uppercase tracking-tighter">Recommended <span className="text-secondary italic">Projects</span></h3>
               </div>
               <Link to="/projects" className="bg-white px-8 py-4 rounded-2xl text-[10px] font-black text-primary uppercase tracking-widest shadow-sm hover:bg-secondary hover:text-white transition-all flex items-center gap-4 border border-slate-100 group">
                  Explore Full Portfolio <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
