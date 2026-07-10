import ru from './ru';
import en from './en';
import type { Translation } from './ru';

export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const translations: Record<Locale, Translation> = { en, ru };

export function getTranslation(locale: Locale): Translation {
  return translations[locale] ?? translations[defaultLocale];
}
