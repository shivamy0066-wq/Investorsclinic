import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';

interface MarketData {
  id: string;
  name: string;
  city: string;
  growth: number;
  price: number;
  history: { name: string; value: number }[];
}

const INITIAL_MARKETS: MarketData[] = [
  { id: '1', name: 'Sector 150', city: 'NOIDA', growth: 38.4, price: 8400, history: [
    { name: 'Q1', value: 22 }, { name: 'Q2', value: 25 }, { name: 'Q3', value: 30 }, { name: 'Q4', value: 34 }, { name: 'NOW', value: 38 }
  ]},
  { id: '2', name: 'Dwarka Exp.', city: 'GURGAON', growth: 42.1, price: 12500, history: [
    { name: 'Q1', value: 25 }, { name: 'Q2', value: 28 }, { name: 'Q3', value: 32 }, { name: 'Q4', value: 37 }, { name: 'NOW', value: 42 }
  ]},
  { id: '3', name: 'Golf Course Ext.', city: 'GURGAON', growth: 36.8, price: 15800, history: [
    { name: 'Q1', value: 20 }, { name: 'Q2', value: 24 }, { name: 'Q3', value: 28 }, { name: 'Q4', value: 33 }, { name: 'NOW', value: 36 }
  ]},
  { id: '4', name: 'Sector 79', city: 'NOIDA', growth: 29.2, price: 7200, history: [
    { name: 'Q1', value: 15 }, { name: 'Q2', value: 18 }, { name: 'Q3', value: 22 }, { name: 'Q4', value: 26 }, { name: 'NOW', value: 29 }
  ]},
  { id: '5', name: 'Whitefield', city: 'BANGALORE', growth: 31.5, price: 9500, history: [
    { name: 'Q1', value: 18 }, { name: 'Q2', value: 21 }, { name: 'Q3', value: 25 }, { name: 'Q4', value: 28 }, { name: 'NOW', value: 31 }
  ]},
  { id: '6', name: 'Sarjapur Rd.', city: 'BANGALORE', growth: 34.2, price: 8800, history: [
    { name: 'Q1', value: 20 }, { name: 'Q2', value: 23 }, { name: 'Q3', value: 27 }, { name: 'Q4', value: 31 }, { name: 'NOW', value: 34 }
  ]},
  { id: '7', name: 'Worli', city: 'MUMBAI', growth: 18.7, price: 45000, history: [
    { name: 'Q1', value: 12 }, { name: 'Q2', value: 14 }, { name: 'Q3', value: 15 }, { name: 'Q4', value: 17 }, { name: 'NOW', value: 18 }
  ]},
  { id: '8', name: 'Thane West', city: 'MUMBAI', growth: 24.5, price: 18500, history: [
    { name: 'Q1', value: 16 }, { name: 'Q2', value: 18 }, { name: 'Q3', value: 20 }, { name: 'Q4', value: 22 }, { name: 'NOW', value: 24 }
  ]},
  { id: '9', name: 'Hinjewadi', city: 'PUNE', growth: 28.1, price: 6800, history: [
    { name: 'Q1', value: 18 }, { name: 'Q2', value: 20 }, { name: 'Q3', value: 23 }, { name: 'Q4', value: 25 }, { name: 'NOW', value: 28 }
  ]},
  { id: '10', name: 'Gachibowli', city: 'HYDERABAD', growth: 33.9, price: 9200, history: [
    { name: 'Q1', value: 20 }, { name: 'Q2', value: 24 }, { name: 'Q3', value: 27 }, { name: 'Q4', value: 30 }, { name: 'NOW', value: 33 }
  ]},
  { id: '11', name: 'OMR', city: 'CHENNAI', growth: 22.4, price: 7500, history: [
    { name: 'Q1', value: 14 }, { name: 'Q2', value: 16 }, { name: 'Q3', value: 18 }, { name: 'Q4', value: 20 }, { name: 'NOW', value: 22 }
  ]},
  { id: '12', name: 'New Town', city: 'KOLKATA', growth: 19.3, price: 6200, history: [
    { name: 'Q1', value: 10 }, { name: 'Q2', value: 12 }, { name: 'Q3', value: 15 }, { name: 'Q4', value: 17 }, { name: 'NOW', value: 19 }
  ]},
];

export function InvestmentAnalytics() {
  const [selectedMarketId, setSelectedMarketId] = useState('1');
  const [markets, setMarkets] = useState(INITIAL_MARKETS);
  const [isLive, setIsLive] = useState(true);
  const [lastUpdateId, setLastUpdateId] = useState<string | null>(null);

  const selectedMarket = markets.find(m => m.id === selectedMarketId) || markets[0];

  // Simulating real-time data updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      const luckyIndex = Math.floor(Math.random() * markets.length);
      const updateId = markets[luckyIndex].id;
      setLastUpdateId(updateId);
      
      setMarkets(prev => prev.map(m => {
        if (m.id !== updateId) return m;
        
        const change = (Math.random() - 0.45) * 0.4; // slight upward bias
        const priceJitter = (Math.random() - 0.5) * 10; // small price jitter
        const newGrowth = Math.max(0, m.growth + change);
        const newPrice = Math.max(1000, m.price + priceJitter);
        
        const newHistory = [...m.history];
        newHistory[newHistory.length - 1] = {
          ...newHistory[newHistory.length - 1],
          value: newGrowth
        };

        return {
          ...m,
          growth: newGrowth,
          price: newPrice,
          history: newHistory
        };
      }));

      // Reset pulse after animation
      setTimeout(() => setLastUpdateId(null), 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, [isLive, markets.length]);

  return (
    <section className="pt-12 pb-0 bg-slate-50/80 border-y border-slate-100 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-headline font-extrabold text-[#0a1e3b] mb-4">
            Invest with <span className="text-primary">Confidence</span><br />
            <span className="italic font-serif font-light text-secondary lowercase">using real-time data</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl leading-relaxed text-sm">
            Identify fast-growing locations, analyze multi-year trends, and unlock better investments with our Bloomberg-grade analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Heatmap Grid */}
          <div className="lg:col-span-8 bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-[2rem] p-6 shadow-xl shadow-slate-200/20">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white shadow-md border border-slate-100 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-slate-900 leading-tight text-sm">Appreciation Heatmap</h3>
                  <p className="text-[9px] uppercase font-bold tracking-widest text-slate-400">Select a micro-market to analyze</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-slate-100 shadow-sm">
                  <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Heat Range</span>
                  <div className="w-32 h-2 rounded-full bg-gradient-to-r from-slate-200 via-primary to-secondary" />
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <button 
                  onClick={() => setIsLive(!isLive)}
                  className={cn(
                    "px-4 py-2 rounded-full border shadow-sm text-[10px] font-black uppercase tracking-widest transition-all",
                    isLive ? "bg-green-50 border-green-100 text-green-600" : "bg-white border-slate-100 text-slate-400"
                  )}
                >
                  {isLive ? '● Live Feed' : '○ Paused'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {markets.map((market) => (
                <button
                  key={market.id}
                  onClick={() => setSelectedMarketId(market.id)}
                  className={cn(
                    "relative p-4 rounded-2xl transition-all duration-500 text-left border flex flex-col justify-between h-40 group overflow-hidden",
                    selectedMarketId === market.id 
                      ? "bg-primary border-primary shadow-2xl shadow-primary/30 -translate-y-1" 
                      : "bg-white border-slate-200/60 hover:border-slate-300 hover:shadow-xl hover:-translate-y-0.5"
                  )}
                >
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className={cn(
                        "text-2xl font-headline font-black mb-1 transition-all duration-300",
                        selectedMarketId === market.id ? "text-white" : "text-secondary",
                        lastUpdateId === market.id && "scale-110 text-green-500"
                      )}>
                        +{market.growth.toFixed(1)}%
                      </div>
                      <div className={cn(
                        "text-[11px] font-bold tracking-tight mb-0.5 transition-colors duration-500",
                        selectedMarketId === market.id ? "text-white/90" : "text-slate-900"
                      )}>
                        {market.name}
                      </div>
                      <div className={cn(
                        "text-[9px] font-black tracking-widest uppercase transition-colors duration-500",
                        selectedMarketId === market.id ? "text-white/50" : "text-slate-400"
                      )}>
                        {market.city}
                      </div>
                    </div>

                    {/* Mini Sparkline Rendering */}
                    <div className="h-10 w-full mt-2 overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={market.history}>
                          <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke={selectedMarketId === market.id ? "#fff" : "#0071ba"} 
                            fill={selectedMarketId === market.id ? "rgba(255,255,255,0.2)" : "rgba(0,113,186,0.1)"} 
                            strokeWidth={1}
                            isAnimationActive={false}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {selectedMarketId === market.id && (
                    <motion.div 
                      layoutId="active-dot" 
                      className="absolute top-4 right-4 w-2 h-2 rounded-full bg-secondary"
                    />
                  )}

                  {lastUpdateId === market.id && (
                    <motion.div 
                      initial={{ opacity: 0.5, scale: 0.8 }}
                      animate={{ opacity: 0, scale: 1.5 }}
                      className="absolute inset-0 bg-blue-500/10 z-0 pointer-events-none"
                    />
                  )}
                  
                  {/* Background decoration */}
                  {selectedMarketId === market.id && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Details & Chart */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div 
              key={selectedMarketId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#0a1e3b] rounded-[2rem] p-6 md:p-8 flex flex-col h-full shadow-2xl shadow-blue-950/20 relative overflow-hidden"
            >
              {/* Theme decorative element */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Market Outlook</p>
                    <h4 className="text-3xl font-headline font-extrabold text-white mb-2 leading-tight">
                      {selectedMarket.name}
                    </h4>
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
                      ₹{(selectedMarket.price).toLocaleString()} PSF • {selectedMarket.city} Market
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2 text-secondary">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xl font-bold">+{selectedMarket.growth.toFixed(1)}%</span>
                    </div>
                    <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest mt-1">CAGR Target</span>
                  </div>
                </div>

                {/* Additional Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Volatility</p>
                    <p className="text-sm font-bold text-white">Low-Med</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Buy Momentum</p>
                    <div className="flex items-center gap-2">
                       <p className="text-sm font-bold text-emerald-400">Strong</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-h-[220px] mt-4 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={selectedMarket.history}>
                      <defs>
                        <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0071ba" stopOpacity={0.6}/>
                          <stop offset="95%" stopColor="#0071ba" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                      <XAxis 
                        dataKey="name" 
                        hide 
                      />
                      <YAxis hide domain={['dataMin - 2', 'dataMax + 2']} />
                      <Tooltip 
                        cursor={{ stroke: '#0071ba', strokeWidth: 1, strokeDasharray: '4 4' }}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-[#0a1e3b] border border-secondary/20 p-3 rounded-xl shadow-xl">
                                <p className="text-[10px] font-black uppercase text-slate-400 mb-1">{payload[0].payload.name}</p>
                                <p className="text-sm font-bold text-secondary">+{payload[0].value?.toString()}% Growth</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#0071ba" 
                        strokeWidth={3}
                        fill="url(#colorVal)" 
                        animationDuration={1500}
                        isAnimationActive={true}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  
                  <div className="flex justify-between items-center mt-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                    <span className="text-white">Now</span>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-white/5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <p className="text-xs text-white font-medium">Strategic Infrastructure Development</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <p className="text-xs text-slate-400 font-medium">Commercial Hub Expansion</p>
                  </div>
                </div>
              </div>
            </motion.div>


          </div>
        </div>
      </div>

      {/* Bloomberg style ticker */}
      <div className="mt-10 bg-[#0a1e3b] border-y border-white/5 py-4 overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...markets, ...markets].map((market, idx) => (
            <div key={`${market.id}-${idx}`} className="flex items-center gap-8 px-8 border-r border-white/10">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{market.name}</span>
              <span className="text-sm font-bold text-white">₹{market.price.toLocaleString()}</span>
              <span className={cn(
                "text-[10px] font-bold px-2 py-0.5 rounded",
                market.growth > 30 ? "bg-green-500/10 text-green-400" : "bg-secondary/10 text-secondary"
              )}>
                +{market.growth.toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
