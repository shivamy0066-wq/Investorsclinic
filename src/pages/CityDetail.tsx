import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';
import { PROPERTIES, CITIES } from '../constants';
import { MapPin, Globe, ChevronRight, TowerControl as Control, Building2, Search, Map as MapIcon, TrendingUp, ChevronDown, Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-sm font-black text-primary uppercase tracking-tight group-hover:text-secondary transition-colors pr-8">
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-secondary text-white' : 'bg-slate-50 text-slate-400'}`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pb-6 text-slate-500 leading-relaxed font-medium text-[13px] max-w-4xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
    growth: "+11.5%",
    inventory: "380+",
    highlights: ["Global City Project", "Dwarka Expressway", "Cyber Hub 2.0", "Luxury Corridor"],
    analysis: "Gurugram remains the crown jewel of NCR investment. The completion of the Dwarka Expressway has unlocked luxury inventories previously held back, creating a high-absorption environment for ticket sizes >5Cr.",
    infrastructure: [
      { project: "Dwarka Expressway", impact: "Extreme", timeline: "Operational" },
      { project: "Global City 1000 Acres", impact: "High", timeline: "Pre-execution" },
      { project: "Rapid Rail Transit System", impact: "High", timeline: "Ongoing" }
    ]
  },
  'greater-noida-west': {
    growth: "+12.8%",
    inventory: "180+",
    highlights: ["Upcoming Metro Connect", "Knowledge Park Eco", "Modern Townships", "Affordable Luxury"],
    analysis: "Greater Noida West is the ultimate destination for mid-segment investors. With improved connectivity to Noida and Delhi, it offers high rental yields and consistent capital appreciation.",
    infrastructure: [
      { project: "Metro Expansion Line", impact: "High", timeline: "Approved" },
      { project: "Multi-level Parking Hub", impact: "Medium", timeline: "2025" }
    ]
  },
  'faridabad': {
    growth: "+9.2%",
    inventory: "120+",
    highlights: ["FNG Expressway", "Delhi Connectivity", "Industrial Growth", "Smart City Projects"],
    analysis: "Faridabad is evolving into a key residential hub, driven by industrial expansion and strategic connectivity to major NCR centers.",
    infrastructure: [
      { project: "FNG Expressway", impact: "High", timeline: "Ongoing" },
      { project: "Faridabad Metro Extension", impact: "High", timeline: "Planning" }
    ]
  },
  'jaipur': {
    growth: "+8.5%",
    inventory: "95+",
    highlights: ["Tourism Surge", "IT Corridor", "Ring Road Project", "Hospitality Boom"],
    analysis: "Jaipur offers a unique blend of heritage and modern growth, making it a hotspot for hospitality and lifestyle-centric investments.",
    infrastructure: [
      { project: "Ring Road Phase 2", impact: "Medium", timeline: "2024" },
      { project: "IT Park Extension", impact: "High", timeline: "Proposed" }
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
  const [isExpanded, setIsExpanded] = useState(false);
  
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
        {/* City Intelligence Hero - Premium Dark Edition */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-[#020617] text-white overflow-hidden">
          {/* Background Layer with Image & Minimal Overlays */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
              alt="City Architecture" 
              className="w-full h-full object-cover object-center opacity-40 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/10" />
            
            {/* Precision Grid Overlay - Subtle */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
              <div className="max-w-2xl">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="p-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-md">
                    <MapPin className="text-secondary w-4 h-4" />
                  </div>
                  <span className="text-white font-black tracking-[0.4em] uppercase text-[9px]">Investors Clinic Global Intelligence</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-headline font-black mb-6 leading-[0.9] tracking-tighter uppercase"
                >
                  {cityName} <br />
                  <span className="text-secondary italic">Estate.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/50 font-medium text-sm md:text-base max-w-lg leading-relaxed mb-8"
                >
                  Proprietary market analytics, supply-demand forecasting, and strategic infrastructure auditing for {cityName}'s premium real estate sector.
                </motion.p>

                  <div className="flex flex-wrap items-center gap-4">
                  <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Live Market Analysis</span>
                  </div>
                  <div className="px-5 py-2.5 bg-secondary text-white rounded-xl flex items-center gap-3 shadow-lg shadow-secondary/20">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Premium Assets</span>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-6 bg-white p-8 md:p-10 rounded-[3rem] min-w-full lg:min-w-[420px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] relative overflow-hidden group"
              >
                {/* Brand Accent */}
                <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
                
                <div className="relative z-10">
                   <p className="text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">Growth Forecast</p>
                   <p className="text-4xl font-black text-secondary">{cityInfo.growth}</p>
                </div>
                <div className="relative z-10">
                   <p className="text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">Portfolio Count</p>
                   <p className="text-4xl font-black text-slate-900">{cityInfo.inventory}</p>
                </div>
                <div className="col-span-2 pt-6 border-t border-slate-100 relative z-10">
                   <p className="text-[9px] font-black uppercase tracking-wider text-slate-400 mb-3">Alpha Investment Zones</p>
                   <div className="flex flex-wrap gap-2">
                      {cityInfo.highlights.map((h: string, idx: number) => (
                        <span key={idx} className="px-3 py-1 bg-slate-50 rounded-lg text-[8px] font-black uppercase text-slate-600 border border-slate-200">{h}</span>
                      ))}
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intelligence Grid */}
        <section className="py-12 bg-slate-50/50 relative">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-8">
                 {/* Market Analysis */}
                 <motion.div {...fadeInUp} className="lg:col-span-12 bg-white p-8 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
                    <div className="flex items-center gap-5 mb-10">
                       <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                          <Control className="text-slate-900 w-6 h-6" />
                       </div>
                       <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Executive Intelligence Report</h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16">
                      <div>
                        <p className="text-slate-600 text-lg font-medium leading-[1.8] mb-12">
                           {cityInfo.analysis}
                        </p>
                        <div className="grid sm:grid-cols-3 gap-6">
                           <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:bg-white hover:shadow-lg">
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 group-hover:text-secondary transition-colors">Investment Velocity</p>
                              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                 <div className="h-full bg-secondary w-[85%]" />
                              </div>
                           </div>
                           <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:bg-white hover:shadow-lg">
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 group-hover:text-slate-900 transition-colors">Market Liquidity</p>
                              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                 <div className="h-full bg-slate-900 w-[75%]" />
                              </div>
                           </div>
                           <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:bg-white hover:shadow-lg">
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 group-hover:text-secondary transition-colors">Yield Potential</p>
                              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                 <div className="h-full bg-secondary w-[92%]" />
                              </div>
                           </div>
                        </div>
                      </div>
                      <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-4">
                           <div className="w-1.5 h-6 bg-secondary rounded-full" />
                           <h3 className="text-xl font-black uppercase text-slate-900 tracking-tight">Strategic Infra Audit</h3>
                        </div>
                        <div className="grid gap-5">
                           {cityInfo.infrastructure.map((proj: any, idx: number) => (
                             <div key={idx} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-all cursor-default">
                                <div>
                                   <h4 className="font-black text-sm text-slate-900 uppercase tracking-tight">{proj.project}</h4>
                                   <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1">Timeline: {proj.timeline}</p>
                                </div>
                                <span className={`text-[9px] font-black px-3 py-1 rounded-full border ${proj.impact === 'High' || proj.impact === 'Extreme' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-200 text-slate-600 border-slate-300'}`}>
                                   {proj.impact} IMPACT
                                </span>
                             </div>
                           ))}
                        </div>
                      </div>
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Detailed City Information Content Section */}
        <section className="py-12 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <article className="relative">
                  <h2 className="text-2xl md:text-3xl font-headline font-black text-slate-950 uppercase tracking-tight mb-8 flex items-center gap-4">
                    Invest Intelligence: <span className="text-secondary italic">{cityName}</span>
                    <div className="h-px flex-1 bg-slate-100 hidden md:block" />
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Always visible first paragraph */}
                    <div className="relative">
                      <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900 first-letter:text-4xl first-letter:font-black first-letter:text-secondary first-letter:mr-3 first-letter:float-left">
                        {cityName} stands at the crossroads of major economic corridors. With its strategic positioning near primary business hubs and major expressways, it serves as a gateway for institutional capital. The seamless integration with regional rapid transit and multi-modal transport hubs ensures that residents and businesses enjoy world-class mobility.
                      </p>
                    </div>

                    <AnimatePresence>
                      {isExpanded ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="space-y-8 overflow-hidden"
                        >
                          <div className="grid md:grid-cols-2 gap-8 pt-4">
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                              <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                Residential Dynamics
                              </h3>
                              <p className="text-[13px] leading-relaxed text-slate-900 font-semibold">
                                The residential landscape is evolving from traditional housing to premium integrated townships. We are seeing a 15% year-on-year increase in demand for gated communities that offer smart features.
                              </p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                              <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                Commercial Ecosystem
                              </h3>
                              <p className="text-[13px] leading-relaxed text-slate-900 font-semibold">
                                Fuelled by industrial growth and IT services, {cityName} has become a magnet for MNCs. Availability of Grade-A office spaces sustains the high-quality residential demand.
                              </p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-secondary pl-4 py-1 bg-slate-50">Future Investment Outlook</h3>
                            <p className="text-sm leading-relaxed font-semibold text-slate-900">
                              Investors Clinic predicts that {cityName} will maintain a steady capital appreciation rate of 8-10% annually. The projected infrastructure projects, including greenfield airports and mega-tech parks, are expected to provide the next major spurt in property valuations.
                            </p>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="h-20 bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 w-full pointer-events-none" />
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mt-10 flex justify-center lg:justify-start">
                    <button 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="group flex items-center gap-4 px-10 py-5 bg-secondary text-white rounded-2xl font-black text-[12px] uppercase tracking-[0.2em] transition-all shadow-2xl shadow-secondary/30 active:scale-95"
                    >
                      <span className="flex items-center gap-2">
                        {isExpanded ? 'Hide Detailed Intelligence' : 'Acknowledge & Read Full Report'}
                        <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
                      </span>
                      <ChevronDown size={18} className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </article>
              </div>

              {/* Sidebar Info Card */}
              <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-primary p-10 rounded-[2.5rem] text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12 blur-2xl group-hover:bg-white/20 transition-all" />
                    <div className="relative z-10">
                      <h4 className="text-xl font-black mb-4 leading-tight uppercase tracking-tight">Privilege Launch <br />Access in {cityName}</h4>
                      <p className="text-white/60 text-[13px] font-medium mb-8 leading-relaxed">Secure priority allotments for the most high-velocity project launches before public release.</p>
                      <button className="w-full bg-secondary py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-secondary/20 active:scale-95">
                        Register for Alpha Access
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Listing Bar Sticky */}
        <div className="bg-white border-y border-slate-100 shadow-sm sticky top-0 z-[60]">
           <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-6">
                 <Link to="/projects" className="group flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                       <ChevronRight className="rotate-180" size={14} />
                    </div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">All Projects</span>
                 </Link>
                 <div className="w-px h-6 bg-slate-100 hidden md:block" />
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest hidden md:block">Investment Opportunities in {cityName}</h4>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-slate-400 uppercase hidden lg:inline">Verified Asset Pool: {filteredProperties.length}</span>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all shadow-sm">
                   <Search size={16} />
                </button>
              </div>
           </div>
        </div>

        {/* Project Listing Grid */}
        <section className="py-12 md:py-20 bg-slate-50/30">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-slate-950 mb-2 uppercase tracking-tighter">Curated <span className="text-secondary italic">Inventory.</span></h2>
            <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Audit verified projects at prime locations</p>
          </div>
          <div className="max-w-7xl mx-auto px-6">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

        {/* FAQ Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-[2px] bg-secondary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Expert FAQ</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-headline font-black text-slate-950 leading-tight uppercase tracking-tighter">
                    Investor <br /> <span className="text-secondary italic">Concerns.</span>
                  </h2>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[280px]">
                    Critical answers for capital allocation in {cityName}'s real estate market.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-slate-50/50 rounded-[2.5rem] p-6 md:p-10 border border-slate-100">
                  <FAQItem 
                    question={`Is it the right time to invest in ${cityName}?`}
                    answer={`${cityName} is currently in a high-growth phase. With ${cityInfo.growth} annual yields and major infrastructure projects like the ones we've audited, the supply-demand gap is widening, making it an ideal window for capital entry.`}
                  />
                  <FAQItem 
                    question={`What are the prime sectors for residential investment in ${cityName}?`}
                    answer={`Based on our alpha-corridor mapping, we recommend sectors with immediate proximity to major transit points and Grade-A office clusters. Most of our curated listings are located in these high-velocity zones.`}
                  />
                  <FAQItem 
                    question={`How does Investors Clinic help in property verification in ${cityName}?`}
                    answer="Every property listed here has undergone our 48-point 'Secure Investment' audit, covering legal titles, developer track records, and construction speed. We ensure you only see projects that meet institutional safety standards."
                  />
                  <FAQItem 
                    question={`What is the expected appreciation for commercial vs residential in ${cityName}?`}
                    answer="While residential provides steady stability and consistent 8-10% capital growth, commercial assets in the IT and industrial corridors of this city often see higher rental yields and faster exit opportunities due to corporate demand."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
