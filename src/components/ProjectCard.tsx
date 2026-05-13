import React from "react";
import { motion } from "motion/react";
import { MapPin, Home, PencilRuler, ChevronRight } from "lucide-react";
import { Property } from "../types";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  property: Property;
  index: number;
  onCompareToggle?: (property: Property) => void;
  isComparing?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ property, index, onCompareToggle, isComparing }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: index * 0.1 }
  };

  return (
    <motion.div {...fadeInUp} className="bg-white rounded-[1.5rem] overflow-hidden shadow-xl border border-slate-100 group">
      <Link to={`/project/${property.id}`} className="block">
        <div className="aspect-[1.3/1] relative overflow-hidden">
          <img loading="lazy" src={property.img} alt={property.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
          <div className="absolute top-4 left-4">
            <span className={`${property.tagColor} text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest`}>{property.tag}</span>
          </div>
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg">
            <p className="text-[10px] font-black text-primary">{property.price}</p>
          </div>
        </div>
      </Link>
      <div className="p-5 md:p-6">
        <Link to={`/project/${property.id}`}>
          <h3 className="text-sm md:text-base font-headline font-black text-primary mb-2 leading-tight min-h-[40px] hover:text-secondary transition-colors line-clamp-2 uppercase tracking-tight">{property.title}</h3>
        </Link>
        <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold mb-4">
          <MapPin className="w-3 h-3 text-secondary shrink-0" />
          <span className="truncate">{property.loc}</span>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[8px] font-black uppercase tracking-[0.1em] px-2.5 py-1 bg-slate-50 text-slate-400 rounded-lg border border-slate-100 whitespace-nowrap">Under Construction</span>
          <span className="text-[8px] font-black uppercase tracking-[0.1em] px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100 whitespace-nowrap">RERA Verified</span>
        </div>
        <div className="flex items-center justify-between pt-5 border-t border-slate-50">
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5 text-[10px] font-black text-primary uppercase">
              <Home className="w-3.5 h-3.5 text-secondary" /> {property.bhk.split(' ')[0]}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-black text-primary uppercase">
              <PencilRuler className="w-3.5 h-3.5 text-secondary" /> {property.sqft.split(' ')[0]}
            </div>
          </div>
          <Link to={`/project/${property.id}`} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        
        {onCompareToggle && (
          <button 
            onClick={(e) => {
              e.preventDefault();
              onCompareToggle(property);
            }}
            className={`mt-4 w-full py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border flex items-center justify-center gap-2 ${
              isComparing 
                ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20" 
                : "bg-white text-slate-400 border-slate-100 hover:border-secondary/30 hover:text-secondary"
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${isComparing ? "bg-white animate-pulse" : "bg-slate-200"}`} />
            {isComparing ? "Remove from Comparison" : "Add to Comparison"}
          </button>
        )}
      </div>
    </motion.div>
  );
};
