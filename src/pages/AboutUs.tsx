import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Award, Users, Target, Eye, ArrowRight, Building2,
  TrendingUp, Quote, Star, Plus, Minus
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100 last:border-0 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-sm md:text-[15px] font-semibold text-zinc-800 group-hover:text-red-600 transition-colors pr-8 leading-snug">
          {question}
        </span>
        <div className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-red-600 bg-red-600 text-white" : "border-zinc-200 text-zinc-400"}`}>
          {isOpen ? <Minus size={13} /> : <Plus size={13} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="pb-6 text-zinc-500 leading-relaxed text-sm max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const stats = [
  { val: "19+", label: "Years of Expertise" },
  { val: "250K+", label: "Families Served" },
  { val: "1,500+", label: "Developer Partners" },
  { val: "₹1L Cr+", label: "Sales Volume" },
];

const journey = [
  { year: "2005", title: "Founded", desc: "Started in Noida with a vision to simplify real estate for every Indian." },
  { year: "2010", title: "Pan-India", desc: "Expanded operations to 10 major cities across India." },
  { year: "2015", title: "1L+ Clients", desc: "Crossed the landmark of 1,00,000 satisfied customers." },
  { year: "2020", title: "Global Reach", desc: "Launched international offices serving NRI investors worldwide." },
  { year: "2024", title: "Market Leader", desc: "1.9L+ customers, 700+ developers, and 2,000+ active projects." },
];

const leadership = [
  { 
    name: "Honeyy Katiyal", 
    role: "Founder Chairman", 
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", 
    quote: "Visionary behind the digital transformation of Indian real estate.",
    description: "Honeyy Katiyal is the pioneering force behind Investors Clinic, having built the company from a visionary startup to India's premier real estate consultancy. His strategic foresight and deep understanding of market dynamics have transformed the way real estate is bought and sold in India."
  },
  { 
    name: "Sakshee Katiyal", 
    role: "COO", 
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", 
    quote: "Driving operational excellence and institutional-grade service.",
    description: "As the Chief Operating Officer, Sakshee leads the operational strategy and execution across all business units. Her focus on process optimization and client satisfaction has been instrumental in scaling the company's operations while maintaining institutional-grade service quality."
  },
  { 
    name: "Sunny Katiyal", 
    role: "Co-founder & Managing Director", 
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", 
    quote: "Strategist focused on global expansion and compliance standards.",
    description: "Sunny drives the global expansion and strategic partnerships for Investors Clinic. His expertise in international real estate markets and strict adherence to compliance standards have established the firm as a trusted advisory partner for NRIs and institutional investors worldwide."
  },
  { 
    name: "Bhawna Katiyal", 
    role: "President HR", 
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop", 
    quote: "Nurturing the talent pool that drives our philosophy of excellence.",
    description: "Bhawna is the architect of the company's corporate culture and human capital strategy. By nurturing top-tier talent and fostering a philosophy of excellence, she ensures that the workforce remains the strongest asset of Investors Clinic."
  },
];

const LeadershipCard = ({ person, index }: { person: any, index: number }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <motion.div {...fade(index * 0.1)} className="flex flex-col items-center group w-full">
      {/* Premium Square Image Container */}
      <div className="relative w-52 h-52 md:w-60 md:h-60 mb-8 transition-transform duration-700 group-hover:-translate-y-3 shrink-0 flex items-center justify-center">
        
        {/* Animated Tech Squares */}
        <svg className="absolute inset-[-15px] w-[calc(100%+30px)] h-[calc(100%+30px)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 overflow-visible" viewBox="0 0 100 100">
          <motion.rect 
            x="2" y="2" width="96" height="96" rx="20"
            fill="none" stroke="#0071ba" strokeWidth="0.5" strokeDasharray="3 4" 
            animate={{ strokeDashoffset: [0, 100] }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.rect 
            x="5" y="5" width="90" height="90" rx="16"
            fill="none" stroke="#ed1c24" strokeWidth="0.3" strokeDasharray="1 6" 
            animate={{ strokeDashoffset: [100, 0] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Ambient Glow */}
        <div className="absolute inset-0 rounded-[1.5rem] bg-[#0071ba]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Core Image */}
        <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden border-[4px] border-white shadow-[0_15px_40px_-10px_rgba(0,113,186,0.15)] group-hover:shadow-[0_20px_50px_-10px_rgba(0,113,186,0.4)] transition-shadow duration-700 z-10 bg-zinc-100">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3b]/80 via-[#0a1e3b]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Advanced Tech Corner Accents */}
          <div className="absolute top-4 left-4 w-5 h-5 border-t-[3px] border-l-[3px] border-white/80 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
          <div className="absolute top-4 right-4 w-5 h-5 border-t-[3px] border-r-[3px] border-white/80 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-b-[3px] border-l-[3px] border-white/80 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b-[3px] border-r-[3px] border-white/80 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
        </div>
      </div>
      
      {/* Name and Role */}
      <div className="text-center space-y-1 mb-4 h-[50px]">
        <h4 className="text-lg md:text-[22px] font-black text-[#0071ba] tracking-tight leading-none">{person.name}</h4>
        <p className="text-[#0071ba] text-xs md:text-sm font-bold tracking-wide mt-1">( {person.role} )</p>
      </div>

      {/* Description / Expandable */}
      <div className="w-full max-w-[280px] text-center flex flex-col items-center">
        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.div
              key="expanded"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-3"
            >
              <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                {person.description}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-3"
            >
              <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2 font-medium">
                {person.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="mt-1 text-[#ed1c24] text-[10px] font-black uppercase tracking-[0.2em] hover:text-white hover:bg-[#ed1c24] transition-all py-1.5 px-4 rounded-full border border-[#ed1c24]/20"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </motion.div>
  );
};

const testimonials = [
  { name: "Rahul Sharma", tag: "HNI Investor", quote: "The transparency Investors Clinic provides is unseen in the Indian market. They truly act as long-term partners." },
  { name: "Amit Goel", tag: "Startup CEO", quote: "Institutional-grade portfolios with retail accessibility. Highly recommended for long-term wealth building." },
  { name: "Seema Kapoor", tag: "Portfolio Client", quote: "Their data-driven approach completely changed how I view real estate investment. A true masterclass in advisory." },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as any },
});

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main className="pt-20">

        {/* ─── HERO ─── */}
        <section className="relative h-[280px] md:h-[350px] flex items-end overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Investors Clinic HQ"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-red-500" />
                <p className="text-red-400 text-[10px] font-black uppercase tracking-[0.3em]">Our Story</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white font-headline leading-none tracking-tight">
                Who We <span className="text-red-500 italic font-light">Are.</span>
              </h1>
              <p className="text-white/70 text-xs md:text-sm max-w-md leading-relaxed font-medium">
                Nearly two decades of trust, transparency, and transformative real estate advisory.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── STATS STRIP ─── */}
        <section className="bg-zinc-950 py-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {stats.map((s, i) => (
                <motion.div key={i} {...fade(i * 0.1)} className="px-8 py-4 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">{s.val}</p>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHO WE ARE ─── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Image Side */}
              <motion.div {...fade()} className="relative lg:max-w-md mx-auto w-full">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                    alt="Corporate Heritage"
                  />
                </div>
                
                {/* Top Left Badge - 19 Years */}
                <motion.div
                  {...fade(0.4)}
                  className="absolute -top-6 -left-6 md:-top-8 md:-left-8 bg-[#ed1c24] text-white rounded-[1.25rem] px-8 py-6 shadow-[0_15px_40px_-10px_rgba(237,28,36,0.6)] text-center flex flex-col justify-center border-[6px] border-white z-10"
                >
                  <p className="text-5xl font-black leading-none mb-1 tracking-tighter">19</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">Years of Power</p>
                </motion.div>

                {/* Bottom Right Badge - Building Trust */}
                <motion.div
                  {...fade(0.5)}
                  className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white rounded-2xl px-5 py-4 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-zinc-100 flex items-center gap-4 z-10"
                >
                  <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center text-[#ed1c24] shrink-0">
                    <Award size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-[#0071ba] uppercase tracking-wide leading-none mb-1">Building Trust</p>
                    <p className="text-[9px] text-zinc-400 font-semibold uppercase tracking-widest leading-none">Since 2006</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Content Side */}
              <motion.div {...fade(0.2)} className="space-y-10 lg:pl-6">
                {/* Heading */}
                <h2 className="text-[2.5rem] md:text-[3.25rem] font-black text-[#0071ba] leading-[1.1] tracking-tight">
                  BUILDING TRUST <span className="text-[#ed1c24] italic font-serif tracking-normal font-medium">SINCE 2006.</span>
                </h2>

                {/* Quote */}
                <div className="border-l-[3px] border-[#ed1c24] pl-6 py-1">
                  <p className="text-[#0071ba] font-medium text-lg italic leading-relaxed">
                    "Building Trust Since 2006 isn't just a slogan; it's the foundation of over 1.9 Lakh stories of success."
                  </p>
                </div>

                {/* Paragraphs */}
                <div className="space-y-6 text-zinc-500 text-[15px] leading-relaxed">
                  <p>
                    Established near two decades ago, <span className="text-[#0071ba] font-bold">Investors Clinic</span> was created to dismantle the confusion of real estate and replace it with institutional-grade clarity.
                  </p>
                  <p>
                    We operate as a global boutique consultancy, harmonizing data-driven analytics with a personalized human touch to ensure every asset in your portfolio becomes a legacy.
                  </p>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-10 pt-6 border-t border-zinc-100">
                  {[
                    { val: "250K+", label: "Elite Families", icon: Users },
                    { val: "1500+", label: "Trusted Brands", icon: Building2 },
                    { val: "₹100K Cr+", label: "Sales Volume", icon: TrendingUp },
                  ].map((stat, i) => (
                    <div key={i} className="flex-1 min-w-[120px]">
                      <div className="flex items-center gap-2 mb-2">
                        <stat.icon size={16} className="text-[#ed1c24]" />
                        <span className="text-2xl font-black text-[#0071ba] tracking-tight">{stat.val}</span>
                      </div>
                      <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── MISSION & VISION ─── */}
        <section className="py-20 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  tag: "Our Mission",
                  title: "Professionalizing the Market",
                  body: "We empower investors with institutional-grade data and verified insights, ensuring complete transparency and confidence in every real estate decision.",
                  accent: "red",
                },
                {
                  icon: Eye,
                  tag: "Our Vision",
                  title: "The Global Gold Standard",
                  body: "Setting an international benchmark where disruptive technology meets 19 years of human wisdom and market expertise.",
                  accent: "zinc",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  {...fade(i * 0.15)}
                  className="bg-white border border-zinc-100 rounded-2xl p-10 group hover:border-red-200 hover:shadow-lg transition-all duration-500"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${i === 0 ? "bg-red-50" : "bg-zinc-100"}`}>
                    <card.icon className={`w-5 h-5 ${i === 0 ? "text-red-600" : "text-zinc-600"}`} />
                  </div>
                  <p className="text-red-500 text-[10px] font-semibold uppercase tracking-[0.3em] mb-2">{card.tag}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4 leading-tight">{card.title}</h3>
                  <div className="w-8 h-[2px] bg-red-600 rounded-full mb-5 group-hover:w-14 transition-all duration-500" />
                  <p className="text-zinc-500 text-sm leading-relaxed">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── JOURNEY / TIMELINE ─── */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fade()} className="mb-16 text-center">
              <p className="text-red-600 text-xs font-semibold uppercase tracking-[0.3em] mb-3">Milestones</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Our Journey</h2>
            </motion.div>

            <div className="relative">
              {/* Line */}
              <div className="absolute top-4 left-0 w-full h-[1px] bg-zinc-100 hidden md:block" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
                className="absolute top-4 left-0 w-full h-[1px] bg-red-500 hidden md:block z-10"
              />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 relative z-20">
                {journey.map((step, i) => (
                  <motion.div key={i} {...fade(i * 0.1)} className="flex flex-col items-center text-center group">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center mb-5 shadow-lg shadow-red-200 group-hover:scale-110 transition-transform border-2 border-white">
                      {i + 1}
                    </div>
                    <span className="text-2xl font-bold text-red-600 tracking-tight mb-1">{step.year}</span>
                    <span className="text-zinc-900 font-semibold text-sm mb-2">{step.title}</span>
                    <p className="text-zinc-400 text-xs leading-relaxed max-w-[140px]">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── LEADERSHIP ─── */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[90rem] mx-auto px-6">
            <motion.div {...fade()} className="mb-20 text-center">
              <p className="text-[#ed1c24] text-[10px] font-black uppercase tracking-[0.3em] mb-4">The People Behind It</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0071ba] tracking-tight">
                Meet Our <span className="text-[#ed1c24] font-medium font-serif italic">Leadership</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 justify-items-center">
              {leadership.map((person, i) => (
                <LeadershipCard key={i} person={person} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div {...fade()} className="lg:col-span-1 flex flex-col justify-center space-y-5">
                <p className="text-red-600 text-xs font-semibold uppercase tracking-[0.3em]">Client Stories</p>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight tracking-tight">
                  Voices of<br />
                  <span className="text-red-600 font-light italic">Trust.</span>
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="fill-red-500 text-red-500" />
                  ))}
                  <span className="text-zinc-400 text-xs ml-2 font-medium">4.9 / 5.0</span>
                </div>
              </motion.div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:col-span-2">
                {testimonials.map((t, i) => (
                  <motion.div key={i} {...fade(0.1 + i * 0.1)}
                    className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 hover:border-red-200 hover:shadow-md transition-all duration-400 flex flex-col"
                  >
                    <Quote size={20} className="text-red-200 mb-4 shrink-0" />
                    <p className="text-zinc-600 text-sm leading-relaxed italic flex-1">"{t.quote}"</p>
                    <div className="mt-5 pt-4 border-t border-zinc-100">
                      <p className="text-zinc-900 font-semibold text-sm">{t.name}</p>
                      <p className="text-red-500 text-[10px] uppercase tracking-widest font-medium mt-0.5">{t.tag}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <motion.div {...fade()} className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-4">
                <p className="text-red-600 text-xs font-semibold uppercase tracking-[0.3em]">Got Questions?</p>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight tracking-tight">
                  Common<br />
                  <span className="text-red-600 font-light italic">Insights.</span>
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  Learn more about our processes and how we safeguard your capital growth.
                </p>
              </motion.div>

              <motion.div {...fade(0.2)} className="lg:col-span-8">
                <div className="bg-white rounded-2xl border border-zinc-100 px-6 md:px-10 py-2">
                  <FAQItem
                    question="What makes Investors Clinic different from other consultancies?"
                    answer="We combine 19 years of institutional experience with cutting-edge data analytics to provide a transparent, end-to-end investment journey. Unlike traditional brokers, we act as long-term wealth partners, auditing every developer and project before recommendation."
                  />
                  <FAQItem
                    question="Is Investors Clinic only focused on the Indian market?"
                    answer="While we have a dominant footprint across India, we operate a robust global advisory desk with specialized offices in Dubai, London, and other major hubs — assisting NRIs and global investors in building diversified portfolios."
                  />
                  <FAQItem
                    question="How do you verify the projects you recommend?"
                    answer="Every project undergoes a multi-layer verification: developer track records, RERA registration, construction velocity assessments, and proprietary heatmaps to forecast capital appreciation and rental yield potential."
                  />
                  <FAQItem
                    question="What services do you provide besides property sales?"
                    answer="Our ecosystem covers Strategic Portfolio Management, Home Loan Assistance, Legal Title Verification, Vastu Consultation, and Resale/Rental Management — a 360-degree structure for the entire lifecycle of your asset."
                  />
                  <FAQItem
                    question="Who is the leadership behind Investors Clinic?"
                    answer="Founded in 2006 by Mr. Honeyy Katiyal, a visionary who pioneered organized real estate advisory in India. Our leadership board includes seasoned experts across Operations, HR, and Global Strategy."
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-20 px-4 md:px-6 bg-white">
          <motion.div
            {...fade()}
            className="max-w-[70rem] mx-auto bg-[#0a0a0a] rounded-3xl p-8 md:px-12 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(237,28,36,0.12),transparent_50%)] pointer-events-none" />

            <div className="relative space-y-2.5 text-left">
              <p className="text-[#ed1c24] text-[10px] font-black uppercase tracking-[0.3em]">Private Wealth Advisory</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Design Your <span className="text-[#ed1c24] font-medium font-serif italic">Legacy</span> Portfolio.
              </h2>
              <p className="text-zinc-400 text-sm max-w-md pt-1">
                Schedule a private consultation with our senior advisors today.
              </p>
            </div>

            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full sm:w-auto mt-2 md:mt-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#ed1c24] hover:bg-red-600 text-white px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(237,28,36,0.25)] whitespace-nowrap"
              >
                Book a Consultation <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-white/10 bg-transparent hover:bg-white/5 text-zinc-300 hover:text-white px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all whitespace-nowrap"
              >
                View Projects <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  );
};
