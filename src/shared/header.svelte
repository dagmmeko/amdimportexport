<script lang="ts">
  import logo from '../../static/assets/logo/amdlogo.png'
  import { locales, locale, t } from '$lib/translations'

  let isNavOpen = false
</script>

<header
  class="
    z-30 sticky top-0 
    bg-bgOne shadow-md
    transform-gpu
  "
>
  <div
    class="flex justify-between items-center space-x-8 mx-auto md:max-w-screen-xl px-4 md:px-16 py-2"
  >
    <a sveltekit:prefetch href="/#top">
      <img
        alt="Semuny Logo Wordmark"
        src={logo}
        class="h-16 w-24 md:ml-12 justify-self-start"
        width={350}
        height={100}
      />
    </a>

    <button
      class="link uppercase md:hidden"
      on:click={() => (isNavOpen = !isNavOpen)}
    >
      Menu
    </button>

    <nav
      class="
        fixed top-14 right-3 left-3 bottom-3 {isNavOpen
        ? 'grid'
        : 'hidden'} gap-6 justify-items-center items-center z-40
        p-6
        h-96
        border border-accent rounded-md
        bg-bgOne text-accent shadow-lg shadow-gray-700/20
        md:static md:grid md:gap-8 md:grid-flow-col
        md:p-0
        md:h-auto
        md:border-none
        md:bg-transparent md:shadow-none
      "
    >
      <a
        sveltekit:prefetch
        href="/import"
        class="mt-auto md:mt-0 link nav-link"
        on:click={() => (isNavOpen = false)}
      >
        {$t('common.import')}
      </a>
      <a
        sveltekit:prefetch
        href="/export"
        class="link nav-link"
        on:click={() => (isNavOpen = false)}
      >
        {$t('common.export')}
      </a>
      <a
        sveltekit:prefetch
        href="/about"
        class="link nav-link"
        on:click={() => (isNavOpen = false)}
      >
        {$t('common.about')}
      </a>
      <div class="">
        <select bind:value={$locale}>
          {#each $locales as value}
            <option {value}>{$t(`lang.${value}`)} </option>
          {/each}
        </select>
      </div>
    </nav>
  </div>
</header>

<style lang="postcss">
  .nav-link {
    @apply w-max
    transition;
  }
  .nav-link img {
    @apply transition;
  }
  .nav-link:focus img,
  .nav-link:hover img,
  .nav-link:active img {
    @apply brightness-200;
  }
  nav > a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #444444;
  }
</style>
