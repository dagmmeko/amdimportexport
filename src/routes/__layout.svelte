<script context="module">
  import { locale, loadTranslations } from '$lib/translations'

  export const load = async ({ url }) => {
    const { pathname } = url

    const defaultLocale = 'en' // get from cookie, user session, ...

    const initLocale = locale.get() || defaultLocale // set default if no locale already set

    await loadTranslations(initLocale, pathname) // keep this just before the `return`

    return {}
  }
</script>

<script>
  import '$lib/styles/index.css'
  import Header from '../shared/header.svelte'
  import Footer from '../shared/footer.svelte'
</script>

<svelte:head>
  <title>Hello</title>
</svelte:head>
<Header />
<slot />
<Footer />
