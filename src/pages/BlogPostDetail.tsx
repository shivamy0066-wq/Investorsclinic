import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Share2, 
  ArrowLeft, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Bookmark,
  ChevronRight,
  ChevronDown,
  TrendingUp,
  Mail,
  Search,
  Navigation
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BLOG_POSTS } from '../constants';

export const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Use id to find the post
  const post = BLOG_POSTS.find(p => p.id === id) || BLOG_POSTS[0];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
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

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-100 z-[60]">
          <motion.div 
            className="h-full bg-secondary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
          />
        </div>

        {/* Back and Breadcrumbs */}
        <div className="max-w-[1400px] mx-auto px-6 mb-8 mt-6">
          <div className="flex items-center justify-between">
            <Link to="/blog" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-all">
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-translate-x-1">
                <ArrowLeft size={14} />
              </div>
              Back to Journal
            </Link>
            <div className="flex items-center gap-2 text-[9px] font-bold text-slate-300 uppercase tracking-widest hidden md:flex">
              <span>Home</span>
              <ChevronRight size={10} />
              <span>Journal</span>
              <ChevronRight size={10} />
              <span className="text-secondary">Analysis</span>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column: Social Share (Sticky) */}
            <div className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-32 flex flex-col items-center gap-3 lg:-ml-4">
                <button onClick={() => handleShare('linkedin')} className="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 hover:shadow-lg transition-all group">
                  <Linkedin size={15} className="group-hover:scale-110 transition-transform" />
                </button>
                <button onClick={() => handleShare('twitter')} className="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 hover:shadow-lg transition-all group">
                  <Twitter size={15} className="group-hover:scale-110 transition-transform" />
                </button>
                <button onClick={() => handleShare('facebook')} className="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 hover:shadow-lg transition-all group">
                  <Facebook size={15} className="group-hover:scale-110 transition-transform" />
                </button>
                <button className="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 hover:shadow-lg transition-all group">
                  <Bookmark size={15} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Middle Column: Content */}
            <div className="lg:col-span-7">
              <motion.article {...fadeInUp}>
                {/* Meta Header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Calendar size={12} className="text-secondary" /> {post.date}</span>
                    <span className="flex items-center gap-2"><Clock size={12} className="text-secondary" /> {post.readTime}</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-headline font-black text-primary leading-tight uppercase tracking-tighter mb-10">
                  {post.title}
                </h1>

                {/* Hero Image */}
                <div className="relative rounded-[3rem] overflow-hidden mb-12 shadow-2xl">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full aspect-[16/9] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Table of Contents - Screen Style */}
                <div className="mb-12">
                   <details className="bg-[#FFF5F6] border border-[#FFE4E8] rounded-[2.5rem] group overflow-hidden transition-all duration-300">
                      <summary className="flex items-center justify-between p-8 md:p-10 cursor-pointer list-none">
                         <h3 className="text-xl font-headline font-black text-primary uppercase tracking-tight">Table of Contents</h3>
                         <div className="w-10 h-10 rounded-full bg-white/50 border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform origin-center">
                            <ChevronDown size={18} className="group-open:rotate-180 transition-transform duration-300" />
                         </div>
                      </summary>
                      <nav className="px-8 md:px-10 pb-10 flex flex-col gap-5 border-t border-primary/5 pt-8">
                         {post.content.filter(s => s.type === 'heading').map((section, idx) => (
                            <a 
                               key={idx}
                               href={`#section-${idx}`}
                               className="flex items-start gap-4 text-[13px] font-bold text-slate-600 hover:text-primary transition-all group/item leading-relaxed"
                            >
                               <span className="text-secondary font-black shrink-0">{idx + 1}.</span>
                               <span className="border-b-2 border-transparent group-hover/item:border-secondary transition-all">
                                  {section.text}
                               </span>
                            </a>
                         ))}
                      </nav>
                   </details>
                </div>

                {/* Dynamic Content Sections */}
                <div className="prose prose-slate max-w-none prose-headings:font-headline prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:text-lg prose-p:font-medium text-slate-700">
                  <p className="text-xl font-bold text-primary mb-8 leading-relaxed opacity-90 italic border-l-4 border-secondary pl-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="space-y-8">
                    {post.content.map((section, idx) => {
                      if (section.type === 'heading') {
                        return <h3 key={idx} id={`section-${post.content.filter((_, i) => i < idx && post.content[i].type === 'heading').length}`} className="text-2xl mt-12 text-primary">{section.text}</h3>;
                      }
                      if (section.type === 'paragraph') {
                        return <p key={idx}>{section.text}</p>;
                      }
                      if (section.type === 'data' && section.items) {
                        return (
                          <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] my-10">
                            <h4 className="text-sm font-black text-secondary uppercase tracking-[0.2em] mb-4">Market Intelligence</h4>
                            <div className="grid sm:grid-cols-2 gap-6">
                              {section.items.map((item, iIdx) => (
                                <div key={iIdx} className="space-y-1">
                                  <p className="text-xs font-black text-primary uppercase">{item.label}</p>
                                  <p className="text-2xl font-black text-slate-900">{item.value}</p>
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

                {/* Content Sections End */}
              </motion.article>

              {/* Intelligence FAQ Section */}
              <div className="mt-16 pt-16 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-[1px] bg-secondary" />
                  <span className="text-[9px] font-black text-secondary uppercase tracking-[0.2em]">Knowledge Base</span>
                </div>
                <h2 className="text-2xl font-headline font-black text-primary uppercase tracking-tight mb-8">
                  Investor <span className="text-secondary italic">FAQs</span>
                </h2>
                
                <div className="space-y-3">
                  {[
                    {
                      q: "How does Investors Clinic verify project data?",
                      a: "Our intelligence team performs on-ground structural audits, RERA verification, and historical price delta analysis. We don't just list data; we verify the 'velocity' of the project and the developer's historical delivery track record."
                    },
                    {
                      q: "What is the typical long-term capital appreciation in this zone?",
                      a: "While historically NCR has seen 8-12% CAGR, micro-markets like Noida Sector 150 and Dwarka Expressway have shown higher yields due to infrastructure alpha. We provide micro-market reports to help you target specific high-growth zones."
                    },
                    {
                      q: "How are RERA regulations changing the investment landscape?",
                      a: "RERA has transitioned the market from a speculative 'Wild West' to a structural, institutionally-backed asset class. It ensures transparency in fund escrow and delivery timelines, significantly reducing risk for retail investors."
                    },
                    {
                      q: "Can I manage my investment properties through your portal?",
                      a: "Yes, our dedicated Asset Management division handles end-to-end solutions—from tenant scouting and lease management to maintenance audits, ensuring your portfolio remains hands-free and high-yielding."
                    }
                  ].map((faq, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:border-primary/20 transition-all shadow-sm shadow-slate-100"
                    >
                      <details className="w-full">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                          <h4 className="text-[13px] font-black text-primary uppercase tracking-tight pr-6">{faq.q}</h4>
                          <div className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                            <ChevronDown size={12} className="group-open:rotate-180 transition-transform" />
                          </div>
                        </summary>
                        <div className="px-6 pb-6">
                          <div className="h-px w-full bg-slate-200/50 mb-4" />
                          <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </details>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Related Posts */}
              <div className="mt-20">
                <div className="flex items-center gap-4 mb-10">
                   <h2 className="text-2xl font-headline font-black text-primary uppercase tracking-tight shrink-0">Related Analysis</h2>
                   <div className="h-px w-full bg-slate-100" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {BLOG_POSTS.slice(0, 2).map((p, i) => (
                    <Link to={`/blog/${p.id}`} key={i} className="group">
                      <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 shadow-lg border border-slate-100">
                        <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.title} />
                      </div>
                      <h4 className="text-sm font-black text-primary uppercase leading-tight group-hover:text-secondary transition-colors tracking-tight line-clamp-2">
                        {p.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 space-y-10">
              <div className="sticky top-32 space-y-10">
                {/* Search Sidebar Widget */}
                <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                      <Search size={18} />
                    </div>
                    <h4 className="text-sm font-black text-primary uppercase tracking-widest">Search Journal</h4>
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Audit reports, locations..." 
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-[12px] font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all pr-12"
                    />
                    <Search size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300" />
                  </div>
                </div>

                {/* Alpha Alerts Widget */}
                <div className="bg-primary p-10 rounded-[2.5rem] text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all translate-x-8 -translate-y-8" />
                  
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                        <Mail size={18} />
                     </div>
                     <h4 className="text-sm font-black uppercase tracking-widest">Alpha Alerts</h4>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4 leading-tight">Get Proprietary <br />Market Intel.</h3>
                  <p className="text-[11px] font-medium text-white/50 uppercase tracking-widest mb-8 leading-relaxed">Stay ahead with data usually reserved for institutional clients.</p>
                  
                  <div className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Investor Email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-[12px] font-bold text-white placeholder:text-white/30 focus:outline-none focus:bg-white/10 transition-all"
                    />
                    <button className="w-full bg-secondary py-4 rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-secondary/20 hover:brightness-110 active:scale-95 transition-all">
                      Subscribe for Alphas
                    </button>
                  </div>
                </div>

                {/* Trending Analysis */}
                <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                      <TrendingUp size={18} />
                    </div>
                    <h4 className="text-sm font-black text-primary uppercase tracking-widest">Trending Analysis</h4>
                  </div>
                  <div className="space-y-8">
                    {BLOG_POSTS.slice(0, 4).map((p, i) => (
                      <Link to={`/blog/${p.id}`} key={i} className="flex gap-4 group">
                        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                          <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-[11px] font-black text-primary uppercase leading-tight group-hover:text-secondary transition-colors line-clamp-2 tracking-tight">
                            {p.title}
                          </h5>
                          <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mt-2 block">{p.readTime}</span>
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
