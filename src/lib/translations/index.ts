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
    ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);