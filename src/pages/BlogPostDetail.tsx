import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Calendar, Clock, ArrowLeft, Linkedin, Twitter, Facebook, 
  ChevronRight, ChevronDown, TrendingUp, Mail, Search,
  Link2, Check
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BLOG_POSTS } from '../constants';

export const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id) || BLOG_POSTS[0];
  
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return;
    }
    
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    if (shareUrl) window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-secondary origin-left z-50 shadow-[0_0_10px_rgba(237,28,36,0.5)]"
        style={{ scaleX }}
      />
      
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Top Breadcrumb & Nav */}
        <div className="max-w-5xl mx-auto px-6 mb-10">
          <div className="flex items-center justify-between">
            <Link to="/blog" className="group flex items-center gap-3 text-xs font-bold text-slate-400 hover:text-[#0a1e3b] transition-all">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#0a1e3b] group-hover:text-white transition-all shadow-sm">
                <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              </div>
              Back to Insights
            </Link>
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-widest">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={10} />
              <Link to="/blog" className="hover:text-primary transition-colors">Journal</Link>
              <ChevronRight size={10} />
              <span className="text-secondary">{post.category}</span>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Sticky Social Share */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-32 flex flex-col items-center gap-4">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 rotate-180" style={{ writingMode: 'vertical-rl' }}>
                  Share Article
                </p>
                <div className="w-[1px] h-10 bg-slate-200 mb-2" />
                
                {[
                  { icon: Linkedin, name: 'linkedin', color: 'hover:text-[#0a66c2]' },
                  { icon: Twitter, name: 'twitter', color: 'hover:text-[#1da1f2]' },
                  { icon: Facebook, name: 'facebook', color: 'hover:text-[#1877f2]' },
                ].map((social) => (
                  <button 
                    key={social.name}
                    onClick={() => handleShare(social.name)} 
                    className={`w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 ${social.color} hover:border-slate-300 shadow-sm hover:shadow-md transition-all group`}
                  >
                    <social.icon size={16} className="group-hover:scale-110 transition-transform" />
                  </button>
                ))}
                
                <button 
                  onClick={() => handleShare('copy')} 
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:border-slate-300 shadow-sm hover:shadow-md transition-all group relative mt-2"
                >
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Link2 size={16} className="group-hover:scale-110 transition-transform" />}
                </button>
              </div>
            </div>

            {/* Center: Main Content */}
            <div className="lg:col-span-8">
              <motion.article {...fadeInUp}>
                
                {/* Premium Header */}
                <header className="mb-12">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Calendar size={12} className="text-slate-300" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={12} className="text-slate-300" /> {post.readTime}</span>
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#0a1e3b] font-headline leading-[1.15] tracking-tight mb-8">
                    {post.title}
                  </h1>

                  <div className="flex items-center justify-between py-6 border-y border-slate-200 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#0a1e3b] font-black text-lg border border-slate-200 shadow-sm">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0a1e3b]">{post.author}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Senior Market Analyst</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-[2rem] overflow-hidden shadow-xl group aspect-[16/9] md:aspect-[2/1] bg-white border border-slate-100">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                </header>

                {/* Premium Table of Contents */}
                <div className="mb-14 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <h3 className="text-sm font-black text-[#0a1e3b] uppercase tracking-widest mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    Table of Contents
                  </h3>
                  <nav className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {post.content.filter(s => s.type === 'heading' || s.type === 'h2').map((section, idx) => (
                      <a 
                         key={idx}
                         href={`#section-${idx}`}
                         className="flex items-start gap-4 text-sm font-medium text-slate-500 hover:text-primary transition-colors group"
                      >
                         <span className="text-slate-300 font-black font-headline group-hover:text-primary transition-colors">{(idx + 1).toString().padStart(2, '0')}</span>
                         <span className="leading-snug">{section.text}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Dynamic Content Rendering */}
                <div className="prose prose-slate max-w-none prose-headings:font-headline prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#0a1e3b] prose-p:text-slate-600 prose-p:leading-[1.9] prose-p:text-[17px] prose-a:text-secondary hover:prose-a:text-red-600 prose-strong:text-[#0a1e3b]">
                  <p className="text-xl md:text-[22px] font-medium text-[#0a1e3b] mb-12 leading-relaxed font-headline italic border-l-4 border-secondary pl-6 py-2 bg-slate-50 rounded-r-2xl pr-4">
                    "{post.excerpt}"
                  </p>
                  
                  <div className="space-y-8">
                    {post.content.map((section, idx) => {
                      if (section.type === 'heading' || section.type === 'h2') {
                        return (
                          <h2 key={idx} id={`section-${post.content.filter((_, i) => i < idx && (post.content[i].type === 'heading' || post.content[i].type === 'h2')).length}`} className="text-3xl mt-16 mb-8 scroll-mt-32 flex items-center gap-4">
                            {section.text}
                          </h2>
                        );
                      }
                      if (section.type === 'h3') {
                        return <h3 key={idx} className="text-2xl font-bold mt-10 mb-5">{section.text}</h3>;
                      }
                      if (section.type === 'h4') {
                        return <h4 key={idx} className="text-lg font-bold mt-8 mb-4">{section.text}</h4>;
                      }
                      if (section.type === 'image') {
                        return (
                          <figure key={idx} className="my-12 rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-md">
                            <img src={section.url} alt={section.alt || ""} className="w-full h-auto object-cover" />
                            {section.alt && <figcaption className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest p-4 bg-slate-50 border-t border-slate-100">{section.alt}</figcaption>}
                          </figure>
                        );
                      }
                      if (section.type === 'paragraph') {
                        return <p key={idx} className="mb-6">{section.text}</p>;
                      }
                      if (section.type === 'data' && section.items) {
                        return (
                          <div key={idx} className="bg-gradient-to-br from-[#0a1e3b] to-[#0f172a] p-8 md:p-12 rounded-[2rem] my-14 relative overflow-hidden shadow-2xl border border-white/10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                            
                            <h4 className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-8 relative z-10 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                              Market Intelligence
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                              {section.items.map((item, iIdx) => (
                                <div key={iIdx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{item.label}</p>
                                  <p className="text-3xl md:text-4xl font-black text-white tracking-tight font-headline">{item.value}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      if (section.type === 'faq' && section.faqItems) {
                        return (
                          <div key={idx} className="my-14">
                            <h3 className="text-3xl font-black mb-8 font-headline text-[#0a1e3b]">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                              {section.faqItems.map((faq, fIdx) => (
                                <details key={fIdx} className="bg-white border border-slate-200 rounded-[1.5rem] group overflow-hidden shadow-sm hover:shadow-md transition-all">
                                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                                    <h4 className="text-base font-bold text-[#0a1e3b] pr-8 m-0">{faq.question}</h4>
                                    <div className="w-8 h-8 shrink-0 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-secondary/10 group-hover:text-secondary transition-all text-slate-400">
                                      <ChevronDown size={16} className="group-open:rotate-180 transition-transform duration-300" />
                                    </div>
                                  </summary>
                                  <div className="px-6 pb-6 pt-0">
                                    <p className="text-slate-600 text-[15px] leading-relaxed m-0 border-l-2 border-secondary/30 pl-4">{faq.answer}</p>
                                  </div>
                                </details>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </motion.article>

              {/* Bottom Mobile Share */}
              <div className="lg:hidden mt-16 flex items-center justify-center gap-4 py-8 border-y border-slate-200">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Share:</span>
                {[
                  { icon: Linkedin, name: 'linkedin' },
                  { icon: Twitter, name: 'twitter' },
                  { icon: Facebook, name: 'facebook' },
                ].map((social) => (
                  <button key={social.name} onClick={() => handleShare(social.name)} className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary shadow-sm transition-all">
                    <social.icon size={18} />
                  </button>
                ))}
              </div>

              {/* Related Posts */}
              <div className="mt-16 pt-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-6 h-[1px] bg-secondary" />
                  <h3 className="text-lg font-black text-[#0a1e3b] uppercase tracking-widest">Continue Reading</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map((p, i) => (
                    <Link to={`/blog/${p.id}`} key={i} className="group bg-white rounded-[2rem] border border-slate-200 p-4 hover:shadow-xl transition-all hover:border-primary/30">
                      <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-5 bg-slate-100">
                        <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={p.title} />
                      </div>
                      <div className="px-2 pb-2">
                        <span className="text-[10px] font-black text-secondary uppercase tracking-widest mb-2 block">{p.category}</span>
                        <h4 className="text-base font-black text-[#0a1e3b] leading-snug font-headline group-hover:text-primary transition-colors line-clamp-2">
                          {p.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky top-32 space-y-8">
                
                {/* Search */}
                <div className="bg-white border border-slate-200 p-6 rounded-[2rem] shadow-sm">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Search Insights</h4>
                  <div className="relative">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Keywords..." 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-sm font-medium text-slate-900 focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                </div>

                {/* Premium Newsletter */}
                <div className="bg-gradient-to-br from-[#0f172a] to-[#0a0f1e] p-8 rounded-[2rem] text-white relative overflow-hidden shadow-2xl border border-white/10">
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-secondary/20 rounded-full blur-[60px] pointer-events-none" />
                  
                  <div className="flex items-center gap-2 mb-5 relative z-10">
                     <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                     <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300">Alpha Alerts</h4>
                  </div>
                  <h3 className="text-2xl font-black leading-tight mb-3 relative z-10 font-headline text-white">Weekly Market Intel</h3>
                  <p className="text-xs text-slate-400 mb-8 leading-relaxed relative z-10 font-medium">Institutional-grade real estate analysis delivered directly to your inbox.</p>
                  
                  <div className="space-y-4 relative z-10">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-medium text-white placeholder:text-slate-500 focus:outline-none focus:bg-white/10 focus:border-secondary/50 transition-all"
                    />
                    <button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 active:scale-95 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all shadow-[0_10px_20px_rgba(237,28,36,0.2)] text-white">
                      Subscribe Now
                    </button>
                  </div>
                </div>

                {/* Trending */}
                <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-[2rem] shadow-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp size={16} className="text-secondary" />
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Trending Now</h4>
                  </div>
                  <div className="space-y-6">
                    {BLOG_POSTS.slice(0, 4).map((p, i) => (
                      <Link to={`/blog/${p.id}`} key={i} className="flex gap-4 group items-start">
                        <span className="text-2xl font-black text-slate-200 font-headline group-hover:text-secondary transition-colors w-6 shrink-0 mt-[-4px]">{(i + 1).toString().padStart(2, '0')}</span>
                        <div>
                          <h5 className="text-[13px] font-bold text-[#0a1e3b] leading-snug group-hover:text-primary transition-colors line-clamp-2">
                            {p.title}
                          </h5>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2 block">{p.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
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
