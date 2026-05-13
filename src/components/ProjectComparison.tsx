import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Zap, CheckCircle2, LayoutGrid, Info } from 'lucide-react';
import { Property } from '../types';

interface ComparisonProps {
  selectedItems: Property[];
  onRemove: (property: Property) => void;
  onClear: () => void;
}

export const ProjectComparison: React.FC<ComparisonProps> = ({ selectedItems, onRemove, onClear }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (selectedItems.length === 0) return null;

  return (
    <>
      {/* Floating Comparison Bar */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[60] w-full max-w-2xl px-6"
      >
        <div className="bg-[#0a1e3b] rounded-[2rem] p-4 shadow-2xl border border-white/10 flex items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3 overflow-hidden">
              {selectedItems.map((item) => (
                <div 
                  key={item.id} 
                  className="w-10 h-10 rounded-xl border-2 border-[#0a1e3b] overflow-hidden bg-slate-800 relative group cursor-pointer"
                  onClick={() => onRemove(item)}
                >
                  <img loading="lazy" src={item.img} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <X size={12} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-[10px] font-black text-white uppercase tracking-widest">{selectedItems.length} Properties</p>
              <p className="text-[9px] font-bold text-white/40 uppercase">Ready to Technical Compare</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onClear}
              className="text-[9px] font-black text-white/50 uppercase tracking-widest hover:text-white transition-colors"
            >
              Clear
            </button>
            <button 
              onClick={() => setIsOpen(true)}
              className="bg-secondary text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-secondary/20 hover:scale-105 transition-transform flex items-center gap-2 group"
            >
              Launch Matrix <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Comparison Matrix Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            {/* Header */}
            <div className="px-10 py-8 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0a1e3b] hover:bg-secondary hover:text-white transition-all"
                >
                  <X size={20} />
                </button>
                <div>
                   <p className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-1">Intelligence System</p>
                   <h2 className="text-3xl font-headline font-black text-[#0a1e3b] uppercase tracking-tighter">Property <span className="text-secondary italic">Matrix</span></h2>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-[#0a1e3b] uppercase tracking-widest">RERA Verified</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase">Audit Complete</p>
                  </div>
                </div>
                <div className="w-px h-10 bg-slate-100" />
                <button className="bg-[#0a1e3b] text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:brightness-125 transition-all shadow-2xl">
                  Export Comparison PDF
                </button>
              </div>
            </div>

            {/* Matrix Console */}
            <div className="flex-1 overflow-auto p-10">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {selectedItems.map((item) => (
                    <div key={item.id} className="space-y-12">
                      {/* Property Header */}
                      <div className="space-y-6">
                        <div className="aspect-[1.5/1] rounded-3xl overflow-hidden shadow-2xl">
                          <img loading="lazy" src={item.img} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-[#0a1e3b] uppercase tracking-tight line-clamp-2 min-h-[56px]">{item.title}</h4>
                          <p className="text-secondary font-black text-xs mt-2 uppercase tracking-widest">{item.price}</p>
                        </div>
                      </div>

                      {/* Specs Matrix */}
                      <div className="space-y-8 bg-slate-50/50 p-8 rounded-[3rem] border border-slate-100">
                        <div className="space-y-2">
                           <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Location Analysis</p>
                           <p className="text-sm font-bold text-[#0a1e3b]">{item.loc}</p>
                        </div>
                        <div className="space-y-2">
                           <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Configurations</p>
                           <div className="flex flex-wrap gap-2">
                             {item.bhk.split(', ').map((b, i) => (
                               <span key={i} className="px-3 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-black text-[#0a1e3b]">{b}</span>
                             ))}
                           </div>
                        </div>
                        <div className="space-y-2">
                           <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Size Spectrum</p>
                           <p className="text-sm font-bold text-secondary italic">{item.sqft}</p>
                        </div>
                        <div className="space-y-2">
                           <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Investment Rating</p>
                           <div className="flex gap-1">
                             {[1, 2, 3, 4, 5].map((s) => (
                               <div key={s} className="w-3 h-1 bg-secondary rounded-full" />
                             ))}
                           </div>
                        </div>
                      </div>

                      {/* Technical Features */}
                      <div className="space-y-4">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Key Distinctions</p>
                        <div className="space-y-3">
                          {["Smart Automation", "EV Charging Station", "Zen Garden Access"].map((f, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-5 h-5 rounded-md bg-secondary/10 flex items-center justify-center text-secondary">
                                <Zap size={10} />
                              </div>
                              <span className="text-[11px] font-bold text-slate-500">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button className="w-full py-5 rounded-2xl bg-white border-2 border-slate-100 hover:border-secondary hover:text-secondary transition-all font-black text-[11px] uppercase tracking-widest text-[#0a1e3b]">
                        View Full Dossier
                      </button>
                    </div>
                  ))}
                  
                  {/* Empty Slot Placeholder */}
                  {selectedItems.length < 3 && (
                    <div className="rounded-[3rem] border-2 border-dashed border-slate-100 flex flex-col items-center justify-center p-12 text-center bg-slate-50/20">
                      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-300 mb-6">
                        <LayoutGrid size={24} />
                      </div>
                      <p className="text-xs font-black text-slate-300 uppercase tracking-widest mb-2">Slot Available</p>
                      <p className="text-[10px] font-bold text-slate-400 max-w-[140px]">Add another project to see technical variance</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Matrix Footer */}
            <div className="p-10 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-secondary shadow-sm">
                    <Info size={20} />
                  </div>
                  <div className="max-w-[300px]">
                    <p className="text-[10px] font-black text-[#0a1e3b] uppercase tracking-tight">Market Variance Warning</p>
                    <p className="text-[10px] font-medium text-slate-400 italic">Prices and availability are subject to real-time market fluctuations.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-12 text-slate-300 uppercase font-black text-[10px] tracking-widest">
                <span>Precision Audit © 2026</span>
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>IC Intelligence Division</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
