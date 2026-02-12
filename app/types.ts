export interface BannerProps {
  children: React.ReactNode;
}

export interface CartProps {
  cart: {
    name: string;
    price: number;
    amount: number;
  }[];
  updateCart: (newCart: CartProps['cart']) => void;
}

export interface CategoriesProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export interface GnomeAttributesScaleProps {
  scaleValue: number;
  specificity: 'rarity' | 'resistance';
}

export interface GnomeItemProps {
  name: string;
  cover: string;
  id: number;
  resistance: number;
  rarity: number;
  price: number;
  description: string;
}

export interface GnomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  price: number;
  cover: string;
  resistance: number;
  rarity: number;
  description: string;
}

export interface ShoppingListProps {
  cart: {
    name: string;
    price: number;
    amount: number;
  }[];
  updateCart: (newCart: ShoppingListProps['cart']) => void;
}
