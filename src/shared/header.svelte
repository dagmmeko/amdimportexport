<script lang="ts">
  import logo from '../../static/assets/logo/amdlogo.png'
  import { locales, locale, t } from '$lib/translations'
</script>

<header
  class="sticky top-0 w-full
    grid grid-flow-col justify-items-stretch 
            px-4 sm:px-16 py-4
            bg-bgOne z-40"
>
  <img
    src={logo}
    class="h-20 w-28 md:ml-12 justify-self-start"
    alt="AMD Home"
  />
  <div
    class="justify-self-end grid grid-flow-col h-20 place-items-center pr-32"
  >
    <nav class="self-center">
      <a href="/import" class="px-6"> {$t('common.import')} </a>
      <a href="/export" class="px-6"> {$t('common.export')} </a>
      <a href="/about" class="px-6"> {$t('common.about')} </a>
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
