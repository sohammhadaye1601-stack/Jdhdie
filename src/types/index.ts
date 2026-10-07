export interface GymImageSlot {
  id: string;
  section: 'hero' | 'brandIntro' | 'motivation' | 'gallery' | 'community' | 'facilities' | 'instagram';
  title: string;
  url: string;
  fallbackUrl?: string;
  aspectRatio?: string;
  description?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'strength' | 'equipment' | 'community' | 'lifestyle';
  url: string;
  caption: string;
  featured?: boolean;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface BatchSchedule {
  name: string;
  timeSlot: string;
  type: string;
  recommendedFor: string;
}

export interface InstagramPost {
  id: string;
  url: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  period: string;
  recommended?: boolean;
  highlight: string;
  features: string[];
}

export interface OwnerMediaConfig {
  heroImage: string;
  brandIntroImage: string;
  motivationImage: string;
  galleryImages: { id: string; url: string; title: string; category: string }[];
  communityImages: { id: string; url: string; title: string }[];
  instagramImages: { id: string; url: string; caption: string; likes: number }[];
}
