import React, { useState, useMemo, useEffect } from "react";
import { motion } from "motion/react";
import { Search, Filter, ChevronDown, SortAsc, SortDesc } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectComparison } from "../components/ProjectComparison";
import { PROPERTIES, CITIES } from "../constants";
import { Property } from "../types";

export const ProjectsListing = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [selectedCity, setSelectedCity] = useState(searchParams.get("city") || "All Cities");
  const [selectedBHK, setSelectedBHK] = useState("All BHK");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "newest">("newest");
  
  const [selectedForComparison, setSelectedForComparison] = useState<Property[]>([]);

  const handleCompareToggle = (property: Property) => {
    setSelectedForComparison(prev => {
      const exists = prev.find(p => p.id === property.id);
      if (exists) {
        return prev.filter(p => p.id !== property.id);
      }
      if (prev.length >= 3) {
        return prev; // Limit to 3 for clean UI
      }
      return [...prev, property];
    });
  };

  // Handle URL updates or direct landing with params
  useEffect(() => {
    const q = searchParams.get("q");
    const city = searchParams.get("city");
    if (q) setSearchTerm(q);
    if (city) setSelectedCity(city);
  }, [searchParams]);

  const bhkOptions = ["All BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"];

  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    // Simulate a brief network delay for a more "dynamic" feel
    setTimeout(() => {
      setVisibleCount(prev => prev + 8);
      setIsLoadingMore(false);
    }, 600);
  };

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(8);
  }, [searchTerm, selectedCity, selectedBHK, sortBy]);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.loc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCity = selectedCity === "All Cities" || p.city === selectedCity;
      const matchesBHK = selectedBHK === "All BHK" || p.bhk.includes(selectedBHK.split(" ")[0]);
      
      return matchesSearch && matchesCity && matchesBHK;
    }).sort((a, b) => {
      if (sortBy === "price-asc") {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));
        return priceA - priceB;
      }
      if (sortBy === "price-desc") {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));
        return priceB - priceA;
      }
      return 0; // "newest" as default (current order)
    });
  }, [searchTerm, selectedCity, selectedBHK, sortBy]);

  const displayedProperties = filteredProperties.slice(0, visibleCount);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      <Header />
      
      <main className="pt-20">
        {/* PREMIUM HERO SECTION */}
        <section className="relative bg-[#0a1e3b] pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden">
          {/* Abstract Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-50" />
          
          {/* Glowing Accents */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-red-500" />
                <p className="text-red-400 text-[10px] font-black uppercase tracking-[0.3em]">Exclusive Portfolio</p>
                <div className="w-12 h-[1px] bg-red-500" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6 font-headline">
                EXCLUSIVE PROPERTY <span className="text-red-500 italic font-light font-serif">COLLECTION</span>
              </h1>
              <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
                Discover premium real estate opportunities backed by market intelligence, trusted developers, and strong future growth potential.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 mb-24">
          {/* ADVANCED FILTER BAR */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/90 backdrop-blur-xl p-4 md:p-5 rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] border border-white/50 flex flex-col xl:flex-row items-stretch xl:items-center gap-4"
          >
            {/* Search Input */}
            <div className="flex-1 flex items-center px-6 py-4 bg-zinc-50 rounded-2xl border border-zinc-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <Search className="w-5 h-5 text-zinc-400 mr-4 shrink-0" />
              <input 
                type="text" 
                placeholder="Search by project name, builder, or location..."
                className="bg-transparent border-none focus:ring-0 w-full text-zinc-900 font-semibold placeholder:text-zinc-400 text-sm outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 xl:flex xl:flex-wrap items-center gap-3">
              {/* City Filter */}
              <div className="relative group">
                <select 
                  className="w-full appearance-none bg-zinc-50 px-6 py-4 pr-12 rounded-2xl border border-zinc-200 hover:border-blue-500 cursor-pointer text-sm font-semibold text-zinc-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option>All Cities</option>
                  {CITIES.map(city => <option key={city} value={city}>{city}</option>)}
                </select>
                <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-blue-500 transition-colors" />
              </div>

              {/* BHK Filter */}
              <div className="relative group">
                <select 
                  className="w-full appearance-none bg-zinc-50 px-6 py-4 pr-12 rounded-2xl border border-zinc-200 hover:border-blue-500 cursor-pointer text-sm font-semibold text-zinc-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  value={selectedBHK}
                  onChange={(e) => setSelectedBHK(e.target.value)}
                >
                  {bhkOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-blue-500 transition-colors" />
              </div>

              {/* Sorting */}
              <div className="relative group col-span-2 md:col-span-1">
                <select 
                  className="w-full appearance-none bg-[#0a1e3b] text-white px-6 py-4 pr-12 rounded-2xl border border-transparent cursor-pointer text-sm font-semibold outline-none transition-all hover:bg-[#0071ba]"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                >
                  <option value="newest">Sort: Latest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                <Filter className="w-4 h-4 text-white/50 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Results Count & Clear */}
          <div className="mt-8 flex items-center justify-between px-2">
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              Showing <span className="text-zinc-900">{Math.min(visibleCount, filteredProperties.length)}</span> of <span className="text-zinc-900">{filteredProperties.length}</span> Estates
            </p>
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="text-[10px] font-bold text-red-500 uppercase tracking-widest hover:underline hover:text-red-600 transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>

          {/* Projects Grid */}
          {filteredProperties.length > 0 ? (
            <motion.div 
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {displayedProperties.map((prop, idx) => (
                <motion.div 
                  key={prop.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
                  }}
                >
                  <ProjectCard 
                    property={prop} 
                    index={idx} 
                    onCompareToggle={handleCompareToggle}
                    isComparing={selectedForComparison.some(p => p.id === prop.id)}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="mt-12 py-32 text-center bg-white rounded-[3rem] border border-dashed border-zinc-200 shadow-sm">
              <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Search className="w-10 h-10 text-zinc-300" />
              </div>
              <h3 className="text-3xl font-black text-[#0a1e3b] mb-3 tracking-tight">No Estates Found</h3>
              <p className="text-zinc-500 font-medium text-sm max-w-sm mx-auto">We couldn't find any properties matching your exact criteria. Try adjusting your filters.</p>
              <button 
                onClick={() => { setSearchTerm(""); setSelectedCity("All Cities"); setSelectedBHK("All BHK"); }}
                className="mt-8 bg-[#0a1e3b] text-white px-8 py-3.5 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-[#0071ba] transition-all shadow-[0_10px_20px_rgba(10,30,59,0.2)]"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < filteredProperties.length && (
            <div className="mt-20 text-center">
              <button 
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="group flex items-center gap-3 mx-auto bg-white border-2 border-zinc-100 hover:border-[#ed1c24] px-10 py-5 rounded-full transition-all active:scale-95 disabled:opacity-70 disabled:cursor-wait shadow-sm hover:shadow-lg"
              >
                {isLoadingMore ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#ed1c24]/30 border-t-[#ed1c24] rounded-full animate-spin" />
                    <span className="text-[#ed1c24] font-bold text-[11px] uppercase tracking-widest">Curating...</span>
                  </>
                ) : (
                  <>
                    <span className="text-zinc-900 group-hover:text-[#ed1c24] font-bold text-[11px] uppercase tracking-widest transition-colors">Load More Estates</span>
                    <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-[#ed1c24] transition-colors" />
                  </>
                )}
              </button>
            </div>
          )}

          <ProjectComparison 
            selectedItems={selectedForComparison} 
            onRemove={handleCompareToggle}
            onClear={() => setSelectedForComparison([])}
          />

          {/* CTA Section */}
          <section className="mt-32">
            <div className="bg-[#0a1e3b] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
              {/* Premium abstract gradients */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_80%_20%,rgba(237,28,36,0.15),transparent_70%)] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_20%_80%,rgba(0,113,186,0.15),transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <motion.div {...fadeInUp} className="max-w-xl text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                    <div className="w-8 h-[1px] bg-red-500" />
                    <p className="text-red-400 font-black tracking-[0.3em] uppercase text-[10px]">Private Advisory</p>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                    Can't find your <span className="text-red-500 italic font-serif font-medium">Ideal</span> home?
                  </h2>
                  <p className="text-white/60 text-base font-medium leading-relaxed">
                    Our senior advisors hold exclusive access to off-market inventory and highly sought-after pre-launch developments that are never listed publicly.
                  </p>
                </motion.div>

                <motion.div 
                  {...fadeInUp} 
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center"
                >
                  <button className="bg-[#ed1c24] text-white px-8 py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-red-500 transition-all shadow-[0_10px_30px_rgba(237,28,36,0.3)] active:scale-95 whitespace-nowrap w-full sm:w-auto">
                    Consult an Expert
                  </button>
                  <button className="bg-white/5 text-white border border-white/20 backdrop-blur-xl px-8 py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white/10 hover:border-white/40 transition-all active:scale-95 whitespace-nowrap w-full sm:w-auto">
                    Request VIP Access
                  </button>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};
