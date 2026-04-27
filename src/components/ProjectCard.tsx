import React from "react";
import { motion } from "motion/react";
import { MapPin, Home, PencilRuler, ChevronRight } from "lucide-react";
import { Property } from "../types";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  property: Property;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ property, index }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: index * 0.1 }
  };

  return (
    <motion.div {...fadeInUp} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 group">
      <Link to={`/project/${property.id}`} className="block">
        <div className="aspect-[1.2/1] relative overflow-hidden">
          <img src={property.img} alt={property.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
          <div className="absolute top-6 left-6">
            <span className={`${property.tagColor} text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest`}>{property.tag}</span>
          </div>
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl">
            <p className="text-xs font-black text-[#0a1e3b]">{property.price}</p>
          </div>
        </div>
      </Link>
      <div className="p-8">
        <Link to={`/project/${property.id}`}>
          <h3 className="text-xl font-headline font-bold text-[#0a1e3b] mb-1 leading-tight min-h-[56px] hover:text-secondary transition-colors">{property.title}</h3>
        </Link>
        <div className="flex items-center gap-2 text-[#64748b] text-[12px] font-bold mb-3">
          <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
          <span className="truncate">{property.loc}</span>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 bg-slate-50 text-slate-400 rounded-md border border-slate-100">Under Construction</span>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-md border border-emerald-100">RERA Verified</span>
        </div>
        <div className="flex items-center justify-between pt-5 border-t border-slate-100">
          <div className="flex gap-3">
            <div className="flex items-center gap-1 text-[10px] font-black text-[#0a1e3b] uppercase">
              <Home className="w-3.5 h-3.5" /> {property.bhk.split(' ')[0]}
            </div>
            <div className="flex items-center gap-1 text-[10px] font-black text-[#0a1e3b] uppercase">
              <PencilRuler className="w-3.5 h-3.5" /> {property.sqft.split(' ')[0]}
            </div>
          </div>
          <Link to={`/project/${property.id}`} className="text-secondary font-black text-[10px] uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all p-2 rounded-lg hover:bg-secondary/10">
            Details <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
