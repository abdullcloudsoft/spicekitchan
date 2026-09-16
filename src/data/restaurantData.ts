import { RestaurantInfo, MenuItem, WhyVisitItem } from '../types';

import heroImg from '../assets/images/hero_pakistani_feast_1789538336185.jpg';
import aboutImg from '../assets/images/about_pakistani_dining_1789538356238.jpg';
import biryaniImg from '../assets/images/dish_mutton_biryani_1789538371688.jpg';
import seekhKababImg from '../assets/images/dish_seekh_kabab_1789538385582.jpg';
import chickenTikkaImg from '../assets/images/dish_chicken_tikka_1789538401272.jpg';
import karahiImg from '../assets/images/dish_special_karahi_1789538415509.jpg';
import daalImg from '../assets/images/dish_daal_tarka_1789538430516.jpg';
import naanImg from '../assets/images/dish_roghani_naan_1789538447588.jpg';
import dessertImg from '../assets/images/dish_gulab_jamun_1789538465570.jpg';

export const RESTAURANT_IMAGES = {
  hero: heroImg,
  about: aboutImg,
  biryani: biryaniImg,
  seekhKabab: seekhKababImg,
  chickenTikka: chickenTikkaImg,
  karahi: karahiImg,
  daal: daalImg,
  naan: naanImg,
  dessert: dessertImg,
};

export const RESTAURANT_DATA: RestaurantInfo = {
  name: 'Spice Kitchen G-6',
  location: 'Khayaban-e-Suhrawardy Road',
  cityCountry: 'Islamabad, Pakistan',
  phones: ['+92 301 9586716', '0302 2644443'],
  primaryPhone: '+92 301 9586716',
  email: 'tsarmad3@gmail.com',
  facebookUrl: 'https://www.facebook.com/Spicekitchen111/followers/',
  facebookFollowers: '1.1K',
  tagline: 'Authentic Pakistani Flavours in Islamabad',
};

/**
 * 7 Featured Specialities (Sample dishes formatted for presentation per specification).
 * Note: Prices are intentionally omitted until officially verified by restaurant management.
 */
export const FEATURED_MENU: MenuItem[] = [
  {
    id: 'dish-1',
    name: 'Special Chicken Karahi',
    category: 'Speciality',
    description: 'Slow-simmered in a traditional wok with fresh tomatoes, ginger juliennes, and ground fragrant spices.',
    image: RESTAURANT_IMAGES.karahi,
    isSampleDish: true,
    highlight: 'House Favourite',
  },
  {
    id: 'dish-2',
    name: 'Dum Mutton Biryani',
    category: 'Rice',
    description: 'Aromatic aged basmati rice steam-cooked in layers with tender meat, golden saffron, and whole spices.',
    image: RESTAURANT_IMAGES.biryani,
    isSampleDish: true,
    highlight: 'Traditional Spice',
  },
  {
    id: 'dish-3',
    name: 'Charcoal Seekh Kabab',
    category: 'Grill',
    description: 'Skewered minced meat seasoned with garden herbs, coriander seeds, and grilled over red-hot charcoal embers.',
    image: RESTAURANT_IMAGES.seekhKabab,
    isSampleDish: true,
    highlight: 'Charcoal Grilled',
  },
  {
    id: 'dish-4',
    name: 'Chicken Tikka Boti',
    category: 'Grill',
    description: 'Succulent boneless chicken chunks marinated in spiced yogurt and grilled to a tender, smoky finish.',
    image: RESTAURANT_IMAGES.chickenTikka,
    isSampleDish: true,
  },
  {
    id: 'dish-5',
    name: 'Desi Daal Tarka',
    category: 'Vegetarian',
    description: 'Yellow lentils gently simmered and finished with a sizzling tempered tarka of cumin, garlic, and desi ghee.',
    image: RESTAURANT_IMAGES.daal,
    isSampleDish: true,
  },
  {
    id: 'dish-6',
    name: 'Tandoori Roghani Naan',
    category: 'Tandoor',
    description: 'Clay-oven baked fluffy flatbread with butter glaze, traditional pressed pattern, and toasted sesame seeds.',
    image: RESTAURANT_IMAGES.naan,
    isSampleDish: true,
  },
  {
    id: 'dish-7',
    name: 'Shahi Gulab Jamun',
    category: 'Dessert',
    description: 'Warm, soft milk-solid dumplings gently soaked in green cardamom and rose-infused sweet syrup.',
    image: RESTAURANT_IMAGES.dessert,
    isSampleDish: true,
    highlight: 'Traditional Sweet',
  },
];

/**
 * 4 Concise Why Visit points based only on verified business context:
 */
export const WHY_VISIT_POINTS: WhyVisitItem[] = [
  {
    id: 'why-1',
    title: 'Authentic Pakistani Flavours',
    description: 'Handcrafted recipes honoring traditional culinary techniques, slow cooking, and aromatic local spices.',
    iconName: 'Flame',
  },
  {
    id: 'why-2',
    title: 'Fresh & Delicious Food',
    description: 'Every dish prepared fresh to order using carefully selected ingredients, tender cuts, and aromatic seasonings.',
    iconName: 'Sparkles',
  },
  {
    id: 'why-3',
    title: 'Welcoming Dining Experience',
    description: 'Warm hospitality and a family-friendly environment designed to make every meal memorable and relaxed.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'why-4',
    title: 'Convenient Islamabad Location',
    description: 'Centrally situated on Khayaban-e-Suhrawardy Road in G-6, easily accessible from all sectors of Islamabad.',
    iconName: 'MapPin',
  },
];

/**
 * Chatbot Knowledge Base (Strictly verified info only)
 */
export interface KnowledgeQnA {
  keywords: string[];
  response: string;
  action?: {
    label: string;
    url: string;
  };
}

export const VERIFIED_BOT_KNOWLEDGE: KnowledgeQnA[] = [
  {
    keywords: ['location', 'address', 'where', 'place', 'map', 'directions', 'find'],
    response: 'Spice Kitchen G-6 is located on Khayaban-e-Suhrawardy Road, Islamabad, Pakistan.',
    action: {
      label: 'Open Google Maps',
      url: 'https://www.google.com/maps/search/?api=1&query=Khayaban-e-Suhrawardy+Road+Islamabad+Pakistan',
    },
  },
  {
    keywords: ['phone', 'call', 'number', 'mobile', 'telephone', 'contact'],
    response: 'You can contact Spice Kitchen G-6 directly at +92 301 9586716 or 0302 2644443.',
    action: {
      label: 'Call +92 301 9586716',
      url: 'tel:+923019586716',
    },
  },
  {
    keywords: ['email', 'mail', 'write'],
    response: 'Our official email address is tsarmad3@gmail.com.',
    action: {
      label: 'Send Email',
      url: 'mailto:tsarmad3@gmail.com',
    },
  },
  {
    keywords: ['facebook', 'social', 'page', 'followers'],
    response: 'Follow Spice Kitchen G-6 on Facebook (over 1.1K followers) for community updates.',
    action: {
      label: 'Visit Facebook Page',
      url: 'https://www.facebook.com/Spicekitchen111/followers/',
    },
  },
  {
    keywords: ['menu', 'food', 'dishes', 'karahi', 'biryani', 'kabab', 'speciality'],
    response: 'We showcase a curated selection of authentic Pakistani specialities right here on our website. For daily specials and complete menu details, please give us a direct call!',
    action: {
      label: 'View Featured Menu',
      url: '#menu',
    },
  },
];
