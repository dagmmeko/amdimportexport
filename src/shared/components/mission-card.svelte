<script lang="ts">
  import { t } from '$lib/translations'
  export let icon
  export let title: string
  export let desc: string
  export let color: string
</script>

<div
  class="place-self-center relative z-0 drop-shadow-md mt-8 bg-white xl:h-64 h-auto xl:w-[35rem] llg:w-[30rem] md:w-[40rem] vs:w-[28rem] w-auto flex items-stretch rounded-xl ml-24 vs:mr-0 mr-8"
>
  <div
    class="absolute inset-0 z-10 vs:w-44 w-28 vs:h-48 h-32 my-10 vs:-ml-32 -ml-20 rounded-xl drop-shadow-lg grid place-items-center {color ==
    'blue'
      ? 'bg-primary'
      : 'bg-secondary'}"
  >
    <img src={icon} alt="" class="h-14 mt-8" />
    <h1 class=" text-white text-2xl font-medium mb-8">{title}</h1>
  </div>

  <p
    class="grid place-items-center vs:pl-24 pl-12 vs:pr-20 pr-10 text-lg leading-loose vs:py-14 py-9 "
  >
    {$t(`about.${desc}`)}
  </p>
</div>
