import { Service, TeamMember, Testimonial, BlogPost } from './types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to boost your online presence and drive growth.',
    icon: 'trending-up'
  },
  {
    id: '2',
    title: 'Website Building',
    description: 'Custom, responsive websites that reflect your brand and engage your audience.',
    icon: 'code'
  },
  {
    id: '3',
    title: 'App Development',
    description: 'Innovative mobile and web applications built with cutting-edge technology.',
    icon: 'smartphone'
  },
  {
    id: '4',
    title: 'Social Media Handling',
    description: 'Comprehensive social media management to build and engage your community.',
    icon: 'share-2'
  }
];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Siddharth Perkar',
    role: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://www.linkedin.com/in/siddharth-perkar/',
    email: 'perkarsiddharth@gmail.com'
  },
  {
    id: '2',
    name: 'Abhishek Pawar',
    role: 'CTO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://www.linkedin.com/in/pawar-abhishek17/',
    email: 'theartificialthinker@gmail.com'
  },
  {
    id: '3',
    name: 'Darshan Mali',
    role: 'CMO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://www.linkedin.com/in/darshan-mali-6a740728b/',
    email: 'darsham7@gmail.com'
  }
  
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    company: 'TechStart India',
    content: "The Webloom transformed our digital presence completely. Their team's dedication and expertise helped us achieve remarkable growth.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Meera Reddy',
    company: 'Innovate Solutions',
    content: "Working with The Webloom was a game-changer for our business. Their digital marketing strategies doubled our online engagement.",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Digital Marketing in 2025',
    date: 'March 15, 2025',
    author: 'Priya Sharma',
    content: "As we navigate through 2025, the digital marketing landscape continues to evolve at an unprecedented pace. AI-driven personalization, immersive experiences, and sustainable digital practices are reshaping how brands connect with their audiences. In this post, we explore the key trends that are defining the future of digital marketing and how businesses can stay ahead of the curve.",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Building Responsive Websites: Best Practices',
    date: 'March 10, 2025',
    author: 'Rahul Patel',
    content: "In today's multi-device world, creating responsive websites isn't just an option – it's a necessity. From mobile-first design approaches to performance optimization, we'll dive into the essential practices that ensure your website delivers an exceptional user experience across all devices. Learn how to implement effective responsive design strategies that drive engagement and conversions.",
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'The Power of Social Media Strategy',
    date: 'March 5, 2025',
    author: 'Anita Desai',
    content: "A well-crafted social media strategy can transform your brand's digital presence. This comprehensive guide explores how to create engaging content, build meaningful connections with your audience, and measure your social media success. Discover the latest tools and techniques that can help you maximize your social media impact and achieve your business goals.",
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  }
];
