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
        <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#0a1e3b]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-20 scale-105"
              alt="Premium Architecture"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e3b] via-[#0a1e3b]/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-secondary" />
                <p className="text-secondary font-black tracking-[0.5em] uppercase text-[10px]">Since 2007</p>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black text-white mb-6 leading-tight">
                Architects of <span className="text-primary italic">Trust</span> & Prosperity.
              </h1>
              <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed mb-10 max-w-xl">
                India's leading real estate advisory firm, dedicated to transforming your investment aspirations into tangible realities.
              </p>
              <button className="bg-secondary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:brightness-110 transition-all flex items-center gap-3">
                Our Journey <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* 2. Trust Strip */}
        <section className="bg-[#f8f9fb] py-12 border-b border-slate-100 overflow-hidden relative">
          <div className="flex whitespace-nowrap gap-20 items-center opacity-30 select-none">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-24 items-center shrink-0"
            >
              {["GODREJ", "DLF LUXURY", "M3M", "ADANI", "EMAAR", "SOBHA", "TATA HOUSING", "PRESTIGE"].map((brand) => (
                <span key={brand} className="text-2xl font-black text-[#0a1e3b] tracking-[0.3em] font-headline">{brand}</span>
              ))}
            </motion.div>
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-24 items-center shrink-0"
            >
              {["GODREJ", "DLF LUXURY", "M3M", "ADANI", "EMAAR", "SOBHA", "TATA HOUSING", "PRESTIGE"].map((brand) => (
                <span key={brand} className="text-2xl font-black text-[#0a1e3b] tracking-[0.3em] font-headline">{brand}</span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3. Who We Are */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                    className="rounded-[3.5rem] shadow-2xl relative z-10"
                    alt="Institutional Excellence"
                  />
                  <div className="absolute -bottom-12 -right-12 bg-[#0a1e3b] p-10 rounded-[2.5rem] text-white hidden md:block z-20 shadow-2xl">
                    <p className="text-5xl font-black mb-1">200K+</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-secondary">Units Delivered</p>
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <p className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-6">Introduction</p>
                <h2 className="text-5xl font-headline font-black text-[#0a1e3b] mb-10 leading-tight">
                  Redefining the <span className="italic underline decoration-secondary/20 underline-offset-8">Standard</span> of Advisory.
                </h2>
                <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
                  <p>
                    Established in 2007, Investors Clinic was born with a mission to bridge the gap between complex developer portfolios and discerning individual investors. 
                  </p>
                  <p>
                    Today, we stand as India's most trusted real estate consultancy, driven by a data-first approach and an unwavering commitment to transparency. Our network spans across India with strategic global footprints.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Mission / Vision */}
        <section className="py-32 bg-[#0a1e3b] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <div className="w-full h-full border-l border-b border-white" />
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div 
                {...fadeInUp}
                className="bg-white/5 border border-white/10 p-16 rounded-[4rem] group hover:bg-white hover:border-white transition-all duration-700"
              >
                <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center mb-10 group-hover:bg-[#0a1e3b] transition-colors">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-headline font-black text-white group-hover:text-[#0a1e3b] mb-6 transition-colors">Our Mission</h3>
                <p className="text-white/60 group-hover:text-slate-600 text-lg leading-relaxed transition-colors">
                  To empower every investor with verified data, expert insights, and professional brokerage services that turn property acquisition into a seamless, high-yield journey.
                </p>
              </motion.div>

              <motion.div 
                {...fadeInUp} 
                transition={{ delay: 0.2 }}
                className="bg-secondary p-16 rounded-[4rem] group hover:brightness-110 transition-all duration-700"
              >
                <div className="w-20 h-20 rounded-3xl bg-[#0a1e3b] flex items-center justify-center mb-10">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-headline font-black text-white mb-6">Our Vision</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  To become the global gold standard for real estate consultancy, where technology meets human wisdom to create sustainable wealth for every client we serve.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Journey Timeline - Redesigned to match reference */}
        <section className="py-32 bg-[#f8f9fb] overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 mb-24">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-headline font-black text-[#0a1e3b]">Our <span className="text-primary italic">Journey</span></h2>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative">
            {/* The Connecting Line (Desktop) */}
            <div className="absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0 hidden md:block">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="h-full bg-secondary"
               />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-4 relative z-10">
              {[
                { id: 1, year: "2005", desc: "Founded in Noida with a vision to simplify real estate" },
                { id: 2, year: "2010", desc: "Expanded to 10 cities across India" },
                { id: 3, year: "2015", desc: "Crossed 1,00,000 satisfied customers milestone" },
                { id: 4, year: "2020", desc: "Launched international offices for NRI investors" },
                { id: 5, year: "2024", desc: "1,90,000+ customers | 700+ developers | 2000+ projects" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle Pointer */}
                  <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center font-black text-2xl shadow-[0_15px_30px_rgba(188,0,17,0.25)] mb-8 relative z-20 group-hover:scale-110 transition-transform duration-500">
                    {item.id}
                  </div>
                  
                  {/* Year */}
                  <h3 className="text-2xl font-black text-secondary mb-4 tracking-tighter">
                    {item.year}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-500 text-[13px] font-medium leading-relaxed max-w-[200px] group-hover:text-[#0a1e3b] transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* 7. Why Choose Us */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-[11px] font-black text-secondary uppercase tracking-[0.4em] mb-8">The Advantage</h2>
                <h3 className="text-5xl font-headline font-black text-[#0a1e3b] mb-12 leading-tight">
                  Why Institutional Investors <span className="text-secondary underline underline-offset-8">Prefer Us.</span>
                </h3>
                <div className="space-y-10">
                  {[
                    { icon: ShieldCheck, title: "BBN Certified Professionals", desc: "Every advisor undergoes rigorous training and transparency drills." },
                    { icon: Rocket, title: "Zero Commission on Fresh Launches", desc: "We are paid by developers, ensuring no extra cost to our clients." },
                    { icon: Globe2, title: "Proprietary Data Insights", desc: "Access to market heat-maps and future valuation projections." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#0a1e3b] mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="rounded-[4rem] overflow-hidden"
                >
                  <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Office Culture" />
                </motion.div>
                <div className="absolute -top-10 -right-10 w-40 h-40 border-8 border-secondary rounded-full -z-10 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </section>

        {/* 8. Team Leadership - Editorial Founders Section */}
        <section className="pt-24 pb-32 bg-[#0a1e3b] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-12">
              <div className="w-full">
                <p className="text-secondary font-black tracking-[0.5em] uppercase text-[10px] mb-4 text-center lg:text-left">Architects of Vision</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white leading-tight text-center lg:text-left md:whitespace-nowrap">
                  Meet Our <span className="text-secondary italic">Founders.</span>
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  name: "Honeyy Katiyal", 
                  role: "Founder & MD", 
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
                  story: "With a radical vision to professionalize Indian brokerage, Honeyy founded Investors Clinic in 2007. His philosophy centered on 'Customer First' transitioned a fragmented market into an institutionalized service industry."
                },
                { 
                  name: "Vikram Mehra", 
                  role: "Co-Founder", 
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
                  story: "A veteran strategist, Vikram architected our global expansion strategy. His expertise in international real estate laws allowed us to set high-compliance benchmarks that defined our trustworthiness."
                },
                { 
                  name: "Anjali Gupta", 
                  role: "Executive Director", 
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
                  story: "Anjali spearheaded our digital transformation journey. She is the mind behind our AI-driven property matching engine, ensuring data-driven precision in every recommendation we make to our clients."
                },
                { 
                  name: "Sanjay Varma", 
                  role: "Board Member", 
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
                  story: "Sanjay brings 30 years of construction and civil engineering excellence to the board. He leads our technical due-diligence cell, personally vetting every developer project before it reaches our portfolio."
                }
              ].map((founder, i) => (
                <motion.div 
                  key={i} 
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  className="relative group h-[550px] overflow-hidden rounded-[3rem] bg-white/5"
                >
                  <img 
                    src={founder.image} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-110" 
                    alt={founder.name} 
                  />
                  
                  {/* Default View Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3b] via-transparent to-transparent opacity-90 p-10 flex flex-col justify-end transition-all duration-700 group-hover:translate-y-[-20%]">
                    <h4 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">{founder.name}</h4>
                    <p className="text-secondary font-black uppercase tracking-widest text-[10px]">{founder.role}</p>
                  </div>

                  {/* Expanded Story Overlay */}
                  <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 bg-secondary/95 p-12 flex flex-col justify-center text-white transition-all duration-500 cursor-pointer"
                  >
                    <Quote className="w-12 h-12 text-white/30 mb-8" />
                    <h5 className="text-2xl font-black mb-6 uppercase tracking-tight">The Vision</h5>
                    <p className="text-lg font-medium leading-relaxed mb-8 border-l-2 border-white/20 pl-6 italic">
                      "{founder.story}"
                    </p>
                    <div className="mt-4 flex items-center gap-3 font-black text-[10px] uppercase tracking-widest">
                      Full Biography <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Testimonials */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
              <div className="lg:col-span-1">
                <Quote className="w-20 h-20 text-secondary/20 mb-8" />
                <h2 className="text-5xl font-headline font-black text-[#0a1e3b] mb-10 leading-tight">Voices of <span className="text-primary italic italic">Trust.</span></h2>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />)}
                  <span className="ml-3 font-bold text-slate-400">4.9/5 Average Rating</span>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="flex gap-8 overflow-x-hidden">
                  <motion.div 
                    animate={{ x: [0, -400] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="flex gap-8 p-4 shrink-0"
                  >
                    {[
                      { name: "Rahul Sharma", company: "HNI Investor", quote: "The level of transparency Investors Clinic provides is unseen in the Indian market. They truly act as partners." },
                      { name: "Amit Goel", company: "Draper CEO", quote: "Institutional grade portfolios with retail accessibility. Highly recommended for long term wealth." }
                    ].map((t, i) => (
                      <div key={i} className="bg-[#f8f9fb] p-12 rounded-[3.5rem] w-full md:w-[500px] shrink-0 border border-slate-100">
                        <p className="text-xl font-medium text-[#0a1e3b] mb-10 leading-relaxed italic">"{t.quote}"</p>
                        <div>
                          <p className="text-lg font-black text-[#0a1e3b] uppercase tracking-tighter">{t.name}</p>
                          <p className="text-secondary font-black uppercase tracking-[0.15em] text-[10px]">{t.company}</p>
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
        <section className="py-24 px-6">
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
