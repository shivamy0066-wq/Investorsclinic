export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: {
    type: 'heading' | 'h2' | 'h3' | 'h4' | 'paragraph' | 'data' | 'image' | 'faq';
    text?: string;
    items?: { label: string; value: string }[];
    faqItems?: { question: string; answer: string }[];
    url?: string;
    alt?: string;
  }[];
}
export interface Property {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  loc: string;
  city: string;
  price: string;
  bhk: string;
  sqft: string;
  img: string;
  description: string;
  // Detail fields
  rera?: string;
  possession?: string;
  amenities?: { label: string; icon: any }[];
  highlights?: string[];
  units?: { type: string; area: string; price: string; rooms: number; baths: number; balconly: string }[];
}
