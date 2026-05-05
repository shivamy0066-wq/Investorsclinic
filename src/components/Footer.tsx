import React from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white pt-10 pb-6 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          <div className="space-y-4">
            <div className="flex flex-col -space-y-1">
              <span className="text-[20px] md:text-[24px] font-black tracking-tighter text-primary whitespace-nowrap uppercase font-headline">Investors</span>
              <span className="text-[12px] md:text-[14px] font-black tracking-[0.3em] text-primary whitespace-nowrap uppercase font-headline">Clinic</span>
              <div className="h-1 bg-secondary mt-1 w-full rounded-full" />
            </div>
            <p className="text-[#64748b] text-sm leading-relaxed font-medium">
              Defining luxury living through architectural excellence and institutional trust. Part of the Investors Clinic Global Network.
            </p>
            <div className="flex gap-4 pt-2">
              {[
                { Icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
                { Icon: Instagram, href: "#", label: "Instagram", color: "#E4405F" },
                { Icon: Linkedin, href: "#", label: "LinkedIn", color: "#0077B5" },
                { Icon: Twitter, href: "#", label: "Twitter", color: "#000000" }
              ].map(({ Icon, href, label, color }) => (
                <motion.a 
                  key={label} 
                  href={href} 
                  aria-label={label}
                  whileHover="hover"
                  initial="initial"
                  className="relative w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#0a1e3b] transition-colors duration-500 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 group"
                >
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, y: 10, scale: 0.8 },
                      hover: { opacity: 1, y: -45, scale: 1 }
                    }}
                    className="absolute px-3 py-1 bg-[#0a1e3b] text-white text-[10px] font-black uppercase tracking-widest rounded-md pointer-events-none z-20 whitespace-nowrap"
                  >
                    {label}
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#0a1e3b]" />
                  </motion.div>

                  <motion.div 
                    variants={{
                      initial: { scale: 0, opacity: 0 },
                      hover: { scale: 1, opacity: 1 }
                    }}
                    style={{ backgroundColor: color }}
                    className="absolute inset-0 rounded-xl transition-transform duration-500 ease-out z-0"
                  />

                  <motion.div
                    variants={{
                      initial: { y: 0, scale: 1 },
                      hover: { y: 0, scale: 1.1, color: "#fff" }
                    }}
                    className="relative z-10"
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-[10deg]" />
                  </motion.div>
                  
                  <motion.div
                    variants={{
                      initial: { opacity: 0 },
                      hover: { opacity: 0.2 }
                    }}
                    style={{ boxShadow: `inset 0 0 15px ${color}` }}
                    className="absolute inset-0 rounded-xl pointer-events-none z-10"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-[#0a1e3b] uppercase tracking-widest text-[12px] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['Residential Projects', 'Commercial Spaces', 'Investment Guide', 'Intelligence Journal'].map((item, idx) => (
                <li key={item}>
                  <Link 
                    to={item === 'Intelligence Journal' ? '/blog' : item === 'Residential Projects' ? '/projects' : item === 'Commercial Spaces' ? '/projects' : '#'} 
                    className="text-sm font-bold text-[#64748b] hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-[#0a1e3b] uppercase tracking-widest text-[12px] mb-5">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-bold text-[#64748b]">Office Address: 12th Floor, Knight Tower, BKC, Mumbai</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-bold text-[#64748b]">Toll Free: 1800-INVEST-ESTATE</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-bold text-[#64748b]">Email: concierge@investorsclinic.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-[#0a1e3b] uppercase tracking-widest text-[12px] mb-5">Compliance</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'RERA Disclaimer'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm font-bold text-[#64748b] hover:text-secondary transition-colors">{item}</a>
                </li>
              ))}
              <li className="pt-3 mt-3 border-t border-slate-100">
                <p className="text-[10px] font-black text-[#0a1e3b] uppercase tracking-widest mb-1">RERA NO:</p>
                <p className="text-[10px] font-bold text-[#64748b] tracking-wider uppercase">PRM/KA/RERA/1251/310/PR/210302/0038</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-widest">© 2024 Investors Clinic Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
