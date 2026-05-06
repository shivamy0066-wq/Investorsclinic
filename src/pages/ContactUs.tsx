import React, { Suspense, lazy, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Globe,
  FileText,
  Home,
  Trees,
  ArrowRight,
  Headphones,
  Users,
  Building2,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react';

const OfficeMap = lazy(() => import('../components/OfficeMap').then(module => ({ default: module.OfficeMap })));

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`transition-all duration-500 rounded-[2rem] border ${isOpen ? 'bg-white border-slate-200 shadow-xl' : 'bg-transparent border-transparent'} overflow-hidden mb-4`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 md:p-10 flex items-center justify-between text-left group"
      >
        <span className={`text-lg md:text-xl font-black transition-all tracking-tight uppercase leading-snug ${isOpen ? 'text-[#ED1C24]' : 'text-[#0073B7] group-hover:text-[#ED1C24]'}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-6 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#ED1C24] text-white rotate-180 shadow-[0_10px_20px_-5px_rgba(237,28,36,0.3)]' : 'bg-slate-100/50 text-slate-400 group-hover:bg-slate-100 group-hover:text-[#0073B7]'}`}>
          <ChevronDown size={24} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-8 md:px-10 pb-10">
              <div className="h-px w-full bg-slate-100 mb-8" />
              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium italic">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ContactUs = () => {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Systems are currently busy. Please try again or call us directly.');
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Direct Advisory",
      detail: "0120-4247285",
      sub: "H.O. Desk: 10AM - 6PM",
      color: "bg-[#0073B7]/10 text-[#0073B7]",
      link: "tel:01204247285"
    },
    {
      icon: Mail,
      title: "Official Inquiry",
      detail: "info@investorsclinic.in",
      sub: "Response within 2 hours",
      color: "bg-[#ED1C24]/10 text-[#ED1C24]",
      link: "mailto:info@investorsclinic.in"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Elite",
      detail: "+91 93550 57475",
      sub: "Instant property updates",
      color: "bg-emerald-500/10 text-emerald-400",
      link: "https://wa.me/919355057475"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to receive a detailed property portfolio?",
      answer: "Typically, our research team compiles a bespoke property portfolio within 24-48 hours once we have understood your specific investment requirements and risk appetite."
    },
    {
      question: "Do you offer international investment advisory?",
      answer: "Yes, we have specialized desks for Dubai, London, and Florida. Our global advisors can guide you through cross-border regulations and tax implications."
    },
    {
      question: "What documents are required for my first consultation?",
      answer: "Initially, no documents are required. Just your investment goals and target budget. Once we proceed to specific transactions, KYC documents will be needed as per regulatory norms."
    }
  ];

  const benefits = [
    { icon: ShieldCheck, title: "RERA Compliant", desc: "Every transaction is backed by verified legal standings." },
    { icon: Globe, title: "Global Reach", desc: "Expert guidance for investments in 10+ major economies." },
    { icon: Users, title: "HNI Specialized", desc: "Tailored portfolio management for private wealth clients." },
    { icon: Clock, title: "24/7 Concierge", desc: "Dedicated support for all your real estate documentation." }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdff] selection:bg-[#ED1C24]/10 selection:text-[#ED1C24] font-sans">
      <Header />
      
      <main>
        {/* PREMIUM HERO BANNER SECTION */}
        <section className="relative h-[65vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Advanced Background Layers */}
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1.05, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
              alt="Elite Business Environment" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-[#0a1120]/40 backdrop-blur-[1px]" />
            
            {/* Fine Technical Details */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:100px_100px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center space-y-8 relative z-10 pt-16">
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-1"
            >
              <a href="/" className="hover:text-[#ED1C24] transition-all hover:tracking-[0.6em]">Origin</a>
              <span className="w-1 h-1 rounded-full bg-[#ED1C24] shadow-[0_0_10px_rgba(237,28,36,0.3)]" />
              <span className="text-[#0073B7] italic">Advisory Hub</span>
            </motion.nav>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-8xl font-headline font-black text-[#0073B7] uppercase leading-[0.8] tracking-tighter">
                Connect <br /> <span className="text-[#ED1C24] italic text-[0.85em]">Strategically.</span>
              </h1>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#ED1C24] to-transparent mx-auto rounded-full blur-[0.5px]" />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium tracking-tight leading-relaxed italic"
            >
              Strategic property advisory for distinguished <br className="hidden md:block" /> residential and commercial portfolios.
            </motion.p>
          </div>
        </section>

        {/* QUICK CONTACT CARDS - Ultra Premium Floating */}
        <section className="max-w-6xl mx-auto px-6 -mt-20 relative z-20">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.8 }}
                className="bg-white/95 backdrop-blur-3xl p-10 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(10,30,59,0.08)] border border-white flex flex-col items-center text-center group hover:-translate-y-4 transition-all duration-700 hover:border-[#0073B7]/20"
              >
                <div className={`w-20 h-20 rounded-2xl ${method.color} flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-all duration-700`}>
                  <method.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em] mb-4">{method.title}</h3>
                <p className="text-2xl md:text-3xl font-black text-[#0073B7] tracking-tighter mb-2 transition-colors duration-500 group-hover:text-[#ED1C24]">{method.detail}</p>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">{method.sub}</p>
                
                <div className="mt-8 w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[#ED1C24] transition-all duration-500 text-[#ED1C24] bg-[#ED1C24]/5">
                  <ArrowRight size={20} />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* MAIN FORM SECTION - Re-engineered for Screenshot Fidelity */}
        <section className="pt-12 pb-20 md:pt-20 md:pb-24 bg-[#181941] border-y border-white/5 relative overflow-hidden">
          {/* Decorative Technical Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start relative z-10">
            
            {/* LEFT COLUMN: REFINED FORM */}
            <motion.div 
              {...fadeInUp} 
              className="lg:col-span-12 xl:col-span-7 bg-white/5 backdrop-blur-xl p-6 sm:p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#0073B7]/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
              
              <div className="relative z-10 mb-10 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Send an Inquiry</h3>
                <div className="h-[3px] w-12 bg-[#ED1C24] mt-4 rounded-full mx-auto md:mx-0" />
              </div>
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div key="success" {...fadeInUp} className="py-16 text-center space-y-8 relative z-10">
                    <div className="w-20 h-20 rounded-full bg-[#ED1C24]/20 text-[#ED1C24] flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 size={40} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight">Transmission Encoded</h3>
                      <p className="text-white/60 text-sm md:text-base font-medium max-w-sm mx-auto italic leading-relaxed">Our security protocols have verified your request. We will initiate contact shortly.</p>
                    </div>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="group flex items-center gap-3 mx-auto px-10 py-4 rounded-full border border-white/10 text-white font-black text-[11px] md:text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-[#181941] transition-all shadow-xl"
                    >
                      New Inquiry <ArrowRight size={14} />
                    </button>
                  </motion.div>
                ) : (
                  <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      {/* Full Name */}
                      <div className="space-y-2.5">
                        <label className="text-[10px] md:text-[11px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Full Name</label>
                        <div className="relative group">
                          <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#ED1C24] transition-colors" />
                          <input 
                            required 
                            type="text" 
                            placeholder="Ex: Alexander Thorne" 
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-14 pr-6 text-base md:text-sm font-medium text-white placeholder:text-white/10 transition-all focus:border-[#ED1C24] focus:ring-8 focus:ring-[#ED1C24]/10 outline-none" 
                          />
                        </div>
                      </div>
 
                      {/* Phone Reference */}
                      <div className="space-y-2.5">
                        <label className="text-[10px] md:text-[11px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Phone Reference</label>
                        <div className="relative group">
                          <Phone size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#ED1C24] transition-colors" />
                          <input 
                            required 
                            type="tel" 
                            placeholder="+1 (555) 000-0000" 
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-14 pr-6 text-base md:text-sm font-medium text-white placeholder:text-white/10 transition-all focus:border-[#ED1C24] focus:ring-8 focus:ring-[#ED1C24]/10 outline-none" 
                          />
                        </div>
                      </div>
                    </div>
 
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      {/* Search Location */}
                      <div className="space-y-2.5">
                        <label className="text-[10px] md:text-[11px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Search Location</label>
                        <div className="relative group">
                          <Globe size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#ED1C24] transition-colors" />
                          <input 
                            required 
                            type="text" 
                            placeholder="Dubai, London, Noida..." 
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-14 pr-6 text-base md:text-sm font-medium text-white placeholder:text-white/10 transition-all focus:border-[#ED1C24] focus:ring-8 focus:ring-[#ED1C24]/10 outline-none" 
                          />
                        </div>
                      </div>
 
                      {/* Estimated Budget */}
                      <div className="space-y-2.5">
                        <label className="text-[10px] md:text-[11px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">Estimated Budget</label>
                        <div className="relative group">
                          <select 
                            required 
                            defaultValue="" 
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-6 text-base md:text-sm font-medium text-white appearance-none transition-all focus:border-[#ED1C24] focus:ring-8 focus:ring-[#ED1C24]/10 outline-none cursor-pointer"
                          >
                            <option value="" disabled className="bg-[#181941]">Select Budget Range</option>
                            <option value="50L-1Cr" className="bg-[#181941]">₹50 Lacs - ₹1 Cr</option>
                            <option value="1Cr-5Cr" className="bg-[#181941]">₹1 Cr - ₹5 Cr</option>
                            <option value="5Cr-10Cr" className="bg-[#181941]">₹5 Cr - ₹10 Cr</option>
                            <option value="10Cr+" className="bg-[#181941]">₹10 Cr+</option>
                          </select>
                          <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none group-focus-within:rotate-180 transition-transform" />
                        </div>
                      </div>
                    </div>
 
                    {/* Message */}
                    <div className="space-y-2.5">
                      <label className="text-[10px] md:text-[11px] font-black text-white/30 uppercase tracking-[0.3em] ml-1">How can we assist you?</label>
                      <textarea 
                        rows={4} 
                        placeholder="Describe your property requirements or investment goals in detail..." 
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-6 text-base md:text-sm font-medium text-white placeholder:text-white/10 transition-all focus:border-[#ED1C24] focus:ring-8 focus:ring-[#ED1C24]/10 outline-none resize-none lg:min-h-[120px]" 
                      />
                    </div>
 
                    <button 
                      disabled={status === 'submitting'}
                      className="w-full relative group overflow-hidden bg-[#ED1C24] text-white py-4 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] transition-all shadow-[0_20px_60px_-10px_rgba(237,28,36,0.5)] md:hover:shadow-[0_30px_80px_-10px_rgba(237,28,36,0.6)] active:scale-[0.97] flex items-center justify-center gap-4"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#ED1C24] to-[#C4161B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative z-10 flex items-center gap-3">
                        {status === 'submitting' ? <>Processing... <Loader2 size={18} className="animate-spin" /></> : <>Submit Form <ArrowRight size={18} /></>}
                      </span>
                    </button>
 
                    <div className="flex items-center justify-center gap-3 pt-6 border-t border-white/5">
                       <ShieldCheck size={14} className="text-white/10" />
                       <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.4em]">Enterprise Grade Encryption Active</span>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
 
            {/* RIGHT COLUMN: CARDS */}
            <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
              {/* Partnering Card */}
              <motion.div 
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#ED1C24]/5 rounded-full blur-[100px] -mr-40 -mt-40" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0073B7]/5 rounded-full blur-[80px] -ml-24 -mb-24" />
                
                <div className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-sm font-black text-white/40 uppercase tracking-[0.3em]">Partnering In</h4>
                    <h2 className="text-3xl font-black text-white tracking-tighter italic"><span className="text-[#0073B7]">Your</span> Success</h2>
                  </div>
                  <p className="text-white/40 text-sm font-medium leading-relaxed max-w-xs">Delivering trusted real estate investment solutions across the global premium markets.</p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                    <div className="text-center space-y-3">
                      <Users size={24} className="mx-auto text-[#ED1C24]" strokeWidth={1} />
                      <div>
                        <div className="text-2xl font-black tracking-tight text-white">250K+</div>
                        <div className="text-[8px] font-black uppercase text-white/20 tracking-[0.1em]">Families Served</div>
                      </div>
                    </div>
                    <div className="text-center space-y-3">
                      <Building2 size={24} className="mx-auto text-[#0073B7]" strokeWidth={1} />
                      <div>
                        <div className="text-2xl font-black tracking-tight text-white">1500+</div>
                        <div className="text-[8px] font-black uppercase text-white/20 tracking-[0.1em]">Partnerships</div>
                      </div>
                    </div>
                    <div className="text-center space-y-3">
                      <Clock size={24} className="mx-auto text-[#ED1C24]" strokeWidth={1} />
                      <div>
                        <div className="text-2xl font-black tracking-tight text-white">17+</div>
                        <div className="text-[8px] font-black uppercase text-white/20 tracking-[0.1em]">Years Exp</div>
                      </div>
                    </div>
                  </div>
 
                  {/* Success Validation */}
                  <div className="pt-6 flex flex-col sm:flex-row items-center gap-6 border-t border-white/5">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#181941] bg-slate-800 flex items-center justify-center overflow-hidden">
                          <User size={18} className="text-slate-500" />
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#ED1C24] animate-pulse" />
                        <p className="text-[9px] font-bold text-white/80 uppercase tracking-[0.2em]">Verified Excellence</p>
                      </div>
                      <p className="text-[10px] font-medium text-white/30">Trusted by <span className="text-[#0073B7] font-bold">5,000+</span> global institutional partners.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* WE HELP YOU WITH - From Screenshot */}
              <motion.div 
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0073B7]/5 rounded-full blur-[80px] -mr-32 -mt-32" />
                <div className="relative z-10 space-y-8">
                  <div className="space-y-3">
                    <h4 className="text-[10px] md:text-[11px] font-black text-white/60 uppercase tracking-[0.4em]">We help you with</h4>
                    <div className="h-[3px] w-10 bg-[#ED1C24] rounded-full" />
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
                    {/* Category 1: Residential */}
                    <div className="flex flex-col items-center gap-4 text-center group cursor-default">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ED1C24] shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <Home size={24} strokeWidth={1.5} />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] font-black text-white uppercase tracking-tight">Residential</p>
                        <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.1em]">Investments</p>
                      </div>
                    </div>

                    {/* Category 2: Commercial */}
                    <div className="flex flex-col items-center gap-4 text-center group cursor-default">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#0073B7] shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <Building2 size={24} strokeWidth={1.5} />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] font-black text-white uppercase tracking-tight">Commercial</p>
                        <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.1em]">Investments</p>
                      </div>
                    </div>

                    {/* Category 3: NRI */}
                    <div className="flex flex-col items-center gap-4 text-center group cursor-default">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ED1C24] shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <Globe size={24} strokeWidth={1.5} />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] font-black text-white uppercase tracking-tight">NRI</p>
                        <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.1em]">Investments</p>
                      </div>
                    </div>

                    {/* Category 4: Land & Plot */}
                    <div className="flex flex-col items-center gap-4 text-center group cursor-default">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#0073B7] shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <Trees size={24} strokeWidth={1.5} />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] font-black text-white uppercase tracking-tight">Land & Plot</p>
                        <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.1em]">Investments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* OFFICE LOCATIONS - Light Elite Theme */}
        <section className="pt-24 pb-24 bg-white border-y border-slate-100 relative overflow-hidden">
          {/* Subtle Background Intel Grid */}
          <div className="absolute inset-0 opacity-[0.2] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#0073B7_1px,transparent_1px)] [background-size:60px_60px]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-16 space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="h-[2px] w-12 bg-[#ED1C24]" />
                <span className="text-[#0073B7] font-black text-[11px] uppercase tracking-[0.5em] leading-none">Global Network</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-black text-[#0073B7] uppercase tracking-tighter">Strategic <span className="text-[#ED1C24] italic leading-tight">Hubs.</span></h2>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-4 shadow-[0_60px_120px_-30px_rgba(0,115,183,0.12)] border border-slate-100 overflow-hidden mb-24 group/map relative backdrop-blur-sm">
              <div className="h-[450px] w-full rounded-[2.5rem] overflow-hidden bg-slate-50 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.514782069796!2d77.3456!3d28.5395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d6d6d6d6d7%3A0x1234567890abcdef!2sInvestors+Clinic+Corporate+Office!5e0!3m2!1sen!2sin!4v1714970000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
                
                {/* Float link button to the shared map */}
                <div className="absolute bottom-10 right-10 z-20">
                  <motion.a
                    href="https://share.google/pQKCUGoM5JUnj5kfq"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-[#ED1C24] px-8 py-4 rounded-full shadow-2xl text-white font-black text-[11px] uppercase tracking-widest hover:brightness-110 transition-all border border-white/10"
                  >
                    <MapPin size={16} /> View Private Location <ArrowRight size={14} />
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { city: "Noida (H.O.)", rera: "UPRERAAGT10052", addr: "Sector 94, Astralis Tower, Supernova", phone: "0120-4247285", mail: "noida@investorsclinic.in" },
                { city: "Gurugram", rera: "HARERA/95 OF 2017", addr: "M3M Broadway, Sector 71, Sohna Rd", phone: "0124-6000000", mail: "ggn@investorsclinic.in" },
                { city: "Mumbai", rera: "MAHARERA/A51700004213", addr: "Ashar Millenia, Kapurbawdi, Thane", phone: "022-4000000", mail: "mumbai@investorsclinic.in" }
              ].map((office, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -12 }}
                  className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 hover:border-[#0073B7]/50 transition-all duration-700 group hover:bg-[#0073B7]/5 shadow-xl"
                >
                  <h4 className="text-2xl font-black text-[#0073B7] uppercase mb-6 tracking-tight group-hover:text-[#ED1C24] transition-colors">{office.city}</h4>
                  <div className="space-y-6 text-slate-500 text-[13px] font-medium">
                    <p className="flex items-start gap-5">
                      <MapPin size={24} className="text-[#ED1C24] shrink-0 mt-0.5" />
                      <span className="leading-relaxed regular line-clamp-2">{office.addr}</span>
                    </p>
                    <p className="flex items-center gap-5">
                      <Phone size={22} className="text-[#0073B7] shrink-0" />
                      <span className="text-slate-900">{office.phone}</span>
                    </p>
                    <p className="flex items-center gap-5">
                      <Mail size={22} className="text-[#ED1C24] shrink-0" />
                      <span className="text-slate-900">{office.mail}</span>
                    </p>
                    <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">RERA REG:</span>
                      <span className="text-[10px] font-black text-[#0073B7] uppercase tracking-widest">{office.rera}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION - Elite Strategic Theme */}
        <section className="pt-24 pb-32 bg-slate-50/50 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0073B7]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ED1C24]/5 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center space-y-6 mb-16">
               <motion.div 
                 {...fadeInUp}
                 className="inline-flex items-center gap-4 bg-white border border-slate-100 px-7 py-3 rounded-full shadow-sm"
               >
                 <div className="w-2 h-2 rounded-full bg-[#ED1C24] animate-pulse" />
                 <span className="text-[#0073B7] font-black text-[11px] uppercase tracking-[0.4em]">Intelligence Support</span>
               </motion.div>
               <motion.h2 
                 {...fadeInUp}
                 transition={{ delay: 0.1 }}
                 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black text-[#0073B7] uppercase tracking-tighter leading-none"
               >
                 STRESS-FREE <span className="text-[#ED1C24] italic">INVESTING.</span>
               </motion.h2>
               <div className="h-1 w-24 bg-[#0073B7]/10 mx-auto rounded-full" />
               <motion.p 
                 {...fadeInUp}
                 transition={{ delay: 0.2 }}
                 className="text-slate-500 font-medium text-lg md:text-xl max-w-2xl mx-auto italic"
               >
                 We answer the complex questions so you can focus on building your legacy.
               </motion.p>
            </div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
