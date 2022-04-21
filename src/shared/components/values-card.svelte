<script lang="ts">
  import { t } from '$lib/translations'
  export let icon
  export let title: string
  export let desc: string
  export let color: string
  export let length: number
</script>

<div
  class="place-self-center relative z-0 shadow-md mt-4 bg-white xl:h-80 h-auto xl:w-[43rem] llg:w-[35rem] md:w-[45rem] vs:w-[35rem] w-auto rounded-xl ml-24  vs:mr-0 mr-8"
>
  <div
    class="absolute inset-0 z-10 vs:w-44 w-28 vs:h-48 h-32 my-14 vs:-ml-32 -ml-20 rounded-xl shadow-xl grid place-items-center {color ==
    'blue'
      ? 'bg-primary'
      : 'bg-secondary'}"
  >
    <img src={icon} alt="" class="h-14 mt-8" />
    <h1 class=" text-white text-2xl font-medium mb-8">{title}</h1>
  </div>
  <div class="py-10 leading-loose">
    {#each new Array(length) as _, index}
      <li
        class="xl:pl-24 llg:pl-16 sm:pl-24 pl-16 xl:pr-20 pr-10 text-lg leading-loose pt-2 "
      >
        {$t(`about.${desc}.${index}`)}
      </li>
    {/each}
  </div>
</div>
