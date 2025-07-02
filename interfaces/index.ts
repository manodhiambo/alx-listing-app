// Card component props interface
export interface CardProps {
  id?: string;
  title: string;
  description?: string;
  image?: string;
  price?: number;
  rating?: number;
  location?: string;
  className?: string;
  onClick?: () => void;
}

// Button component props interface
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

// Property listing interface (for future use)
export interface PropertyProps {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  rating: number;
  images: string[];
  amenities: string[];
  host: string;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
}

// User interface (for future use)
export interface UserProps {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isHost: boolean;
}
