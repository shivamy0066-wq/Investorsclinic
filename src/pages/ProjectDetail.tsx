import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  MapPin, Home, PencilRuler, Share2, Heart, 
  ChevronLeft, ChevronRight, Phone, Mail, 
  ShieldCheck, Star, Users, ArrowRight, Loader2,
  Sparkles
} from "lucide-react";
import { PROPERTIES } from "../constants";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { generatePropertyImages } from "../services/aiService";

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [loadingImages, setLoadingImages] = useState(false);
  const [aiImages, setAiImages] = useState<string[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = PROPERTIES.find(p => p.id === id);

  useEffect(() => {
    if (project && aiImages.length === 0) {
      const fetchImages = async () => {
        setLoadingImages(true);
        const images = await generatePropertyImages(project.description);
        setAiImages(images);
        setLoadingImages(false);
      };
      fetchImages();
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <h2 className="text-2xl font-black text-primary mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-secondary font-bold hover:underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  const allImages = [project.img, ...aiImages];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumbs & Back */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link to="/projects" className="flex items-center gap-2 text-slate-400 hover:text-secondary font-black text-[10px] uppercase tracking-widest transition-colors">
              <ChevronLeft size={14} /> Back to Listings
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column: Media Gallery */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 space-y-8"
            >
              <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden bg-slate-100 shadow-2xl group">
                <img 
                  src={allImages[activeImageIndex]} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {allImages.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all hover:bg-secondary hover:text-white"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all hover:bg-secondary hover:text-white"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                <div className="absolute top-8 left-8 flex gap-3">
                  <span className={`${project.tagColor} text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                    {project.tag}
                  </span>
                  {activeImageIndex > 0 && (
                    <span className="bg-secondary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2">
                       <Sparkles size={12} /> AI Visualized
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnails & AI Generator Status */}
              <motion.div 
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="flex gap-4 overflow-x-auto pb-4 no-scrollbar"
              >
                {allImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`shrink-0 w-32 aspect-square rounded-2xl overflow-hidden border-2 transition-all ${activeImageIndex === idx ? 'border-secondary scale-105' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
                
                {loadingImages && (
                  <div className="shrink-0 w-32 aspect-square rounded-2xl bg-white border border-slate-100 flex flex-col items-center justify-center gap-2 text-[#0a1e3b] shadow-sm italic">
                    <Loader2 size={24} className="animate-spin text-secondary" />
                    <span className="text-[10px] font-black uppercase tracking-tighter">AI Designing...</span>
                  </div>
                )}
              </motion.div>

              {/* AI Enhancement Section */}
              <motion.div 
                {...fadeInUp}
                transition={{ delay: 0.4 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden"
              >
                <div className="absolute -right-20 -top-20 opacity-[0.03] pointer-events-none">
                  <Sparkles size={256} className="text-secondary" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles size={20} className="text-secondary" />
                    <span className="text-xs font-black text-secondary uppercase tracking-[0.3em]">AI Virtual Staging</span>
                  </div>
                  <h3 className="text-2xl font-headline font-black text-primary mb-4 leading-tight">Visualizing Luxury Before it Exists.</h3>
                  <p className="text-slate-500 font-medium leading-relaxed max-w-2xl mb-8">
                    We use state-of-the-art Generative AI to visualize how this property will look in different settings and lighting. Our AI models analyze the architect's description to create high-fidelity renders of living spaces and exteriors.
                  </p>
                  <button 
                    onClick={() => setAiImages([])} // Trigger refetch
                    disabled={loadingImages}
                    className="flex items-center gap-2 text-secondary font-black text-[10px] uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Regenerate Visuals <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Key info & Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 space-y-8"
            >
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-primary/5">
                <div className="mb-8">
                  <h1 className="text-3xl font-headline font-black text-primary mb-2">{project.title}</h1>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                    <MapPin className="w-4 h-4 text-secondary" />
                    {project.loc}
                  </div>
                </div>

                <div className="flex items-end gap-3 mb-10 pb-8 border-b border-slate-100">
                  <span className="text-3xl font-headline font-black text-primary">{project.price.split(' ')[0]}</span>
                  <span className="text-slate-400 font-bold text-xs pb-1.5 uppercase tracking-widest">Onwards</span>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 group hover:bg-white hover:border-secondary transition-all">
                    <Home className="w-6 h-6 text-secondary mb-4" />
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Configuration</p>
                    <p className="text-sm font-black text-primary">{project.bhk}</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 group hover:bg-white hover:border-secondary transition-all">
                    <PencilRuler className="w-6 h-6 text-secondary mb-4" />
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Area Range</p>
                    <p className="text-sm font-black text-primary">{project.sqft}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-primary text-white py-5 rounded-2xl font-headline font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-[#0c2a55] transition-all flex items-center justify-center gap-3">
                    Download Brochure
                  </button>
                  <button className="w-full border-2 border-slate-100 text-primary py-5 rounded-2xl font-headline font-black text-sm uppercase tracking-widest hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-3">
                    Speak with Expert
                  </button>
                </div>
              </div>

              {/* Contact Lead Form */}
              <div className="bg-[#0a1e3b] p-10 rounded-[3rem] text-white overflow-hidden relative">
                <div className="absolute -right-10 -bottom-10 opacity-10">
                   <Phone size={120} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-headline font-black mb-6 uppercase tracking-tight">Express Interest</h4>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:ring-1 focus:ring-secondary focus:bg-white/10 outline-none transition-all"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:ring-1 focus:ring-secondary focus:bg-white/10 outline-none transition-all"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:ring-1 focus:ring-secondary focus:bg-white/10 outline-none transition-all"
                    />
                    <button className="w-full bg-secondary text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-secondary/20 hover:brightness-110 transition-all mt-4">
                      Submit Query
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Detailed Project Description Section */}
          <motion.div 
            {...fadeInUp}
            className="mt-20"
          >
             <div className="flex items-center gap-4 mb-10">
                <h2 className="text-3xl font-headline font-black text-primary">About <span className="text-primary italic">this</span> Project</h2>
                <div className="h-[1px] flex-1 bg-slate-100" />
             </div>
             <div className="grid md:grid-cols-2 gap-16">
               <div className="prose max-w-none">
                 <p className="text-slate-600 text-lg leading-relaxed font-medium">
                   {project.description}
                 </p>
                 <br />
                 <p className="text-slate-500 font-medium">
                   This development represents a new standard in architectural excellence, combining functional design with high-concept luxury. Every element has been curated to provide residents with an unparalleled living experience, from the expansive open spaces to the meticulously crafted interiors.
                 </p>
               </div>
               <div className="grid grid-cols-2 gap-8">
                 {[
                   { icon: ShieldCheck, title: "RERA Approved", desc: "FULLY COMPLIANT" },
                   { icon: Star, title: "Elite Amenities", desc: "PRIVATE CLUBS" },
                   { icon: Users, title: "Gated Comm.", desc: "24/7 SECURITY" },
                   { icon: MapPin, title: "Prime Loc.", desc: "HIGH CONNECTIVITY" }
                 ].map((feat, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                       <feat.icon size={20} className="text-secondary" />
                     </div>
                     <div>
                       <p className="text-slate-900 font-black text-sm mb-1">{feat.title}</p>
                       <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{feat.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </motion.div>

          {/* Amenities Section */}
          <motion.div 
            {...fadeInUp}
            className="mt-20 bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-12">
               <h2 className="text-3xl font-headline font-black text-primary">Lifestyle <span className="text-primary italic">Amenities</span></h2>
               <div className="h-[1px] flex-1 bg-slate-100" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
               {[
                 { label: "Infinity Pool" },
                 { label: "Luxury Gym" },
                 { label: "Spacious Clubhouse" },
                 { label: "Jogging Track" },
                 { label: "Kids Zone" },
                 { label: "24/7 Security" },
                 { label: "Solar Energy" },
                 { label: "Yoga Deck" },
                 { label: "EV Charging" },
                 { label: "Smart Home" },
                 { label: "Ample Parking" },
                 { label: "Garden" },
               ].map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center gap-3 text-center group cursor-default">
                   <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                     <Sparkles size={24} />
                   </div>
                   <span className="text-[11px] font-black uppercase tracking-tight text-[#0a1e3b]">{item.label}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Floor Plans Section */}
          <motion.div 
            {...fadeInUp}
            className="mt-20"
          >
            <div className="flex items-center gap-4 mb-12">
               <h2 className="text-3xl font-headline font-black text-primary">Master <span className="text-primary italic">Floor Plans</span></h2>
               <div className="h-[1px] flex-1 bg-slate-100" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { bhk: "2 BHK Elite", size: "1250 SQ.FT", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=400&h=400&auto=format&fit=crop" },
                 { bhk: "3 BHK Grand", size: "1850 SQ.FT", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&h=400&auto=format&fit=crop" },
                 { bhk: "4 BHK Royal", size: "2450 SQ.FT", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&h=400&auto=format&fit=crop" },
               ].map((plan, i) => (
                 <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                   <div className="aspect-square rounded-3xl overflow-hidden mb-6 bg-slate-50 border border-slate-100">
                     <img src={plan.img} alt={plan.bhk} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                   </div>
                   <h4 className="text-lg font-black text-primary mb-1">{plan.bhk}</h4>
                   <div className="flex items-center justify-between">
                     <span className="text-xs font-bold text-slate-400">{plan.size}</span>
                     <button className="text-secondary font-black text-[10px] uppercase tracking-widest flex items-center gap-1">
                       Enlarge <ChevronRight size={14} />
                     </button>
                   </div>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Construction Quality Section */}
          <motion.div 
            {...fadeInUp}
            className="mt-20 bg-[#0a1e3b] p-16 rounded-[4rem] text-white overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
               <svg width="100%" height="100%">
                 <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                   <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                 </pattern>
                 <rect width="100%" height="100%" fill="url(#archGrid)" />
               </svg>
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
               <div>
                 <span className="text-secondary font-black text-xs uppercase tracking-[0.4em] mb-4 block">Institutional Standards</span>
                 <h2 className="text-4xl font-headline font-black mb-8 leading-tight">Ucompromising <span className="text-secondary italic">Construction</span> Quality</h2>
                 <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary">
                         <ArrowRight size={16} />
                      </div>
                      <div className="text-slate-300 font-medium leading-relaxed">
                        <strong className="text-white block mb-1">Seismic Resistance</strong>
                        Engineered to withstand zone IV seismic activity with high-grade RCC framed structures.
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary">
                         <ArrowRight size={16} />
                      </div>
                      <div className="text-slate-300 font-medium leading-relaxed">
                        <strong className="text-white block mb-1">Premium Finishes</strong>
                        Imported Italian marble flooring in living areas and anti-skid premium porcelain tiles in wet areas.
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary">
                         <ArrowRight size={16} />
                      </div>
                      <div className="text-slate-300 font-medium leading-relaxed">
                        <strong className="text-white block mb-1">Thermal Insulation</strong>
                        Advanced wall insulation and UPVC windows for superior acoustics and energy efficiency.
                      </div>
                   </div>
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-6">
                  <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-all">
                     <span className="text-4xl font-headline font-black text-secondary">M40</span>
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Concrete Grade</span>
                  </div>
                  <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-all">
                     <span className="text-4xl font-headline font-black text-secondary">50+</span>
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Quality Checks</span>
                  </div>
                  <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-all">
                     <span className="text-4xl font-headline font-black text-secondary">3rd</span>
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Party Audits</span>
                  </div>
                  <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-all">
                     <span className="text-4xl font-headline font-black text-secondary">A1</span>
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Material Grade</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
