import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ArrowRight,
  Users,
  Building2,
  CheckCircle2,
  Loader2,
  User,
  ChevronDown,
  Globe,
  ShieldCheck,
  Clock,
  Star,
  Home,
  Briefcase,
  TrendingUp,
  BadgeCheck
} from 'lucide-react';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

// Minimal FAQ component
const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="border-b border-slate-100 last:border-0"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-7 flex items-center justify-between text-left group"
      >
        <span className={`text-[15px] font-bold transition-colors duration-300 pr-10 leading-relaxed ${isOpen ? 'text-secondary' : 'text-slate-800 group-hover:text-primary'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-secondary text-white' : 'bg-slate-50 text-slate-300'}`}>
          <ChevronDown size={14} strokeWidth={2.5} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
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
            <p className="pb-7 text-slate-400 text-sm leading-[1.8] font-medium max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─── PREMIUM LIGHT INQUIRY SECTION ─── */
const InquirySection = () => {
  const [formStatus, setFormStatus] = useState<SubmissionStatus>('idle');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    await new Promise(res => setTimeout(res, 2000));
    setFormStatus('success');
  };

  const trustBadges = [
    { icon: BadgeCheck, title: 'RERA Compliant', sub: 'Fully verified projects' },
    { icon: Globe, title: '10+ Markets', sub: 'Global coverage' },
    { icon: Users, title: '250K+ Families', sub: 'Successfully served' },
    { icon: Star, title: '4.9 / 5 Rating', sub: 'Avg. advisor rating' },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#f7f8fa] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* ── Left panel ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              {/* Eyebrow */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-[2px] bg-[#ed1c24]" />
                  <span className="text-[10px] font-black text-[#ed1c24] uppercase tracking-[0.4em]">Inquiry</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#0a1e3b] uppercase leading-[0.9] tracking-tight mb-5">
                  Send An <span className="text-[#ed1c24] italic font-serif font-medium normal-case">Inquiry.</span>
                </h2>
                <p className="text-slate-500 font-medium text-base leading-relaxed max-w-sm">
                  Share your requirements and our senior advisor will curate a bespoke property portfolio within 24 hours.
                </p>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-4">
                {trustBadges.map((badge, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0a1e3b]/5 flex items-center justify-center mb-3 group-hover:bg-[#0071ba] transition-colors duration-300">
                      <badge.icon size={18} className="text-[#0a1e3b] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <p className="font-black text-[#0a1e3b] text-sm tracking-tight">{badge.title}</p>
                    <p className="text-slate-400 text-xs font-medium mt-0.5">{badge.sub}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA phone */}
              <div className="flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <div className="w-12 h-12 bg-[#ed1c24] rounded-xl flex items-center justify-center shrink-0 shadow-[0_8px_20px_rgba(237,28,36,0.3)]">
                  <Phone size={20} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Call Us Directly</p>
                  <p className="text-[#0a1e3b] font-black text-lg tracking-tight">0120-4247285</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right — Form Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-slate-100/80 rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(10,30,59,0.12)] overflow-hidden">
              {/* Card header accent */}
              <div className="h-1.5 bg-gradient-to-r from-[#0071ba] via-[#ed1c24] to-[#0071ba]" />

              <div className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className="py-20 text-center space-y-6"
                    >
                      <div className="relative w-24 h-24 mx-auto">
                        <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-30" />
                        <div className="relative w-24 h-24 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                          <CheckCircle2 size={40} strokeWidth={1.5} className="text-green-500" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-[#0a1e3b] uppercase tracking-tight">Inquiry Received!</h3>
                        <p className="text-slate-400 text-sm font-medium max-w-sm mx-auto leading-relaxed">
                          Our senior advisor will connect with you within 2 business hours.
                        </p>
                      </div>
                      <button
                        onClick={() => setFormStatus('idle')}
                        className="px-8 py-3.5 rounded-xl border-2 border-slate-100 text-slate-500 hover:text-[#0a1e3b] hover:border-[#0a1e3b] font-bold text-[11px] uppercase tracking-[0.3em] transition-all"
                      >
                        Submit Another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleFormSubmit}
                      className="space-y-7"
                    >

                       {/* Name + Phone */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block">Full Name</label>
                          <div className="relative group">
                            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#0071ba] transition-colors" />
                            <input
                              required
                              type="text"
                              placeholder="Your full name"
                              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-4 pl-11 pr-4 text-sm font-semibold text-slate-900 placeholder:text-slate-300 focus:border-[#0071ba] focus:bg-white outline-none transition-all"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block">Phone</label>
                          <div className="relative group">
                            <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#0071ba] transition-colors" />
                            <input
                              required
                              type="tel"
                              placeholder="+91 00000 00000"
                              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-4 pl-11 pr-4 text-sm font-semibold text-slate-900 placeholder:text-slate-300 focus:border-[#0071ba] focus:bg-white outline-none transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Email + Budget */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block">Email</label>
                          <div className="relative group">
                            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#0071ba] transition-colors" />
                            <input
                              type="email"
                              placeholder="investor@email.com"
                              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-4 pl-11 pr-4 text-sm font-semibold text-slate-900 placeholder:text-slate-300 focus:border-[#0071ba] focus:bg-white outline-none transition-all"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block">Budget Range</label>
                          <div className="relative group">
                            <select
                              required
                              defaultValue=""
                              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-4 px-4 text-sm font-semibold text-slate-900 appearance-none focus:border-[#0071ba] focus:bg-white outline-none transition-all cursor-pointer"
                            >
                              <option value="" disabled>Select range</option>
                              <option>₹50 Lacs – ₹1 Cr</option>
                              <option>₹1 Cr – ₹5 Cr</option>
                              <option>₹5 Cr – ₹10 Cr</option>
                              <option>₹10 Cr+</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* City + Preferred Location */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block">Preferred City</label>
                          <div className="relative group">
                            <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#0071ba] transition-colors" />
                            <select
                              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-4 pl-11 pr-8 text-sm font-semibold text-slate-900 appearance-none focus:border-[#0071ba] focus:bg-white outline-none transition-all cursor-pointer"
                            >
                              <option>Select city</option>
                              <option>Noida</option>
                              <option>Gurugram</option>
                              <option>Mumbai</option>
                              <option>Bangalore</option>
                              <option>Hyderabad</option>
                              <option>Pune</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block">Timeline</label>
                          <div className="relative group">
                            <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#0071ba] transition-colors" />
                            <select
                              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-4 pl-11 pr-8 text-sm font-semibold text-slate-900 appearance-none focus:border-[#0071ba] focus:bg-white outline-none transition-all cursor-pointer"
                            >
                              <option>Select timeline</option>
                              <option>Immediately</option>
                              <option>Within 3 months</option>
                              <option>Within 6 months</option>
                              <option>Just exploring</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block">Additional Requirements</label>
                        <textarea
                          rows={3}
                          placeholder="Describe your property requirements, preferred amenities, or investment goals..."
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-4 px-5 text-sm font-semibold text-slate-900 placeholder:text-slate-300 focus:border-[#0071ba] focus:bg-white outline-none transition-all resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <div className="pt-2">
                        <button
                          disabled={formStatus === 'submitting'}
                          className="w-full relative overflow-hidden group bg-[#0a1e3b] hover:bg-[#0071ba] text-white py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[11px] transition-all duration-500 shadow-[0_20px_50px_-10px_rgba(10,30,59,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(0,113,186,0.4)] active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-3"
                        >
                          {/* Animated shine */}
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          {formStatus === 'submitting' ? (
                            <><Loader2 size={16} className="animate-spin" /> Processing...</>
                          ) : (
                            <>Submit Inquiry <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" /></>
                          )}
                        </button>

                        <p className="text-center text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em] mt-4 flex items-center justify-center gap-2">
                          <ShieldCheck size={12} className="text-green-400" />
                          Enterprise-grade encryption active
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ContactUs = () => {
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const faqs = [
    {
      question: "How long does it take to receive a detailed property portfolio?",
      answer: "Our research team compiles a bespoke property portfolio within 24-48 hours once we understand your specific investment requirements, risk appetite, and target markets."
    },
    {
      question: "Do you offer international investment advisory?",
      answer: "Yes. We have specialized desks for Dubai, London, and Florida. Our global advisors guide you through cross-border regulations, tax implications, and currency hedging strategies."
    },
    {
      question: "What documents are required for my first consultation?",
      answer: "Initially, no documents are required — just your investment goals and target budget. Once we proceed to specific transactions, standard KYC documents will be needed as per regulatory norms."
    },
    {
      question: "How do you verify the projects you recommend?",
      answer: "Every project undergoes our 48-point 'Secure Investment' audit covering RERA verification, legal titles, developer track records, construction velocity analysis, and capital appreciation forecasting."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-body">
      <Header />
      
      <main>

        {/* ─── HERO — Ultra Minimal Editorial ─── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end bg-[#050a14] text-white overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.06, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
              alt="Premium Office Space" 
              className="w-full h-full object-cover object-center opacity-[0.12] grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/95 to-[#050a14]/40" />
            <div className="absolute bottom-0 left-[15%] w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pb-20 pt-44 md:pt-52">
            {/* Breadcrumb */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-4 mb-14"
            >
              <div className="w-10 h-px bg-secondary" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">Private Advisory</span>
              <div className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Connect</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="text-[clamp(2.5rem,6vw,5.5rem)] font-headline font-black leading-[0.9] tracking-[-0.02em] uppercase mb-8"
            >
              Get In <span className="text-secondary italic">Touch.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white/30 font-medium text-base md:text-lg max-w-md leading-relaxed"
            >
              Strategic property advisory for distinguished residential and commercial portfolios.
            </motion.p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          </div>
        </section>


        {/* ─── CONTACT METHODS — Clean horizontal strip ─── */}
        <section className="border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {[
                { icon: Phone, label: "Direct Line", value: "0120-4247285", sub: "Mon – Sat, 10AM – 6PM", href: "tel:01204247285" },
                { icon: Mail, label: "Email", value: "info@investorsclinic.in", sub: "Response within 2 hours", href: "mailto:info@investorsclinic.in" },
                { icon: MessageCircle, label: "WhatsApp", value: "+91 93550 57475", sub: "Instant property updates", href: "https://wa.me/919355057475" }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group py-12 md:py-16 flex items-center gap-6 md:first:pr-12 md:[&:nth-child(2)]:px-12 md:last:pl-12 hover:bg-slate-50/50 transition-colors duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 shrink-0">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300 mb-1">{item.label}</p>
                    <p className="text-lg font-black text-slate-900 tracking-tight group-hover:text-primary transition-colors">{item.value}</p>
                    <p className="text-[11px] font-medium text-slate-400 mt-0.5">{item.sub}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>


        {/* ─── FORM SECTION — Premium Light Theme ─── */}
        <InquirySection />


        {/* ─── OFFICES — Clean editorial grid ─── */}
        <section className="py-24 md:py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section header */}
            <div className="mb-16 md:mb-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-secondary" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">Offices</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-black text-primary uppercase tracking-[-0.03em] leading-[0.85]">
                Strategic <span className="text-secondary italic">Hubs.</span>
              </h2>
            </div>

            {/* Map */}
            <div className="rounded-[2rem] overflow-hidden mb-16 shadow-[0_40px_80px_-20px_rgba(0,113,186,0.08)] border border-slate-100">
              <div className="h-[400px] md:h-[450px] w-full bg-slate-50 relative">
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
              </div>
            </div>

            {/* Office cards */}
            <div className="grid md:grid-cols-3 gap-px bg-slate-100 rounded-[1.5rem] overflow-hidden border border-slate-100">
              {[
                { city: "Noida (H.O.)", addr: "Sector 94, Astralis Tower, Supernova", phone: "0120-4247285", mail: "noida@investorsclinic.in" },
                { city: "Gurugram", addr: "M3M Broadway, Sector 71, Sohna Rd", phone: "0124-6000000", mail: "ggn@investorsclinic.in" },
                { city: "Mumbai", addr: "Ashar Millenia, Kapurbawdi, Thane", phone: "022-4000000", mail: "mumbai@investorsclinic.in" }
              ].map((office, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 md:p-12 group hover:bg-slate-50/50 transition-colors duration-500"
                >
                  <h4 className="text-xl font-black text-primary uppercase tracking-tight mb-8 group-hover:text-secondary transition-colors">{office.city}</h4>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <MapPin size={16} className="text-slate-300 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-500 leading-relaxed">{office.addr}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone size={16} className="text-slate-300 shrink-0" />
                      <span className="text-sm font-bold text-slate-900">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail size={16} className="text-slate-300 shrink-0" />
                      <span className="text-sm font-medium text-primary">{office.mail}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ─── FAQ — Minimal two-column ─── */}
        <section className="pb-24 md:pb-32 pt-10 md:pt-12 bg-slate-50/50 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              {/* Left label */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-px bg-secondary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">Support</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-headline font-black text-primary uppercase tracking-[-0.03em] leading-[0.9] mb-6">
                  Common <span className="text-secondary italic">Questions.</span>
                </h2>
                <p className="text-slate-400 font-medium text-sm leading-relaxed max-w-xs">
                  Everything you need to know about our advisory process and investment methodology.
                </p>
              </div>

              {/* Right FAQ list */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100">
                  {faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
                  ))}
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
