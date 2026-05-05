import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Clock, 
  ChevronRight,
  Search,
  Filter,
  ArrowUpRight,
  TrendingUp,
  Mail,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { BLOG_POSTS } from "../constants";

const CATEGORIES = ["All", "Market Trends", "Investments", "Innovation", "Regulations", "Sustainability", "Holiday Homes"];

export const BlogListing = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const categories = ["Indian Real Estate", "Real Estate Trends", "NRI", "Expert Tips"];

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-28 pb-12">
        {/* Category Navigation Bar - Secondary Header Style */}
        <div className="bg-white border-b border-slate-100 mb-6 sticky top-20 z-40">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex items-center gap-10 py-4 overflow-x-auto no-scrollbar scrollbar-hide">
              {["All", ...CATEGORIES.slice(1)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap text-[12px] font-black uppercase tracking-widest transition-all pb-2 border-b-2 ${
                    activeCategory === cat 
                    ? 'text-primary border-primary' 
                    : 'text-slate-500 border-transparent hover:text-primary hover:border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* Left: Intelligence Feed (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Grid of Intel Reports */}
              <div className="grid md:grid-cols-3 gap-6">
                {filteredPosts.map((post, i) => (
                  <Link 
                    to={`/blog/${post.id}`} 
                    key={post.id} 
                    className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden group hover:border-primary/10 transition-all flex flex-col h-full hover:shadow-xl hover:shadow-primary/5"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest leading-none">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xs font-black text-primary uppercase leading-tight mb-3 group-hover:text-secondary transition-colors line-clamp-2 tracking-tight">
                        {post.title}
                      </h3>
                      <p className="text-[11px] leading-relaxed text-slate-500 font-medium opacity-80 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                         <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{post.author}</span>
                         <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">{post.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              <div className="flex justify-center pt-6">
                <button className="bg-secondary text-white px-10 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-secondary/20 hover:brightness-110 transition-all active:scale-95">
                  Load More Intelligence
                </button>
              </div>
            </div>

            {/* Right: Insights Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Search Intelligence */}
              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                      <Search size={18} />
                   </div>
                   <h4 className="text-sm font-black text-primary uppercase tracking-widest">Search Intelligence</h4>
                </div>
                <div className="relative">
                   <input 
                     type="text" 
                     placeholder="Type Your Search Here" 
                     className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-[12px] font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all pr-12"
                   />
                   <Search size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300" />
                </div>
              </div>

              {/* Recent Strategic Updates */}
              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                      <TrendingUp size={18} />
                   </div>
                   <h4 className="text-sm font-black text-primary uppercase tracking-widest">Recent Updates</h4>
                </div>
                <div className="space-y-6">
                  {BLOG_POSTS.slice(0, 5).map((post, i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                        <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h5 className="text-[11px] font-black text-primary uppercase leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                          {post.title}
                        </h5>
                        <div className="flex items-center gap-1">
                          <span className="text-[9px] font-black text-secondary uppercase tracking-widest">Read Report</span>
                          <ChevronRight size={12} className="text-secondary" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alpha Access Subscription */}
              <div className="bg-primary p-8 rounded-[2rem] text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all translate-x-8 -translate-y-8" />
                
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                      <Mail size={18} />
                   </div>
                   <h4 className="text-sm font-black uppercase tracking-widest">Subscribe</h4>
                </div>
                <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-6">Stay ahead of the market curve with proprietary data.</p>
                
                <div className="space-y-4">
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Enter email address" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-[12px] font-bold text-white placeholder:text-white/30 focus:outline-none focus:bg-white/10 transition-all"
                    />
                    <Mail size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30" />
                  </div>
                  <button className="w-full bg-secondary py-4 rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-secondary/20 hover:brightness-110 active:scale-95 transition-all">
                    Get Alpha Alerts
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

