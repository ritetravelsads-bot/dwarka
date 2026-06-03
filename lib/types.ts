import { ObjectId } from "mongodb";

export interface Project {
  _id: ObjectId | string;
  name: string;
  slug: string;
  status: "new-launch" | "under-construction" | "ready-to-move";
  type: "residential" | "commercial" | "sco" | "plots";
  developer: string;
  location: string;
  sector: string;
  price: string;
  priceValue: number;
  pricePerSqFt?: string;
  size?: string;
  sizeRange?: string;
  landSize?: string;
  configurations: string[];
  rera?: string;
  possession?: string;
  description?: string;
  shortDescription?: string;
  highlights?: string[];
  amenities?: string[];
  floorPlan?: FloorPlan[];
  gallery?: string[];
  mainImage?: string;
  logo?: string;
  brochure?: string;
  masterPlan?: string;
  locationMap?: string;
  videoUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  isPopular?: boolean;
  isFeatured?: boolean;
  isActive: boolean;
  latitude?: string;
  longitude?: string;
  floorSize?: number;
  postalCode?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FloorPlan {
  title: string;
  size: string;
  price: string;
  image?: string;
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
