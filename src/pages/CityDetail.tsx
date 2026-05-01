import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';
import { PROPERTIES, CITIES } from '../constants';
import { MapPin, Globe, ChevronRight, TowerControl as Control, Building2, Search } from 'lucide-react';

const CITY_METRICS: Record<string, any> = {
  'noida': {
    growth: "+14.2%",
    inventory: "450+",
    highlights: ["Jewar Airport Proximity", "Data Center Hub", "Aqua Line Extension", "FNG Expressway"],
    analysis: "Noida is witnessing a massive transition from a manufacturing hub to a tech-first smart city. The upcoming Jewar Airport is the primary tailwind, expected to drive a 25% CAGR in capital values over the next 4 years.",
    infrastructure: [
      { project: "Noida International Airport", impact: "High", timeline: "2024 Phase 1" },
      { project: "Film City Sector 21", impact: "Medium", timeline: "Proposed" },
      { project: "Multi-Modal Transport Hub", impact: "High", timeline: "Under Construction" }
    ]
  },
  'gurugram': {
    growth: "+18.5%",
    inventory: "380+",
    highlights: ["Global City Project", "Dwarka Expressway", "Cyber Hub 2.0", "Luxury Corridor"],
    analysis: "Gurugram remains the crown jewel of NCR investment. The completion of the Dwarka Expressway has unlocked luxury inventories previously held back, creating a high-absorption environment for ticket sizes >5Cr.",
    infrastructure: [
      { project: "Dwarka Expressway", impact: "Viral", timeline: "Operational" },
      { project: "Global City 1000 Acres", impact: "High", timeline: "Pre-execution" },
      { project: "Rapid Rail Transit System", impact: "High", timeline: "Ongoing" }
    ]
  },
  'pune': {
    growth: "+9.8%",
    inventory: "290+",
    highlights: ["IT/ITeS Expansion", "Hinjewadi Metro", "New Airport Proposal", "Ring Road"],
    analysis: "Pune offers the best balance between rental yields and lifestyle quotient. With the IT core expanding towards the periphery, East Pune (Wagholi/Kharadi) is seeing significant investor traction.",
    infrastructure: [
      { project: "Pune Metro Line 3", impact: "High", timeline: "2025" },
      { project: "Purandar Airport", impact: "Medium", timeline: "Planning" }
    ]
  }
};

export const CityDetail = () => {
  const { slug } = useParams();
  
  const cityInfo = useMemo(() => {
    const id = slug?.toLowerCase() || '';
    return CITY_METRICS[id] || {
      growth: "+7.5%",
      inventory: "100+",
      highlights: ["Strategic Growth", "connectivity Hub", "Emerging Market"],
      analysis: "This region is currently under our primary surveillance for institutional-grade safety. Initial indicators show strong demand-supply equilibrium.",
      infrastructure: [
        { project: "Smart City Infrastructure", impact: "Medium", timeline: "Ongoing" }
      ]
    };
  }, [slug]);

  // Find the city display name from slug
  const cityName = useMemo(() => {
    if (!slug) return '';
    // Normalize slug to match city case or handle dash-to-space
    const normalized = slug.replace(/-/g, ' ');
    return CITIES.find(c => c.toLowerCase() === normalized.toLowerCase()) || normalized;
  }, [slug]);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(p => p.city.toLowerCase() === cityName.toLowerCase());
  }, [cityName]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* City Specific Hero */}
        <section className="pt-40 pb-20 md:pb-32 bg-[#0a1e3b] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
              <div className="max-w-3xl">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <MapPin className="text-secondary w-6 h-6" />
                  <span className="text-secondary font-black tracking-[0.6em] uppercase text-[11px]">Region Masterplan</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-9xl font-headline font-black mb-8 leading-[0.9] tracking-tighter uppercase"
                >
                  {cityName} <br />
                  <span className="text-secondary italic">Intelligence.</span>
                </motion.h1>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-4 md:gap-8 bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] min-w-full lg:min-w-[450px]"
              >
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Annual Growth</p>
                   <p className="text-4xl font-black text-secondary">{cityInfo.growth}</p>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Active Assets</p>
                   <p className="text-4xl font-black text-white">{cityInfo.inventory}</p>
                </div>
                <div className="col-span-2 pt-6 border-t border-white/10">
                   <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Key Connectivity</p>
                   <div className="flex flex-wrap gap-2">
                      {cityInfo.highlights.map((h: string, idx: number) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold uppercase">{h}</span>
                      ))}
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intelligence Grid */}
        <section className="py-20 bg-slate-50 relative">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-12">
                 {/* Market Analysis */}
                 <motion.div {...fadeInUp} className="lg:col-span-7 bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl shadow-primary/5">
                    <div className="flex items-center gap-4 mb-8">
                       <Control className="text-secondary w-6 h-6" />
                       <h3 className="text-2xl font-black text-[#0a1e3b] uppercase tracking-tight">Market Analysis Summary</h3>
                    </div>
                    <p className="text-slate-500 text-lg md:text-xl font-medium leading-[1.8] opacity-80 mb-10">
                       {cityInfo.analysis}
                    </p>
                    <div className="grid sm:grid-cols-3 gap-6">
                       <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Demand Curve</p>
                          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                             <div className="h-full bg-emerald-500 w-[85%]" />
                          </div>
                       </div>
                       <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Inventory Risk</p>
                          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                             <div className="h-full bg-blue-500 w-[20%]" />
                          </div>
                       </div>
                       <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">ROI Probability</p>
                          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                             <div className="h-full bg-secondary w-[92%]" />
                          </div>
                       </div>
                    </div>
                 </motion.div>

                 {/* Infrastructure Projects */}
                 <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="lg:col-span-5 bg-[#0a1e3b] p-12 rounded-[4rem] text-white">
                    <div className="flex items-center gap-4 mb-10">
                       <Building2 className="text-secondary w-6 h-6" />
                       <h3 className="text-2xl font-black uppercase tracking-tight">Capital Infusion</h3>
                    </div>
                    <div className="space-y-8">
                       {cityInfo.infrastructure.map((proj: any, idx: number) => (
                         <div key={idx} className="flex items-start justify-between border-b border-white/10 pb-6 last:border-0">
                            <div>
                               <h4 className="font-bold text-lg mb-1">{proj.project}</h4>
                               <p className="text-white/40 text-xs font-black uppercase tracking-widest">Timeline: {proj.timeline}</p>
                            </div>
                            <div className="text-right">
                               <span className="text-[10px] font-black px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full">
                                  {proj.impact} Impact
                               </span>
                            </div>
                         </div>
                       ))}
                    </div>
                    <button className="w-full mt-10 bg-white/10 hover:bg-white/20 border border-white/20 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all">
                       <Globe size={16} /> Access Full Masterplan
                    </button>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Listing Bar Sticky */}
        <div className="bg-white border-b border-slate-100 shadow-sm sticky top-0 z-[60]">
           <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
              <div className="flex items-center gap-6">
                 <Link to="/cities" className="group flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-secondary group-hover:text-white transition-all">
                       <ChevronRight className="rotate-180" size={18} />
                    </div>
                    <span className="text-xs font-black text-[#0a1e3b] uppercase tracking-widest hidden sm:inline">Back to Hub</span>
                 </Link>
                 <div className="w-px h-6 bg-slate-100" />
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Verified Assets in {cityName}</h4>
              </div>
              <button className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#0a1e3b] hover:bg-secondary hover:text-white transition-all">
                 <Search size={18} />
              </button>
           </div>
        </div>

        {/* Project Listing Grid */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProperties.map((prop, idx) => (
                  <ProjectCard key={prop.id} property={prop} index={idx} />
                ))}
              </div>
            ) : (
              <div className="py-32 text-center bg-white rounded-[4rem] border border-dashed border-slate-200">
                 <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building2 className="w-8 h-8 text-slate-300" />
                 </div>
                 <h3 className="text-2xl font-headline font-black text-[#0a1e3b] mb-4">Under Evaluation</h3>
                 <p className="text-slate-500 max-w-sm mx-auto font-medium leading-relaxed">
                    Our data panel is currently auditing new launches in {cityName} to ensure they meet our "Secure Investment" benchmark.
                 </p>
                 <Link to="/projects" className="mt-8 inline-block bg-secondary text-white px-8 py-4 rounded-2xl font-black text-[12px] uppercase tracking-widest shadow-xl shadow-secondary/20 hover:scale-105 transition-transform">
                    View All Locations
                 </Link>
              </div>
            )}
          </div>
        </section>

        {/* Global CTA */}
        <section className="pb-32 px-6">
           <div className="max-w-7xl mx-auto bg-[#0a1e3b] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(188,0,17,0.1),transparent_70%)]" />
              <div className="relative z-10 space-y-8">
                 <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tight">Need a customized <br /> <span className="text-secondary italic">Portfolio check?</span></h2>
                 <p className="text-white/50 text-xl max-w-2xl mx-auto font-medium">Talk to our local {cityName} experts for unbiased guidance on rental yields and exit strategies.</p>
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                    <button className="w-full sm:w-auto bg-secondary px-10 py-5 rounded-2xl font-black text-[13px] uppercase tracking-widest shadow-2xl shadow-secondary/20 hover:bg-red-700 transition-all active:scale-95">
                       Connect with Area Head
                    </button>
                    <button className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/20 px-10 py-5 rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
                       Download {cityName} Market Report
                    </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
