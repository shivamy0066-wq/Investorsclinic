import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Calendar, Clock, Share2, ArrowLeft, Linkedin, Twitter, Facebook, 
  Bookmark, ChevronRight, ChevronDown, TrendingUp, Mail, Search,
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
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Top Breadcrumb & Nav */}
        <div className="max-w-4xl mx-auto px-6 mb-8">
          <div className="flex items-center justify-between">
            <Link to="/blog" className="group flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-primary transition-all">
              <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              </div>
              Back to Insights
            </Link>
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-widest">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={10} />
              <Link to="/blog" className="hover:text-primary transition-colors">Journal</Link>
              <ChevronRight size={10} />
              <span className="text-primary">{post.category}</span>
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
                    className={`w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 ${social.color} hover:border-slate-200 hover:shadow-md transition-all group`}
                  >
                    <social.icon size={16} className="group-hover:scale-110 transition-transform" />
                  </button>
                ))}
                
                <button 
                  onClick={() => handleShare('copy')} 
                  className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:border-slate-200 hover:shadow-md transition-all group relative mt-2"
                >
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Link2 size={16} className="group-hover:scale-110 transition-transform" />}
                </button>
              </div>
            </div>

            {/* Center: Main Content */}
            <div className="lg:col-span-8">
              <motion.article {...fadeInUp}>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-slate-300" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-slate-300" /> {post.readTime}</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-slate-900 font-headline leading-[1.1] tracking-tight mb-8">
                  {post.title}
                </h1>

                {/* Author Mini-Profile */}
                <div className="flex items-center gap-3 mb-10 pb-8 border-b border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary font-black text-lg border border-slate-200 shadow-sm">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{post.author}</p>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Senior Market Analyst</p>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative rounded-3xl overflow-hidden mb-12 shadow-sm border border-slate-100 bg-white group">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                </div>

                {/* Table of Contents */}
                <div className="mb-12">
                   <details className="bg-white border border-slate-200 rounded-2xl group overflow-hidden transition-all duration-300 shadow-sm" open>
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none hover:bg-slate-50 transition-colors">
                         <div className="flex items-center gap-3">
                           <div className="w-1.5 h-5 bg-primary rounded-full" />
                           <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Table of Contents</h3>
                         </div>
                         <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-all text-slate-500">
                            <ChevronDown size={14} className="group-open:rotate-180 transition-transform duration-300" />
                         </div>
                      </summary>
                      <nav className="px-6 pb-6 pt-2 flex flex-col gap-3">
                         {post.content.filter(s => s.type === 'heading' || s.type === 'h2').map((section, idx) => (
                            <a 
                               key={idx}
                               href={`#section-${idx}`}
                               className="flex items-start gap-3 text-sm font-medium text-slate-500 hover:text-primary transition-colors py-1"
                            >
                               <span className="text-primary font-black opacity-40">{idx + 1}.</span>
                               <span>{section.text}</span>
                            </a>
                         ))}
                      </nav>
                   </details>
                </div>

                {/* Dynamic Content */}
                <div className="prose prose-slate max-w-none prose-headings:font-headline prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:text-[17px] prose-a:text-primary hover:prose-a:text-secondary prose-strong:text-slate-900">
                  <p className="text-xl font-medium text-slate-800 mb-10 leading-relaxed border-l-2 border-primary pl-6 py-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="space-y-8">
                    {post.content.map((section, idx) => {
                      if (section.type === 'heading' || section.type === 'h2') {
                        return (
                          <h2 key={idx} id={`section-${post.content.filter((_, i) => i < idx && (post.content[i].type === 'heading' || post.content[i].type === 'h2')).length}`} className="text-2xl mt-12 mb-6 scroll-mt-32">
                            {section.text}
                          </h2>
                        );
                      }
                      if (section.type === 'h3') {
                        return <h3 key={idx} className="text-xl font-bold mt-8 mb-4">{section.text}</h3>;
                      }
                      if (section.type === 'h4') {
                        return <h4 key={idx} className="text-lg font-bold mt-6 mb-3 text-slate-800">{section.text}</h4>;
                      }
                      if (section.type === 'image') {
                        return (
                          <figure key={idx} className="my-10 rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-sm">
                            <img src={section.url} alt={section.alt || ""} className="w-full h-auto object-cover" />
                            {section.alt && <figcaption className="text-center text-xs font-medium text-slate-400 p-4 bg-slate-50 border-t border-slate-100">{section.alt}</figcaption>}
                          </figure>
                        );
                      }
                      if (section.type === 'paragraph') {
                        return <p key={idx} className="mb-6">{section.text}</p>;
                      }
                      if (section.type === 'data' && section.items) {
                        return (
                          <div key={idx} className="bg-slate-900 p-8 rounded-2xl my-10 relative overflow-hidden border border-slate-800 shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                            <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-6 relative z-10">Market Intelligence</h4>
                            <div className="grid sm:grid-cols-2 gap-8 relative z-10">
                              {section.items.map((item, iIdx) => (
                                <div key={iIdx} className="space-y-2">
                                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                                  <p className="text-3xl font-black text-white tracking-tight">{item.value}</p>
                                </div>
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
              <div className="lg:hidden mt-12 flex items-center justify-center gap-4 py-6 border-y border-slate-200">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Share:</span>
                {[
                  { icon: Linkedin, name: 'linkedin' },
                  { icon: Twitter, name: 'twitter' },
                  { icon: Facebook, name: 'facebook' },
                ].map((social) => (
                  <button key={social.name} onClick={() => handleShare(social.name)} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                    <social.icon size={16} />
                  </button>
                ))}
              </div>

              {/* Related Posts */}
              <div className="mt-16 pt-12 border-t border-slate-200">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-8">Continue Reading</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map((p, i) => (
                    <Link to={`/blog/${p.id}`} key={i} className="group bg-white rounded-2xl border border-slate-100 p-4 hover:shadow-lg transition-all hover:border-primary/20">
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={p.title} />
                      </div>
                      <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 block">{p.category}</span>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {p.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky top-32 space-y-6">
                
                {/* Search */}
                <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Search Insights</h4>
                  <div className="relative">
                    <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input 
                      type="text" 
                      placeholder="Keywords..." 
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 focus:outline-none focus:border-primary/30 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-[#050c1a] p-8 rounded-2xl text-white relative overflow-hidden shadow-xl border border-slate-800">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="flex items-center gap-2 mb-4 relative z-10">
                     <Mail size={16} className="text-primary" />
                     <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300">Alpha Alerts</h4>
                  </div>
                  <h3 className="text-lg font-black leading-tight mb-3 relative z-10">Weekly Market Intel</h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed relative z-10">Institutional-grade real estate analysis delivered to your inbox.</p>
                  
                  <div className="space-y-3 relative z-10">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all"
                    />
                    <button className="w-full bg-primary hover:brightness-110 active:scale-95 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-primary/20">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Trending */}
                <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <TrendingUp size={16} className="text-primary" />
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Trending Now</h4>
                  </div>
                  <div className="space-y-5">
                    {BLOG_POSTS.slice(0, 4).map((p, i) => (
                      <Link to={`/blog/${p.id}`} key={i} className="flex gap-4 group items-center">
                        <span className="text-2xl font-black text-slate-100 group-hover:text-primary/20 transition-colors w-6 shrink-0">{i + 1}</span>
                        <div>
                          <h5 className="text-[13px] font-bold text-slate-700 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                            {p.title}
                          </h5>
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
