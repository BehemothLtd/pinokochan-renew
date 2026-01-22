/**
 * Product data structure
 * Each product belongs to exactly one child category
 */
export interface ProductData {
  id: string;
  name: string;  // Vietnamese only
  slug: string;
  description: string;
  price: number;  // VND
  originalPrice?: number;  // For sale items
  categoryId: string;  // Child category ID
  images: string[];
  featured?: boolean;
  tags?: string[];
  inStock?: boolean;
  specifications?: Record<string, string>;  // Key-value specs
}
