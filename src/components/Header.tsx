import React from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 w-full z-50 border-b border-black/5 backdrop-blur-md bg-white/80">
      {/* Top Announcement Bar */}
      <div className="bg-primary text-white py-2 overflow-hidden relative">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 text-[10px] font-bold tracking-[0.2em] uppercase"
        >
          <span>🔥 New Launch: M3M The Cullinan • Exclusive Offer • 0% Commission on Pre-Booking • Trump Towers Delhi NCR • Limited Units Available</span>
          <span>🔥 New Launch: M3M The Cullinan • Exclusive Offer • 0% Commission on Pre-Booking • Trump Towers Delhi NCR • Limited Units Available</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <nav className="h-20 flex items-center justify-between">
          <div className="flex items-center gap-16">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex flex-col -space-y-1 drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300">
                <span className="text-[22px] md:text-[28px] font-black tracking-tighter text-primary whitespace-nowrap uppercase leading-none">Investors</span>
                <span className="text-[14px] md:text-[16px] font-black tracking-[0.4em] text-primary whitespace-nowrap uppercase">Clinic</span>
                <div className="h-1 bg-secondary mt-1 w-full rounded-full" />
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center gap-10">
              {[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects", hasDropdown: true },
                { label: "Who We Are", href: "/about" },
                { label: "City", href: "/cities", hasDropdown: true },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" }
              ].map((item, idx) => {
                const active = location.pathname === item.href;
                return (
                  <Link 
                    key={idx} 
                    to={item.href} 
                    className={`group relative text-[16px] font-bold transition-all flex items-center gap-1.5 ${active ? 'text-primary' : 'text-[#1a1a2e] hover:text-primary'}`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className={`w-4 h-4 mt-0.5 transition-transform duration-300 group-hover:rotate-180 ${active ? 'text-primary' : 'text-slate-400'}`} />}
                    {active && (
                      <motion.div 
                        layoutId="navUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary" 
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center">
            <button className="bg-primary text-white px-5 md:px-8 py-3 rounded-[12px] font-bold text-[13px] md:text-[15px] hover:brightness-110 hover:-translate-y-1 hover:shadow-xl transition-all active:scale-95 shadow-lg shadow-primary/20 whitespace-nowrap">
              <span className="hidden sm:inline">Book Free Site Visit</span>
              <span className="sm:hidden">Book Visit</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
