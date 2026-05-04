import React, { useRef, useState, useEffect } from "react";
import { 
  motion, 
  useScroll, 
  useSpring, 
  useInView, 
  useMotionValue, 
  useTransform, 
  animate 
} from "motion/react";
import { 
  Award, Users, User, Target, ShieldCheck, ArrowRight, Building2, 
  Globe2, Briefcase, Rocket, Eye, CheckCircle2, Star, 
  Quote, TrendingUp, Handshake, Headphones, Home, Plus, X, Sparkles, ChevronDown 
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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
        {/* 1. Hero Section - Compact Inner Page Banner */}
        <section className="relative h-[220px] md:h-[340px] flex items-center overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
              alt="Premium Real Estate" 
              className="w-full h-full object-cover object-center"
            />
            {/* Professional Dark Overlay - Neutral */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>

          <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Small Label */}
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-secondary" />
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-secondary">
                  Our Evolution
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-headline font-black text-white tracking-widest uppercase leading-none">
                Who We <span className="text-secondary italic">Are</span>
              </h1>

              {/* Clean Breadcrumb */}
              <div className="flex items-center gap-2 pt-2">
                <a href="/" className="text-white/50 hover:text-secondary transition-colors text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
                  Home
                </a>
                <span className="text-white/30 text-[10px] md:text-[11px]">/</span>
                <span className="text-white font-bold text-[10px] md:text-[11px] uppercase tracking-widest">About Our Legacy</span>
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

        {/* 4. Mission & Vision - Refined Premium Layout */}
        <section className="py-8 md:py-12 bg-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
              
              {/* Mission Card - Refined & Compact */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50/50 p-10 md:p-12 rounded-[2rem] border border-slate-100 flex flex-col items-start group hover:-translate-y-2 transition-all duration-700 cursor-default relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Target className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-secondary uppercase tracking-[0.4em] mb-1">Our Purpose</span>
                    <h2 className="text-2xl md:text-3xl font-headline font-black text-primary uppercase tracking-tighter leading-tight">
                      Professionalizing <br /> <span className="text-secondary italic">The Market.</span>
                    </h2>
                  </div>
                  <div className="w-8 h-[2px] bg-secondary rounded-full" />
                  <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed max-w-sm">
                    We empower investors with institutional-grade data and verified insights, ensuring every property journey is built on a foundation of absolute trust.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card - Refined & Compact */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-primary to-[#051124] p-10 md:p-12 rounded-[2rem] shadow-xl flex flex-col items-start group hover:-translate-y-2 transition-all duration-700 cursor-default relative overflow-hidden h-full"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(237,28,36,0.1),transparent)]" />
                
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-10 group-hover:bg-secondary transition-all duration-500">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.4em] mb-1">Our Future</span>
                    <h2 className="text-2xl md:text-3xl font-headline font-black text-white uppercase tracking-tighter leading-tight">
                      Global Gold <br /> <span className="text-secondary italic">Standard.</span>
                    </h2>
                  </div>
                  <div className="w-8 h-[2px] bg-secondary rounded-full" />
                  <p className="text-white/70 text-xs md:text-sm font-medium leading-relaxed max-w-sm group-hover:text-white transition-colors">
                    Setting the international benchmark where disruptive technology meets 19 years of human wisdom to create sustainable wealth.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 5. Our Journey - Refined Compact Spacing */}
        <section className="py-[60px] bg-[#0a0f1a] overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-[60px]">
              <h2 className="text-2xl md:text-3xl font-headline font-black text-white uppercase tracking-tighter">
                Our Journey
              </h2>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* The Timeline Line - Centered on circles */}
              <div className="absolute top-[15px] left-0 w-full h-[2px] bg-secondary/20 hidden md:block" />
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
                    <div className="w-[30px] h-[30px] rounded-full bg-secondary text-white flex items-center justify-center text-[11px] font-black mb-[15px] shadow-[0_0_20px_rgba(237,28,36,0.6)] group-hover:scale-110 transition-transform cursor-default relative z-20 border-2 border-white/5">
                      {step.num}
                      <div className="absolute inset-0 rounded-full animate-pulse bg-secondary/40 -z-10 blur-sm" />
                    </div>

                    {/* Content Grouping */}
                    <div className="flex flex-col items-center">
                      <span className="text-[22px] md:text-[24px] font-black text-secondary block tracking-tighter mb-[10px]">
                        {step.year}
                      </span>
                      <p className="text-white/60 text-[11px] md:text-[12px] font-medium leading-relaxed max-w-[160px] mx-auto group-hover:text-white/90 transition-colors">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Why Choose Us - Refined & Compact */}
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
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
                <h2 className="text-3xl md:text-5xl font-headline font-black text-primary mb-8 leading-[1.1] tracking-tight">
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
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                          <item.icon className="w-4 h-4 text-secondary group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-black text-primary tracking-tight group-hover:text-secondary transition-colors">{item.title}</h4>
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
                  <div className="absolute -inset-2 bg-primary/5 rounded-[3rem] group-hover:scale-105 transition-transform duration-700" />
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

        {/* 8. Team Leadership - Professional Visibility Enhanced */}
        <section className="py-16 md:py-24 bg-[#0a1120] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(237,28,36,0.1),transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-headline font-black text-white uppercase tracking-tighter">
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
                  className="relative group h-[400px] md:h-[480px] overflow-hidden rounded-[2rem] bg-slate-100 border border-white/10 shadow-2xl"
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


        {/* 11. CTA - Refined Compact Version */}
        <section className="pt-4 pb-12 px-6">
          <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-10 md:p-16 relative overflow-hidden border border-white/5">
            {/* Background elements */}
            <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
              <Building2 className="w-96 h-96 text-white" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(188,0,17,0.1),transparent)]" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div {...fadeInUp} className="max-w-2xl text-center lg:text-left">
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
