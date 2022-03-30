<script lang="ts">
  import logo from '../../static/assets/logo/amdlogo.png'
  import { locales, locale, t } from '$lib/translations'
</script>

<header
  class="sticky w-full
    grid grid-flow-col justify-items-stretch 
            px-4 sm:px-16 py-4
            bg-bgOne z-40"
>
  <img
    src={logo}
    class="h-20 w-28 md:ml-12 justify-self-start"
    alt="AMD Home"
  />
  <div class="justify-self-end grid grid-flow-col py-">
    <nav>
      <a href="/import"> {$t('common.import')} </a>
      <a href="/export"> {$t('common.export')} </a>
      <a href="/about"> {$t('common.about')} </a>
    </nav>
    <div>
      <select bind:value={$locale}>
        {#each $locales as value}
          <option {value}>{value}</option>
        {/each}
      </select>
    </div>
  </div>
</header>
