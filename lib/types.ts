import { ObjectId } from "mongodb";

export interface GalleryImage {
  url: string;
  alt?: string;
}

export interface FloorPlan {
  title: string;
  size: string;
  price: string;
  image?: string;
}

export interface Project {
  _id: ObjectId | string;
  name: string;
  slug: string;
  status: "new-launch" | "under-construction" | "ready-to-move" | string;
  type: "residential" | "commercial" | "sco" | "plots" | string;
  developer: string;
  location: string;
  sector?: string;
  city?: string;
  state?: string;
  pincode?: string;
  price: string;
  priceValue?: number;
  pricePerSqFt?: string;
  size?: string;
  sizeRange?: string;
  landSize?: string;
  configurations?: string[];
  rera?: string;
  possession?: string;
  description?: string;
  shortDescription?: string;
  highlights?: string[];
  amenities?: string[];
  floorPlan?: FloorPlan[];
  // gallery can be plain URL strings OR objects with url+alt (mixed in MongoDB)
  gallery?: (string | GalleryImage)[];
  mainImage?: string;
  logo?: string;
  brochure?: string;
  masterPlan?: string;
  locationMap?: string;
  connectivityMap?: string;
  connectivityMapAlt?: string;
  videoUrl?: string;
  // Hero section (stored as nested object in MongoDB)
  hero?: {
    image?: string;
    heading?: string;
    subText?: string;
    possession?: string;
    rera?: string;
    imageAlt?: string;
  };
  // About section (stored as nested object in MongoDB)
  about?: {
    title?: string;
    content?: string;
    image?: string;
  };
  // Project stats
  totalTowers?: number;
  totalUnits?: number;
  occupancy?: number;
  badge?: string;
  ogImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  isPopular?: boolean;
  // Normalized boolean — use `featured` everywhere. `isFeatured` kept for
  // backwards-compat with any documents that still have the old field name.
  featured?: boolean;
  isFeatured?: boolean;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Lead {
  _id?: ObjectId | string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  projectId?: string | null;
  projectName?: string | null;
  source: string;
  createdAt: Date;
  status: "new" | "contacted" | "converted" | "closed";
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message?: string;
  projectId?: string;
  projectName?: string;
  source?: string;
}

export interface SearchFilters {
  status?: string;
  type?: string;
  developer?: string;
  budget?: string;
  configuration?: string;
  search?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
