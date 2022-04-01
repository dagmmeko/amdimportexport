<script lang="ts">
  import logo from '../../static/assets/logo/amdlogo.png'
  import { locales, locale, t } from '$lib/translations'
  let isNavOpen = false
</script>

<header
  class="sticky top-0 w-full
    grid grid-flow-col justify-items-stretch 
            px-4 md:px-16 py-4
            bg-bgOne z-40"
>
  <a href="/">
    <img
      src={logo}
      class="h-20 w-28 md:ml-12 justify-self-start"
      alt="AMD Home"
    />
  </a>
  <button class="sm:hidden" on:click={() => (isNavOpen = !isNavOpen)}>
    Menu
  </button>
  <div
    class="justify-self-end hidden sm:grid grid-flow-col h-20 place-items-center md:pr-32 pr-12"
  >
    <nav class="self-center">
      <a href="/import" class="md:px-6 p-4"> {$t('common.import')} </a>
      <a href="/export" class="md:px-6 p-4"> {$t('common.export')} </a>
      <a href="/about" class="md:px-6 p-4"> {$t('common.about')} </a>
    </nav>

    <div class="px-6">
      <select bind:value={$locale}>
        {#each $locales as value}
          <option {value}>{$t(`lang.${value}`)} </option>
        {/each}
      </select>
    </div>
  </div>
</header>

<style>
  nav > a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #444444;
  }
</style>
