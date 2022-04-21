<script lang="ts">
  import { t } from '$lib/translations'
  export let image
  export let icon
  export let detail
</script>

<div
  class="relative z-0 llg:w-[30rem] lg:w-[25rem] md:w-[30rem] sm:w-[25rem] w-[30rem] h-auto min-h-[27rem] bg-white drop-shadow-md mt-32 grid "
>
  <div class="relative z-0   ">
    <img src={image} alt="" />
    <div class="absolute inset-0 z-10 grid ">
      <div
        class="h-40 w-40 rounded-full drop-shadow-md bg-white -mt-24 grid place-self-center"
      >
        <img src={icon} alt="" class="w-24 place-self-center" />
      </div>
    </div>
  </div>

  <p class="text-center p-8 leading-loose ">
    {$t(`common.${detail}`)}
  </p>
</div>
