export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  email: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  content: string;
  image: string;
}