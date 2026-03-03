export const i18n = {
  defaultLocale: 'fr',
  locales: ['fr', 'mg'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

const dictionaries = {
  fr: () => import('./dictionaries/fr').then((module) => module.fr),
  mg: () => import('./dictionaries/mg').then((module) => module.mg),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
