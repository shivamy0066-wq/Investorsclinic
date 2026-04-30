import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  Bookmark,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Re-using the data (in a real app this would come from a service)
const BLOG_POSTS = [
  {
    id: "1",
    title: "The Rise of Luxury Real Estate in Noida Sector 150",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
    category: "Market Trends",
    author: "Vishal Gupta",
    role: "Senior Investment Analyst",
    date: "Oct 24, 2024",
    readTime: "6 min read",
    content: `
      <p className="text-xl leading-relaxed text-slate-600 mb-8 font-medium">
        The landscape of Noida's real estate has undergone a tectonic shift over the last five years. While areas like Sector 62 and Noida Extension have matured, Sector 150 has emerged as the definitive destination for ultra-luxury living and institutional investment.
      </p>
      
      <h2 className="text-3xl font-headline font-black text-primary mb-6 mt-12 uppercase tracking-tight">The Greenest Sector of NCR</h2>
      <p className="text-lg leading-relaxed text-slate-500 mb-8">
        Sector 150 is often called the "Green Lung of Noida." With over 80% green cover and a low-density development plan mandated by the authorities, it offers a quality of life that is increasingly rare in the National Capital Region. The master plan includes expansive multi-purpose parks, sports cities, and riverfront developments that rival international standards.
      </p>

      <blockquote className="border-l-4 border-secondary pl-8 py-4 my-12 bg-slate-50 rounded-r-3xl">
        <p className="text-2xl font-headline font-black italic text-primary leading-tight mb-4">
          "Sector 150 isn't just a place to live; it's a strategic asset allocation for those who understand the value of low-density luxury."
        </p>
        <cite className="text-[10px] font-black uppercase tracking-widest text-secondary">— Vishal Gupta, Investors Clinic</cite>
      </blockquote>

      <h2 className="text-3xl font-headline font-black text-primary mb-6 mt-12 uppercase tracking-tight">Infrastructure as a Growth Catalyst</h2>
      <p className="text-lg leading-relaxed text-slate-500 mb-8">
        Connectivity remains the primary driver of capital appreciation here. The seamless access to the Noida-Greater Noida Expressway, the Yamuna Expressway, and the upcoming Jewar International Airport positions Sector 150 at the intersection of commerce and convenience.
      </p>

      <div className="my-12 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-[400px] object-cover"
        />
        <div className="p-4 bg-primary text-white/60 text-[10px] font-bold uppercase tracking-widest text-center">
          Artist impression of the upcoming Global Sports City in Sector 150
        </div>
      </div>

      <h2 className="text-3xl font-headline font-black text-primary mb-6 mt-12 uppercase tracking-tight">The ROI Perspective</h2>
      <p className="text-lg leading-relaxed text-slate-500 mb-8">
        For investors, the numbers tell a compelling story. Rental yields for 3 and 4 BHK premium apartments in this sector have seen a 12% year-on-year increase. More importantly, the resale market shows significant strength, with ready-to-move-in properties commanding a 25-30% premium over their launch prices.
      </p>
    `
  }
];

export const BlogPostDetail = () => {
  const { id } = useParams();
  
  // Find post or fallback to first one for demo
  const post = BLOG_POSTS.find(p => p.id === id) || BLOG_POSTS[0];

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
      case "native":
        if (navigator.share) {
          navigator.share({
            title: title,
            url: url
          }).catch(console.error);
          return;
        }
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      
      <main className="pt-24">
        {/* Breadcrumbs */}
        <nav className="max-w-4xl mx-auto px-6 py-6 md:py-8">
          <div className="flex items-center gap-3 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest overflow-hidden">
            <Link to="/" className="hover:text-primary shrink-0">Home</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <Link to="/blog" className="hover:text-primary shrink-0">Journal</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <span className="text-slate-900 truncate">{post.title}</span>
          </div>
        </nav>

        {/* Post Header */}
        <header className="max-w-4xl mx-auto px-6 text-center mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6 md:mb-8"
          >
            <span className="bg-secondary text-white px-4 md:px-5 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-xl shadow-secondary/20">
              {post.category}
            </span>
            <div className="h-px w-6 md:w-8 bg-slate-200" />
            <span className="text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-headline font-black text-primary leading-[1.1] md:leading-[1.1] mb-10 md:mb-12 uppercase tracking-tight"
          >
            {post.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 pt-8 md:pt-10 border-t border-slate-100"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-50 p-1 border border-slate-100">
                <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-white font-black text-base md:text-lg">
                  {post.author.charAt(0)}
                </div>
              </div>
              <div className="text-left">
                <p className="font-headline font-black text-primary uppercase text-xs md:text-sm tracking-tight">{post.author}</p>
                <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.role}</p>
              </div>
            </div>
            
            <div className="hidden md:block h-8 w-px bg-slate-200" />
            
            <div className="flex items-center gap-6 md:gap-8">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Published</span>
                <span className="text-[10px] md:text-[11px] font-black text-primary uppercase tracking-tight">{post.date}</span>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] md:text-[11px] font-black text-emerald-600 uppercase tracking-tight">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Verified
                </span>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Feature Image */}
        <section className="max-w-6xl mx-auto px-6 mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] aspect-video md:aspect-[21/9]"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div 
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-20 pt-12 border-t border-slate-100 flex flex-wrap items-center justify-between gap-8">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Share Article:</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleShare("facebook")}
                    className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleShare("twitter")}
                    className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleShare("linkedin")}
                    className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleShare("native")}
                    className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white hover:border-secondary transition-all"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <button className="flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.2em] group">
                <Bookmark className="w-4 h-4 group-hover:fill-secondary group-hover:text-secondary transition-all" /> 
                Save to Investors Library
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Related Topics Card */}
            <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-xl font-headline font-black text-primary uppercase tracking-tight mb-8">Related Intelligence</h3>
              <div className="space-y-8">
                {[
                  "Understanding Noida's Master Plan 2031",
                  "Top 5 Yield-Generating Locations in Delhi-NCR",
                  "Navigating Luxury Real Estate Regulations"
                ].map((topic, idx) => (
                  <Link key={idx} to="#" className="group block">
                    <p className="text-[9px] font-black text-secondary uppercase tracking-widest mb-2">Analysis</p>
                    <h4 className="text-sm font-headline font-extrabold text-primary group-hover:text-secondary transition-colors leading-tight">
                      {topic}
                    </h4>
                    <div className="mt-4 h-px w-0 group-hover:w-full bg-slate-100 transition-all duration-500" />
                  </Link>
                ))}
              </div>
              <Link to="/blog" className="mt-10 inline-flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest hover:text-secondary transition-colors">
                View All Journal Entries <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Newsletter Mini */}
            <div className="bg-primary p-6 md:p-10 rounded-[2.5rem] text-white overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
              <div className="relative z-10">
                <h3 className="text-2xl font-headline font-black mb-4 leading-tight">Private Investment Reports</h3>
                <p className="text-white/60 text-xs font-medium mb-8 leading-relaxed">
                  Join 19,000+ investors receiving our weekly private research on Indian real estate markets.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/10 border-white/20 rounded-xl px-5 py-4 text-xs font-semibold focus:ring-0 focus:border-white/40 placeholder:text-white/30"
                  />
                  <button className="w-full bg-secondary text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-2xl hover:brightness-110 active:scale-95 transition-all">
                    Get Access
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Back Navigation */}
        <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] hover:text-secondary transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Journal Listing
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};
