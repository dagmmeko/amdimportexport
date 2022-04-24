<script lang="ts">
  import { t } from '$lib/translations'
  export let icon
  export let title: string
  export let desc: string
  export let color: string
</script>

<div
  class="place-self-center relative z-0 drop-shadow-md mt-8 bg-white lg:h-56 md:h-56 sm:h-auto xl:w-[30rem] llg:w-[30rem] md:w-[40rem] vs:w-[28rem] w-auto flex items-stretch rounded-xl ml-24 vs:mr-10 mr-8"
>
  <div
    class="absolute inset-0 z-10 vs:w-32 w-28 md:h-44 h-32 my-6 vs:-ml-20 -ml-16 rounded-xl drop-shadow-lg grid place-items-center {color ==
    'blue'
      ? 'bg-primary'
      : 'bg-secondary'}"
  >
    <img src={icon} alt="" class="h-14 mt-8" />
    <h1 class=" text-white text-xl font-medium mb-8">{title}</h1>
  </div>

  <p
    class=" grid place-items-center vs:pl-20 pl-14 vs:pr-10 pr-5 text-base leading-loose vs:py-6 py-4 "
  >
    {$t(`about.${desc}`)}
  </p>
</div>
