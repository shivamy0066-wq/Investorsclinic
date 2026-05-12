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
        {/* ── HERO — Compact Premium Minimal ── */}
        <section className="relative h-[420px] md:h-[460px] flex flex-col justify-end bg-[#080e1c] text-white overflow-hidden">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_30%,transparent_100%)] pointer-events-none z-0" />

          {/* City photo — subtle */}
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
              alt="City"
              className="w-full h-full object-cover object-bottom opacity-[0.10] grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080e1c] via-[#080e1c]/90 to-[#080e1c]/30" />
          </div>

          {/* Red top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#ed1c24] to-transparent z-20" />

          {/* Glow */}
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#0071ba]/[0.06] rounded-full blur-[100px] pointer-events-none z-0" />

          {/* Content */}
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pb-10 pt-32">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-[#ed1c24]" />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30">Real Estate Intelligence</span>
              <div className="w-1 h-1 rounded-full bg-[#ed1c24]/60" />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#ed1c24]">{cityName}</span>
            </motion.div>

            {/* Headline — compact */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as any }}
              className="text-3xl sm:text-4xl md:text-5xl font-black font-headline uppercase leading-[0.9] tracking-tight mb-4"
            >
              {cityName} <span className="text-[#ed1c24] italic font-serif font-light">Market.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-white/35 font-medium text-xs md:text-sm max-w-md leading-relaxed mb-8"
            >
              Institutional-grade analytics and strategic advisory for {cityName}'s most premium real estate corridors.
            </motion.p>

            {/* Stats row — compact chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="flex flex-wrap items-center gap-3"
            >
              {/* Growth chip */}
              <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm rounded-full px-4 py-2">
                <TrendingUp size={12} className="text-emerald-400/80" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Growth</span>
                <span className="text-sm font-black text-white tracking-tight">{cityInfo.growth}</span>
              </div>

              {/* Inventory chip */}
              <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm rounded-full px-4 py-2">
                <Building2 size={12} className="text-[#0071ba]/80" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Projects</span>
                <span className="text-sm font-black text-white tracking-tight">{cityInfo.inventory}</span>
              </div>

              {/* Vertical divider */}
              <div className="w-px h-6 bg-white/[0.08] hidden sm:block" />

              {/* Alpha zones */}
              <div className="flex flex-wrap gap-2">
                {cityInfo.highlights.slice(0, 3).map((h: string, idx: number) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + idx * 0.07 }}
                    className="px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider text-white/40 border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.07] hover:text-white/60 hover:border-white/15 transition-all duration-300 cursor-default"
                  >
                    {h}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent z-10" />
        </section>


        {/* Detailed City Information Content Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-8">
                <article className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-px bg-[#ed1c24]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Invest Intelligence</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-headline font-black text-[#0a1e3b] uppercase tracking-tight mb-10 leading-[0.9]">
                    Market <span className="text-[#ed1c24] italic font-serif font-medium normal-case">Dynamics.</span>
                  </h2>

                  <div className="space-y-8">
                    {/* Always visible first paragraph */}
                    <div className="relative">
                      <p className="text-base md:text-lg leading-relaxed font-medium text-slate-600 first-letter:text-5xl first-letter:font-headline first-letter:font-black first-letter:text-[#0071ba] first-letter:mr-3 first-letter:float-left">
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
                          <div className="grid md:grid-cols-2 gap-6 pt-6">
                            <div className="p-8 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 rounded-3xl border border-slate-100 transition-all duration-500 group">
                              <h3 className="text-xs font-black text-[#0a1e3b] uppercase tracking-[0.2em] flex items-center gap-3 mb-4">
                                <div className="w-8 h-px bg-[#0071ba] group-hover:w-12 transition-all duration-300" />
                                Residential
                              </h3>
                              <p className="text-sm leading-relaxed text-slate-500 font-medium">
                                The residential landscape is evolving from traditional housing to premium integrated townships. We are seeing a 15% year-on-year increase in demand for gated communities that offer smart features.
                              </p>
                            </div>
                            <div className="p-8 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 rounded-3xl border border-slate-100 transition-all duration-500 group">
                              <h3 className="text-xs font-black text-[#0a1e3b] uppercase tracking-[0.2em] flex items-center gap-3 mb-4">
                                <div className="w-8 h-px bg-[#ed1c24] group-hover:w-12 transition-all duration-300" />
                                Commercial
                              </h3>
                              <p className="text-sm leading-relaxed text-slate-500 font-medium">
                                Fuelled by industrial growth and IT services, {cityName} has become a magnet for MNCs. Availability of Grade-A office spaces sustains the high-quality residential demand.
                              </p>
                            </div>
                          </div>

                          <div className="p-8 md:p-10 bg-[#0a1e3b] rounded-3xl relative overflow-hidden group mt-8">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0071ba]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-[#ed1c24]/20 transition-colors duration-700" />
                            <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                              <TrendingUp size={16} className="text-[#ed1c24]" />
                              Future Outlook
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed font-medium text-white/70 relative z-10">
                              Investors Clinic predicts that {cityName} will maintain a steady capital appreciation rate of 8-10% annually. The projected infrastructure projects, including greenfield airports and mega-tech parks, are expected to provide the next major spurt in property valuations.
                            </p>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="h-24 bg-gradient-to-t from-white via-white/80 to-transparent absolute bottom-0 left-0 w-full pointer-events-none" />
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mt-12 flex justify-start">
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="group flex items-center gap-4 px-8 py-4 bg-[#0a1e3b] hover:bg-[#0071ba] text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-[#0a1e3b]/20 active:scale-95 border border-transparent"
                    >
                      <span className="flex items-center gap-2">
                        {isExpanded ? 'Collapse Report' : 'Read Full Intelligence Report'}
                      </span>
                      <ChevronDown size={16} className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </article>
              </div>

              {/* Sidebar Info Card */}
              <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-[#0a1e3b] p-8 md:p-10 rounded-[2rem] text-white relative overflow-hidden group shadow-2xl shadow-[#0a1e3b]/10 border border-[#0071ba]/20">
                    <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#ed1c24]/20 rounded-full blur-3xl group-hover:bg-[#0071ba]/30 transition-all duration-700" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <Control size={20} className="text-[#ed1c24]" />
                      </div>
                      <h4 className="text-2xl font-headline font-black mb-4 leading-tight uppercase tracking-tight">Privilege <br /> Launch Access</h4>
                      <p className="text-white/50 text-[13px] font-medium mb-10 leading-relaxed">Secure priority allotments for the most high-velocity project launches in {cityName} before public release.</p>
                      <button className="w-full bg-[#ed1c24] hover:bg-white hover:text-[#ed1c24] py-4 md:py-5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#ed1c24]/20 active:scale-95 flex items-center justify-center gap-3 group/btn">
                        Register for Alpha Access
                        <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Listing Bar Sticky */}
        <div className="bg-white/80 backdrop-blur-xl border-y border-slate-200/50 shadow-sm sticky top-0 z-[60] transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-6">
              <Link to="/projects" className="group flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100/80 flex items-center justify-center text-slate-500 group-hover:bg-[#0a1e3b] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <ChevronRight className="rotate-180" size={14} strokeWidth={2.5} />
                </div>
                <span className="text-[10px] md:text-[11px] font-black text-[#0a1e3b] uppercase tracking-[0.2em]">All Projects</span>
              </Link>
              <div className="w-px h-6 bg-slate-200 hidden md:block" />
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hidden md:block">Investment Opportunities in {cityName}</h4>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hidden lg:inline flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Verified Asset Pool: <span className="text-[#0a1e3b]">{filteredProperties.length}</span>
              </span>
              <button className="w-10 h-10 rounded-full bg-slate-100/80 flex items-center justify-center text-[#0a1e3b] hover:bg-[#ed1c24] hover:text-white transition-colors duration-300 shadow-sm group">
                <Search size={16} strokeWidth={2} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Listing Grid */}
        <section className="py-20 md:py-32 bg-[#f7f8fa]">
          <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#ed1c24]" />
              <span className="text-[10px] font-black text-[#ed1c24] uppercase tracking-[0.4em]">Curated Inventory</span>
              <div className="w-10 h-[2px] bg-[#ed1c24]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-[#0a1e3b] uppercase tracking-tight text-center leading-[0.9]">
              Verified <span className="text-[#ed1c24] italic font-serif font-medium normal-case">Projects.</span>
            </h2>
          </div>

          <div className="max-w-7xl mx-auto px-6">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProperties.map((prop, idx) => (
                  <ProjectCard key={prop.id} property={prop} index={idx} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 max-w-3xl mx-auto">
                <div className="w-24 h-24 bg-[#f7f8fa] rounded-full flex items-center justify-center mx-auto mb-8 relative">
                  <div className="absolute inset-0 border-2 border-[#0071ba]/20 rounded-full animate-ping" />
                  <Building2 className="w-10 h-10 text-[#0071ba]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-headline font-black text-[#0a1e3b] uppercase tracking-tight mb-4">Under Evaluation</h3>
                <p className="text-slate-500 max-w-md mx-auto font-medium text-sm leading-relaxed mb-10">
                  Our data panel is currently auditing new launches in <span className="font-bold text-[#0a1e3b]">{cityName}</span> to ensure they meet our strict "Secure Investment" benchmark.
                </p>
                <Link to="/projects" className="inline-flex items-center gap-3 bg-[#0a1e3b] hover:bg-[#0071ba] text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-[#0a1e3b]/20 hover:shadow-[#0071ba]/30 transition-all duration-300 active:scale-95 group">
                  View All Locations
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0071ba]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ed1c24]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-[2px] bg-[#ed1c24]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ed1c24]">Expert FAQ</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-headline font-black text-[#0a1e3b] leading-[0.9] uppercase tracking-tight mb-6">
                      Investor <span className="text-[#ed1c24] italic font-serif font-medium normal-case">Concerns.</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-base leading-relaxed max-w-sm">
                      Critical answers for capital allocation in {cityName}'s real estate market.
                    </p>
                  </div>

                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-[#0071ba]">
                      <Globe size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#0a1e3b] uppercase tracking-widest mb-1">Still Have Questions?</p>
                      <p className="text-sm text-slate-500 font-medium mb-4">Connect directly with our regional head for {cityName}.</p>
                      <Link to="/contact" className="text-[11px] font-black text-[#ed1c24] uppercase tracking-widest hover:text-[#0a1e3b] transition-colors flex items-center gap-1 group">
                        Schedule a Call <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="bg-white rounded-[2rem] p-6 md:p-10 border border-slate-100 shadow-[0_30px_80px_-20px_rgba(10,30,59,0.05)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0071ba] via-[#ed1c24] to-[#0071ba]" />
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
