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
  ArrowRight,
  Headphones,
  Users,
  Building2,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronRight,
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react';

const OfficeMap = lazy(() => import('../components/OfficeMap').then(module => ({ default: module.OfficeMap })));

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-[#0a1120] group-hover:text-secondary transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-secondary text-white' : 'bg-slate-50 text-slate-400'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-500 leading-relaxed font-medium">
              {answer}
            </p>
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
      color: "bg-blue-50 text-blue-600",
      link: "tel:01214247285"
    },
    {
      icon: Mail,
      title: "Official Inquiry",
      detail: "info@investorsclinic.in",
      sub: "Response within 2 hours",
      color: "bg-amber-50 text-amber-600",
      link: "mailto:info@investorsclinic.in"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Elite",
      detail: "+91 93550 57475",
      sub: "Instant property updates",
      color: "bg-emerald-50 text-emerald-600",
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
    <div className="min-h-screen bg-[#fcfdff] selection:bg-secondary/10 selection:text-secondary font-sans">
      <Header />
      
      <main>
        {/* PREMIUM HERO BANNER SECTION */}
        <section className="relative h-[55vh] min-h-[500px] flex items-center justify-center overflow-hidden">
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
            <div className="absolute inset-0 bg-[#0a1120]/85 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fcfdff] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(237,28,36,0.15),transparent_70%)]" />
            
            {/* Fine Technical Details */}
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center space-y-8 relative z-10 pt-16">
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-1"
            >
              <a href="/" className="hover:text-secondary transition-all hover:tracking-[0.6em]">Origin</a>
              <span className="w-1 h-1 rounded-full bg-secondary shadow-[0_0_10px_rgba(237,28,36,0.5)]" />
              <span className="text-secondary italic">Advisory Hub</span>
            </motion.nav>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-[7rem] font-headline font-black text-white uppercase leading-[0.8] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                Connect <br /> <span className="text-secondary italic text-[0.85em]">Strategically.</span>
              </h1>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto rounded-full blur-[0.5px]" />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-2xl text-white/30 max-w-2xl mx-auto font-medium tracking-tight leading-relaxed italic"
            >
              Strategic property advisory for distinguished <br className="hidden md:block" /> residential and commercial portfolios.
            </motion.p>
          </div>
        </section>

        {/* QUICK CONTACT CARDS - Ultra Premium Floating */}
        <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.8 }}
                className="bg-white/90 backdrop-blur-3xl p-8 rounded-[3rem] shadow-[0_30px_60px_-20px_rgba(10,30,59,0.08)] border border-white/80 flex flex-col items-center text-center group hover:-translate-y-3 transition-all duration-700"
              >
                <div className={`w-16 h-16 rounded-2xl ${method.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-all duration-700`}>
                  <method.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-3">{method.title}</h3>
                <p className="text-2xl font-black text-[#0a1120] tracking-tighter mb-1 transition-colors duration-500">{method.detail}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-60">{method.sub}</p>
                
                <div className="mt-6 w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-secondary transition-all duration-500 text-secondary">
                  <ArrowRight size={16} />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* MAIN FORM SECTION - Refined Layout */}
        <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
          <motion.div {...fadeInUp} className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-10 bg-secondary" />
                <span className="text-secondary font-black text-[11px] uppercase tracking-[0.4em] leading-none">Bespoke Advisory</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-black text-[#0a1120] uppercase leading-[0.9] tracking-tighter">
                Send a <span className="text-secondary italic">Strategic</span> <br /> Transmission.
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-sm">
                Our regional analysts provide specialized data-driven insights tailored to your specific investment risk profile.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="space-y-3 group">
                  <div className="w-10 h-10 rounded-xl bg-[#0a1120]/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    <benefit.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-[#0a1120] uppercase tracking-tight mb-1">{benefit.title}</h4>
                    <p className="text-slate-400 text-[11px] font-semibold leading-relaxed tracking-tight">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-1" />

          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.3 }}
            className="lg:col-span-6 bg-white p-8 md:p-12 rounded-[3.5rem] shadow-[0_40px_80px_-30px_rgba(10,30,59,0.1)] border border-slate-100 relative overflow-hidden group/form"
          >
            {/* Form decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] -mr-32 -mt-32 transition-transform duration-[2s] group-hover/form:scale-110" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px] -ml-24 -mb-24" />
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success" {...fadeInUp} className="py-20 text-center space-y-10 relative z-10">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 size={56} strokeWidth={1.5} />
                    </div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full p-2 border border-emerald-100 text-emerald-500"
                    >
                      <ShieldCheck className="w-full h-full" />
                    </motion.div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-headline font-black text-[#0a1120] uppercase tracking-tighter">Transmission <span className="text-secondary italic">Encoded</span></h3>
                    <p className="text-slate-500 text-lg font-medium max-w-sm mx-auto">Our security protocols have verified your request. A Senior Advisor will initiate contact within 15 minutes.</p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="group flex items-center gap-3 mx-auto px-8 py-4 rounded-full border border-slate-100 text-secondary font-black text-[11px] uppercase tracking-[0.3em] hover:bg-slate-50 transition-all"
                  >
                    Send another inquiry <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-10 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-[11px] font-black text-[#0a1120] uppercase tracking-[0.2em] block ml-1">Identity Profile</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full bg-slate-50/70 border border-slate-100 rounded-2xl p-6 text-sm font-bold text-[#0a1120] placeholder:text-slate-300 focus:bg-white focus:border-secondary/30 focus:ring-[12px] focus:ring-secondary/5 transition-all outline-none" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[11px] font-black text-[#0a1120] uppercase tracking-[0.2em] block ml-1">Secure Contact</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="Phone Reference" 
                        className="w-full bg-slate-50/70 border border-slate-100 rounded-2xl p-6 text-sm font-bold text-[#0a1120] placeholder:text-slate-300 focus:bg-white focus:border-secondary/30 focus:ring-[12px] focus:ring-secondary/5 transition-all outline-none" 
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[11px] font-black text-[#0a1120] uppercase tracking-[0.2em] block ml-1">Intelligence Channel</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="Official Email Address" 
                      className="w-full bg-slate-50/70 border border-slate-100 rounded-2xl p-6 text-sm font-bold text-[#0a1120] placeholder:text-slate-300 focus:bg-white focus:border-secondary/30 focus:ring-[12px] focus:ring-secondary/5 transition-all outline-none" 
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[11px] font-black text-[#0a1120] uppercase tracking-[0.2em] block ml-1">Strategic Requirements</label>
                    <textarea 
                      rows={5} 
                      placeholder="Specify your portfolio objectives..." 
                      className="w-full bg-slate-50/70 border border-slate-100 rounded-2xl p-6 text-sm font-bold text-[#0a1120] placeholder:text-slate-300 focus:bg-white focus:border-secondary/30 focus:ring-[12px] focus:ring-secondary/5 transition-all outline-none resize-none" 
                    />
                  </div>

                  <button 
                    disabled={status === 'submitting'}
                    className="w-full group relative overflow-hidden rounded-2xl transition-all active:scale-[0.98] shadow-2xl shadow-secondary/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary group-hover:scale-[1.03] transition-transform duration-700" />
                    <div className="relative py-7 flex items-center justify-center gap-4 text-white font-black uppercase tracking-[0.4em] text-[14px]">
                      {status === 'submitting' ? (
                        <>Processing Transmission <Loader2 size={20} className="animate-spin" /></>
                      ) : (
                        <>Initialize Connection <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" /></>
                      )}
                    </div>
                  </button>

                  <div className="flex flex-col items-center gap-4 pt-4">
                    <div className="flex items-center gap-3 px-6 py-2 bg-emerald-50 rounded-full border border-emerald-100/50">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      <span className="text-[10px] text-emerald-700/80 font-black uppercase tracking-widest">Secure AES-256 Protocol</span>
                    </div>
                    <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.2em]">
                      By submitting, you agree to our terms of intelligence and privacy policy.
                    </p>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* OFFICE LOCATIONS - Dark Elite Theme Refresh */}
        <section className="py-20 bg-[#050b18] relative overflow-hidden">
          {/* Subtle Background Intel Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:48px_48px]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-12 space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-10 bg-secondary" />
                <span className="text-secondary font-black text-[12px] uppercase tracking-[0.4em] leading-none">Global Network</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-black text-white uppercase tracking-tighter">Strategic <span className="text-secondary italic leading-tight">Hubs.</span></h2>
            </div>

            <div className="bg-[#0a1120] rounded-[3rem] p-6 shadow-2xl border border-white/5 overflow-hidden mb-12 group/map">
              <Suspense fallback={<div className="h-[450px] bg-white/5 animate-pulse rounded-[2.5rem]" />}>
                <div className="scale-100 group-hover/map:scale-[1.01] transition-transform duration-[2s]">
                  <OfficeMap />
                </div>
              </Suspense>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { city: "Noida (H.O.)", rera: "UPRERAAGT10052", addr: "Sector 94, Astralis Tower, Supernova", phone: "0120-4247285", mail: "noida@investorsclinic.in" },
                { city: "Gurugram", rera: "HARERA/95 OF 2017", addr: "M3M Broadway, Sector 71, Sohna Rd", phone: "0124-6000000", mail: "ggn@investorsclinic.in" },
                { city: "Mumbai", rera: "MAHARERA/A51700004213", addr: "Ashar Millenia, Kapurbawdi, Thane", phone: "022-4000000", mail: "mumbai@investorsclinic.in" }
              ].map((office, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -8 }}
                  className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 hover:border-secondary transition-all duration-500 group"
                >
                  <h4 className="text-xl font-black text-white uppercase mb-4 tracking-tight group-hover:text-secondary transition-colors">{office.city}</h4>
                  <div className="space-y-4 text-white/50 text-xs font-medium">
                    <p className="flex items-start gap-4">
                      <MapPin size={20} className="text-secondary shrink-0 mt-0.5" />
                      <span className="leading-relaxed regular">{office.addr}</span>
                    </p>
                    <p className="flex items-center gap-4">
                      <Phone size={18} className="text-secondary shrink-0" />
                      <span>{office.phone}</span>
                    </p>
                    <p className="flex items-center gap-4">
                      <Mail size={18} className="text-secondary shrink-0" />
                      <span>{office.mail}</span>
                    </p>
                    <div className="pt-6 border-t border-white/5">
                      <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">RERA: {office.rera}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION - Sophisticated Redesign */}
        <section className="py-20 max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
             <div className="inline-flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-full text-secondary font-black text-[10px] uppercase tracking-[0.4em] shadow-sm">
               <HelpCircle size={14} /> Intelligence Support
             </div>
             <h2 className="text-4xl md:text-5xl font-headline font-black text-[#0a1120] uppercase tracking-tighter">Essential <span className="text-secondary italic">Intelligence.</span></h2>
             <p className="text-slate-400 font-medium text-base">Clear answers for complex property portfolio strategic queries.</p>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* CTA STRIP - Ultra Premium Extreme */}
        <section className="py-12 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto bg-gradient-to-br from-[#0a1120] to-[#050b18] rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border border-white/5"
          >
            {/* Background Kinetic FX */}
            <div className="absolute right-0 top-0 bottom-0 w-3/4 bg-blue-500/5 blur-[100px] rounded-full -mr-32 pointer-events-none" />
            
            <div className="relative z-10 space-y-6 max-w-lg">
              <div className="space-y-3">
                <h3 className="text-3xl md:text-5xl font-headline font-black text-white uppercase leading-[0.9] tracking-tighter">
                  Ready to Build <br /> <span className="text-secondary italic">Lasting Legacy?</span>
                </h3>
                <p className="text-white/40 text-lg font-medium tracking-tight">Access our exclusive HNI 2024 Market Intelligence Report.</p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-secondary"><ShieldCheck size={14} /></div>
                  <span className="text-[9px] font-black uppercase text-white/30 tracking-widest">Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-secondary"><CheckCircle2 size={14} /></div>
                  <span className="text-[9px] font-black uppercase text-white/30 tracking-widest">Verified Data</span>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 shrink-0">
              <button className="group relative px-10 py-6 rounded-[1.5rem] font-black uppercase tracking-[0.3em] text-[12px] overflow-hidden transition-all active:scale-95">
                <div className="absolute inset-0 bg-white group-hover:bg-secondary transition-colors duration-500" />
                <span className="relative text-[#0a1120] group-hover:text-white transition-colors duration-500 flex items-center gap-3">
                  Request Intelligence <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500" />
                </span>
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
