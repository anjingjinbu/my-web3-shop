export enum ProductCategory {
  KYC = 'KYC_ZONE',
  PROXY = 'PROXY_ZONE',
  EMAIL = 'EMAIL_ZONE',
  SOCIAL = 'SOCIAL_ZONE',
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  category: ProductCategory;
  price: number;
  stock: number; // -1 indicates "Unknown" or "Unlimited"
  tags?: string[];
  icon?: string; // URL or Emoji
}

export interface CartItem extends Product {
  quantity: number;
}