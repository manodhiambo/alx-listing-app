// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Application Constants
export const APP_NAME = 'ALX Listing App';
export const APP_DESCRIPTION = 'A modern Airbnb clone built with Next.js and TypeScript';

// UI Constants
export const ITEMS_PER_PAGE = 12;
export const MAX_IMAGES_PER_PROPERTY = 10;

// Route Constants
export const ROUTES = {
  HOME: '/',
  LISTINGS: '/listings',
  PROPERTY: '/property',
  PROFILE: '/profile',
  BOOKING: '/booking',
} as const;

// Asset Paths
export const ASSETS = {
  IMAGES: '/assets/images/',
  ICONS: '/assets/icons/',
  PLACEHOLDER_IMAGE: '/assets/images/placeholder.jpg',
} as const;

// Default Values
export const DEFAULT_PROPERTY_IMAGE = '/assets/images/default-property.jpg';
export const DEFAULT_AVATAR = '/assets/images/default-avatar.png';

// Validation Constants
export const VALIDATION_RULES = {
  MIN_TITLE_LENGTH: 3,
  MAX_TITLE_LENGTH: 100,
  MIN_DESCRIPTION_LENGTH: 10,
  MAX_DESCRIPTION_LENGTH: 1000,
  MIN_PRICE: 1,
  MAX_PRICE: 10000,
} as const;

// Filter Options
export const PROPERTY_TYPES = [
  'Apartment',
  'House',
  'Villa',
  'Condo',
  'Townhouse',
  'Studio',
] as const;

export const AMENITIES = [
  'WiFi',
  'Kitchen',
  'Parking',
  'Pool',
  'Gym',
  'Pet Friendly',
  'Air Conditioning',
  'Heating',
  'Washer/Dryer',
  'TV',
] as const;
