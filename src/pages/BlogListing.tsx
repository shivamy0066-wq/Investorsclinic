import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import {
  Search, Clock, ArrowUpRight, TrendingUp, Mail,
  ChevronRight, X, SlidersHorizontal, BookOpen,
  Flame, Sparkles, Tag, LayoutGrid, List
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BLOG_POSTS } from "../constants";

// ─── Constants ────────────────────────────────────────────────────────────────
const CATEGORIES = ["All", "Market Trends", "Investments", "Regulations", "Infrastructure", "Innovation", "Sustainability", "Holiday Homes", "Home Buying"];
const SORT_OPTIONS = [
  { label: "Latest First", value: "latest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Quick Reads", value: "quick" },
];

// ─── Category colour map ──────────────────────────────────────────────────────
const CAT_COLORS: Record<string, string> = {
  "Market Trends":  "bg-blue-50   text-blue-600  border-blue-100",
  "Investments":    "bg-emerald-50 text-emerald-600 border-emerald-100",
  "Regulations":    "bg-amber-50  text-amber-600  border-amber-100",
  "Infrastructure": "bg-violet-50 text-violet-600 border-violet-100",
  "Innovation":     "bg-cyan-50   text-cyan-600   border-cyan-100",
  "Sustainability": "bg-green-50  text-green-600  border-green-100",
  "Holiday Homes":  "bg-rose-50   text-rose-600   border-rose-100",
  "Home Buying":    "bg-orange-50 text-orange-600 border-orange-100",
};
const catColor = (cat: string) =>
  CAT_COLORS[cat] ?? "bg-slate-50 text-slate-600 border-slate-100";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { show: { transition: { staggerChildren: 0.07 } } };

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Animated section wrapper – triggers once when entering viewport */
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = ""
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/** Featured (hero) post card */
const HeroCard: React.FC<{ post: typeof BLOG_POSTS[0] }> = ({ post }) => (
  <Reveal className="mb-10">
    <Link to={`/blog/${post.id}`} className="group block relative overflow-hidden rounded-3xl">
      <div className="relative h-[420px] md:h-[500px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050c1a]/90 via-[#050c1a]/40 to-transparent" />
      </div>

      {/* Badge */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <span className="flex items-center gap-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
          <Flame size={10} /> Featured
        </span>
        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${catColor(post.category)}`}>
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h2 className="text-white text-2xl md:text-3xl font-black font-headline leading-tight mb-3 max-w-2xl group-hover:text-white/90 transition-colors">
          {post.title}
        </h2>
        <p className="text-white/60 text-sm leading-relaxed max-w-xl line-clamp-2 mb-5">{post.excerpt}</p>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px] font-black">
              {post.author[0]}
            </div>
            <span className="text-white/70 text-xs font-semibold">{post.author}</span>
          </div>
          <span className="text-white/30 text-xs">·</span>
          <span className="flex items-center gap-1 text-white/50 text-xs"><Clock size={11} />{post.readTime}</span>
          <span className="text-white/30 text-xs">·</span>
          <span className="text-white/50 text-xs">{post.date}</span>
          <div className="ml-auto flex items-center gap-1 text-white text-xs font-bold group-hover:gap-2 transition-all">
            Read Article <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  </Reveal>
);

/** Standard blog card (grid view) */
const BlogCard: React.FC<{ post: typeof BLOG_POSTS[0]; index: number }> = ({ post, index }) => (
  <motion.div variants={fadeUp}>
    <Link
      to={`/blog/${post.id}`}
      className="group flex flex-col h-full bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className={`absolute top-3 left-3 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${catColor(post.category)}`}>
          {post.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-slate-900 leading-snug mb-2.5 group-hover:text-primary transition-colors line-clamp-2 font-headline">
          {post.title}
        </h3>
        <p className="text-[12px] leading-relaxed text-slate-400 line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
        <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{post.author}</span>
          <div className="flex items-center gap-1 text-slate-300">
            <Clock size={10} />
            <span className="text-[10px] font-medium">{post.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

/** Standard blog card (list view) */
const BlogListCard: React.FC<{ post: typeof BLOG_POSTS[0] }> = ({ post }) => (
  <motion.div variants={fadeUp}>
    <Link
      to={`/blog/${post.id}`}
      className="group flex gap-5 bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 p-4"
    >
      <div className="relative w-28 h-24 rounded-xl overflow-hidden shrink-0">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="flex flex-col justify-center flex-1 min-w-0">
        <span className={`self-start text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border mb-2 ${catColor(post.category)}`}>
          {post.category}
        </span>
        <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors line-clamp-1 font-headline mb-1">
          {post.title}
        </h3>
        <p className="text-[11px] text-slate-400 line-clamp-1 mb-2">{post.excerpt}</p>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-slate-400">{post.author}</span>
          <span className="text-slate-200">·</span>
          <span className="flex items-center gap-1 text-[10px] text-slate-300"><Clock size={9} />{post.readTime}</span>
          <span className="text-slate-200">·</span>
          <span className="text-[10px] text-slate-300">{post.date}</span>
        </div>
      </div>
      <div className="flex items-center shrink-0">
        <ArrowUpRight size={16} className="text-slate-300 group-hover:text-primary transition-colors group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
export const BlogListing = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery]       = useState("");
  const [sortBy, setSortBy]                 = useState("latest");
  const [viewMode, setViewMode]             = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters]       = useState(false);
  const [emailInput, setEmailInput]         = useState("");
  const [subscribed, setSubscribed]         = useState(false);
  const [visibleCount, setVisibleCount]     = useState(6);

  // ── Derived data ──────────────────────────────────────────────────────────
  const featuredPost = BLOG_POSTS[0];
  const restPosts    = BLOG_POSTS.slice(1);

  const filtered = useMemo(() => {
    let arr = activeCategory === "All"
      ? restPosts
      : restPosts.filter(p => p.category === activeCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      arr = arr.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q)
      );
    }

    if (sortBy === "oldest") arr = [...arr].reverse();
    if (sortBy === "quick")  arr = [...arr].sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));

    return arr;
  }, [activeCategory, searchQuery, sortBy]);

  const visible   = filtered.slice(0, visibleCount);
  const hasMore   = visibleCount < filtered.length;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) { setSubscribed(true); setEmailInput(""); }
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Header />

      {/* ── Page Hero Header ── */}
      <section className="pt-32 pb-12 bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={14} className="text-primary" />
              <span className="text-[11px] font-black uppercase tracking-widest text-primary">Intelligence Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 font-headline tracking-tight mb-4 leading-[1.1]">
              Real Estate <span className="text-primary">Insights</span>
            </h1>
            <p className="text-slate-500 text-base max-w-lg leading-relaxed">
              Expert analysis, market intelligence, and investment strategies curated for the modern property investor.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Sticky Category Bar ── */}
      <div className="bg-white border-b border-slate-100 sticky top-20 z-40 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                className={`relative whitespace-nowrap text-[12px] font-bold py-4 transition-all border-b-2 ${
                  activeCategory === cat
                    ? "text-primary border-primary"
                    : "text-slate-400 border-transparent hover:text-slate-700"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div layoutId="cat-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-12 gap-10">

          {/* ── LEFT: Main Feed (8 cols) ── */}
          <div className="lg:col-span-8 space-y-8">

            {/* Featured Post */}
            {activeCategory === "All" && !searchQuery && <HeroCard post={featuredPost} />}

            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs font-semibold text-slate-400">
                {filtered.length} article{filtered.length !== 1 ? "s" : ""}
                {activeCategory !== "All" && <> in <span className="text-slate-700">{activeCategory}</span></>}
              </p>

              <div className="flex items-center gap-2 ml-auto">
                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-slate-200 text-[11px] font-bold text-slate-600 rounded-xl px-4 py-2.5 pr-8 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                  >
                    {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  <SlidersHorizontal size={11} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>

                {/* View toggle */}
                <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1 gap-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-lg transition-all ${viewMode === "grid" ? "bg-primary text-white" : "text-slate-400 hover:text-slate-700"}`}
                  >
                    <LayoutGrid size={13} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded-lg transition-all ${viewMode === "list" ? "bg-primary text-white" : "text-slate-400 hover:text-slate-700"}`}
                  >
                    <List size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Cards Grid / List */}
            <AnimatePresence mode="wait">
              {filtered.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <Search size={32} className="text-slate-200 mb-4" />
                  <p className="text-slate-400 font-semibold text-sm">No articles found.</p>
                  <p className="text-slate-300 text-xs mt-1">Try adjusting your search or filter.</p>
                  <button
                    onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                    className="mt-4 text-xs font-bold text-primary underline underline-offset-2"
                  >
                    Clear filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={`${viewMode}-${activeCategory}-${sortBy}`}
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className={viewMode === "grid"
                    ? "grid sm:grid-cols-2 xl:grid-cols-3 gap-5"
                    : "flex flex-col gap-4"
                  }
                >
                  {visible.map((post, i) =>
                    viewMode === "grid"
                      ? <BlogCard key={post.id} post={post} index={i} />
                      : <BlogListCard key={post.id} post={post} />
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Load More */}
            {hasMore && (
              <Reveal className="flex justify-center pt-4">
                <button
                  onClick={() => setVisibleCount(c => c + 6)}
                  className="group flex items-center gap-2 bg-white border border-slate-200 hover:border-primary/30 text-slate-700 hover:text-primary px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all hover:shadow-lg hover:shadow-primary/5 active:scale-95"
                >
                  Load More Articles
                  <ChevronRight size={13} className="transition-transform group-hover:translate-x-1" />
                </button>
              </Reveal>
            )}
          </div>

          {/* ── RIGHT: Sidebar (4 cols) ── */}
          <aside className="lg:col-span-4 space-y-6">

            {/* Search */}
            <Reveal>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                    <Search size={15} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-700">Search</h4>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => { setSearchQuery(e.target.value); setVisibleCount(6); }}
                    placeholder="Search articles…"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all pr-10"
                  />
                  {searchQuery ? (
                    <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700">
                      <X size={14} />
                    </button>
                  ) : (
                    <Search size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300" />
                  )}
                </div>
              </div>
            </Reveal>

            {/* Trending / Latest */}
            <Reveal delay={0.05}>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                    <TrendingUp size={15} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-700">Trending Now</h4>
                </div>
                <div className="space-y-4">
                  {BLOG_POSTS.slice(0, 5).map((post, i) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-3 group">
                      <span className="text-[28px] font-black text-slate-100 leading-none w-7 shrink-0 select-none">{i + 1}</span>
                      <div className="space-y-1 flex-1">
                        <h5 className="text-[12px] font-bold text-slate-700 leading-snug group-hover:text-primary transition-colors line-clamp-2 font-headline">
                          {post.title}
                        </h5>
                        <div className="flex items-center gap-2 text-[10px] text-slate-300">
                          <Clock size={9} />
                          <span>{post.readTime}</span>
                          <span>·</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Tags Cloud */}
            <Reveal delay={0.1}>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                    <Tag size={15} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-700">Browse Topics</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.slice(1).map(cat => (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat); setVisibleCount(6); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      className={`text-[10px] font-bold px-3 py-1.5 rounded-full border transition-all ${
                        activeCategory === cat
                          ? "bg-primary text-white border-primary"
                          : `${catColor(cat)} hover:opacity-80`
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Newsletter */}
            <Reveal delay={0.15}>
              <div className="bg-[#050c1a] rounded-2xl p-7 text-white relative overflow-hidden">
                {/* decorative orbs */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={14} className="text-primary" />
                    <h4 className="text-[11px] font-black uppercase tracking-widest">Weekly Intelligence</h4>
                  </div>
                  <p className="text-white/50 text-[12px] leading-relaxed mb-5">
                    Expert market reports delivered every Monday. No spam — unsubscribe anytime.
                  </p>

                  <AnimatePresence mode="wait">
                    {subscribed ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-xl px-4 py-3"
                      >
                        <span className="text-emerald-400 text-xs font-bold">✓ You're subscribed!</span>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onSubmit={handleSubscribe}
                        className="space-y-3"
                      >
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={emailInput}
                            onChange={e => setEmailInput(e.target.value)}
                            placeholder="Your email address"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all"
                          />
                          <Mail size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25" />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-primary hover:brightness-110 active:scale-95 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/30"
                        >
                          Subscribe Free
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>

          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};
