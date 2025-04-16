import { Ionicons } from '@expo/vector-icons';

export type ScreenProps = {
  navigation: any;
  route: any;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
};

export type Testimonial = {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
  backgroundColor: string;
};

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  backgroundColor: string;
};

export type Course = {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  image: any;
  tags?: string[];
};

export type Category = {
  id: number;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
}; 