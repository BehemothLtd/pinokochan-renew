import { defineCollection, z } from 'astro:content';

/**
 * Child category schema
 */
const childCategorySchema = z.object({
  id: z.string(),
  name: z.string(),  // Vietnamese display name
  slug: z.string(),
  description: z.string().optional(),
  image: z.string().optional(),
  order: z.number(),
});

/**
 * Parent category schema with children
 */
const categorySchema = z.object({
  id: z.string(),
  name: z.string(),  // Vietnamese display name
  slug: z.string(),
  description: z.string().optional(),
  image: z.string().optional(),
  order: z.number(),
  children: z.array(childCategorySchema),
});

/**
 * Product schema
 */
const productSchema = z.object({
  id: z.string(),
  name: z.string(),  // Vietnamese only
  slug: z.string(),
  description: z.string(),
  price: z.number(),  // VND
  originalPrice: z.number().optional(),  // For sale items
  categoryId: z.string(),  // Child category ID
  images: z.array(z.string()),
  featured: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  inStock: z.boolean().optional(),
  specifications: z.record(z.string()).optional(),  // Key-value specs
});

/**
 * Define content collections
 */
const categories = defineCollection({
  type: 'data',
  schema: categorySchema,
});

const products = defineCollection({
  type: 'data',
  schema: productSchema,
});

export const collections = {
  categories,
  products,
};
