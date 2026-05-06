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
                  className={`whitespace-nowrap text-[13px] font-semibold transition-all pb-3 border-b-2 ${
                    activeCategory === cat 
                    ? 'text-primary border-primary' 
                    : 'text-slate-400 border-transparent hover:text-primary hover:border-slate-200'
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
                      <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2 tracking-tight font-headline">
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-500 font-medium opacity-80 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{post.author}</span>
                         <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">{post.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              <div className="flex justify-center pt-6">
                <button className="bg-slate-900 text-white px-10 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all active:scale-95 shadow-lg shadow-slate-200">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Right: Insights Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Search Interface */}
              <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-100">
                      <Search size={18} />
                   </div>
                   <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Search</h4>
                </div>
                <div className="relative">
                   <input 
                     type="text" 
                     placeholder="Search articles..." 
                     className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all pr-12"
                   />
                   <Search size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300" />
                </div>
              </div>

              {/* Recent Strategic Updates */}
              <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-100">
                      <TrendingUp size={18} />
                   </div>
                   <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Latest Updates</h4>
                </div>
                <div className="space-y-6">
                  {BLOG_POSTS.slice(0, 5).map((post, i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                        <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h5 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors line-clamp-2 font-headline">
                          {post.title}
                        </h5>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Read Full Article</span>
                          <ChevronRight size={12} className="text-primary" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alpha Access Subscription */}
              <div className="bg-[#0a1120] p-8 rounded-[2.5rem] text-white relative overflow-hidden group shadow-2xl shadow-slate-200">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all translate-x-8 -translate-y-8" />
                
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/10">
                      <Mail size={18} />
                   </div>
                   <h4 className="text-sm font-bold uppercase tracking-wider">Newsletter</h4>
                </div>
                <p className="text-xs font-medium text-white/50 leading-relaxed mb-6">Stay informed with the latest insights and market updates. No spam, ever.</p>
                
                <div className="space-y-4">
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm font-medium text-white placeholder:text-white/30 focus:outline-none focus:bg-white/10 transition-all"
                    />
                    <Mail size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30" />
                  </div>
                  <button className="w-full bg-primary py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-primary/20">
                    Subscribe
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

