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
