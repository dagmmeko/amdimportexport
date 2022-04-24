<script lang="ts">
  import { t } from '$lib/translations'
  export let icon
  export let title: string
  export let desc: string
  export let color: string
  export let length: number
</script>

<div
  class="place-self-center relative z-0 shadow-md llg:mt-4 mt-14  bg-white xl:w-[33rem] llg:w-auto md:w-[40rem] vs:w-[28rem] w-auto rounded-xl ml-24 vs:mr-10 mr-8"
>
  <div
    class="absolute inset-0 z-10 vs:w-32 w-28 vs:h-48 h-32 my-6 vs:-ml-20 -ml-16 rounded-xl shadow-xl grid place-items-center {color ==
    'blue'
      ? 'bg-primary'
      : 'bg-secondary'}"
  >
    <img src={icon} alt="" class="h-16 mt-8" />
    <h1 class=" text-white text-xl font-medium mb-8">{title}</h1>
  </div>
  <div class="py-4  ">
    {#each new Array(length) as _, index}
      <li
        class="vs:pl-20 pl-14 vs:pr-8 pr-4 vs:py-2 list-[circle] text-base leading-loose"
      >
        {$t(`about.${desc}.${index}`)}
      </li>
    {/each}
  </div>
</div>
