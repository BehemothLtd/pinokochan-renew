import { getCollection } from 'astro:content';
import type { CategoryData, ChildCategory } from '../types';

/**
 * Extended child category with parent info
 */
export interface ChildCategoryWithParent extends ChildCategory {
  parentId: string;
  parentName: string;
  parentSlug: string;
  parent: CategoryData;
}

/**
 * Get all parent categories sorted by order
 */
export async function getAllParentCategories(): Promise<CategoryData[]> {
  const categories = await getCollection('categories');
  return categories
    .map(entry => entry.data)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get all child categories flattened with parent info
 */
export async function getAllChildCategories(): Promise<ChildCategoryWithParent[]> {
  const parentCategories = await getAllParentCategories();

  const childCategories: ChildCategoryWithParent[] = [];

  for (const parent of parentCategories) {
    for (const child of parent.children) {
      childCategories.push({
        ...child,
        parentId: parent.id,
        parentName: parent.name,
        parentSlug: parent.slug,
        parent: parent,
      });
    }
  }

  return childCategories.sort((a, b) => a.order - b.order);
}

/**
 * Get child category by ID with parent data
 */
export async function getChildCategoryById(
  id: string
): Promise<ChildCategoryWithParent | null> {
  const allChildren = await getAllChildCategories();
  return allChildren.find(child => child.id === id) || null;
}

/**
 * Get parent category by slug
 */
export async function getCategoryBySlug(
  slug: string
): Promise<CategoryData | null> {
  const categories = await getAllParentCategories();
  return categories.find(cat => cat.slug === slug) || null;
}

/**
 * Get parent category by ID
 */
export async function getCategoryById(
  id: string
): Promise<CategoryData | null> {
  const categories = await getAllParentCategories();
  return categories.find(cat => cat.id === id) || null;
}

/**
 * Get children of a parent category
 */
export async function getChildrenByParentId(
  parentId: string
): Promise<ChildCategory[]> {
  const parent = await getCategoryById(parentId);
  return parent?.children || [];
}
