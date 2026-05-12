import { Property, BlogPost } from "./types";

export const CITIES = [
  "Noida", "Gurugram", "Faridabad", "Greater Noida West", 
  "Jaipur", "Pune", "Goa", "Bengaluru", "Dehradun"
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "The Rise of Luxury Real Estate in Noida Sector 150",
    excerpt: "Why institutional investors and luxury seekers are flocking to India's first residential sector with high-density green cover.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
    category: "Market Trends",
    author: "Vishal Gupta",
    date: "May 01, 2024",
    readTime: "6 min read",
    content: [
      { type: "heading", text: "Strategic Market Overview" },
      { type: "paragraph", text: "Noida Sector 150 has emerged as the most sought-after residential destination in the National Capital Region (NCR). What sets it apart is the unique planning directive that reserves 80% of the land for green cover, making it the greenest residential sector in the country. This commitment to sustainability is not just an environmental win but a massive value driver for premium assets." },
      { type: "data", items: [
        { label: "Total Green Cover", value: "80%" },
        { label: "Planned Sports City", value: "300 Acres" }
      ]},
      { type: "heading", text: "Investment Alpha" },
      { type: "paragraph", text: "Connectivity via the Noida-Greater Noida Expressway and the upcoming Jewar International Airport has positioned Sector 150 as a gateway for global investors. We have witnessed a 25% year-on-year appreciation in capital values, driven by zero-risk inventory from Tier-1 developers like Godrej, TATA, and ATS." }
    ]
  },
  {
    id: "2",
    title: "DDA Housing Scheme 2024: A Comprehensive Guide",
    excerpt: "Everything you need to know about navigating the new DDA housing policy to ensure your investment is secure and profitable.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop",
    category: "Regulations",
    author: "Sanjay Dixit",
    date: "Apr 28, 2024",
    readTime: "8 min read",
    content: [
      { type: "heading", text: "The New Supply Wave" },
      { type: "paragraph", text: "The Delhi Development Authority (DDA) has announced its most ambitious housing scheme for 2024, focusing on Dwarka, Narela, and Vasant Kunj. This phase introduces premium categories like HIG and Super HIG, aimed at professionals looking for centrally located assets with improved infrastructure." },
      { type: "heading", text: "Application Mastery" },
      { type: "paragraph", text: "Applying through the official DDA portal requires meticulous documentation. From Aadhar-linked verification to RERA compliance checks, ensure your eligibility matches the specific category requirements to avoid disqualification during the lottery process." }
    ]
  },
  {
    id: "3",
    title: "Jewar International Airport: The Growth Engine of Noida",
    excerpt: "How the multi-billion dollar aviation project is redefining property valuations across Yamuna Expressway and Greater Noida.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=1000&auto=format&fit=crop",
    category: "Infrastructure",
    author: "Rohan Verma",
    date: "Apr 25, 2024",
    readTime: "10 min read",
    content: [
      { type: "heading", text: "Global Connectivity, Local Wealth" },
      { type: "paragraph", text: "The Noida International Airport at Jewar is not just an aviation hub; it's a structural pivot for the entire UP real estate market. Its proximity is already triggering the development of aero-cities, logistics hubs, and high-end residential townships along the Yamuna Expressway." },
      { type: "data", items: [
        { label: "Annual Capacity", value: "12M Passengers" },
        { label: "Job Creation", value: "1 Lakh+" }
      ]},
      { type: "heading", text: "Investor Strategy" },
      { type: "paragraph", text: "Our analysis suggest that land prices in a 20km radius of the airport have doubled in the last 36 months. However, the real 'Alpha' lies in the residential corridors of Sector 146 and 150, which offer superior lifestyle amenities paired with high appreciation potential." }
    ]
  },
  {
    id: "4",
    title: "Delhi Metro Phase 4 & 5: Connectivity and Infrastructure Alpha",
    excerpt: "Why the expansion of the world-class metro network is the single biggest predictor of rental yields in the NCR region.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop",
    category: "Infrastructure",
    author: "Anjali Mehta",
    date: "Apr 20, 2024",
    readTime: "7 min read",
    content: [
      { type: "heading", text: "The Network Effect" },
      { type: "paragraph", text: "The Delhi Metro Rail Corporation (DMRC) is rapidly progressing with Phase 4 and planning for Phase 5. These new corridors are specifically targeted at high-density residential zones that were previously underserved. For an investor, the announcement of a new station is the primary signal for entry." },
      { type: "heading", text: "Micro-Market Winners" },
      { type: "paragraph", text: "Areas like Majlis Park, Maujpur, and Tughlakabad are set to see a massive transformation. With improved connectivity to the core city, these micro-markets are expected to witness a 15-20% spike in rental demand over the next 24 months." }
    ]
  },
  {
    id: "5",
    title: "Commercial vs Residential: Where to Invest in 2024?",
    excerpt: "A data-driven comparison between high-yield commercial assets and stable residential portfolios in a high-interest rate environment.",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1000&auto=format&fit=crop",
    category: "Investments",
    author: "Vishal Gupta",
    date: "Apr 15, 2024",
    readTime: "9 min read",
    content: [
      { type: "heading", text: "The Yield Divergence" },
      { type: "paragraph", text: "Commercial real estate in India's top fly-over cities is currently offering yields between 7% and 9%, far outpacing the 2.5% to 3.5% typically seen in residential rentals. However, commercial assets require a much higher capital outlay and carry higher vacancy risks." },
      { type: "data", items: [
        { label: "Avg Commercial Yield", value: "8.2%" },
        { label: "Avg Residential Yield", value: "3.1%" }
      ]},
      { type: "heading", text: "Taxation and Liquidity" },
      { type: "paragraph", text: "While commercial property offers better cash flow, residential real estate benefits from better taxation under section 54. Investors must balance their portfolio based on their risk appetite and need for monthly liquidity versus long-term capital preservation." }
    ]
  },
  {
    id: "6",
    title: "RERA 2.0: What Investors Need to Know",
    excerpt: "How the evolving regulatory framework is protecting retail investors and ensuring developer accountability like never before.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop",
    category: "Regulations",
    author: "Sanjay Dixit",
    date: "Apr 10, 2024",
    readTime: "6 min read",
    content: [
      { type: "heading", text: "Structural Transparency" },
      { type: "paragraph", text: "The introduction of RERA was the first step; now, RERA 2.0 (the evolving state guidelines) is ensuring that even project delays are met with strict financial penalties that favor the buyer. The 'escrow' mandate ensures that 70% of buyer funds are used strictly for that specific project's construction." },
      { type: "heading", text: "Due Diligence Checklist" },
      { type: "paragraph", text: "Before making any payment, always verify the DDA/RERA registration number on the state portal. Check for any ongoing litigation and the developer's historical agility in meeting phase-wise completion milestones. Accuracy in data is your best hedge against risk." }
    ]
  },
  {
    id: "7",
    title: "Smart Home Technology: The New Standard for Premium Living",
    excerpt: "How AI and IoT are redefining luxury apartments and increasing rental yields in Bengaluru and Hyderabad.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop",
    category: "Innovation",
    author: "Rohan Verma",
    date: "Apr 05, 2024",
    readTime: "5 min read",
    content: [
      { type: "heading", text: "The Connected Ecosystem" },
      { type: "paragraph", text: "Luxury is no longer just about marble floors and gold-plated fixtures; it's about seamless intelligence. From voice-controlled climate systems to AI-powered security that recognizes family members, 'Smart' is the new mandatory checklist for the modern home buyer." },
      { type: "heading", text: "Asset Value Multiplier" },
      { type: "paragraph", text: "Properties equipped with 'Level 3' smart automation (full integration) are commanding a 10-15% premium in the resale market. Furthermore, they are more attractive to high-flying corporate tenants, ensuring higher occupancy rates and lower turnover." }
    ]
  },
  {
    id: "8",
    title: "Eco-Friendly Living: The Green Revolution in Indian Real Estate",
    excerpt: "Sustainable architecture is no longer a luxury choice but a fundamental necessity for modern home buyers.",
    image: "https://images.unsplash.com/photo-1449156001437-3a16b1ad922b?q=80&w=1000&auto=format&fit=crop",
    category: "Sustainability",
    author: "Meera Reddy",
    date: "Mar 30, 2024",
    readTime: "7 min read",
    content: [
      { type: "heading", text: "The ESG Mandate" },
      { type: "paragraph", text: "Environmental, Social, and Governance (ESG) criteria are now driving institutional investment into Indian real estate. Developers are adopting LEED Platinum and GRIHA ratings not just for prestige, but to access lower-cost 'Green Financing' from global banks." },
      { type: "heading", text: "Consumer Sentiment Shift" },
      { type: "paragraph", text: "Post-pandemic, the demand for open spaces, air purification systems, and zero-waste management has skyrocketed. Project density is being sacrificed for quality of life, a trend that is particularly evident in the new sectors of Greater Noida West and Gurgaon." }
    ]
  },
  {
    id: "9",
    title: "Vacation Homes in Goa: Higher Returns than Urban Rentals?",
    excerpt: "Comparing the yield between commercial urban rentals and the booming Airbnb market in coastal India.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    category: "Holiday Homes",
    author: "Kevin Peterson",
    date: "Mar 25, 2024",
    readTime: "6 min read",
    content: [
      { type: "heading", text: "The Second Home Boom" },
      { type: "paragraph", text: "Goa has shifted from a seasonal tourist spot to a year-round micro-market for luxury rentals. With the new Mopa Airport operational, accessibility has triggered a wave of 'Lifestyle Investors' who use their properties for 30 days and put them on the short-term rental market for the rest of the year." },
      { type: "data", items: [
        { label: "Short Term Yield", value: "12-14%" },
        { label: "Urban Long Term Yield", value: "3-4%" }
      ]},
      { type: "heading", text: "Management Mastery" },
      { type: "paragraph", text: "The key to success in Goa is the property management partner. High-yield assets are those that offer resort-level hospitality services, maintaining a 4.5+ star rating on platforms like Airbnb and StayVista." }
    ]
  },
  {
    id: "10",
    title: "Understanding High-Velocity Real Estate Corridors",
    excerpt: "Why some areas appreciate 3x faster than the city average and how to identify them before they go mainstream.",
    image: "https://images.unsplash.com/photo-1460317442991-0ec239f636a7?q=80&w=1000&auto=format&fit=crop",
    category: "Market Trends",
    author: "Vishal Gupta",
    date: "Mar 20, 2024",
    readTime: "8 min read",
    content: [
      { type: "heading", text: "The Velocity Principle" },
      { type: "paragraph", text: "Price is a lagging indicator; transaction volume (velocity) is the leading one. By tracking the number of registrations and the speed of inventory absorption, we can predict price jumps 6-12 months before they happen. This is the core of our 'Alpha Detection' strategy." },
      { type: "heading", text: "2024 Watchlist" },
      { type: "paragraph", text: "Currently, our eyes are on the Dwarka Expressway and the Peripheral Expressways. These corridors are seeing institutional interest from private equity firms, a classic signal that the next wave of capital appreciation is imminent." }
    ]
  },
  {
    id: "11",
    title: "What is a Studio Apartment? A Complete Guide to Layout & Investment",
    excerpt: "Exploring the meaning, structure, advantages, and disadvantages of studio apartments—the perfect entry-point for modern homebuyers and investors.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
    category: "Home Buying",
    author: "Anjali Mehta",
    date: "May 05, 2024",
    readTime: "8 min read",
    content: [
      { type: "heading", text: "Defining the Studio Apartment" },
      { type: "paragraph", text: "A studio apartment is a self-contained living space that integrates the bedroom, living room, and kitchenette into a single open area. Unlike standard apartments, there are no internal walls separating these zones, except for the bathroom. This architectural style maximizes space and is increasingly popular among young professionals and minimalist dwellers." },
      { type: "data", items: [
        { label: "Typical Size", value: "250 - 600 Sq.Ft" },
        { label: "Design Style", value: "Open Floor Plan" }
      ]},
      { type: "heading", text: "Structure and Layout" },
      { type: "paragraph", text: "The hallmark of a studio is its 'efficiency.' The layout is designed to eliminate wasted area like hallways. Modern studios often utilize smart furniture—such as Murphy beds or foldable dining tables—to transform the space from a daytime workspace into a nighttime sanctuary within minutes." },
      { type: "heading", text: "Studio vs. 1BHK: The Key Differences" },
      { type: "paragraph", text: "While people often confuse them, the primary difference lies in the 'separate bedroom.' A 1BHK (Bedroom, Hall, Kitchen) has a clear wall and door dividing the sleeping area from the living area. In a studio, these are visually separated using partitions, rugs, or furniture placement, but they remain part of one continuous volume." },
      { type: "heading", text: "Why Investors Love Studios" },
      { type: "paragraph", text: "From an investment perspective, studio apartments offer the highest rental yield per square foot. Their lower ticket price makes them accessible for first-time investors, while their popularity in urban tech hubs ensures high occupancy rates and steady cash flow." }
    ]
  },
  {
    id: "12",
    title: "What are Studio Apartments? Meaning, Structure & Investment Benefits",
    excerpt: "With rising urbanization and changing lifestyles in 2026, compact, smart living spaces are becoming increasingly popular across India. A studio apartment is one of the most preferred choices among young professionals, students, and investors due to its affordability and functionality.",
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1000&auto=format&fit=crop",
    category: "Home Buying",
    author: "Investors Clinic",
    date: "May 12, 2026",
    readTime: "8 min read",
    content: [
      { type: "paragraph", text: "With rising urbanization and changing lifestyles in 2026, compact, smart living spaces are becoming increasingly popular across India. A studio apartment is one of the most preferred choices among young professionals, students, and investors due to its affordability and functionality. Cities like Noida and Greater Noida are witnessing a surge in demand, especially for studio apartments in Noida and Noida Extension, as they offer modern living at competitive prices in fast-growing real estate markets." },
      { type: "h2", text: "What are Studio Apartments? (Meaning)" },
      { type: "paragraph", text: "A studio apartment is a compact, smartly designed home where the living room, bedroom, and kitchen are combined into one open space, with only the bathroom kept separate. If you’re wondering what studio flats are, they are essentially the same, compact homes designed for easy living and efficient use of space. These apartments minimize space wastage, making them both practical and budget-friendly." },
      { type: "paragraph", text: "They are best suited for single individuals, students, or working professionals who prefer a simple, low-maintenance lifestyle. With modern layouts and smart furniture solutions, studio apartments can make even a small space feel comfortable and functional, while keeping overall costs lower compared to larger flats." },
      { type: "image", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop", alt: "Modern Studio Apartment Interior Design" },
      { type: "h2", text: "Types of Studio Apartments" },
      { type: "paragraph", text: "Studio apartments come in different types to suit various lifestyles, budgets, and investment needs. Even though all studio apartments have an open layout, their size, design, and privacy level can be different. In growing markets like Noida and Greater Noida, especially in the property in Greater Noida segment, developers offer many options from budget-friendly units to premium ones, making them a good choice for both homebuyers and investors." },
      { type: "h3", text: "Standard Studio Apartment" },
      { type: "paragraph", text: "A simple open-plan unit with living, sleeping, and kitchen space combined, plus a separate bathroom." },
      { type: "h3", text: "Alcove Studio Apartment" },
      { type: "paragraph", text: "Designed with a small corner or niche for the bed, giving slightly more privacy within the same space." },
      { type: "h3", text: "Convertible Studio Apartment" },
      { type: "paragraph", text: "Comes with flexible layouts like sliding doors or partitions to create separate areas when needed." },
      { type: "h3", text: "Micro Studio Apartment" },
      { type: "paragraph", text: "Very compact units designed for affordability, ideal for students and single professionals." },
      { type: "h3", text: "Luxury Studio Apartment" },
      { type: "paragraph", text: "Premium studios in modern projects with better interiors, amenities, and smart home features." },
      { type: "h2", text: "Structure & Layout of Studio Apartments" },
      { type: "paragraph", text: "The main highlight of a studio apartment is its open floor plan, where the living room, bedroom, and kitchen are combined into one continuous space without internal walls, except for a separate bathroom. This design is created to maximize space, improve functionality, and make the home feel more open and usable despite its compact size. The layout is carefully planned so that each area flows naturally into the other, allowing residents to use the same space for multiple purposes, like relaxing, sleeping, and cooking." },
      { type: "paragraph", text: "In a typical studio apartment, the living, sleeping, and kitchen areas are integrated, often with a kitchenette along one side, while the bathroom remains enclosed for privacy. To make the most of limited space, smart furniture and storage solutions like foldable beds, sofa-cum-beds, wall-mounted units, and built-in wardrobes are commonly used. Another important aspect is natural lighting and ventilation, as large windows, balconies, or open layouts help make the apartment feel bigger, brighter, and more comfortable." },
      { type: "image", url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1000&auto=format&fit=crop", alt: "Efficient Layout of a Studio Flat" },
      { type: "h2", text: "Sizes of Studio Apartments" },
      { type: "paragraph", text: "In 2026, the size of a studio apartment typically ranges between 250 sq. ft. to 650 sq. ft., depending on the city, builder, and type of project. With rising demand for compact living, developers are now offering more optimized layouts that make even smaller units feel spacious and functional. In growing markets like Studio apartments in Greater Noida, buyers are often getting comparatively larger units at more affordable prices than major metro cities, making them attractive for both end-users and investors." },
      { type: "h4", text: "Micro studio apartments" },
      { type: "paragraph", text: "250–350 sq. ft., ideal for students and single professionals looking for budget-friendly options" },
      { type: "h4", text: "Standard studio apartments" },
      { type: "paragraph", text: "350–500 sq. ft., offering a balanced mix of comfort and usability" },
      { type: "h4", text: "Premium studio apartments" },
      { type: "paragraph", text: "500–650+ sq. ft., available in modern and luxury projects with better layouts and amenities" },
      { type: "paragraph", text: "With better space planning, smart interiors, and efficient layouts, studio apartments in 2026 are designed to maximize usability, ensuring that even compact sizes offer comfortable and practical living." },
      { type: "h2", text: "Key Features of Studio Apartments" },
      { type: "paragraph", text: "Modern studio apartments are designed for smart and comfortable living in a compact space, with efficient layouts, modern design, and features that perfectly suit urban lifestyles." },
      { type: "paragraph", text: "• Compact and efficient design → Every corner is planned to reduce space wastage and improve usability" },
      { type: "paragraph", text: "• Low maintenance and utility costs → Smaller size means lower electricity, water, and upkeep expenses" },
      { type: "paragraph", text: "• Modern interiors and smart storage → Built-in wardrobes, modular kitchens, and multifunctional furniture help keep the space organized" },
      { type: "paragraph", text: "• Ideal for singles and couples → Perfect for working professionals, students, or small households" },
      { type: "paragraph", text: "• Located in high-demand areas → Mostly developed near IT hubs, metro connectivity, and commercial zones" },
      { type: "h2", text: "Advantages of Studio Apartments" },
      { type: "paragraph", text: "Studio apartments offer several benefits for both living and investment, especially in today’s urban lifestyle, where smart and compact homes are in demand. They are a great entry point into real estate, particularly in markets like Noida and Greater Noida, where affordability and rental demand are strong." },
      { type: "paragraph", text: "• Affordable entry point → Lower price compared to bigger flats, making it easier to buy" },
      { type: "paragraph", text: "• Easy to maintain → Less space means lower cleaning, maintenance, and utility costs" },
      { type: "paragraph", text: "• High rental demand → Popular among students and working professionals in city areas" },
      { type: "paragraph", text: "• Quick resale → Budget-friendly pricing makes them easier to sell" },
      { type: "paragraph", text: "• Ideal for beginners → Perfect for first-time buyers and new investors" },
      { type: "h2", text: "Studio Apartment vs Normal Apartment" },
      { type: "paragraph", text: "A studio apartment has an open layout where the living, sleeping, and kitchen areas are in one space, while a normal apartment has separate rooms for each. Studio apartments are usually more affordable, easier to maintain, and best suited for singles or couples. In contrast, normal apartments cost more, need more maintenance, and are more suitable for families who need more space and privacy." },
      { type: "h2", text: "Investment Benefits of Studio Apartments" },
      { type: "paragraph", text: "A studio apartment is not just a living option but also a strong investment asset in 2026. With increasing migration and demand for rental housing, especially in NCR, these units offer consistent returns." },
      { type: "paragraph", text: "• High rental yield from working professionals" },
      { type: "paragraph", text: "• Lower investment risk compared to larger flats" },
      { type: "paragraph", text: "• Growing demand in areas like Noida Extension" },
      { type: "paragraph", text: "• Ideal for short-term rentals and co-living models" },
      { type: "paragraph", text: "Markets like Real estate in Greater Noida are booming due to infrastructure growth, metro expansion, and proximity to IT hubs. Many investors are choosing to invest in Greater Noida because of affordable pricing and strong future appreciation." },
      { type: "h2", text: "Who Should Buy Studio Apartments?" },
      { type: "paragraph", text: "Studio apartments are best suited for:" },
      { type: "paragraph", text: "• Working professionals" },
      { type: "paragraph", text: "• Students and bachelors" },
      { type: "paragraph", text: "• First-time homebuyers" },
      { type: "paragraph", text: "• Investors looking for rental income" },
      { type: "paragraph", text: "Buyers often consult Property Consultants in Greater Noida to find the best deals and high-return projects." },
      { type: "h2", text: "Things to Consider Before Buying" },
      { type: "paragraph", text: "Before purchasing a studio apartment, consider these important factors:" },
      { type: "paragraph", text: "• Location and connectivity" },
      { type: "paragraph", text: "• Builder reputation and project quality" },
      { type: "paragraph", text: "• Legal approvals (RERA, documents)" },
      { type: "paragraph", text: "• Ventilation and space efficiency" },
      { type: "paragraph", text: "• Rental demand and resale potential" },
      { type: "h2", text: "Conclusion" },
      { type: "paragraph", text: "The demand for studio apartments is growing quickly because they are affordable, easy to maintain, and practical for modern living. These compact homes are becoming popular in areas like Noida and Greater Noida, where buyers can find good options at reasonable prices. With the right location and proper planning, a studio apartment can offer both comfortable living and steady returns over time." },
      { type: "h2", text: "FAQs" },
      { type: "h3", text: "What is the difference between a studio apartment and a 1BHK?" },
      { type: "paragraph", text: "A studio apartment has a single open space without separate rooms, while a 1BHK has a separate bedroom, living room, and kitchen. Studio apartments are more compact and affordable, whereas 1BHK units offer more space and privacy." },
      { type: "h3", text: "Are studio apartments easy to maintain?" },
      { type: "paragraph", text: "Yes, studio apartments are very easy to maintain because of their smaller size. Cleaning takes less time, and utility costs like electricity and water are usually lower compared to bigger flats." },
      { type: "h3", text: "What should I check before buying a studio apartment?" },
      { type: "paragraph", text: "Before buying, you should check the location, connectivity, builder reputation, legal approvals, ventilation, and future resale potential. These factors help ensure a safe and profitable investment." },
      { type: "h3", text: "Why are studio apartments becoming popular?" },
      { type: "paragraph", text: "Studio apartments are becoming popular due to rising property prices, urban migration, and the need for affordable and low-maintenance homes. They offer a practical solution for modern city living." }
    ]
  }
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
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
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
    id: "puri-the-aman-vilas",
    tag: "Signature Life", 
    tagColor: "bg-secondary",
    title: "Puri The Aman Vilas", 
    loc: "Sector 82, Faridabad", 
    city: "Faridabad",
    price: "₹1.5 Cr Onwards", 
    bhk: "3 & 4 BHK",
    sqft: "1800 sq.ft",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    description: "Aman Vilas by Puri Constructions is a sprawling township in Faridabad, offering luxury floors and plots with a focus on community living and greenery."
  },
  { 
    id: "ace-terra",
    tag: "Green Oasis", 
    tagColor: "bg-emerald-600",
    title: "ACE Terra", 
    loc: "Sector 22D, Greater Noida West", 
    city: "Greater Noida West",
    price: "₹1.1 Cr Onwards", 
    bhk: "2 & 3 BHK",
    sqft: "1600 sq.ft",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    description: "ACE Terra brings sustainable luxury to Greater Noida West, featuring forest-themed landscapes and climate-responsive architecture."
  },
  { 
    id: "mangalam-grand-residency",
    tag: "Royal Heritage", 
    tagColor: "bg-amber-600",
    title: "Mangalam Grand Residency", 
    loc: "Mansarovar, Jaipur", 
    city: "Jaipur",
    price: "₹0.8 Cr Onwards", 
    bhk: "3 BHK",
    sqft: "1550 sq.ft",
    img: "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=800&auto=format&fit=crop",
    description: "Experience the royal charm of Jaipur at Mangalam Grand Residency, where traditional aesthetics meet modern luxury and convenience."
  },
  { 
    id: "lodha-belmondo",
    tag: "Riverside Resort", 
    tagColor: "bg-blue-600",
    title: "Lodha Belmondo", 
    loc: "MCA Stadium, Pune", 
    city: "Pune",
    price: "₹1.4 Cr Onwards", 
    bhk: "2 & 3 BHK",
    sqft: "1400 sq.ft",
    img: "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=800&auto=format&fit=crop",
    description: "A luxury resort living on the banks of a river. Lodha Belmondo offers a 45-acre golf course and world-class amenities in Pune."
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
