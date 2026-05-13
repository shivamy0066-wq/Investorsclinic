import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { CITIES } from "../constants";

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects", hasDropdown: true },
    { label: "Who We Are", href: "/about" },
    { label: "Cities", href: "#", hasDropdown: true },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ];

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
              <img 
                src="https://investorsclinic.in/public/ic/images/log.svg" 
                alt="Investors Clinic" 
                width="200"
                height="56"
                fetchPriority="high"
                className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
              />
            </Link>
            
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item, idx) => {
                const active = location.pathname === item.href;
                return (
                  <div key={idx} className="relative group/parent">
                    <Link 
                      to={item.href} 
                      className={`group relative text-[16px] font-bold transition-all flex items-center gap-1.5 ${active ? 'text-primary' : 'text-[#1a1a2e] hover:text-primary'}`}
                    >
                      {item.label}
                      {item.hasDropdown && <ChevronDown className={`w-4 h-4 mt-0.5 transition-transform duration-300 group-hover/parent:rotate-180 ${active ? 'text-primary' : 'text-slate-400'}`} />}
                      {active && (
                        <motion.div 
                          layoutId="navUnderline"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary" 
                        />
                      )}
                    </Link>

                    {item.label === "Cities" && (
                      <div className="absolute top-full left-0 pt-4 hidden group-hover/parent:block">
                        <div className="bg-white border border-slate-100 rounded-2xl shadow-2xl p-4 w-64 grid grid-cols-1 gap-2">
                          {CITIES.map((city) => (
                            <Link 
                              key={city}
                              to={`/city/${city.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-sm font-bold text-slate-600 hover:text-primary hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all"
                            >
                              {city}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.label === "Projects" && (
                      <div className="absolute top-full left-0 pt-4 hidden group-hover/parent:block">
                        <div className="bg-white border border-slate-100 rounded-2xl shadow-2xl p-4 w-64 flex flex-col gap-2">
                          <Link to="/projects" className="text-sm font-bold text-slate-600 hover:text-primary hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all">All Projects</Link>
                          <Link to="/projects?type=residential" className="text-sm font-bold text-slate-600 hover:text-primary hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all">Residential</Link>
                          <Link to="/projects?type=commercial" className="text-sm font-bold text-slate-600 hover:text-primary hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all">Commercial</Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-primary text-white px-5 md:px-8 py-3 rounded-[12px] font-bold text-[13px] md:text-[15px] hover:brightness-110 hover:-translate-y-1 hover:shadow-xl transition-all active:scale-95 shadow-lg shadow-primary/20 whitespace-nowrap">
              <span className="hidden sm:inline">Book Free Site Visit</span>
              <span className="sm:hidden">Book Visit</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] lg:hidden bg-[#0a1e3b]"
          >
            <div className="flex flex-col h-full p-8 pt-24">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-8">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {item.label === "Cities" ? (
                      <div className="space-y-4">
                        <span className="text-white font-headline font-black text-4xl uppercase tracking-tight">{item.label}</span>
                        <div className="grid grid-cols-2 gap-4 pl-4">
                          {CITIES.map((city) => (
                            <Link
                              key={city}
                              to={`/city/${city.toLowerCase().replace(/\s+/g, '-')}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-white/60 font-bold text-sm hover:text-white uppercase tracking-widest"
                            >
                              {city}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex items-end gap-4"
                      >
                        <span className="text-white font-headline font-black text-4xl uppercase tracking-tight">{item.label}</span>
                        <div className="h-0.5 flex-1 bg-white/10 mb-2 group-hover:bg-secondary transition-colors" />
                        <ArrowUpRight className="text-secondary mb-1 opacity-0 group-hover:opacity-100 transition-all" />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-6">
                <div className="flex gap-6">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white"><Phone size={18} /></div>
                   <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Connect with us</p>
                     <p className="text-white font-bold">+91 12345 67890</p>
                   </div>
                </div>
                <button className="w-full bg-secondary text-white py-5 rounded-2xl font-black text-[13px] uppercase tracking-[0.2em] shadow-2xl">
                  Book Free Visit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
