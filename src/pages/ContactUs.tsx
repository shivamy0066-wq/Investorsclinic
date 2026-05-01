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
  Loader2
} from 'lucide-react';

const OfficeMap = lazy(() => import('../components/OfficeMap').then(module => ({ default: module.OfficeMap })));

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ContactUs = () => {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // For demo purposes, we'll succeed. 
      // You can trigger error by setting it to 'error'
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Systems are currently busy. Please try again or call us directly.');
    }
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "H.O. Phone",
      detail: "0120-4247285",
      sub: "Corporate Desk, Mon-Sat (10AM-6PM)",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Service",
      detail: "9355057475",
      sub: "Instant property updates",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Headphones,
      title: "Sales & Marketing",
      detail: "9711556661",
      sub: "8010101010 / Investment Desk",
      color: "bg-secondary/10 text-secondary"
    }
  ];

  const supportEmails = [
    {
      label: "Customer Support",
      email: "customercare@investors-clinic.com",
      icon: Users
    },
    {
      label: "Intimations",
      email: "support@investorsclinic.in",
      icon: ShieldCheck
    },
    {
      label: "Job/Career Related",
      email: "career@investors-clinic.com",
      icon: Building2
    }
  ];

  const offices = [
    {
      city: "Corporate Office",
      rera: "UPRERAAGT10052",
      address: "21st Floor, C203ASTR2110, Tower Astralis, Supertech Supernova, Plot No. 3, Sector 94, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301",
      phone: "0120-4247285"
    },
    {
      city: "Gurugram Office",
      rera: "HARERA/95 of 2017",
      address: "03-05, 16th Floor, M3M Broadway, Golf Course Extension Road, Sector - 71, Gurugram, Haryana-122004",
      phone: "+91 124 6000 000"
    },
    {
      city: "Noida Extension",
      rera: "UPRERAAGT10052",
      address: "29th Floor, The Wing, Boulevard Walk, Plot No. C-2, Sector-4 (Landmark: Near Chaar Murti Chowk), Greater Noida West, Uttar Pradesh - 201009",
      phone: "+91 120 4000 000"
    }
  ];

  const secondaryOffices = [
    {
      city: "Mumbai Hub",
      rera: "MAHARERA/A51700004213",
      address: "Office no 605 6th Floor Ashar Millenia Ghodbunder Road Opp Cinewonder Mall Kapurbawdi Thane West-400610 Mumbai"
    },
    {
      city: "Dehradun Office",
      rera: "UKREA02210000336",
      address: "IT Facility, Chrysler Tech Centre, at 21, IT Park, Sahastradhara Road, Dehradun, UK-248001"
    },
    {
      city: "Mohali Regional",
      rera: "PBRERA-OTH00-REA0032",
      address: "Investors Clinic Infratech Pvt Ltd, IT C6 Sector 67, Mohali, Punjab-160062"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdff]">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* HERO SECTION */}
        <section className="relative py-12 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a1e3b] opacity-[0.02] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0a1e3b_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>
          
          <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 bg-secondary/5 px-6 py-2 rounded-full text-secondary font-black text-[11px] uppercase tracking-[0.4em] border border-secondary/10"
            >
              <Headphones size={14} /> Global Support Desk
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-headline font-black text-[#0a1e3b] uppercase leading-[0.9] tracking-tighter"
            >
              Connect with <br /> <span className="text-secondary italic">Intelligence.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium"
            >
              Whether you're looking for your first premium residence or a strategic commercial portfolio expansion, our area heads are ready to guide you.
            </motion.p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 50, 0],
                y: [0, -30, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(188,0,17,0.08)_0%,transparent_70%)] blur-[100px]"
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
                x: [0, -40, 0],
                y: [0, 20, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(10,30,59,0.05)_0%,transparent_70%)] blur-[80px]"
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">
            
            {/* LEFT: Contact Info & Support */}
            <div className="lg:col-span-5 space-y-12">
              <div className="grid gap-6">
                {contactMethods.map((method, i) => (
                  <motion.div 
                    key={i}
                    {...fadeInUp}
                    transition={{ delay: 0.1 * i }}
                    className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-primary/5 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-6 group"
                  >
                    <div className={`w-16 h-16 rounded-2xl ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <method.icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{method.title}</p>
                      <p className="text-xl font-black text-[#0a1e3b]">{method.detail}</p>
                      <p className="text-[10px] font-bold text-slate-400 mt-1">{method.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="bg-[#0a1e3b] p-12 rounded-[3.5rem] text-white space-y-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black uppercase tracking-tight">Our Global <br /> Reach</h3>
                    <p className="text-white/50 text-sm font-medium leading-relaxed">Operating in 10+ major economies, Investors Clinic provides a unified investment experience across borders.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary"><ShieldCheck size={20} /></div>
                      <p className="text-xs font-black uppercase tracking-widest text-white/80">RERA Registered Advisory</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary"><Globe size={20} /></div>
                      <p className="text-xs font-black uppercase tracking-widest text-white/80">35,000+ Verified Assets</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary"><Users size={20} /></div>
                      <p className="text-xs font-black uppercase tracking-widest text-white/80">1.5 Lac+ Happy Investors</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-6">Follow Intelligence</p>
                    <div className="flex gap-4">
                      {['facebook', 'linkedin', 'youtube', 'instagram'].map((platform) => (
                        <a 
                          key={platform}
                          href="#" 
                          className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all group"
                        >
                          <Globe size={20} className="text-white/60 group-hover:text-white" />
                        </a>
                      ))}
                    </div>
                  </div>
              </motion.div>
            </div>

            {/* RIGHT: Contact Form */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7 bg-white p-12 md:p-20 rounded-[4rem] border border-slate-100 shadow-[0_32px_64px_-12px_rgba(10,30,59,0.15)]"
            >
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-[#0a1e3b] uppercase tracking-tight">Send a <span className="text-secondary italic">Concierge</span> Message</h2>
                  <p className="text-slate-400 font-medium">Your request will be assigned to a dedicated Portfolio Manager within 15 minutes.</p>
                </div>

                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 flex flex-col items-center text-center space-y-8"
                    >
                      <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                        <CheckCircle2 size={48} />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-black text-[#0a1e3b] uppercase tracking-tight">Transmission <span className="text-secondary italic">Successful</span></h3>
                        <p className="text-slate-500 font-medium max-w-sm mx-auto">
                          Your concierge inquiry has been securely received. An area expert will be in touch within 15 minutes.
                        </p>
                      </div>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="text-secondary font-black text-xs uppercase tracking-widest hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form className="space-y-8" onSubmit={handleSubmit}>
                      {status === 'error' && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-50 border border-red-100 p-6 rounded-2xl flex items-center gap-4 text-red-600"
                        >
                          <AlertCircle size={20} className="shrink-0" />
                          <p className="text-xs font-bold uppercase tracking-wide">{errorMsg}</p>
                        </motion.div>
                      )}

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
                          <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 rounded-2xl py-5 px-6 text-sm font-bold border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Phone Number</label>
                           <div className="flex gap-3">
                             <div className="w-20 bg-slate-50 rounded-2xl flex items-center justify-center text-xs font-black text-slate-400">+91</div>
                             <input required type="tel" placeholder="91234 56789" className="flex-1 bg-slate-50 rounded-2xl py-5 px-6 text-sm font-bold border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                           </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                          <input required type="email" placeholder="john@example.com" className="w-full bg-slate-50 rounded-2xl py-5 px-6 text-sm font-bold border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Nature of Inquiry</label>
                          <select className="w-full bg-slate-50 rounded-2xl py-5 px-6 text-sm font-bold border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all appearance-none">
                             <option>New Investment</option>
                             <option>Portfolio Rebalancing</option>
                             <option>Lease Management</option>
                             <option>General Support</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Tell us more</label>
                        <textarea required rows={4} placeholder="I'm interested in luxury residences in North Noida with a target yield of 7%..." className="w-full bg-slate-50 rounded-2xl py-5 px-6 text-sm font-bold border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"></textarea>
                      </div>

                      <button 
                        disabled={status === 'submitting'}
                        className="w-full bg-secondary hover:bg-[#0a1e3b] disabled:bg-slate-300 disabled:cursor-not-allowed text-white py-7 rounded-2xl font-black text-[14px] uppercase tracking-[0.3em] shadow-2xl shadow-secondary/30 transition-all active:scale-95 flex items-center justify-center gap-4 group"
                      >
                        {status === 'submitting' ? (
                          <>
                            Securing Connection <Loader2 size={20} className="animate-spin" />
                          </>
                        ) : (
                          <>
                            Initialize Connection <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                      
                      <div className="flex items-center justify-center gap-6 pt-4">
                         <span className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-tight">
                            <Clock size={12} /> Secure Connection
                         </span>
                         <div className="w-px h-3 bg-slate-200" />
                         <span className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-tight">
                            <ShieldCheck size={12} /> AES-256 Encrypted
                         </span>
                      </div>

                      <div className="pt-12 grid grid-cols-3 gap-4 border-t border-slate-50">
                        {[
                          { label: "Lowest Price Guaranteed", val: "0%", sub: "Price Match" },
                          { label: "Full Service Support", val: "24h", sub: "Response" },
                          { label: "Zero Brokerage", val: "NIL", sub: "Fees" }
                        ].map((badge, i) => (
                          <div key={i} className="text-center space-y-2">
                            <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto text-secondary text-[11px] font-black italic">
                              {badge.val}
                            </div>
                            <p className="text-[8px] font-black text-[#0a1e3b] uppercase tracking-tighter leading-tight">{badge.label}</p>
                          </div>
                        ))}
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
              <div className="lg:col-span-12 mt-12 grid md:grid-cols-3 gap-8">
                {supportEmails.map((support, i) => (
                  <motion.div 
                    key={i}
                    {...fadeInUp}
                    transition={{ delay: 0.1 * i }}
                    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">
                      <support.icon size={18} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{support.label}</p>
                      <a href={`mailto:${support.email}`} className="text-sm font-bold text-[#0a1e3b] hover:text-secondary transition-colors break-all">
                        {support.email}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
        </section>

        {/* OFFICES GRID */}
        <section className="py-32 bg-white mt-24">
           <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                 <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="h-0.5 w-10 bg-secondary" />
                      <span className="text-secondary font-black text-[12px] uppercase tracking-[0.4em]">Corporate Locations</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-headline font-black text-[#0a1e3b] uppercase tracking-tighter">Regional <span className="text-secondary italic">Hubs.</span></h3>
                 </div>
              </div>

              <motion.div 
                {...fadeInUp}
                className="mb-20"
              >
                <Suspense fallback={
                  <div className="w-full h-[400px] rounded-[3rem] bg-slate-50 flex flex-col items-center justify-center border border-slate-100 gap-4">
                    <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-secondary animate-spin" />
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Initialising Geospatial Data...</p>
                  </div>
                }>
                  <OfficeMap />
                </Suspense>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-10 mb-20">
                 {offices.map((office, i) => (
                   <div key={i} className="group p-10 rounded-[3rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:rotate-12">
                           <Building2 size={24} />
                        </div>
                        {office.rera && (
                          <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-slate-100">
                            RERA: {office.rera}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-black text-[#0a1e3b] uppercase tracking-tight mb-4">{office.city}</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 opacity-70">{office.address}</p>
                      <div className="h-px w-full bg-slate-100 mb-6" />
                      <div className="flex items-center gap-3 text-[#0a1e3b] font-black text-sm">
                         <Phone size={16} className="text-secondary" /> {office.phone}
                      </div>
                   </div>
                 ))}
              </div>

              <div className="space-y-12">
                <div className="flex items-center gap-6">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Other IC Office Addresses</h4>
                  <div className="h-px w-full bg-slate-100" />
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {secondaryOffices.map((off, idx) => (
                    <motion.div 
                      key={idx}
                      {...fadeInUp}
                      transition={{ delay: 0.1 * idx }}
                      className="p-8 rounded-[2.5rem] border border-slate-100 hover:border-secondary/20 transition-all group"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h5 className="font-black text-[#0a1e3b] uppercase tracking-tight text-lg">{off.city}</h5>
                        <p className="text-[9px] font-black text-secondary uppercase tracking-[0.2em]">{off.rera}</p>
                      </div>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                        {off.address}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
