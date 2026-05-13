/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Search, 
  Briefcase,
  Compass,
  Mic,
  Mountain,
  Navigation,
  MapPin, 
  ArrowRight, 
  Home, 
  Building2, 
  TrendingUp, 
  PencilRuler, 
  Building, 
  Trees, 
  School,
  ChevronDown,
  DraftingCompass,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  ArrowUpRight,
  ArrowUp,
  Play,
  X,
  ShieldCheck,
  User,
  MessageSquare,
  Layers,
  UserCheck,
  CircleDollarSign,
  BarChart3,
  SlidersHorizontal
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { InvestmentAnalytics } from "./components/InvestmentAnalytics";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProjectCard } from "./components/ProjectCard";
import { cn } from "./lib/utils";
import { PROPERTIES, CITIES } from "./constants";

export default function App() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState("Projects");
  const [selectedCity, setSelectedCity] = React.useState("Noida");
  const [heroSearchQuery, setHeroSearchQuery] = React.useState("");
  const [heroBudget, setHeroBudget] = React.useState("Budget");
  const [heroPropertyType, setHeroPropertyType] = React.useState("Property Type");
  const [heroPossessionStatus, setHeroPossessionStatus] = React.useState("Possession Status");
  const [heroBhk, setHeroBhk] = React.useState("BHK");
  const [heroAmenities, setHeroAmenities] = React.useState("Amenities");
  const [heroSize, setHeroSize] = React.useState("Size");
  const [showAdvanced, setShowAdvanced] = React.useState(false);
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  const handleHeroSearch = () => {
    const params = new URLSearchParams();
    if (heroSearchQuery) params.append("q", heroSearchQuery);
    if (selectedCity && selectedCity !== "All Cities") params.append("city", selectedCity);
    if (heroBudget && heroBudget !== "Budget") params.append("budget", heroBudget);
    if (heroPropertyType && heroPropertyType !== "Property Type") params.append("type", heroPropertyType);
    if (heroPossessionStatus && heroPossessionStatus !== "Possession Status") params.append("status", heroPossessionStatus);
    if (showAdvanced) {
      if (heroBhk && heroBhk !== "BHK") params.append("bhk", heroBhk);
      if (heroAmenities && heroAmenities !== "Amenities") params.append("amenities", heroAmenities);
      if (heroSize && heroSize !== "Size") params.append("size", heroSize);
    }
    
    navigate(`/projects?${params.toString()}`);
  };
  const [activeVideo, setActiveVideo] = React.useState<string | null>(null);
  const locationScrollRef = React.useRef<HTMLDivElement>(null);
  const testimonialScrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Autoplay for Testimonials Slider
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (testimonialScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = testimonialScrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          testimonialScrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          testimonialScrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollLocations = (direction: "left" | "right") => {
    if (locationScrollRef.current) {
      const { scrollLeft, clientWidth } = locationScrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      locationScrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const filteredProperties = PROPERTIES.filter(p => p.city === selectedCity);
  // If city has no properties yet, we'll show generic ones as placeholders mixed with target city
  const displayProperties = filteredProperties.length > 0 ? filteredProperties : PROPERTIES.slice(0, 4);
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[95vh] flex flex-col justify-end md:justify-center pt-20 pb-0 overflow-hidden">
          {/* Cinematic Background */}
          <div className="absolute inset-0 z-0">
            <img
              fetchPriority="high"
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2113&auto=format&fit=crop"
              alt="Luxury Real Estate India"
              className="w-full h-full object-cover object-center scale-105"
              referrerPolicy="no-referrer"
              style={{ transform: "scale(1.04)" }}
            />
            {/* Multi-layer gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07101f]/95 via-[#07101f]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/80 via-transparent to-transparent" />
            {/* Animated shimmer accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e11d48] to-transparent opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          </div>

          {/* 🏙️ Animated City Skyline Silhouette 🏙️ */}
          <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none overflow-hidden h-32 opacity-25">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full fill-white">
              <rect x="50" y="60" width="30" height="60" rx="2" className="[animation:building-rise_1.4s_0.1s_forwards] opacity-0" />
              <rect x="90" y="40" width="20" height="80" rx="2" className="[animation:building-rise_1.4s_0.2s_forwards] opacity-0" />
              <rect x="120" y="20" width="35" height="100" rx="2" className="[animation:building-rise_1.4s_0.3s_forwards] opacity-0" />
              <rect x="165" y="50" width="25" height="70" rx="2" className="[animation:building-rise_1.4s_0.4s_forwards] opacity-0" />
              <rect x="200" y="10" width="40" height="110" rx="2" className="[animation:building-rise_1.4s_0.5s_forwards] opacity-0" />
              <rect x="250" y="35" width="28" height="85" rx="2" className="[animation:building-rise_1.4s_0.35s_forwards] opacity-0" />
              <rect x="290" y="55" width="22" height="65" rx="2" className="[animation:building-rise_1.4s_0.45s_forwards] opacity-0" />
              <rect x="320" y="25" width="50" height="95" rx="2" className="[animation:building-rise_1.4s_0.55s_forwards] opacity-0" />
              <rect x="380" y="45" width="30" height="75" rx="2" className="[animation:building-rise_1.4s_0.25s_forwards] opacity-0" />
              <rect x="420" y="15" width="45" height="105" rx="2" className="[animation:building-rise_1.4s_0.6s_forwards] opacity-0" />
              <rect x="475" y="55" width="20" height="65" rx="2" className="[animation:building-rise_1.4s_0.3s_forwards] opacity-0" />
              <rect x="505" y="30" width="35" height="90" rx="2" className="[animation:building-rise_1.4s_0.5s_forwards] opacity-0" />
              <rect x="550" y="50" width="25" height="70" rx="2" className="[animation:building-rise_1.4s_0.2s_forwards] opacity-0" />
              <rect x="585" y="5" width="55" height="115" rx="2" className="[animation:building-rise_1.4s_0.65s_forwards] opacity-0" />
              <rect x="650" y="40" width="30" height="80" rx="2" className="[animation:building-rise_1.4s_0.4s_forwards] opacity-0" />
              <rect x="690" y="20" width="40" height="100" rx="2" className="[animation:building-rise_1.4s_0.55s_forwards] opacity-0" />
              <rect x="740" y="60" width="25" height="60" rx="2" className="[animation:building-rise_1.4s_0.3s_forwards] opacity-0" />
              <rect x="775" y="30" width="35" height="90" rx="2" className="[animation:building-rise_1.4s_0.45s_forwards] opacity-0" />
              <rect x="820" y="45" width="28" height="75" rx="2" className="[animation:building-rise_1.4s_0.25s_forwards] opacity-0" />
              <rect x="858" y="10" width="50" height="110" rx="2" className="[animation:building-rise_1.4s_0.6s_forwards] opacity-0" />
              <rect x="918" y="50" width="22" height="70" rx="2" className="[animation:building-rise_1.4s_0.35s_forwards] opacity-0" />
              <rect x="950" y="25" width="40" height="95" rx="2" className="[animation:building-rise_1.4s_0.5s_forwards] opacity-0" />
              <rect x="1000" y="55" width="30" height="65" rx="2" className="[animation:building-rise_1.4s_0.2s_forwards] opacity-0" />
              <rect x="1040" y="15" width="45" height="105" rx="2" className="[animation:building-rise_1.4s_0.65s_forwards] opacity-0" />
              <rect x="1095" y="40" width="25" height="80" rx="2" className="[animation:building-rise_1.4s_0.3s_forwards] opacity-0" />
              <rect x="1130" y="20" width="38" height="100" rx="2" className="[animation:building-rise_1.4s_0.55s_forwards] opacity-0" />
              <rect x="1178" y="55" width="22" height="65" rx="2" className="[animation:building-rise_1.4s_0.4s_forwards] opacity-0" />
              <rect x="1210" y="30" width="45" height="90" rx="2" className="[animation:building-rise_1.4s_0.25s_forwards] opacity-0" />
              <rect x="1265" y="50" width="30" height="70" rx="2" className="[animation:building-rise_1.4s_0.45s_forwards] opacity-0" />
              <rect x="1305" y="10" width="55" height="110" rx="2" className="[animation:building-rise_1.4s_0.6s_forwards] opacity-0" />
              <rect x="1370" y="45" width="28" height="75" rx="2" className="[animation:building-rise_1.4s_0.35s_forwards] opacity-0" />
            </svg>
          </div>

          {/* Main hero content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-16 md:py-0 flex flex-col items-start gap-10 md:gap-8 min-h-[90vh] md:min-h-0">

            <div className="w-full">
              {/* Hero headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[3.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] font-headline font-bold text-white leading-[1.05] tracking-tight mb-8"
              >
                Find Your{" "}
                <span className="italic text-[#0071ba]">
                  Dream
                </span>
                <br />
                <span className="text-white">Home in India</span>
              </motion.h1>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-6 md:gap-14 mb-10 flex-wrap"
              >
                {[
                  { val: "19", label: "YEARS", delay: 0.7 },
                  { val: "190K", label: "CUSTOMERS", delay: 0.82 },
                  { val: "700", label: "DEVELOPERS", delay: 0.94 },
                  { val: "2000", label: "PROJECTS", delay: 1.06 },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: stat.delay }}
                    className="flex flex-col w-[120px]"
                  >
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[2.2rem] md:text-[2.6rem] font-headline font-black text-white leading-none tracking-tight">
                        {stat.val}<span className="text-[#e11d48] text-[1.4rem] relative -top-3 left-0.5 font-bold">+</span>
                      </span>
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.4, delay: stat.delay + 0.2, ease: "easeOut" }}
                      className="h-[3px] bg-[#e11d48] mt-2 mb-2 origin-left w-full"
                    />
                    <div className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-white/90 font-bold">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Search Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full max-w-5xl"
              >
                {/* Category Tabs */}
                <div className="flex items-center bg-[#1b2533] rounded-t-lg overflow-x-auto no-scrollbar border-b-0 border-[#1b2533]">
                  {[
                    { id: "Projects", icon: <Building className="w-3.5 h-3.5" />, label: "Projects" },
                    { id: "Residential", icon: <Home className="w-3.5 h-3.5" />, label: "Residential" },
                    { id: "Plots", icon: <Mountain className="w-3.5 h-3.5" />, label: "Plot & Land" },
                    { id: "Commercial", icon: <Building2 className="w-3.5 h-3.5" />, label: "Commercial" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center gap-2 px-6 py-4 text-[12px] font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${
                        activeTab === tab.id
                          ? "text-white"
                          : "text-white/60 hover:text-white/80"
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                      {activeTab === tab.id && <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-50" />}
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTabUnderline"
                          className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e11d48]"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Main Search Row */}
                <div className="bg-white rounded-b-lg flex flex-col md:flex-row items-stretch overflow-hidden shadow-xl border border-t-0 border-[#1b2533]">
                  {/* City */}
                  <div className="md:w-52 px-6 py-4 border-b md:border-b-0 md:border-r border-slate-200 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors relative group">
                    <select
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                    >
                      {CITIES.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#e11d48] shrink-0" />
                      <span className="text-[14px] font-bold text-[#0071ba] tracking-tight">{selectedCity}</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-300 group-hover:text-[#0071ba] transition-colors" />
                  </div>

                  {/* Search Input */}
                  <div className="flex-1 flex items-center px-6 py-4 bg-transparent min-w-0">
                    <Search className="w-5 h-5 text-slate-300 mr-3 shrink-0" />
                    <input
                      type="text"
                      placeholder="Project, builder or location..."
                      className="bg-transparent border-none outline-none focus:ring-0 w-full text-slate-800 font-medium placeholder:text-slate-400 text-[14px] min-w-0"
                      value={heroSearchQuery}
                      onChange={(e) => setHeroSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleHeroSearch()}
                    />
                    <button className="shrink-0 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0071ba] hover:border-[#0071ba] transition-all ml-2">
                      <Mic className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={handleHeroSearch}
                    className="bg-[#0071ba] hover:bg-[#005a96] text-white px-10 py-5 md:py-4 text-[13px] font-bold uppercase tracking-wide transition-all active:scale-[0.98] shrink-0 flex items-center justify-center"
                  >
                    SEARCH PROJECTS
                  </button>
                </div>

                {/* Quick Filter Pills */}
                <div className="flex items-center gap-3 mt-5 flex-wrap">
                  {[
                    { label: heroBudget, setter: setHeroBudget, options: ["Budget", "Under 50 Lac", "50 Lac - 1 Cr", "1 Cr - 2 Cr", "2 Cr - 5 Cr", "Above 5 Cr"] },
                    { label: heroPropertyType, setter: setHeroPropertyType, options: ["Property Type", "Apartment", "Villa", "Plot", "Commercial", "Office"] },
                    { label: heroPossessionStatus, setter: setHeroPossessionStatus, options: ["Possession Status", "Ready to Move", "Under Construction", "New Launch"] },
                  ].map((filter, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + i * 0.08 }}
                      className="relative flex items-center gap-2 bg-white text-slate-800 px-5 py-2.5 rounded-full text-[12px] font-bold cursor-pointer transition-all hover:bg-slate-50 group whitespace-nowrap shadow-md"
                    >
                      <select
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                        value={filter.label}
                        onChange={(e) => filter.setter(e.target.value)}
                      >
                        {filter.options.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <span>{filter.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        {/* Developers Network Section - Dark Theme */}
        <section className="py-10 bg-[#0a1e3b] overflow-hidden relative border-y border-white/5">
          {/* Architectural Grid Background */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="premiumGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#premiumGrid)" />
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 mb-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex flex-col items-center gap-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-white/20" />
                <span className="text-[9px] font-black text-secondary uppercase tracking-[0.4em]">Our Network</span>
                <div className="w-10 h-[1px] bg-white/20" />
              </div>
              <h2 className="text-xl md:text-2xl font-headline font-black text-white leading-tight uppercase tracking-[0.05em]">
                Strategic <span className="text-primary italic">Alliances</span>
              </h2>
            </motion.div>
          </div>

          {/* Infinite Marquee Rows */}
          <div className="relative">
            {/* Fade Overlays */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0a1e3b] via-[#0a1e3b]/90 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0a1e3b] via-[#0a1e3b]/90 to-transparent z-20 pointer-events-none" />

            <div className="flex whitespace-nowrap overflow-hidden">
              <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
                {[
                  { name: "BPTP", domain: "bptp.com" },
                  { name: "Signature Global", domain: "signatureglobal.in" },
                  { name: "Godrej", domain: "godrejproperties.com" },
                  { name: "M3M India", domain: "m3mindia.com" },
                  { name: "DLF", domain: "dlf.in" },
                  { name: "Gaurs", domain: "gaursonsindia.com" },
                  { name: "ATS", domain: "atshomekraft.com" },
                  { name: "Prestige", domain: "prestigeconstructions.com" },
                  { name: "Mahindra", domain: "mahindralifespaces.com" },
                  { name: "Lodha", domain: "lodhagroup.in" },
                  { name: "Emaar India", domain: "emaar-india.com" },
                  { name: "AIPL", domain: "aipl.com" },
                  { name: "Smartworld", domain: "smartworlddevelopers.com" },
                  { name: "Whiteland", domain: "whitelandcorporation.com" },
                  { name: "Puravankara", domain: "puravankara.com" },
                  { name: "Sobha", domain: "sobha.com" },
                  { name: "Brigade", domain: "brigadegroup.com" },
                  { name: "Kalpataru", domain: "kalpataru.com" },
                  { name: "Shapoorji", domain: "shapoorjipallonji.com" },
                  { name: "Adani", domain: "adanirealty.com" },
                  { name: "Omaxe", domain: "omaxe.com" },
                  { name: "Mahagun", domain: "mahagunindia.com" },
                  { name: "Ace Group", domain: "acegroupindia.com" },
                  { name: "Eldeco", domain: "eldecogroup.com" }
                ].map((dev, idx) => (
                  <div
                    key={idx}
                    className="flex-none w-[150px] md:w-[180px] h-[55px] md:h-[65px] bg-white/5 backdrop-blur-md border border-white/10 shadow-sm rounded-xl flex items-center justify-center p-3 transition-all hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:border-white/30 hover:-translate-y-1 group cursor-default relative overflow-hidden"
                  >
                    <img loading="lazy" 
                      src={`https://logo.clearbit.com/${dev.domain}`}
                      alt={dev.name}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                        }
                      }}
                      className="max-w-[120px] max-h-[35px] object-contain filter grayscale invert brightness-200 contrast-200 mix-blend-screen opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                    <span className="hidden text-white font-black text-[10px] md:text-xs uppercase tracking-[0.1em] group-hover:text-secondary group-hover:scale-105 transition-all duration-500 text-center leading-tight">
                      {dev.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]" aria-hidden="true">
                {[
                  { name: "BPTP", domain: "bptp.com" },
                  { name: "Signature Global", domain: "signatureglobal.in" },
                  { name: "Godrej", domain: "godrejproperties.com" },
                  { name: "M3M India", domain: "m3mindia.com" },
                  { name: "DLF", domain: "dlf.in" },
                  { name: "Gaurs", domain: "gaursonsindia.com" },
                  { name: "ATS", domain: "atshomekraft.com" },
                  { name: "Prestige", domain: "prestigeconstructions.com" },
                  { name: "Mahindra", domain: "mahindralifespaces.com" },
                  { name: "Lodha", domain: "lodhagroup.in" },
                  { name: "Emaar India", domain: "emaar-india.com" },
                  { name: "AIPL", domain: "aipl.com" },
                  { name: "Smartworld", domain: "smartworlddevelopers.com" },
                  { name: "Whiteland", domain: "whitelandcorporation.com" },
                  { name: "Puravankara", domain: "puravankara.com" },
                  { name: "Sobha", domain: "sobha.com" },
                  { name: "Brigade", domain: "brigadegroup.com" },
                  { name: "Kalpataru", domain: "kalpataru.com" },
                  { name: "Shapoorji", domain: "shapoorjipallonji.com" },
                  { name: "Adani", domain: "adanirealty.com" },
                  { name: "Omaxe", domain: "omaxe.com" },
                  { name: "Mahagun", domain: "mahagunindia.com" },
                  { name: "Ace Group", domain: "acegroupindia.com" },
                  { name: "Eldeco", domain: "eldecogroup.com" }
                ].map((dev, idx) => (
                  <div
                    key={`clone-${idx}`}
                    className="flex-none w-[150px] md:w-[180px] h-[55px] md:h-[65px] bg-white/5 backdrop-blur-md border border-white/10 shadow-sm rounded-xl flex items-center justify-center p-3 transition-all hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:border-white/30 hover:-translate-y-1 group cursor-default relative overflow-hidden"
                  >
                    <img loading="lazy" 
                      src={`https://logo.clearbit.com/${dev.domain}`}
                      alt={dev.name}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                        }
                      }}
                      className="max-w-[120px] max-h-[35px] object-contain filter grayscale invert brightness-200 contrast-200 mix-blend-screen opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                    <span className="hidden text-white font-black text-[10px] md:text-xs uppercase tracking-[0.1em] group-hover:text-secondary group-hover:scale-105 transition-all duration-500 text-center leading-tight">
                      {dev.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>


          
        </section>

        {/* Curated Hot Properties */}
        <section className="py-8 px-6 max-w-[90rem] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-headline font-black text-[#0a1e3b] text-center">Curated <span className="text-primary italic">Hot</span> Properties</h2>
            
            {/* City Filter */}
            <div className="mt-8 flex md:flex-wrap items-center justify-start md:justify-center gap-3 overflow-x-auto md:overflow-visible no-scrollbar pb-4 md:pb-0 px-2">
              {CITIES.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-8 py-3 rounded-xl text-[12px] font-black tracking-widest uppercase transition-all duration-300 whitespace-nowrap shrink-0 hover:-translate-y-1 ${
                    selectedCity === city 
                      ? "bg-secondary text-white shadow-lg shadow-secondary/30 scale-105 hover:shadow-2xl hover:shadow-secondary/40" 
                      : "bg-white text-primary border border-slate-100 hover:border-secondary hover:text-secondary hover:shadow-lg"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayProperties.slice(0, 4).map((prop, idx) => (
              <ProjectCard key={idx} property={prop} index={idx} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/projects"
              className="bg-primary text-white px-10 py-5 rounded-2xl font-headline font-black uppercase tracking-[0.2em] text-sm hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,113,186,0.3)] transition-all inline-flex items-center gap-3 mx-auto active:translate-y-0 group"
            >
              View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </section>

        <div className="border-t border-slate-100 w-full" />
        <InvestmentAnalytics />

        {/* Top Investment Locations */}
        <section className="py-10 bg-[#0a1e3b]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-0.5 bg-primary/40 rounded-full" />
                <span className="text-[9px] font-black text-secondary uppercase tracking-[0.4em]">Premium Markets</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-black text-white leading-tight uppercase tracking-tight">
                Top <span className="text-primary italic">Investment</span> Locations
              </h2>
              <p className="text-slate-400 font-medium font-headline max-w-2xl text-sm italic">Strategic markets poised for significant capital appreciation in 2024.</p>
            </div>

            <div className="relative group/nav">
              {/* Floating Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 flex justify-between pointer-events-none px-2 md:-mx-10">
                <button 
                  onClick={() => scrollLocations("left")}
                  className="w-14 h-14 rounded-full bg-[#0a1e3b]/80 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all cursor-pointer pointer-events-auto shadow-2xl hidden md:flex"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => scrollLocations("right")}
                  className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center hover:brightness-110 shadow-2xl hover:scale-105 transition-all cursor-pointer pointer-events-auto hidden md:flex"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div 
                ref={locationScrollRef}
                className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-8"
                style={{ scrollSnapType: "x mandatory" }}
              >
              {[
                { city: "Noida", slug: "noida", tag: "TRENDING", tagColor: "bg-secondary", desc: "120+ Premium Projects", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
                { city: "Gurugram", slug: "gurugram", tag: "LUXURY HUB", tagColor: "bg-[#bda55d]", desc: "85+ Signature Estates", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" },
                { city: "Mumbai", slug: "mumbai", desc: "200+ Exclusive Units", img: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=800&auto=format&fit=crop" },
                { city: "Pune", slug: "pune", desc: "65+ Smart Projects", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop" },
                { city: "Bengaluru", slug: "bengaluru", desc: "110+ Tech Enabled Homes", img: "https://images.unsplash.com/photo-1596422846543-b5c6514704b1?q=80&w=800&auto=format&fit=crop" },
                { city: "Goa", slug: "goa", tag: "HOT SELLER", tagColor: "bg-blue-600", desc: "45+ Luxury Villas", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
                { city: "Jaipur", slug: "jaipur", desc: "30+ Heritage Properties", img: "https://images.unsplash.com/photo-1599661046289-e318978567c4?q=80&w=800&auto=format&fit=crop" }
              ].map((loc, idx) => (
                <Link to={`/city/${loc.slug}`} key={idx} className="flex-shrink-0" style={{ scrollSnapAlign: "start" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    className="w-[260px] md:w-[290px] relative aspect-[3/4.5] rounded-[2.5rem] overflow-hidden group shadow-2xl cursor-pointer"
                  >
                    <img loading="lazy" src={loc.img} alt={loc.city} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60" />
                    
                    {loc.tag && (
                      <div className="absolute top-6 right-6">
                        <span className={`${loc.tagColor} text-white px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] shadow-lg`}>{loc.tag}</span>
                      </div>
                    )}

                    <div className="absolute bottom-6 left-5 right-5 bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl transform group-hover:translate-y-[-8px] transition-all duration-500">
                      <h4 className="text-xl font-headline font-black text-[#0a1e3b]">{loc.city}</h4>
                      <p className="text-[9px] font-bold text-[#64748b] uppercase tracking-widest mt-1">{loc.desc}</p>
                      <div className="flex items-center gap-1 mt-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] font-black uppercase tracking-widest">Explore</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* Testimonials & Google Reviews Unified Section */}
        <section className="py-12 md:py-20 bg-[#F9FAFB] border-y border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Overall Rating Summary */}
              <div className="lg:col-span-4 lg:pr-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-headline font-black text-[#111827] leading-tight mb-4">
                    The Voice <br />of our <span className="italic text-primary">Investors</span>
                  </h2>
                  <p className="text-[#6B7280] font-medium leading-relaxed mb-8 text-sm">
                    Direct feedback from the global community who have entrusted us with their capital.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-[1.25rem] border border-[#E5E7EB] shadow-sm relative overflow-hidden group">
                  <div className="flex items-center gap-4 relative z-10">
                    <div>
                      <div className="text-4xl font-headline font-black text-[#111827]">4.8</div>
                      <div className="flex text-yellow-500 mt-1">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                      </div>
                    </div>
                    <div className="h-12 w-px bg-[#E5E7EB]" />
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <img loading="lazy" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-3" />
                        <span className="text-[9px] font-black text-[#111827] uppercase tracking-widest">Reviews</span>
                      </div>
                      <p className="text-base font-headline font-bold text-[#111827]">2,500+</p>
                      <p className="text-[9px] font-bold text-[#6B7280] uppercase tracking-widest">Verified Insights</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Split Side-by-Side Sliders */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Google Reviews Column */}
                  <div className="space-y-6">
                    <p className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Community Insights
                    </p>
                    <div className="overflow-hidden relative h-[360px]">
                      <div className="flex flex-col gap-6 animate-vertical-scroll hover:[animation-play-state:paused]">
                        {[
                          {
                            name: "Rahul Sharma",
                            stars: 5,
                            text: "Investors Clinic helped me find the perfect 3BHK. Their team is professional and transparent throughout.",
                          },
                          {
                            name: "Anjali Gupta",
                            stars: 5,
                            text: "Expert guidance on capital appreciation. The reports provided were detailed and helped me lock in a 15% ROI.",
                          },
                          {
                            name: "Kevin Peterson",
                            stars: 5,
                            text: "As an NRI, I needed a trusted partner. They handled documentation with zero friction. Truly institutional service.",
                          },
                          {
                            name: "Sanjay Verma",
                            stars: 5,
                            text: "Found a great commercial space for my new startup. Excellent collection which made it easy for us to find a spot in city center.",
                          },
                          {
                            name: "Ankita Jain",
                            stars: 5,
                            text: "I appreciated the honest feedback on various builders and the fact that they helped find the best property in the budget.",
                          },
                          {
                            name: "David Smith",
                            stars: 5,
                            text: "Great experience working with this group. They have listed properties from great builders which gave us a lot of options.",
                          }
                        ].map((card, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                            className="w-full bg-white p-8 rounded-[1.5rem] border border-[#E5E7EB] shadow-sm flex flex-col justify-between shrink-0 h-[280px] transition-shadow duration-300"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-6">
                                <div className="flex gap-0.5 text-yellow-500">
                                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                </div>
                                <img loading="lazy" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-2.5 opacity-40" />
                              </div>
                              <p className="text-[#111827] text-sm font-medium leading-relaxed italic line-clamp-4">
                                "{card.text}"
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#111827] font-black text-[10px] uppercase">
                                {card.name.charAt(0)}
                              </div>
                              <div>
                                <p className="text-xs font-headline font-bold text-[#111827]">{card.name}</p>
                                <p className="text-[8px] font-bold text-[#6B7280] uppercase tracking-widest">Verified Review</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Video Testimonials Column */}
                  <div className="space-y-6">
                    <p className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Success Stories
                    </p>
                    <div className="overflow-hidden relative h-[360px]">
                      <div className="flex flex-col gap-6 animate-vertical-scroll-delayed hover:[animation-play-state:paused]">
                        {[
                          {
                            name: "Dr. Sameer Khan",
                            label: "Verified Investor",
                            text: "Why I chose Noida for my first high-yield asset � Investors Clinic explains.",
                            youtubeId: "OBbzECz08_I",
                            avatar: "https://i.pravatar.cc/150?u=sameer"
                          },
                          {
                            name: "Meera Reddy",
                            label: "Luxury Homeowner",
                            text: "Finding my dream home in Goa was effortless with the Investors Clinic team.",
                            youtubeId: "BznUMbIIxsE",
                            avatar: "https://i.pravatar.cc/150?u=meera"
                          },
                          {
                            name: "Rajesh Malhotra",
                            label: "Portfolio Client",
                            text: "Scaling my residential portfolio across Tier 1 cities with expert guidance.",
                            youtubeId: "kLhFfgEPBR0",
                            avatar: "https://i.pravatar.cc/150?u=rajesh"
                          },
                          {
                            name: "Priya Sharma",
                            label: "End User",
                            text: "Moving to my own apartment was a dream come true for my small family.",
                            youtubeId: "V6ub12NG3Gg",
                            avatar: "https://i.pravatar.cc/150?u=priya"
                          },
                          {
                            name: "Vikram Sethi",
                            label: "Commercial Investor",
                            text: "The rental yield advice was spot on for my office space investment.",
                            youtubeId: "QBGkBb3TPSA",
                            avatar: "https://i.pravatar.cc/150?u=vikram"
                          },
                          {
                            name: "Arun Goel",
                            label: "Plot Buyer",
                            text: "Smooth documentation and land title verification. Very professional service.",
                            youtubeId: "sFf3TJKQ6lg",
                            avatar: "https://i.pravatar.cc/150?u=arun"
                          }
                        ].map((card, idx) => (
                          <motion.div 
                            key={idx}
                            whileHover={{ scale: 1.02, y: -4 }}
                            onClick={() => setActiveVideo(card.youtubeId)}
                            className="w-full bg-white rounded-[1.5rem] border border-[#E5E7EB] shadow-sm overflow-hidden flex flex-col cursor-pointer shrink-0 h-[280px] transition-all duration-300 hover:shadow-xl group"
                          >
                            <div className="relative h-40 overflow-hidden">
                              <img loading="lazy" 
                                src={`https://img.youtube.com/vi/${card.youtubeId}/hqdefault.jpg`}
                                alt={card.name} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                              />
                              <div className="absolute inset-0 bg-black/30" />
                              <div className="absolute top-3 right-3">
                                <svg viewBox="0 0 90 20" className="h-4 opacity-90" fill="white">
                                  <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"/>
                                  <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"/>
                                </svg>
                              </div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                                  <Play className="w-5 h-5 text-red-600 fill-current group-hover:text-white transition-colors" />
                                </div>
                              </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col justify-between">
                              <p className="text-[#111827] text-xs font-medium leading-relaxed line-clamp-2">
                                {card.text}
                              </p>
                              <div className="flex items-center gap-3">
                                <img loading="lazy" src={card.avatar} alt={card.name} className="w-7 h-7 rounded-full object-cover" />
                                <div>
                                  <p className="text-[11px] font-headline font-bold text-[#111827]">{card.name}</p>
                                  <p className="text-[8px] font-bold text-secondary uppercase tracking-widest">{card.label}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Playback Modal — YouTube Embed */}
        {activeVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute inset-0 bg-[#0a1e3b]/95 backdrop-blur-md" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-secondary transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* YouTube Embed */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                title="Investors Clinic Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}

        {/* Recent Blogs - Premium Intelligence */}
        <section className="py-12 md:py-16 px-6 max-w-7xl mx-auto border-t border-slate-100/50">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-baseline mb-12">
            <div className="lg:col-span-8">
              <h2 className="text-2xl md:text-3xl font-headline font-black text-primary leading-tight">
                Latest from our <span className="italic text-secondary font-extrabold uppercase tracking-tight">Cultural Blog</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right self-end">
              <button className="group flex items-center gap-3 text-[9px] font-black text-primary uppercase tracking-[0.2em] ml-auto">
                <span className="border-b border-primary/20 pb-1 group-hover:border-secondary transition-colors">Explore All</span>
                <div className="w-7 h-7 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {[
              {
                date: "15 APR",
                year: "2024",
                category: "Market Report",
                title: "The Rise of Vertical Living in Gurugram's New Corridors",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
              },
              {
                date: "10 APR",
                year: "2024",
                category: "Investment",
                title: "Institutional Investment Trends in Noida Real Estate",
                img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop"
              },
              {
                date: "05 APR",
                year: "2024",
                category: "Analysis",
                title: "Commercial vs Residential: Navigating the 2024 Yield Gap",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
              },
              {
                date: "28 MAR",
                year: "2024",
                category: "Lifestyle",
                title: "Sustainable Architecture: A New Standard for Luxury Homes",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
              }
            ].map((blog, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group relative"
              >
                {/* Vertical Rail Date - Subtle */}
                <div className="absolute -left-6 top-0 h-full hidden 2xl:block">
                  <div className="writing-mode-vertical rotate-180 flex items-center gap-3 text-[9px] font-bold text-on-surface-variant/20 uppercase tracking-[0.2em]">
                    <span>{blog.year}</span>
                    <div className="w-px h-8 bg-primary/5" />
                    <span className="text-primary/60">{blog.date}</span>
                  </div>
                </div>

                <div className="relative aspect-[1.4/1] rounded-[1.5rem] overflow-hidden mb-6 shadow-xl shadow-primary/5 group-hover:shadow-primary/10 transition-shadow duration-500">
                  <img loading="lazy" 
                    src={blog.img} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-1.5 rounded-full text-[8px] font-black text-white uppercase tracking-widest">{blog.category}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-headline font-bold text-primary leading-tight group-hover:text-secondary transition-colors duration-300">
                    <Link to="/blog">{blog.title.split(' ').map((word, i) => 
                      i === 2 || i === 5 ? <span key={i} className="italic font-extrabold">{word} </span> : word + ' '
                    )}</Link>
                  </h3>
                  <Link to="/blog" className="flex items-center gap-2.5 text-[9px] font-black text-primary uppercase tracking-[0.2em] group-hover:text-secondary transition-all">
                    <span>Read Analysis</span>
                    <div className="w-5 h-1 w-0 group-hover:w-6 bg-secondary transition-all duration-300" />
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Strategic Intelligence CTA — Premium Redesign */}
        <section className="relative py-10 bg-[#030712] overflow-hidden">
          {/* Layered ambient lighting */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[180px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[150px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-blue-950/40 blur-[120px]" />
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-center">

              {/* ── LEFT: Content ── */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-5"
              >
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/60" />
                  <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em]">Exclusive Access</span>
                </div>

                {/* Headline */}
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-headline font-black text-white leading-[1.05] tracking-tight">
                    Here's{" "}
                    <span className="relative inline-block">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-rose-500">What</span>
                      <svg className="absolute -bottom-1 left-0 w-full" height="3" viewBox="0 0 100 3" preserveAspectRatio="none">
                        <path d="M0,1.5 Q50,0 100,1.5" stroke="url(#redLine)" strokeWidth="2" fill="none" />
                        <defs><linearGradient id="redLine" x1="0" x2="1"><stop stopColor="#f87171"/><stop offset="1" stopColor="#e11d48"/></linearGradient></defs>
                      </svg>
                    </span>
                    {" "}You'll Get
                  </h2>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-md">
                    Get a complete intelligence package crafted for serious investors — data-driven, transparent, and actionable.
                  </p>
                </div>

                {/* Feature List — compact 2×2 grid */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { title: "Top Investment Properties", desc: "Handpicked high-growth properties tailored to your goals.", icon: <Building2 className="w-3.5 h-3.5" />, color: "from-blue-500/20 to-blue-600/5", border: "border-blue-500/20", accent: "bg-blue-500/20 text-blue-400" },
                    { title: "Price Breakdown", desc: "Detailed cost analysis with transparent pricing.", icon: <CircleDollarSign className="w-3.5 h-3.5" />, color: "from-emerald-500/20 to-emerald-600/5", border: "border-emerald-500/20", accent: "bg-emerald-500/20 text-emerald-400" },
                    { title: "ROI Estimation", desc: "Accurate return on investment projections backed by data.", icon: <BarChart3 className="w-3.5 h-3.5" />, color: "from-amber-500/20 to-amber-600/5", border: "border-amber-500/20", accent: "bg-amber-500/20 text-amber-400" },
                    { title: "Free Consultation", desc: "Connect with our experts for personalized guidance.", icon: <User className="w-3.5 h-3.5" />, color: "from-rose-500/20 to-rose-600/5", border: "border-rose-500/20", accent: "bg-rose-500/20 text-rose-400" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.07, duration: 0.5 }}
                      className={`flex items-start gap-3 p-3.5 rounded-xl bg-gradient-to-br ${item.color} border ${item.border} backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300`}
                    >
                      <div className={`w-7 h-7 rounded-lg ${item.accent} flex items-center justify-center shrink-0 mt-0.5`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white mb-0.5">{item.title}</h4>
                        <p className="text-slate-400 text-[11px] leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Trust badge — compact */}
                <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm w-fit">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Trusted by 5,000+ Investors</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-2 h-2 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">4.8/5 · 120+ Reviews</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ── RIGHT: Premium Form Card ── */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 rounded-3xl blur-2xl opacity-50 pointer-events-none" />

                <div className="relative bg-gradient-to-b from-[#0f172a] to-[#0a0f1e] border border-white/[0.12] rounded-2xl p-5 shadow-2xl shadow-black/60 backdrop-blur-xl">
                  {/* Form header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="inline-flex items-center gap-1.5 bg-primary/15 border border-primary/25 rounded-full px-2.5 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[8px] font-black text-primary uppercase tracking-widest">Priority Access</span>
                    </div>
                    <div>
                      <h3 className="text-base font-headline font-bold text-white leading-tight">Inquiry Brief</h3>
                    </div>
                  </div>
                  <p className="text-slate-400 text-[11px] mb-4 -mt-2">Unlock institutional-grade project reports instantly.</p>

                  <div className="space-y-2.5">
                    {/* Name row */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="relative group">
                        <User size={11} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" />
                        <input type="text" placeholder="First name"
                          className="w-full bg-white/[0.05] border border-white/10 rounded-lg py-2.5 pl-8 pr-2 text-white text-xs placeholder:text-slate-600 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all" />
                      </div>
                      <input type="text" placeholder="Last name"
                        className="w-full bg-white/[0.05] border border-white/10 rounded-lg py-2.5 px-3 text-white text-xs placeholder:text-slate-600 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all" />
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <Mail size={11} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" />
                      <input type="email" placeholder="Email address"
                        className="w-full bg-white/[0.05] border border-white/10 rounded-lg py-2.5 pl-8 pr-3 text-white text-xs placeholder:text-slate-600 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all" />
                    </div>

                    {/* Phone */}
                    <div className="relative group">
                      <Phone size={11} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 border-l border-white/15 pl-2">
                        <img loading="lazy" src="https://flagcdn.com/w40/in.png" className="w-3 h-1.5 object-cover rounded-[1px]" alt="IN" />
                        <span className="text-white font-bold text-[10px]">+91</span>
                      </div>
                      <input type="tel" placeholder="Phone number"
                        className="w-full bg-white/[0.05] border border-white/10 rounded-lg py-2.5 pl-8 pr-14 text-white text-xs placeholder:text-slate-600 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all" />
                    </div>

                    {/* Message */}
                    <div className="relative group">
                      <MessageSquare size={11} className="absolute left-3 top-3 text-slate-500 group-focus-within:text-primary transition-colors" />
                      <textarea placeholder="Project requirements or questions..." rows={2}
                        className="w-full bg-white/[0.05] border border-white/10 rounded-lg py-2.5 pl-8 pr-3 text-white text-xs placeholder:text-slate-600 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all resize-none" />
                    </div>

                    {/* CTA Button */}
                    <button className="relative w-full overflow-hidden group bg-gradient-to-r from-primary to-red-600 text-white py-3 rounded-lg font-black text-[10px] uppercase tracking-[0.25em] shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative z-10">Request Access</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform relative z-10" />
                    </button>

                    {/* Verified footer */}
                    <div className="flex items-center justify-center gap-1.5 pt-1.5 border-t border-white/[0.07]">
                      <ShieldCheck size={10} className="text-emerald-400" />
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.15em]">Institutionally Verified ROI Potential</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
        {/* Scroll To Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ 
            opacity: showScrollTop ? 1 : 0, 
            scale: showScrollTop ? 1 : 0.5,
            y: showScrollTop ? 0 : 20 
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center cursor-pointer hover:bg-secondary hover:-translate-y-2 transition-all group",
            !showScrollTop && "pointer-events-none"
          )}
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
