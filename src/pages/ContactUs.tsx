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
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-bold text-[#0073B7] group-hover:text-[#ED1C24] transition-all tracking-tight uppercase leading-snug">{question}</span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#ED1C24] text-white' : 'bg-slate-50 text-slate-400'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
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
            <p className="pb-8 text-slate-500 text-lg leading-relaxed font-medium italic">
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
              className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium tracking-tight leading-relaxed italic"
            >
              Strategic property advisory for distinguished <br className="hidden md:block" /> residential and commercial portfolios.
            </motion.p>
          </div>
        </section>

        {/* QUICK CONTACT CARDS - Ultra Premium Floating */}
        <section className="max-w-6xl mx-auto px-6 -mt-32 relative z-20">
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

        {/* MAIN FORM SECTION - Light Refined Layout with Differentiation */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
            <motion.div {...fadeInUp} className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#ED1C24]" />
                <span className="text-[#ED1C24] font-black text-[12px] uppercase tracking-[0.5em] leading-none">Bespoke Advisory</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-headline font-black text-[#0073B7] uppercase leading-[0.9] tracking-tighter">
                Send a <span className="text-[#0073B7] italic">Strategic</span> <br /> Transmission.
              </h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-md">
                Our regional analysts provide specialized data-driven insights tailored to your specific investment risk profile.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#ED1C24] border border-slate-100 group-hover:bg-[#ED1C24] group-hover:text-white transition-all duration-500 group-hover:border-transparent">
                    <benefit.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[#0073B7] uppercase tracking-tight mb-2">{benefit.title}</h4>
                    <p className="text-slate-400 text-[12px] font-semibold leading-relaxed tracking-tight">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-1" />

          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.3 }}
            className="lg:col-span-6 bg-gradient-to-br from-white to-slate-50 p-8 md:p-10 rounded-[2.5rem] shadow-[0_40px_80px_-30px_rgba(10,30,59,0.12)] border border-slate-200 relative overflow-hidden group/form"
          >
            {/* Form decorative background */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#ED1C24]/5 rounded-full blur-[120px] -mr-40 -mt-40 transition-transform duration-[2s] group-hover/form:scale-110" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0073B7]/5 rounded-full blur-[100px] -ml-32 -mb-32" />
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success" {...fadeInUp} className="py-16 text-center space-y-10 relative z-10">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 size={48} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-headline font-black text-[#0073B7] uppercase tracking-tighter">Transmission <span className="text-[#ED1C24] italic">Encoded</span></h3>
                    <p className="text-slate-500 text-lg font-medium max-w-xs mx-auto leading-relaxed">Our security protocols have verified your request. A Senior Advisor will initiate contact within 15 minutes.</p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="group flex items-center gap-4 mx-auto px-8 py-4 rounded-full border border-slate-200 text-[#ED1C24] font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white transition-all shadow-sm"
                  >
                    Send another inquiry <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-[#0073B7] uppercase tracking-[0.3em] block ml-1">Identity Profile</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full bg-white border border-slate-100 rounded-2xl p-5 text-base font-bold text-[#0073B7] placeholder:text-slate-300 focus:border-[#ED1C24]/30 focus:ring-[12px] focus:ring-[#ED1C24]/5 transition-all outline-none shadow-sm" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-[#0073B7] uppercase tracking-[0.3em] block ml-1">Secure Contact</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="Phone Reference" 
                        className="w-full bg-white border border-slate-100 rounded-2xl p-5 text-base font-bold text-[#0073B7] placeholder:text-slate-300 focus:border-[#ED1C24]/30 focus:ring-[12px] focus:ring-[#ED1C24]/5 transition-all outline-none shadow-sm" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-[#0073B7] uppercase tracking-[0.3em] block ml-1">Intelligence Channel</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="Official Email Address" 
                      className="w-full bg-white border border-slate-100 rounded-2xl p-5 text-base font-bold text-[#0073B7] placeholder:text-slate-300 focus:border-[#ED1C24]/30 focus:ring-[12px] focus:ring-[#ED1C24]/5 transition-all outline-none shadow-sm" 
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-[#0073B7] uppercase tracking-[0.3em] block ml-1">Strategic Requirements</label>
                    <textarea 
                      rows={4} 
                      placeholder="Specify your portfolio objectives..." 
                      className="w-full bg-white border border-slate-100 rounded-2xl p-5 text-base font-bold text-[#0073B7] placeholder:text-slate-300 focus:border-[#ED1C24]/30 focus:ring-[12px] focus:ring-[#ED1C24]/5 transition-all outline-none shadow-sm resize-none" 
                    />
                  </div>

                  <button 
                    disabled={status === 'submitting'}
                    className="w-full group relative overflow-hidden rounded-2xl transition-all active:scale-[0.98] shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ED1C24] to-[#0073B7] group-hover:scale-[1.05] transition-transform duration-700" />
                    <div className="relative py-6 flex items-center justify-center gap-4 text-white font-black uppercase tracking-[0.5em] text-[13px]">
                      {status === 'submitting' ? (
                        <>Processing Transmission <Loader2 size={20} className="animate-spin" /></>
                      ) : (
                        <>Initialize Connection <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" /></>
                      )}
                    </div>
                  </button>

                  <div className="flex flex-col items-center gap-4 pt-4">
                    <div className="flex items-center gap-3 px-6 py-2.5 bg-emerald-50 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      <span className="text-[10px] text-emerald-700 font-black uppercase tracking-[0.4em]">Secure AES-256 Protocol</span>
                    </div>
                    <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.3em] text-center px-4">
                      By submitting, you agree to our terms and <span className="text-slate-400">Excellence Guarantee</span>.
                    </p>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
          </div>
        </section>

        {/* OFFICE LOCATIONS - Light Elite Theme */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          {/* Subtle Background Intel Grid */}
          <div className="absolute inset-0 opacity-[0.2] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#0073B7_1px,transparent_1px)] [background-size:64px_64px]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-20 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#0073B7]" />
                <span className="text-[#0073B7] font-black text-[13px] uppercase tracking-[0.5em] leading-none">Global Network</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-headline font-black text-[#0073B7] uppercase tracking-tighter">Strategic <span className="text-[#0073B7] italic leading-tight">Hubs.</span></h2>
            </div>

            <div className="bg-white rounded-[4rem] p-8 shadow-[0_50px_100px_-20px_rgba(10,30,59,0.06)] border border-slate-100 overflow-hidden mb-20 group/map">
              <Suspense fallback={<div className="h-[500px] bg-slate-50 animate-pulse rounded-[3rem]" />}>
                <div className="scale-100 group-hover/map:scale-[1.02] transition-transform duration-[3s] filter grayscale opacity-90">
                  <OfficeMap />
                </div>
              </Suspense>
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
                      <span className="leading-relaxed regular">{office.addr}</span>
                    </p>
                    <p className="flex items-center gap-5">
                      <Phone size={22} className="text-[#0073B7] shrink-0" />
                      <span>{office.phone}</span>
                    </p>
                    <p className="flex items-center gap-5">
                      <Mail size={22} className="text-[#ED1C24] shrink-0" />
                      <span>{office.mail}</span>
                    </p>
                    <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">RERA REG:</span>
                      <span className="text-[10px] font-black text-[#0073B7] uppercase tracking-widest">{office.rera}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION - Light Refined Layout */}
        <section className="py-32 max-w-5xl mx-auto px-6">
          <div className="text-center space-y-6 mb-24">
             <div className="inline-flex items-center gap-4 bg-[#ED1C24]/5 px-6 py-3 rounded-full text-[#ED1C24] font-black text-[12px] uppercase tracking-[0.5em] shadow-sm border border-[#ED1C24]/10">
               <HelpCircle size={16} /> Intelligence Support
             </div>
             <h2 className="text-5xl md:text-6xl font-headline font-black text-[#0073B7] uppercase tracking-tighter leading-none">Essential <span className="text-[#0073B7] italic">Intelligence.</span></h2>
             <p className="text-slate-400 font-medium text-xl italic tracking-tight">Clear answers for complex property portfolio strategic queries.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-slate-100 last:border-0 group/faq">
                <FAQItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
