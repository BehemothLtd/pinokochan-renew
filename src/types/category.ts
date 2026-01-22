/**
 * Child category within a parent category
 * Products belong to exactly one child category
 */
export interface ChildCategory {
  id: string;
  name: string;  // Vietnamese display name
  slug: string;
  description?: string;
  image?: string;
  order: number;
}

/**
 * Parent category with 2-level hierarchy
 * Contains child categories
 */
export interface CategoryData {
  id: string;
  name: string;  // Vietnamese display name
  slug: string;
  description?: string;
  image?: string;
  order: number;
  children: ChildCategory[];
}
