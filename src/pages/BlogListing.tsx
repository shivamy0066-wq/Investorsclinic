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
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const BLOG_POSTS = [
  {
    id: "1",
    title: "The Rise of Luxury Real Estate in Noida Sector 150",
    excerpt: "Why institutional investors and luxury seekers are flocking to India's first residential sector with high-density green cover.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
    category: "Market Trends",
    author: "Vishal Gupta",
    date: "Oct 24, 2024",
    readTime: "6 min read"
  },
  {
    id: "2",
    title: "Capital Appreciation Trends in Mumbai: 2024 Report",
    excerpt: "A deep dive into the micro-markets of Mumbai that are showing double-digit growth despite global headwinds.",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1000&auto=format&fit=crop",
    category: "Investments",
    author: "Anjali Mehta",
    date: "Oct 20, 2024",
    readTime: "8 min read"
  },
  {
    id: "3",
    title: "Smart Home Technology: The New Standard for Premium Living",
    excerpt: "How AI and IoT are redefining luxury apartments and increasing rental yields in Bengaluru and Hyderabad.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop",
    category: "Innovation",
    author: "Rohan Verma",
    date: "Oct 15, 2024",
    readTime: "5 min read"
  },
  {
    id: "4",
    title: "Understanding RERA: A Comprehensive Guide for ROI",
    excerpt: "Everything you need to know about navigating the regulatory framework to ensure your investment is secure and profitable.",
    image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?q=80&w=1000&auto=format&fit=crop",
    category: "Regulations",
    author: "Sanjay Dixit",
    date: "Oct 10, 2024",
    readTime: "10 min read"
  },
  {
    id: "5",
    title: "Eco-Friendly Living: The Green Revolution in Indian Real Estate",
    excerpt: "Sustainable architecture is no longer a luxury choice but a fundamental necessity for modern home buyers.",
    image: "https://images.unsplash.com/photo-1449156001437-3a16b1ad922b?q=80&w=1000&auto=format&fit=crop",
    category: "Sustainability",
    author: "Meera Reddy",
    date: "Oct 05, 2024",
    readTime: "7 min read"
  },
  {
    id: "6",
    title: "Vacation Homes in Goa: Higher Returns than Urban Rentals?",
    excerpt: "Comparing the yield between commercial urban rentals and the booming Airbnb market in coastal India.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    category: "Holiday Homes",
    author: "Kevin Peterson",
    date: "Sep 28, 2024",
    readTime: "6 min read"
  }
];

const CATEGORIES = ["All", "Market Trends", "Investments", "Innovation", "Regulations", "Sustainability", "Holiday Homes"];

export const BlogListing = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Hero Header */}
        <section className="px-6 max-w-7xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-[1px] w-8 bg-secondary" />
                <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em]">Intelligence & Insights</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-headline font-black text-primary leading-tight uppercase tracking-tight"
              >
                The Investors <span className="italic text-secondary">Clinic</span> Journal
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-slate-500 font-medium text-lg leading-relaxed max-w-2xl"
              >
                Exclusive market analysis, investment strategies, and luxury lifestyle trends curated for the sophisticated Indian real estate investor.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-2 rounded-2xl shadow-xl flex items-center border border-slate-100"
            >
              <div className="pl-4 pr-2">
                <Search className="w-5 h-5 text-slate-300" />
              </div>
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="bg-transparent border-none focus:ring-0 py-3 text-sm font-semibold w-48 md:w-64"
              />
              <button className="bg-primary text-white p-3 rounded-xl hover:brightness-110 transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Categories Bar */}
        <section className="px-6 max-w-7xl mx-auto mb-16 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? "bg-secondary text-white shadow-lg" 
                    : "bg-white text-slate-400 border border-slate-100 hover:border-secondary hover:text-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Post (Full Width) */}
        <section className="px-6 max-w-7xl mx-auto mb-20">
          <motion.div 
            {...fadeInUp}
            className="group relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer"
          >
            <img 
              src={BLOG_POSTS[0].image} 
              alt={BLOG_POSTS[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute bottom-12 left-8 md:left-12 right-8 md:right-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-secondary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Featured Article
                </span>
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" /> {BLOG_POSTS[0].readTime}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-headline font-black text-white mb-6 leading-tight max-w-4xl">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-white/70 font-medium text-lg mb-8 max-w-2xl line-clamp-2 md:line-clamp-none">
                {BLOG_POSTS[0].excerpt}
              </p>
              <Link 
                to={`/blog/${BLOG_POSTS[0].id}`}
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-secondary hover:text-white transition-all group/btn"
              >
                Read Full Analysis <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Blog Grid */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {BLOG_POSTS.slice(1).map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                <Link to={`/blog/${post.id}`} className="block relative overflow-hidden rounded-[2rem] aspect-[4/3] mb-8 shadow-xl">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-5 right-5">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-primary shadow-xl group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:rotate-45">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/90 backdrop-blur text-primary px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </Link>
                
                <div className="flex items-center gap-4 mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-headline font-black text-primary leading-tight mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                
                <p className="text-slate-500 font-medium leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary font-black text-[10px] uppercase">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest">{post.author}</p>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Article Author</p>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] flex items-center gap-2 group/link"
                  >
                    Read More <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-32 px-6 max-w-7xl mx-auto">
          <div className="bg-[#0a1e3b] rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 L100 0 L100 100 Z" fill="white" />
              </svg>
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 items-center gap-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-headline font-black text-white leading-tight mb-6">
                  Stay Informed with <br /> <span className="italic text-secondary">The Clinic Weekly</span>
                </h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-lg">
                  Join 25,000+ serious investors. Get private invitations to pre-launch projects and institutional market reports directly in your inbox.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex items-center group focus-within:border-white/30 transition-all">
                  <input 
                    type="email" 
                    placeholder="Enter your professional email"
                    className="bg-transparent border-none focus:ring-0 w-full px-4 text-white font-medium placeholder:text-white/30"
                  />
                </div>
                <button className="bg-secondary text-white px-10 py-5 rounded-2xl font-headline font-black uppercase tracking-[0.2em] text-xs hover:brightness-110 hover:shadow-xl active:scale-95 transition-all">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
