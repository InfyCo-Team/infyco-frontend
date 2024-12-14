// types.ts

// Mentor Type Definition
export interface Mentor {
  id: number;
  name: string;
  image: string;
  profession: string;
  company: string;
  rating: number;
  category: string;
  subcategory: string;
  skills: string[];
  description: string;
  availability: string[];
  sessionRate: string;
  languages: string[];
  experience: string;
  linkedin: string;
  website: string;
  email: string;
  specializations: string[];
  achievements: string[];
  location: string;
  careerHistory: CareerHistory[];
  reviews: Review[];
  resources: Resource[];
  minutesMentored: number;
  totalMentees: number;
}

// Career History Type Definition
export interface CareerHistory {
  role: string;
  company: string;
  duration: string;
  description: string;
  current: boolean;
}

// Review Type Definition
export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  authorImage: string;
}

// Resource Type Definition
export interface Resource {
  id: string;
  title: string;
  type: "video" | "article";
  url: string;
  description: string;
}
