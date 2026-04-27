import { Property } from "./types";

export const CITIES = [
  "Noida", "Gurugram", "Faridabad", "Greater Noida West", 
  "Jaipur", "Pune", "Goa", "Bengaluru", "Dehradun"
];

export const PROPERTIES: Property[] = [
  { 
    id: "signature-global-city",
    tag: "Featured", 
    tagColor: "bg-secondary",
    title: "Signature Global City", 
    loc: "Sector 37D, Noida", 
    city: "Noida",
    price: "₹1.2 Cr Onwards", 
    bhk: "2 & 3 BHK",
    sqft: "1450 sq.ft",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    description: "Experience a unique lifestyle at Signature Global City, featuring low-rise premium floors with world-class amenities and lush green landscapes in the heart of Noida."
  },
  { 
    id: "godrej-south-estate",
    tag: "Limited Offering", 
    tagColor: "bg-secondary",
    title: "Godrej South Estate", 
    loc: "Okhla, Noida", 
    city: "Noida",
    price: "₹4.5 Cr Onwards", 
    bhk: "3 & 4 BHK",
    sqft: "2800 sq.ft",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    description: "A landmark of luxury in South Noida, Godrej South Estate offers ultra-premium residences with advanced air purification systems and bespoke interiors."
  },
  { 
    id: "bptp-downtown-66",
    tag: "Hot Property", 
    tagColor: "bg-secondary",
    title: "BPTP Downtown 66", 
    loc: "Sector 66, Gurugram", 
    city: "Gurugram",
    price: "₹3.5 Cr Onwards", 
    bhk: "3 & 4 BHK",
    sqft: "2400 sq.ft",
    img: "https://images.unsplash.com/photo-1460317442991-0ec239f636a7?q=80&w=800&auto=format&fit=crop",
    description: "BPTP Downtown 66 stands as a testament to modern urban living, offering high-end apartments with smart home features and excellent connectivity to the Golf Course Extension Road."
  },
  { 
    id: "adani-the-marq",
    tag: "Luxury Collection", 
    tagColor: "bg-[#bda55d]",
    title: "Adani The Marq", 
    loc: "Sector 110, Noida", 
    city: "Noida",
    price: "₹5.2 Cr Onwards", 
    bhk: "4 BHK",
    sqft: "3100 sq.ft",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    description: "The Marq by Adani is a pinnacle of architectural grandeur, offering expansive 4 BHK residences with panoramic city views and exclusive private clubs."
  },
  { 
    id: "trump-towers",
    tag: "Iconic Address", 
    tagColor: "bg-[#0a1e3b]",
    title: "Trump Towers", 
    loc: "Worli, Mumbai", 
    city: "Mumbai",
    price: "₹12.5 Cr Onwards", 
    bhk: "5 BHK",
    sqft: "5500 sq.ft",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    description: "The world's most prestigious address comes to Mumbai. Trump Towers Worli features high-concept glass architecture and a level of luxury that redefined the Mumbai skyline."
  },
  { 
    id: "ats-homekraft",
    tag: "Investment Special", 
    tagColor: "bg-green-600",
    title: "Ats Homekraft", 
    loc: "Sector 150, Noida", 
    city: "Noida",
    price: "₹1.8 Cr Onwards", 
    bhk: "3 BHK",
    sqft: "1850 sq.ft",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    description: "Strategic investment meets luxury at Ats Homekraft. Located in the eco-friendly Sector 150, it offers premium lifestyle amenities in a serene, green environment."
  },
  { 
    id: "m3m-woodshire",
    tag: "Eco Living", 
    tagColor: "bg-emerald-600",
    title: "M3M Woodshire", 
    loc: "Sector 107, Gurugram", 
    city: "Gurugram",
    price: "₹2.2 Cr Onwards", 
    bhk: "2, 3 & 4 BHK",
    sqft: "1900 sq.ft",
    img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop",
    description: "Nestled in nature, M3M Woodshire offers a sustainable living experience with extensive landscaping, organic gardens, and energy-efficient building designs."
  },
  { 
    id: "smartworld-one-dxp",
    tag: "Smart Home", 
    tagColor: "bg-blue-600",
    title: "Smartworld One DXP", 
    loc: "Sector 113, Gurugram", 
    city: "Gurugram",
    price: "₹2.8 Cr Onwards", 
    bhk: "3 & 4 BHK",
    sqft: "2100 sq.ft",
    img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=800&auto=format&fit=crop",
    description: "The future of living is here at Smartworld One DXP. These smart residences come equipped with integrated AI for home automation and security."
  },
  { 
    id: "mahagun-medalleo",
    tag: "Royal Living", 
    tagColor: "bg-amber-600",
    title: "Mahagun Medalleo", 
    loc: "Sector 107, Noida", 
    city: "Noida",
    price: "₹3.8 Cr Onwards", 
    bhk: "3 & 4 BHK",
    sqft: "2500 sq.ft",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop",
    description: "Inspired by royal heritage, Mahagun Medalleo offers palatial living spaces with intricate craftsmanship and ultra-modern lifestyle facilities."
  },
  { 
    id: "whiteland-the-aspen",
    tag: "Modern Spaces", 
    tagColor: "bg-indigo-600",
    title: "Whiteland The Aspen", 
    loc: "Sector 76, Gurugram", 
    city: "Gurugram",
    price: "₹4.2 Cr Onwards", 
    bhk: "3 & 4 BHK",
    sqft: "2700 sq.ft",
    img: "https://images.unsplash.com/photo-1600585154526-990dbea46e06?q=80&w=800&auto=format&fit=crop",
    description: "Experience contemporary design and sophisticated interiors at Whiteland The Aspen, where every detail is curated for the modern urban elite."
  },
  { 
    id: "prestige-oceanic",
    tag: "Holiday Home", 
    tagColor: "bg-cyan-600",
    title: "Prestige Oceanic", 
    loc: "Calangute, Goa", 
    city: "Goa",
    price: "₹2.5 Cr Onwards", 
    bhk: "2 & 3 BHK",
    sqft: "1600 sq.ft",
    img: "https://images.unsplash.com/photo-1512918766671-ad6507962077?q=80&w=800&auto=format&fit=crop",
    description: "The perfect getaway in the heart of Goa. Prestige Oceanic offers premium apartments with sea views and resort-style amenities for an eternal vacation."
  },
  { 
    id: "emaar-hills",
    tag: "Hill Retreat", 
    tagColor: "bg-slate-600",
    title: "Emaar Hills", 
    loc: "Rajpur Road, Dehradun", 
    city: "Dehradun",
    price: "₹1.9 Cr Onwards", 
    bhk: "3 BHK",
    sqft: "2200 sq.ft",
    img: "https://images.unsplash.com/photo-1500382017468-9049fee74a62?q=80&w=800&auto=format&fit=crop",
    description: "Waking up to mountain views at Emaar Hills. Located on the prestigious Rajpur Road, it offers a serene life amidst the clouds and greenery of Dehradun."
  },
  { 
    id: "brigade-gateway",
    tag: "City Center", 
    tagColor: "bg-sky-600",
    title: "Brigade Gateway", 
    loc: "Malleshwaram, Bengaluru", 
    city: "Bengaluru",
    price: "₹3.2 Cr Onwards", 
    bhk: "3 & 4 BHK",
    sqft: "2400 sq.ft",
    img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format&fit=crop",
    description: "Bridge Gateway is a micro-city in its own right, offering premium residences, commercial spaces, and a world-class hospital all within one integrated township."
  }
];
