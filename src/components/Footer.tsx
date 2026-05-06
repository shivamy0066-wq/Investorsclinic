import React from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#0a1120] pt-16 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex flex-col -space-y-1">
              <span className="text-[20px] md:text-[24px] font-black tracking-tighter text-white whitespace-nowrap uppercase font-headline">Investors</span>
              <span className="text-[12px] md:text-[14px] font-black tracking-[0.3em] text-white whitespace-nowrap uppercase font-headline">Clinic</span>
              <div className="h-[2px] bg-secondary mt-2 w-12 rounded-full" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-medium max-w-xs">
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
                  className="relative w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-white/50 transition-colors duration-500 border border-white/10 group"
                >
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, y: 10, scale: 0.8 },
                      hover: { opacity: 1, y: -45, scale: 1 }
                    }}
                    className="absolute px-3 py-1 bg-white text-[#0a1120] text-[10px] font-black uppercase tracking-widest rounded-md pointer-events-none z-20 whitespace-nowrap"
                  >
                    {label}
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-white" />
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
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-black text-white uppercase tracking-[0.3em] text-[11px] mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Residential Projects', 'Commercial Spaces', 'Investment Guide', 'Intelligence Journal'].map((item, idx) => (
                <li key={item}>
                  <Link 
                    to={item === 'Intelligence Journal' ? '/blog' : item === 'Residential Projects' ? '/projects' : item === 'Commercial Spaces' ? '/projects' : '#'} 
                    className="text-sm font-bold text-white/40 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-black text-white uppercase tracking-[0.3em] text-[11px] mb-8">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-bold text-white/40 leading-relaxed">Office Address: 12th Floor, Knight Tower, BKC, Mumbai</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-bold text-white/40">Toll Free: 1800-INVEST-ESTATE</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-bold text-white/40">Email: concierge@investorsclinic.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-black text-white uppercase tracking-[0.3em] text-[11px] mb-8">Compliance</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'RERA Disclaimer'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm font-bold text-white/40 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
              <li className="pt-6 mt-6 border-t border-white/5">
                <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">RERA NO:</p>
                <p className="text-[10px] font-bold text-white/30 tracking-wider uppercase">PRM/KA/RERA/1251/310/PR/210302/0038</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">© 2024 Investors Clinic Real Estate. Strategic Operations Active.</p>
          <div className="flex items-center gap-6">
             <div className="h-[1px] w-12 bg-white/10" />
             <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
