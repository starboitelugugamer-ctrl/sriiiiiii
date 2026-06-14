export interface RoomOption {
  id: string;
  sharingType: 'single' | 'double' | 'quad';
  name: string;
  price: number;
  description: string;
  privacy: string;
  storage: string;
  companionship: string;
  popularity?: boolean;
  features: string[];
  image: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BookingInquiry {
  name: string;
  phone: string;
  sharingType: 'single' | 'double' | 'quad';
  checkInDate: string;
  customNotes?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}
