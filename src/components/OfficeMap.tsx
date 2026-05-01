import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'motion/react';
import { Building2, Phone, MapPin } from 'lucide-react';

const customIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: #bc0011; width: 32px; height: 32px; border-radius: 12px; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 4px 12px rgba(188, 0, 17, 0.4);">
          <div style="width: 8px; height: 8px; background-color: white; border-radius: 50%;"></div>
        </div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

interface Office {
  city: string;
  address: string;
  phone: string;
  coords: [number, number];
}

const offices: Office[] = [
  {
    city: "Corporate Office",
    address: "Tower Astralis, Supertech Supernova, Sector 94, Noida",
    phone: "0120-4247285",
    coords: [28.5395, 77.3482]
  },
  {
    city: "Gurugram Office",
    address: "M3M Broadway, Golf Course Ext Road, Sector 71",
    phone: "+91 124 6000 000",
    coords: [28.3980, 77.0680]
  },
  {
    city: "Mumbai Regional Hub",
    address: "Ashar Millenia, Ghodbunder Road, Thane West",
    phone: "+91 22 5000 0000",
    coords: [19.2300, 72.9700]
  },
  {
    city: "Noida Extension",
    address: "Boulevard Walk, Plot No. C-2, Sector-4",
    phone: "+91 120 4000 000",
    coords: [28.5830, 77.4450]
  }
];

export const OfficeMap = () => {
  return (
    <div className="w-full h-[400px] rounded-[3rem] overflow-hidden shadow-2xl shadow-[#0a1e3b]/10 border border-slate-100 relative group">
      <MapContainer 
        center={[24.0, 78.0]} 
        zoom={5} 
        scrollWheelZoom={false}
        className="w-full h-full z-0"
        style={{ background: '#f8fafc' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          className="grayscale brightness-[0.9] contrast-[1.1]"
        />
        {offices.map((office, idx) => (
          <Marker 
            key={idx} 
            position={office.coords} 
            icon={customIcon}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[200px]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                    <Building2 size={16} />
                  </div>
                  <h4 className="font-bold text-[#0a1e3b] uppercase tracking-tight">{office.city}</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] text-slate-500 font-medium flex items-start gap-2">
                    <MapPin size={12} className="shrink-0 mt-0.5 text-secondary" />
                    {office.address}
                  </p>
                  <p className="text-[11px] text-[#0a1e3b] font-black flex items-center gap-2">
                    <Phone size={12} className="text-secondary" />
                    {office.phone}
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Decorative Overlays */}
      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white flex items-center gap-4"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center">
                <Building2 size={12} className="text-[#0a1e3b]" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-[10px] font-black text-[#0a1e3b] uppercase tracking-[0.2em]">Global Presence</p>
            <p className="text-[10px] font-bold text-slate-400">3 Strategic Hubs Mapped</p>
          </div>
        </motion.div>
      </div>

      {/* Custom styles for the map elements */}
      <style>{`
        .leaflet-container {
          font-family: inherit;
        }
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 20px;
          padding: 0;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border: 1px solid #f1f5f9;
        }
        .custom-popup .leaflet-popup-content {
          margin: 0;
        }
        .custom-popup .leaflet-popup-tip {
          background: white;
        }
        .grayscale .leaflet-tile {
          filter: grayscale(1) invert(0.05) brightness(1.05);
        }
      `}</style>
    </div>
  );
};
