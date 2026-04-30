import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { 
  Award, Users, Target, ShieldCheck, ArrowRight, Building2, 
  Globe2, Briefcase, Rocket, Eye, CheckCircle2, Star, 
  Quote, TrendingUp, Handshake, Headphones, Home, Plus, X 
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const AboutUs = () => {
  const [activeFounder, setActiveFounder] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* 1. Hero Section */}
        <section className="relative min-h-[70vh] md:h-[85vh] flex items-center overflow-hidden bg-[#0a1e3b]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-20 scale-105"
              alt="Premium Architecture"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e3b] via-[#0a1e3b]/90 md:via-[#0a1e3b]/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20 md:py-0">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="h-px w-8 md:w-12 bg-secondary" />
                <p className="text-secondary font-black tracking-[0.4em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px]">Since 2007</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-headline font-black text-white mb-6 leading-[1.1] md:leading-tight">
                Architects of <span className="text-primary italic">Trust</span> <br className="hidden md:block" /> & Prosperity.
              </h1>
              <p className="text-white/60 text-sm md:text-lg font-medium leading-relaxed mb-10 max-w-xl">
                India's leading real estate advisory firm, dedicated to transforming your investment aspirations into tangible realities.
              </p>
              <button className="w-full sm:w-auto bg-secondary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-secondary/20">
                Our Journey <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* 2. Institutional Partners Marquee - Upgraded Cinematic Version */}
        <section className="bg-white py-14 overflow-hidden relative border-y border-slate-50">
          <div className="max-w-7xl mx-auto px-6 mb-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-secondary/30" />
              <span className="text-secondary font-black tracking-[0.4em] uppercase text-[9px]">Our Strategic Network</span>
            </div>
            <p className="text-slate-300 font-black text-[9px] uppercase tracking-[0.3em] hidden md:block">Certified Grade-A Developers</p>
          </div>

          <div className="relative">
            {/* Edge fades for smooth entry/exit */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            
            <div className="flex whitespace-nowrap select-none overflow-hidden group">
              <motion.div 
                animate={{ x: [0, -1920] }}
                transition={{ 
                  duration: 40, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "loop"
                }}
                className="flex gap-16 md:gap-32 items-center px-12"
              >
                {[
                  "GODREJ", "DLF LUXURY", "M3M", "ADANI", "EMAAR", "SOBHA", "TATA HOUSING", "PRESTIGE",
                  "GODREJ", "DLF LUXURY", "M3M", "ADANI", "EMAAR", "SOBHA", "TATA HOUSING", "PRESTIGE"
                ].map((brand, i) => (
                  <div key={i} className="flex items-center gap-4 group/brand">
                    <span className="text-2xl md:text-3xl font-headline font-black text-[#0a1e3b]/30 hover:text-secondary hover:scale-105 transition-all duration-500 tracking-[0.25em] md:tracking-[0.4em] cursor-default">
                      {brand}
                    </span>
                    <div className="w-2 h-2 rounded-full border border-secondary/20 group-hover/brand:bg-secondary transition-colors" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Who We Are - Premium Compact Version */}
        <section className="py-20 md:py-28 overflow-hidden relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-secondary/5 rounded-full blur-[100px] -z-10" />
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 relative"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-slate-50 rounded-[2.5rem] -z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                    className="rounded-[2.5rem] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] relative z-10 w-full object-cover aspect-[4/3] lg:aspect-[1/1.1]"
                    alt="Institutional Excellence"
                  />
                  
                  {/* Floating Metric Badge - More Refined */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="absolute -bottom-6 -right-4 md:-right-8 bg-[#0a1e3b] p-6 md:p-8 rounded-[2rem] text-white z-20 shadow-[0_32px_64px_-16px_rgba(10,30,59,0.25)] border border-white/5"
                  >
                    <div className="flex flex-col">
                      <span className="text-4xl md:text-5xl font-black tracking-tighter mb-1">200K<span className="text-secondary text-2xl">+</span></span>
                      <div className="flex flex-col gap-1.5">
                        <div className="h-[2px] w-8 bg-secondary rounded-full" />
                        <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-white/50">Units Delivered</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-10 bg-secondary rounded-full" />
                  <span className="text-secondary font-black tracking-[0.6em] uppercase text-[10px] leading-none">Who We Are</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-headline font-black text-[#0a1e3b] mb-8 leading-[1.05] tracking-tight max-w-xl">
                  Redefining the <span className="relative">
                    Standard
                    <span className="absolute -bottom-1 left-0 w-full h-[5px] bg-secondary/20 rounded-full" />
                  </span> of Property Advisory.
                </h2>

                <div className="space-y-6 text-slate-500 font-medium text-base md:text-lg leading-relaxed max-w-2xl">
                  <p>
                    Established in 2007, Investors Clinic was born with a mission to bridge the gap between complex developer portfolios and discerning individual investors. 
                  </p>
                  <p className="opacity-70 text-slate-400">
                    Today, we stand as India's most trusted real estate consultancy, driven by a data-first approach and an unwavering commitment to transparency. Our network spans across India with strategic global footprints.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 sm:flex sm:flex-wrap gap-6 md:gap-12">
                  <div className="flex flex-col gap-1 group">
                    <span className="text-2xl md:text-3xl font-black text-[#0a1e3b] group-hover:text-secondary transition-colors">150<span className="text-secondary tracking-tighter">+</span></span>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Global Offices</span>
                  </div>
                  <div className="w-px h-10 bg-slate-100 hidden md:block" />
                  <div className="flex flex-col gap-1 group">
                    <span className="text-2xl md:text-3xl font-black text-[#0a1e3b] group-hover:text-secondary transition-colors">17<span className="text-secondary tracking-tighter">+</span></span>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Years Legacy</span>
                  </div>
                  <div className="w-px h-10 bg-slate-100 hidden md:block" />
                  <div className="flex flex-col gap-1 group">
                    <span className="text-2xl md:text-3xl font-black text-[#0a1e3b] group-hover:text-secondary transition-colors">700<span className="text-secondary tracking-tighter">+</span></span>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Tied Developers</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Mission & Vision - High-Impact Compact Version */}
        <section className="py-12 md:py-20 bg-[#0a1e3b] relative overflow-hidden">
          {/* Subtle background texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
          
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              {/* Mission Card - Clean White */}
              <motion.div 
                {...fadeInUp}
                className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.3)] flex flex-col items-start group hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a1e3b] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-headline font-black text-[#0a1e3b] uppercase tracking-tighter">Our Mission</h3>
                  <div className="w-10 h-1 bg-secondary rounded-full" />
                </div>
                <p className="mt-4 text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                  To empower every investor with verified data, expert insights, and professional brokerage services that turn property acquisition into a seamless, high-yield journey.
                </p>
              </motion.div>
 
              {/* Vision Card - Signature Red */}
              <motion.div 
                {...fadeInUp} 
                transition={{ delay: 0.2 }}
                className="bg-secondary p-8 md:p-10 rounded-[2rem] shadow-[0_24px_48px_-12px_rgba(188,0,17,0.3)] flex flex-col items-start group hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5 text-secondary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-headline font-black text-white uppercase tracking-tighter">Our Vision</h3>
                  <div className="w-10 h-1 bg-white rounded-full" />
                </div>
                <p className="mt-4 text-white/90 text-sm md:text-base font-medium leading-relaxed">
                  To become the global gold standard for real estate consultancy, where technology meets human wisdom to create sustainable wealth for every client we serve.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Journey Timeline - High Contrast Theme */}
        <section className="py-12 bg-[#0a1e3b] overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:20px_20px]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 mb-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-[2px] w-6 bg-secondary rounded-full" />
                  <span className="text-secondary font-black tracking-[0.4em] uppercase text-[8px]">History</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-headline font-black text-white leading-tight">
                  The Evolution of <span className="text-secondary italic font-serif">Trust.</span>
                </h2>
              </div>
              <div className="hidden md:block">
                <p className="text-white/30 font-black text-[9px] uppercase tracking-[0.3em]">Institutional Heritage</p>
              </div>
            </div>
          </div>
 
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3">
               {[
                 { year: "2007", title: "Inception", desc: "Investors Clinic born in Noida with a vision to professionalize real estate.", size: "lg:col-span-2" },
                 { year: "2010", title: "Domination", desc: "Scaled to 10 strategic hubs across the Indian subcontinent.", size: "lg:col-span-1" },
                 { year: "2015", title: "Milestone", desc: "Trusted by over 1,00,000+ individual wealth creators.", size: "lg:col-span-1" },
                 { year: "2020", title: "Global Reach", desc: "Strategic expansion into international markets.", size: "lg:col-span-1" },
                 { year: "2024", title: "Apex Era", desc: "Network of 2,000+ premium projects globally.", size: "lg:col-span-1" }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 15 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.05 }}
                   className={`${item.size || "lg:col-span-1"} bg-white/5 backdrop-blur-sm p-5 md:p-6 rounded-[1.5rem] border border-white/10 hover:border-secondary/40 transition-all duration-500 group flex flex-col justify-between min-h-[140px] md:min-h-[160px]`}
                 >
                   <div>
                     <span className="text-xl md:text-2xl font-black text-secondary/30 group-hover:text-secondary transition-colors duration-500 block mb-2">{item.year}</span>
                     <h4 className="text-sm font-black text-white mb-1.5 group-hover:text-secondary transition-colors uppercase tracking-tight">{item.title}</h4>
                     <p className="text-white/40 group-hover:text-white/60 transition-colors font-medium text-[11px] leading-relaxed">{item.desc}</p>
                   </div>
                   <div className="mt-3 flex justify-end">
                     <div className="w-4 h-[1.5px] bg-white/10 group-hover:w-8 group-hover:bg-secondary transition-all duration-500" />
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* 6. Why Choose Us - Refined & Compact */}
        <section className="py-16 md:py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50/30 -z-10" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1.5px] w-8 bg-secondary rounded-full" />
                  <span className="text-secondary font-black tracking-[0.4em] uppercase text-[9px]">The IC Advantage</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-headline font-black text-[#0a1e3b] mb-8 leading-[1.1] tracking-tight">
                  Why Strategic Investors <br /> 
                  <span className="text-secondary italic">Trust IC.</span>
                </h2>
 
                <div className="grid gap-6">
                  {[
                    { icon: ShieldCheck, title: "Verified Professionalism", desc: "Every advisor undergoes rigorous background checks and institutional training." },
                    { icon: Rocket, title: "Zero Brokerage Model", desc: "Transparent fee structure ensures your investment goes entirely into equity." },
                    { icon: Globe2, title: "Algorithmic Precision", desc: "Access to proprietary heat-maps usually reserved for institutional funds." }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-5 group"
                    >
                      <div className="shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#0a1e3b] group-hover:scale-110 transition-all duration-500">
                          <item.icon className="w-4 h-4 text-secondary group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-black text-[#0a1e3b] tracking-tight group-hover:text-secondary transition-colors">{item.title}</h4>
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed opacity-80">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
 
              <div className="lg:col-span-6 relative order-first lg:order-last">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  <div className="absolute -inset-2 bg-[#0a1e3b]/5 rounded-[3rem] group-hover:scale-105 transition-transform duration-700" />
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-4 border-white bg-white">
                    <img 
                      src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop" 
                      className="w-full aspect-[4/3] md:aspect-[3/2] object-cover group-hover:scale-110 transition-transform duration-1000" 
                      alt="Office Culture" 
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Team Leadership - Refined & Compact */}
        <section className="py-16 md:py-24 bg-[#050c18] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(188,0,17,0.08),transparent_50%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12 md:mb-20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-8 bg-secondary/40" />
                <p className="text-secondary font-black tracking-[0.5em] uppercase text-[10px]">Board of Directors</p>
                <div className="h-px w-8 bg-secondary/40" />
              </div>
              <h2 className="text-3xl md:text-5xl font-headline font-black text-white">
                Meet Our <span className="text-secondary italic">Architects.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Honeyy Katiyal", role: "Founder & MD", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", story: "Founded IC in 2007 with a vision to professionalize Indian brokerage." },
                { name: "Vikram Mehra", role: "Co-Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", story: "Strategist behind our global expansion and high-compliance benchmarks." },
                { name: "Anjali Gupta", role: "Executive Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", story: "Mind behind our AI-driven property matching engine and digital growth." },
                { name: "Sanjay Varma", role: "Board Member", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop", story: "Leads technical due-diligence, vetting every project for security." }
              ].map((founder, i) => (
                <motion.div 
                  key={i} 
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  className="relative group h-[400px] md:h-[480px] overflow-hidden rounded-[2rem] bg-white/5 border border-white/5 shadow-2xl"
                >
                  <img 
                    src={founder.image} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" 
                    alt={founder.name} 
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end transition-all duration-500">
                    <h4 className="text-xl md:text-2xl font-black text-white mb-1 uppercase tracking-tight">{founder.name}</h4>
                    <p className="text-secondary font-black uppercase tracking-[0.2em] text-[9px]">{founder.role}</p>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 bg-secondary/95 p-10 flex flex-col justify-center text-white transition-all duration-500 cursor-pointer"
                  >
                    <Quote className="w-10 h-10 text-white/30 mb-6" />
                    <p className="text-lg font-bold leading-tight mb-8">"{founder.story}"</p>
                    <div className="flex items-center gap-2 font-black text-[9px] uppercase tracking-widest mt-auto">
                      Full Vision <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Testimonials - Refined Theme Integration */}
        <section className="pt-12 pb-8 md:pt-16 md:pb-10 bg-[#fcfdff] overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/5 rounded-full md:mb-12 md:mr-12 -z-10 blur-3xl" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-[1.5px] w-6 bg-secondary" />
                  <span className="text-secondary font-black tracking-[0.3em] uppercase text-[8px]">Client Sentiment</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-headline font-black text-[#0a1e3b] leading-[1.1]">Voices of <span className="text-secondary italic">Trust.</span></h2>
                <div className="flex items-center gap-3 bg-white w-fit px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="fill-secondary text-secondary" />)}
                  </div>
                  <span className="font-black text-slate-400 text-[9px] uppercase tracking-widest border-l border-slate-100 pl-3">4.9/5 Rating</span>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="flex gap-4 overflow-hidden py-2">
                  <motion.div 
                    animate={{ x: [0, -400] }}
                    transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
                    className="flex gap-4 shrink-0"
                  >
                    {[
                      { name: "Rahul Sharma", company: "HNI Investor", quote: "The transparency Investors Clinic provides is unseen in the Indian market. They truly act as partners." },
                      { name: "Amit Goel", company: "Draper CEO", quote: "Institutional grade portfolios with retail accessibility. Highly recommended for long term wealth." },
                      { name: "S. Kapoor", company: "Portfolio Client", quote: "Their data-driven approach changed how I view real estate. A masterclass in advisory." }
                    ].map((t, i) => (
                      <div key={i} className="bg-white p-6 rounded-[1.5rem] w-[300px] md:w-[340px] shrink-0 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                        <Quote size={24} className="text-secondary/10 mb-4 group-hover:text-secondary/30 transition-colors" />
                        <p className="text-xs md:text-sm font-bold text-slate-500 mb-6 leading-relaxed italic">"{t.quote}"</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-black text-[#0a1e3b] uppercase tracking-tight">{t.name}</p>
                            <p className="text-secondary font-bold uppercase tracking-[0.1em] text-[8px]">{t.company}</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-secondary/30">
                            <Users size={14} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 11. CTA - Refined Compact Version */}
        <section className="pt-8 pb-20 px-6">
          <div className="max-w-7xl mx-auto bg-[#0a1e3b] rounded-[3rem] p-10 md:p-16 relative overflow-hidden border border-white/5">
            {/* Background elements */}
            <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
              <Building2 className="w-96 h-96 text-white" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(188,0,17,0.1),transparent)]" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div {...fadeInUp} className="max-w-2xl text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-secondary" />
                  <p className="text-secondary font-black tracking-[0.3em] uppercase text-[9px]">Private Wealth Advisory</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-headline font-black text-white mb-6 leading-tight">
                  Design Your <span className="text-secondary italic">Legacy</span> Portfolio.
                </h2>
                <p className="text-white/50 text-lg font-medium max-w-xl">
                  Consult with our senior investment analysts for bespoke residential and commercial portfolio design.
                </p>
              </motion.div>

              <motion.div 
                {...fadeInUp} 
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <button className="bg-secondary text-white px-8 py-4 rounded-xl font-black uppercase tracking-[0.15em] text-[11px] hover:brightness-110 transition-all shadow-xl active:scale-95 whitespace-nowrap">
                  Book VIP Consultation
                </button>
                <button className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-black uppercase tracking-[0.15em] text-[11px] hover:bg-white/10 transition-all active:scale-95 whitespace-nowrap">
                  View Case Studies
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
