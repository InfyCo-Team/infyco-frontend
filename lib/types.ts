// EventType Definition
export type EventType = "all" | "internship" | "course" | "guest-lecture" | "hackathon";

// Event Interface
export interface Event {
  id: number;
  type: Exclude<EventType, "all">;
  title: string;
  organizer: string;
  date: string;
  location: string;
  description: string;
  link: string;
  participants: number | null;
  image: string;
  deadline?: string;
  stipend?: string;
  duration?: string;
  price?: string;
  speaker?: string;
  speakerRole?: string;
  prizes?: string[];
  teamSize?: string;
}

// Mentor Interface
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

// PeerStatus Type Definition
export type PeerStatus = "online" | "offline" | "busy";

// ChatMessage Interface
export interface ChatMessage {
  id: string;
  senderId: number;
  content: string;
  timestamp: Date;
  type: "text" | "system";
}

// StudyGroup Interface
export interface StudyGroup {
  id: string;
  name: string;
  description: string;
  topic: string;
  members: number[];
  createdBy: number;
  createdAt: Date;
  messages: ChatMessage[];
  maxMembers: number;
  isPublic: boolean;
}
