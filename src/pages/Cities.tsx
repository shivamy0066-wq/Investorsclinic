import React from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MapPin, Building2, Users, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const CITIES_DATA = [
  {
    id: 'noida',
    name: 'Noida',
    state: 'Uttar Pradesh',
    projects: '450+',
    delivered: '85K+',
    image: 'https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=800&auto=format&fit=crop',
    description: 'The vertical growth engine of North India, offering world-class infrastructure and IT corridors.'
  },
  {
    id: 'gurugram',
    name: 'Gurugram',
    state: 'Haryana',
    projects: '380+',
    delivered: '60K+',
    image: 'https://images.unsplash.com/photo-1599933310631-15582f64d08b?q=80&w=800&auto=format&fit=crop',
    description: 'The Millennium City, heart of Indias Fortune 500 offices and luxury residential horizons.'
  },
  {
    id: 'greater-noida-west',
    name: 'Greater Noida West',
    state: 'Delhi-NCR',
    projects: '180+',
    delivered: '25K+',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    description: 'The most value-driven residential corridor in NCR, perfect for first-time premium buyers.'
  },
  {
    id: 'faridabad',
    name: 'Faridabad',
    state: 'Haryana',
    projects: '120+',
    delivered: '15K+',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    description: 'Evolving industrial hub with strategic connectivity to Delhi and Noida.'
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    projects: '290+',
    delivered: '45K+',
    image: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=800&auto=format&fit=crop',
    description: 'The cultural capital and education hub, rapidly evolving into a premier tech destination.'
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    projects: '320+',
    delivered: '52K+',
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800&auto=format&fit=crop',
    description: 'Indias Silicon Valley, where tech innovation drives one of the most stable real estate markets.'
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    projects: '95+',
    delivered: '8K+',
    image: 'https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=800&auto=format&fit=crop',
    description: 'The Pink City, offering unique heritage lifestyle investments and growing hospitality assets.'
  },
  {
    id: 'dehradun',
    name: 'Dehradun',
    state: 'Uttarakhand',
    projects: '65+',
    delivered: '5K+',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fee74a62?q=80&w=800&auto=format&fit=crop',
    description: 'Serene valley living with premium retreats and luxury hill-side residences.'
  },
  {
    id: 'dubai',
    name: 'Dubai',
    state: 'UAE',
    projects: '150+',
    delivered: '12K+',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    description: 'Our global gateway for NRI investors seeking international portfolio diversification.'
  }
];

export const Cities = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Premium Hero Section */}
        <section className="pt-40 pb-24 md:pb-32 bg-[#0a1e3b] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Globe className="absolute -top-20 -right-20 w-[600px] h-[600px] text-white" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-[2px] w-12 bg-secondary rounded-full" />
                <span className="text-secondary font-black tracking-[0.5em] uppercase text-[11px]">Global Network</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-headline font-black mb-8 leading-[0.95] tracking-tight uppercase"
              >
                Our Strategic <br />
                <span className="text-secondary italic">Footprints.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-2xl"
              >
                Explore our curated presence across the most promising real estate corridors in India and the world. 
                Data-driven selections for the sophisticated investor.
              </motion.p>
            </div>
          </div>
        </section>

        {/* City Grid Section */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {CITIES_DATA.map((city, i) => (
                <motion.div 
                  key={city.id}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative h-[450px] rounded-[3.5rem] overflow-hidden border border-slate-100 bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] group-hover:shadow-[0_48px_96px_-24px_rgba(0,0,0,0.15)] transition-all duration-700">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={city.image} 
                        alt={city.name} 
                        className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    </div>

                    <div className="absolute inset-0 p-10 flex flex-col justify-end text-white relative z-10 h-full">
                      <div className="space-y-6">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-secondary" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/70">{city.state}</span>
                        </div>
                        
                        <div>
                          <h3 className="text-4xl font-headline font-black uppercase tracking-tight mb-2 group-hover:text-secondary transition-colors">{city.name}</h3>
                          <p className="text-sm text-white/60 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                            {city.description}
                          </p>
                        </div>

                        {/* Metrices Grid */}
                        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                          <div>
                            <p className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-1">Live Portfolios</p>
                            <p className="text-lg font-black">{city.projects}</p>
                          </div>
                          <div>
                            <p className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-1">Delivered</p>
                            <p className="text-lg font-black">{city.delivered}</p>
                          </div>
                        </div>

                        <Link 
                          to={`/city/${city.id}`}
                          className="flex items-center justify-between w-full mt-6 bg-white py-5 px-8 rounded-2xl text-[#0a1e3b] font-black text-[12px] uppercase tracking-widest hover:bg-secondary hover:text-white transition-all group/btn active:scale-95 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500"
                        >
                          View Inventory
                          <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Global Expansion Card */}
            <motion.div 
              {...fadeInUp}
              className="mt-20 flex flex-col md:flex-row items-center justify-between p-12 md:p-20 bg-[#0a1e3b] rounded-[4rem] text-white overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 rotate-12 -mr-20" />
              <div className="relative z-10 max-w-xl">
                <h2 className="text-3xl md:text-5xl font-headline font-black mb-6 uppercase tracking-tight">Our expansion continues <span className="text-secondary italic">Daily.</span></h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  We are constantly evaluating new growth corridors. If you are a developer looking for institutional-grade sales consultancy, talk to our expert panel.
                </p>
              </div>
              <button className="relative z-10 mt-10 md:mt-0 px-12 py-6 bg-secondary text-white rounded-2xl font-black text-[13px] uppercase tracking-[0.2em] shadow-2xl shadow-secondary/20 hover:scale-105 transition-transform">
                Join our Network
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
