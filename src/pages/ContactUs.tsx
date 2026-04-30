import React from 'react';
import { motion } from 'motion/react';
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
  Building2
} from 'lucide-react';

export const ContactUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call our Experts",
      detail: "1800-419-4567",
      sub: "Toll-Free, Mon-Sat (9AM-7PM)",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      detail: "info@investorsclinic.in",
      sub: "Average response: 2 hours",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "+91 91234 56789",
      sub: "Instant portfolio check",
      color: "bg-green-50 text-green-600"
    }
  ];

  const offices = [
    {
      city: "Noida Head Office",
      address: "Investors Clinic, Plot No. 1, Sector 125, Noida, Uttar Pradesh 201303",
      phone: "+91 120 4000 000"
    },
    {
      city: "Gurugram Office",
      address: "MGF Metropolis Mall, MG Road, Sector 28, Gurugram, Haryana 122002",
      phone: "+91 124 6000 000"
    },
    {
      city: "Dubai Regional Hub",
      address: "Business Bay, Prism Tower, Level 15, Dubai, UAE",
      phone: "+971 4 500 0000"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdff]">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* HERO SECTION */}
        <section className="relative py-20 px-6 overflow-hidden">
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

        <section className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
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

                <form className="space-y-8" onClick={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-slate-50 rounded-2xl py-5 px-6 text-sm font-bold border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Phone Number</label>
                       <div className="flex gap-3">
                         <div className="w-20 bg-slate-50 rounded-2xl flex items-center justify-center text-xs font-black text-slate-400">+91</div>
                         <input type="tel" placeholder="91234 56789" className="flex-1 bg-slate-50 rounded-2xl py-5 px-6 text-sm font-bold border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
                       </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 rounded-2xl py-5 px-6 text-sm font-bold border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all" />
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
                    <textarea rows={4} placeholder="I'm interested in luxury residences in North Noida with a target yield of 7%..." className="w-full bg-slate-50 rounded-2xl py-5 px-6 text-sm font-bold border-none focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"></textarea>
                  </div>

                  <button className="w-full bg-secondary hover:bg-[#0a1e3b] text-white py-7 rounded-2xl font-black text-[14px] uppercase tracking-[0.3em] shadow-2xl shadow-secondary/30 transition-all active:scale-95 flex items-center justify-center gap-4 group">
                    Initialize Connection <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
                </form>
              </div>
            </motion.div>

          </div>
        </section>

        {/* OFFICES GRID */}
        <section className="py-32 bg-white mt-24">
           <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                 <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="h-0.5 w-10 bg-secondary" />
                      <span className="text-secondary font-black text-[12px] uppercase tracking-[0.4em]">Global Presence</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-headline font-black text-[#0a1e3b] uppercase tracking-tighter">Strategically <span className="text-secondary italic">Mapped.</span></h3>
                 </div>
              </div>

              <div className="grid md:grid-cols-3 gap-10">
                 {offices.map((office, i) => (
                   <div key={i} className="group p-10 rounded-[3rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:rotate-12">
                         <Building2 size={24} />
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
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
