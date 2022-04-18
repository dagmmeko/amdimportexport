import i18n from 'sveltekit-i18n';
import lang from './lang.json'
/** @type {import('sveltekit-i18n').Config} */
const config = ({
    translations: {
        en: { lang },
        de: { lang },
    },
    loaders: [
        {
            locale: 'en',
            key: 'common',
            loader: async () => (
                await import('./en/common.json')
            ).default,
        },
        {
            locale: 'de',
            key: 'common',
            loader: async () => (
                await import('./de/common.json')
            ).default,
        },
        {
            locale: 'en',
            key: 'about',
            loader: async () => (await import('./en/about.json')).default
        },
        {
            locale: 'de',
            key: 'about',
            loader: async () => (await import('./de/about.json')).default
        }, {
            locale: 'en',
            key: 'export',
            loader: async () => (
                await import('./en/export.json')
            ).default,
        },
        {
            locale: 'de',
            key: 'export',
            loader: async () => (
                await import('./de/export.json')
            ).default,
        }, {
            locale: 'en',
            key: 'import',
            loader: async () => (
                await import('./en/import.json')
            ).default,
        },
        {
            locale: 'de',
            key: 'import',
            loader: async () => (
                await import('./de/import.json')
            ).default,
        }
    ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);