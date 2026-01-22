import { vi } from './vi';

export type Locale = 'vi';
export type Translations = typeof vi;

const translations: Record<Locale, Translations> = { vi };

/**
 * Get translation value by dot notation path
 * @param path - Translation key path (e.g., 'nav.home')
 * @param params - Optional parameters to replace in the translation string
 * @returns Translated string or the path if not found
 */
export function t(
  path: string,
  params?: Record<string, string | number>
): string {
  const keys = path.split('.');
  let value: any = translations.vi;

  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) {
      console.warn(`Translation missing: ${path}`);
      return path;
    }
  }

  if (typeof value !== 'string') {
    return path;
  }

  // Replace params like {year} with actual values
  if (params) {
    return value.replace(/{(\w+)}/g, (_, key) =>
      params[key]?.toString() ?? `{${key}}`
    );
  }

  return value;
}

/**
 * Format currency for Vietnamese Dong
 * @param amount - Amount in VND
 * @returns Formatted price string
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format date for Vietnamese locale
 * @param date - Date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// Export translations for direct access
export { vi };
