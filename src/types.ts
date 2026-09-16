export interface RestaurantInfo {
  name: string;
  location: string;
  cityCountry: string;
  phones: string[];
  primaryPhone: string;
  email: string;
  facebookUrl: string;
  facebookFollowers: string;
  tagline: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Speciality' | 'Grill' | 'Rice' | 'Vegetarian' | 'Tandoor' | 'Dessert';
  description: string;
  image: string;
  price?: string; // Only if officially verified. Unverified prices are omitted per strict instructions.
  isSampleDish: boolean;
  highlight?: string;
}

export interface WhyVisitItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Flame' | 'Sparkles' | 'HeartHandshake' | 'MapPin';
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actionButton?: {
    label: string;
    url: string;
  };
}
