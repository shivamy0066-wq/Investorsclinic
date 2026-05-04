import React, { useRef, useState, useEffect } from "react";
import { 
  motion, 
  useScroll, 
  useSpring, 
  useInView, 
  useMotionValue, 
  useTransform, 
  animate,
  AnimatePresence
} from "motion/react";
import { 
  Award, Users, User, Target, ShieldCheck, ArrowRight, Building2, 
  Globe2, Briefcase, Rocket, Eye, CheckCircle2, Star, 
  Quote, TrendingUp, Handshake, Headphones, Home, Plus, X, Sparkles, ChevronDown, Minus 
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 md:py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-sm md:text-base font-black text-[#0a1120] uppercase tracking-tight group-hover:text-secondary transition-colors pr-8">
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-secondary text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
          <Plus size={16} className={isOpen ? 'hidden' : 'block'} />
          <Minus size={16} className={isOpen ? 'block' : 'hidden'} />
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
            <div className="pb-6 text-slate-500 leading-relaxed font-medium text-[13px] md:text-sm max-w-4xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const AboutUs = () => {
  const [activeFounder, setActiveFounder] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* 1. Hero Section - Cinematic Elite Banner */}
        <section className="relative h-[350px] md:h-[450px] flex items-center overflow-hidden bg-[#050b18]">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 15, repeat: Infinity, repeatType: "alternate", ease: "linear" }}
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
              alt="Premium Architecture" 
              className="w-full h-full object-cover object-center opacity-60"
            />
            {/* Elegant Tech Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050b18] via-[#050b18]/80 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(237,28,36,0.1),transparent_70%)]" />
            
            {/* Subtle Digital Grid / Wave Effect */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050b18] to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-[2px] w-10 bg-secondary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">
                    Our Corporate Legacy
                  </span>
                </motion.div>

                <h1 className="text-4xl md:text-7xl font-headline font-black text-white tracking-widest uppercase leading-none tracking-tighter drop-shadow-2xl">
                  Who We <span className="text-secondary italic">Are.</span>
                </h1>
              </div>

              {/* Clean Premium Breadcrumb - Night Mode */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10 w-fit">
                <a href="/" className="text-white/30 hover:text-secondary transition-all text-[10px] font-black uppercase tracking-[0.3em] hover:tracking-[0.4em]">
                  Origin
                </a>
                <span className="w-1 h-1 rounded-full bg-secondary" />
                <span className="text-white/80 font-black text-[10px] uppercase tracking-[0.3em] italic">The Institutional Perspective</span>
              </div>
            </motion.div>
          </div>
        </section>


        {/* 3. Who We Are - Ultra-Premium Editorial Redesign */}
        <section id="who-we-are" className="pt-4 pb-2 md:pt-8 md:pb-4 bg-[#fafafa] overflow-hidden relative">
          {/* Subtle background artistic text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] -z-10">
            <span className="text-[25vw] font-headline font-black uppercase tracking-tighter leading-none">LEGACY</span>
          </div>
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Artistic Image Composite */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                className="lg:col-span-4 relative"
              >
                <div className="relative z-10 rounded-[1.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-[6px] border-white bg-white group">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                    className="w-full object-cover aspect-[4/5] scale-100 group-hover:scale-105 transition-transform duration-[2000ms]"
                    alt="Corporate Heritage"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-700" />
                </div>
                
                {/* Years Experience - Premium Floating Tile */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -top-4 -left-3 md:-left-6 bg-secondary text-white px-5 py-6 md:px-7 md:py-8 rounded-[1.2rem] shadow-[0_15px_30px_-10px_rgba(237,28,36,0.3)] z-20 flex flex-col items-center justify-center border-[5px] border-white"
                >
                  <span className="text-3xl md:text-4xl font-black leading-none tracking-tighter">19</span>
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mt-1 whitespace-nowrap">Years Of Power</span>
                </motion.div>

                {/* Second Floating Element - The Tagline */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -right-6 bg-white py-4 px-6 rounded-xl shadow-lg z-20 border border-slate-50 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                    <Award className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-primary font-black text-[10px] uppercase tracking-wider leading-none">Building Trust</p>
                    <p className="text-slate-400 font-bold text-[8px] uppercase mt-1">Since 2006</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column: Refined Editorial Content */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="lg:col-span-8"
              >
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-headline font-black text-primary leading-tight tracking-tighter uppercase">
                      Building Trust <span className="text-secondary italic font-serif ml-2">Since 2006.</span>
                    </h2>
                  </div>

                  <div className="max-w-xl space-y-4 text-slate-500 font-medium text-sm md:text-base leading-relaxed">
                    <p className="border-l-4 border-secondary pl-4 italic text-primary/80">
                      "Building Trust Since 2006 isn't just a slogan; it's the foundation of over 1.9 Lakh stories of success."
                    </p>
                    <p>
                      Established near two decades ago, <span className="text-primary font-black">Investors Clinic</span> was created to dismantle the confusion of real estate and replace it with institutional-grade clarity.
                    </p>
                    <p className="opacity-80">
                      We operate as a global boutique consultancy, harmonizing data-driven analytics with a personalized human touch to ensure every asset in your portfolio becomes a legacy.
                    </p>
                  </div>

                  {/* Refined Stats Block */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                    {[
                      { icon: Users, val: "250K+", label: "Elite Families" },
                      { icon: Building2, val: "1500+", label: "Trusted Brands" },
                      { icon: TrendingUp, val: "₹100K Cr+", label: "Sales Volume" }
                    ].map((stat, i) => (
                      <div key={i} className="group border-b border-slate-200 pb-4 hover:border-secondary transition-colors duration-500">
                        <div className="flex items-center gap-3 mb-1">
                          <stat.icon className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                          <span className="text-xl md:text-2xl font-black text-primary group-hover:text-secondary transition-colors tracking-tighter">{stat.val}</span>
                        </div>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Mission & Vision - Compact Premium Dark Theme */}
        <section className="py-8 md:py-12 bg-[#0a1120] relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(237,28,36,0.08),transparent_70%)]" />
          
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              
              {/* Mission Card - Compact Dark Glassmorphism */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border border-white/10 flex flex-col items-start group hover:-translate-y-1 transition-all duration-700 cursor-default relative overflow-hidden h-full shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full -mr-12 -mt-12 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-500">
                  <Target className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                </div>
                
                <div className="space-y-3 relative z-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] font-black text-secondary uppercase tracking-[0.4em]">Our Purpose</span>
                    <h2 className="text-xl md:text-2xl font-headline font-black text-white uppercase tracking-tighter leading-tight">
                      Professionalizing <br /> <span className="text-secondary italic">The Market.</span>
                    </h2>
                  </div>
                  <div className="w-8 h-[2px] bg-secondary rounded-full" />
                  <p className="text-slate-400 text-xs font-medium leading-relaxed max-w-sm group-hover:text-white/80 transition-colors">
                    We empower investors with institutional-grade data and verified insights, ensuring transparency in every journey.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card - Compact Dark Glassmorphism */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border border-white/10 flex flex-col items-start group hover:-translate-y-1 transition-all duration-700 cursor-default relative overflow-hidden h-full shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/20 rounded-full -mr-12 -mt-12 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-secondary transition-all duration-500">
                  <Eye className="w-4 h-4 text-secondary group-hover:text-white transition-colors" />
                </div>
                
                <div className="space-y-3 relative z-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.4em]">Our Future</span>
                    <h2 className="text-xl md:text-2xl font-headline font-black text-white uppercase tracking-tighter leading-tight">
                      Global Gold <br /> <span className="text-secondary italic">Standard.</span>
                    </h2>
                  </div>
                  <div className="w-8 h-[2px] bg-secondary rounded-full" />
                  <p className="text-slate-400 text-xs font-medium leading-relaxed max-w-sm group-hover:text-white/80 transition-colors">
                    Setting the international benchmark where disruptive technology meets 19 years of human wisdom.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>

        {/* 5. Our Journey - Light Theme Professional Redesign */}
        <section className="py-12 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-headline font-black text-primary uppercase tracking-tighter">
                Our Journey
              </h2>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* The Timeline Line - Centered on circles */}
              <div className="absolute top-[15px] left-0 w-full h-[2px] bg-slate-100 hidden md:block" />
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute top-[15px] left-0 h-[2px] bg-secondary hidden md:block z-10"
              />

              <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 relative z-20">
                {[
                  { num: 1, year: "2005", desc: "Founded in Noida with a vision to simplify real estate" },
                  { num: 2, year: "2010", desc: "Expanded to 10 cities across India" },
                  { num: 3, year: "2015", desc: "Crossed 1,00,000 satisfied customers milestone" },
                  { num: 4, year: "2020", desc: "Launched international offices for NRI investors" },
                  { num: 5, year: "2024", desc: "1,90,000+ customers | 700+ developers | 2000+ projects" }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center group w-full md:w-[180px]"
                  >
                    {/* Circle Node - Precise Small Size */}
                    <div className="w-[30px] h-[30px] rounded-full bg-secondary text-white flex items-center justify-center text-[11px] font-black mb-[15px] shadow-[0_5px_15px_rgba(237,28,36,0.3)] group-hover:scale-110 transition-transform cursor-default relative z-20 border-2 border-white">
                      {step.num}
                      <div className="absolute inset-0 rounded-full animate-pulse bg-secondary/40 -z-10 blur-sm" />
                    </div>

                    {/* Content Grouping */}
                    <div className="flex flex-col items-center">
                      <span className="text-[22px] md:text-[24px] font-black text-secondary block tracking-tighter mb-[10px]">
                        {step.year}
                      </span>
                      <p className="text-slate-500 text-[11px] md:text-[12px] font-medium leading-relaxed max-w-[160px] mx-auto group-hover:text-primary transition-colors">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Team Leadership - Light Theme Professional Redesign */}
        <section className="py-14 md:py-20 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(237,28,36,0.05),transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-headline font-black text-primary uppercase tracking-tighter">
                Meet Our <span className="text-secondary italic">Leadership</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Honeyy Katiyal", role: "Founder Chairman", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", story: "Visionary leader behind the digital transformation of Indian real estate advisory." },
                { name: "Sakshee Katiyal", role: "COO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", story: "Driving operational excellence and institutional-grade service delivery across India." },
                { name: "Sunny Katiyal", role: "Co-founder & Managing Director", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", story: "Strategist focused on global expansion and building high-compliance benchmarks." },
                { name: "Bhawna Katiyal", role: "President HR", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop", story: "Nurturing the elite talent pool that drives our committed to excellence philosophy." }
              ].map((founder, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group h-[380px] md:h-[420px] overflow-hidden rounded-[2rem] bg-slate-100 border border-white/10 shadow-2xl"
                >
                  {/* Profile Image - Always Bright and Visible */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={founder.image} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      alt={founder.name} 
                    />
                    {/* Minimal bottom gradient for text readability */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                  </div>
                  
                  {/* Name & Role (Clearly visible at bottom) */}
                  <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                    <h4 className="text-xl md:text-2xl font-headline font-black text-white mb-1 uppercase tracking-tight drop-shadow-lg">{founder.name}</h4>
                    <p className="text-secondary font-black uppercase tracking-[0.2em] text-[10px] drop-shadow-md">{founder.role}</p>
                  </div>

                  {/* Story Overlay on Hover */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-20 bg-secondary/95 p-10 flex flex-col justify-center text-white transition-all duration-500 cursor-pointer"
                  >
                    <Quote className="w-8 h-8 text-white/30 mb-6" />
                    <p className="text-sm md:text-base font-bold leading-relaxed mb-8">"{founder.story}"</p>
                    <div className="flex items-center gap-2 font-black text-[9px] uppercase tracking-widest mt-auto">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Testimonials - Refined Theme Integration */}
        <section className="pt-8 pb-4 md:pt-12 md:pb-8 bg-[#fcfdff] overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/5 rounded-full md:mb-12 md:mr-12 -z-10 blur-3xl" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 space-y-4">
                <h2 className="text-3xl md:text-4xl font-headline font-black text-primary leading-[1.1]">Voices of <span className="text-secondary italic">Trust.</span></h2>
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
                            <p className="text-xs font-black text-primary uppercase tracking-tight">{t.name}</p>
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


        {/* 10. Corporate FAQ Section - Premium Minimalist */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                <div className="space-y-4 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-10 h-[2px] bg-secondary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Inquiry Desk</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-headline font-black text-primary leading-tight uppercase tracking-tighter">
                    Corporate <br /> <span className="text-secondary italic">Insights.</span>
                  </h2>
                  <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed max-w-[280px] mx-auto lg:mx-0">
                    Discover more about our institutional processes and how we protect your capital growth.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-slate-50/50 rounded-[2.5rem] p-4 md:p-10 border border-slate-100">
                  <FAQItem 
                    question="What makes Investors Clinic different from other real estate consultancies?"
                    answer="We combine 19 years of institutional experience with cutting-edge data analytics to provide a transparent, end-to-end investment journey. Unlike traditional brokers, we act as long-term wealth partners, auditing every developer and project before recommendation."
                  />
                  <FAQItem 
                    question="Is Investors Clinic only focused on the Indian market?"
                    answer="While we have a dominant footprint across India, we operate a robust global advisory desk. We have specialized offices and partners in Dubai, London, and other major hubs, assisting NRIs and global investors in building cross-border diversified portfolios."
                  />
                  <FAQItem 
                    question="How do you verify the projects you recommend?"
                    answer="Every project undergoes a multi-layer verification process. We evaluate developer track records, check RERA registration authenticity, assess construction velocity, and use proprietary heatmaps to forecast capital appreciation and rental yield potential."
                  />
                  <FAQItem 
                    question="What services do you provide besides property sales?"
                    answer="Our ecosystem covers Strategic Portfolio Management, Home Loan Assistance, Legal Title Verification, Vastu Consultation, and Resale/Rental Management. We provide a 360-degree support structure for the entire lifecycle of your real estate asset."
                  />
                  <FAQItem 
                    question="Who is the leadership behind Investors Clinic?"
                    answer="The company was founded in 2006 by Mr. Honeyy Katiyal, a visionary entrepreneur who pioneered organized real estate advisory in India. Our leadership board consists of seasoned industry experts across Operations, HR, and Global Strategy."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. CTA - Premium Elite Version */}
        <section className="py-4 pb-12 px-6 relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-[1200px] mx-auto bg-gradient-to-r from-[#003366] to-[#001a33] rounded-[2rem] p-10 md:p-12 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-center justify-between gap-10"
          >
            {/* Artistic Watermark - Building Shapes */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-[0.03] pointer-events-none z-0">
              <Building2 className="w-full h-full transform translate-x-1/4 translate-y-1/4" />
            </div>
            
            <div className="relative z-10 space-y-4 text-center md:text-left">
              {/* Badge Label */}
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="h-[2px] w-6 bg-secondary" />
                <span className="text-secondary font-black tracking-[0.3em] uppercase text-[10px]">Private Wealth Advisory</span>
                <div className="h-[2px] w-6 bg-secondary" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-black text-white leading-tight tracking-tight">
                Design Your <span className="text-secondary italic">Legacy</span> Portfolio.
              </h2>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#ed1c24] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center gap-3 shadow-2xl shadow-red-600/20 whitespace-nowrap transition-all"
              >
                Book VIP Consultation
                <ArrowRight size={16} />
              </motion.button>
              
              <motion.button 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent text-white border-2 border-white/20 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center gap-3 whitespace-nowrap transition-all"
              >
                View Case Studies
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
