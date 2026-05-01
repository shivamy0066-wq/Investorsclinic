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
    <div className="min-h-screen bg-[#fafbfc]">
      <Header />
      
      <main className="pt-32 lg:pt-48 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[10px] md:text-[11px] font-black text-secondary uppercase tracking-[0.5em] mb-4">Discover</p>
            <h1 className="text-3xl md:text-6xl font-headline font-black text-primary mb-8 leading-tight">All <span className="text-secondary italic">Premium</span> <br className="sm:hidden" /> Projects</h1>
            
            {/* Search and Filter Bar */}
            <div className="bg-white p-3 md:p-4 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
              <div className="flex-1 flex items-center px-6 py-4 md:py-3 bg-slate-50 rounded-2xl border border-transparent focus-within:border-secondary/30 transition-all">
                <Search className="w-5 h-5 text-slate-400 mr-4" />
                <input 
                  type="text" 
                  placeholder="Project, builder or location..."
                  className="bg-transparent border-none focus:ring-0 w-full text-primary font-bold placeholder:text-slate-400 text-[14px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center gap-3">
                {/* City Filter */}
                <div className="relative group">
                  <select 
                    className="w-full appearance-none bg-slate-50 px-6 py-4 md:py-3 pr-12 rounded-2xl border border-transparent hover:border-secondary/30 cursor-pointer text-[13px] font-bold text-primary outline-none transition-all"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <option>All Cities</option>
                    {CITIES.map(city => <option key={city} value={city}>{city}</option>)}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-secondary transition-colors" />
                </div>

                {/* BHK Filter */}
                <div className="relative group">
                  <select 
                    className="w-full appearance-none bg-slate-50 px-6 py-4 md:py-3 pr-12 rounded-2xl border border-transparent hover:border-secondary/30 cursor-pointer text-[13px] font-bold text-primary outline-none transition-all"
                    value={selectedBHK}
                    onChange={(e) => setSelectedBHK(e.target.value)}
                  >
                    {bhkOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-secondary transition-colors" />
                </div>

                {/* Sorting */}
                <div className="relative group col-span-2 md:col-span-1">
                  <select 
                    className="w-full appearance-none bg-primary text-white px-6 py-4 md:py-3 pr-12 rounded-2xl border border-transparent cursor-pointer text-[13px] font-bold outline-none transition-all hover:brightness-125"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                  >
                    <option value="newest">Sort: Newest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                  <Filter className="w-4 h-4 text-white/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
            
            {/* Results Count */}
            <div className="mt-8 flex items-center justify-between">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Showing <span className="text-[#0a1e3b]">{Math.min(visibleCount, filteredProperties.length)}</span> of <span className="text-[#0a1e3b]">{filteredProperties.length}</span> Results
              </p>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="text-xs font-black text-secondary uppercase tracking-widest hover:underline"
                >
                  Clear Search
                </button>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProperties.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {displayedProperties.map((prop, idx) => (
                  <ProjectCard 
                    key={prop.id} // Fixed: use prop.id for stability
                    property={prop} 
                    index={idx} 
                    onCompareToggle={handleCompareToggle}
                    isComparing={selectedForComparison.some(p => p.id === prop.id)}
                  />
                ))}
              </div>

              <ProjectComparison 
                selectedItems={selectedForComparison} 
                onRemove={handleCompareToggle}
                onClear={() => setSelectedForComparison([])}
              />

              {/* Load More Button */}
              {visibleCount < filteredProperties.length && (
                <div className="mt-20 text-center">
                  <button 
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                    className="group flex items-center gap-3 mx-auto bg-white border-2 border-slate-100 hover:border-secondary px-10 py-5 rounded-2xl transition-all active:scale-95 disabled:opacity-70 disabled:cursor-wait"
                  >
                    {isLoadingMore ? (
                      <>
                        <div className="w-4 h-4 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin" />
                        <span className="text-secondary font-black text-xs uppercase tracking-[0.2em]">Curating for you...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-primary group-hover:text-secondary font-black text-xs uppercase tracking-[0.2em]">Explore More Projects</span>
                        <ChevronDown className="w-4 h-4 text-slate-300 group-hover:text-secondary transition-colors" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="py-24 text-center bg-white rounded-[3rem] border border-dashed border-slate-200">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-2xl font-headline font-black text-primary mb-2">No Projects Found</h3>
              <p className="text-slate-400 font-medium">Try adjusting your filters or search terms for more results.</p>
              <button 
                onClick={() => { setSearchTerm(""); setSelectedCity("All Cities"); setSelectedBHK("All BHK"); }}
                className="mt-8 bg-secondary text-white px-8 py-3.5 rounded-xl font-bold text-sm tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-secondary/20"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* CTA Section */}
          <section className="mt-32">
            <div className="bg-[#020617] rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(188,0,17,0.15),transparent)]" />
              <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(188,0,17,0.05)_0deg,transparent_90deg)] blur-3xl" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <motion.div {...fadeInUp} className="max-w-xl text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                    <div className="w-8 h-[1px] bg-secondary" />
                    <p className="text-secondary font-black tracking-[0.3em] uppercase text-[9px]">Custom Search</p>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-headline font-black text-white mb-6 leading-tight">
                    Can't find your <span className="text-secondary italic">Ideal</span> home?
                  </h2>
                  <p className="text-white/60 text-lg font-medium leading-relaxed">
                    Our advisors have access to off-market inventory and upcoming launches that aren't listed publicly yet.
                  </p>
                </motion.div>

                <motion.div 
                  {...fadeInUp} 
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center"
                >
                  <button className="bg-secondary text-white px-7 py-3 rounded-xl font-black uppercase tracking-[0.15em] text-[10px] hover:brightness-110 transition-all shadow-lg active:scale-95 whitespace-nowrap">
                    Talk to a Consultant
                  </button>
                  <button className="bg-white/5 text-white border border-white/20 backdrop-blur-md px-7 py-3 rounded-xl font-black uppercase tracking-[0.15em] text-[10px] hover:bg-white/10 transition-all active:scale-95 whitespace-nowrap">
                    Download Property Guide
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
