<script lang="ts">
  import { t } from '$lib/translations'
  export let image
  export let icon
  export let detail
</script>

<div
  class="relative z-0 llg:w-[22rem] lg:w-[25rem] md:w-[20rem] w-auto md:mx-0 vs:mx-24 mx-12 md:h-[27rem] h-auto bg-white drop-shadow-md grid mt-28"
>
  <div class="relative z-0   ">
    <img src={image} alt="" class="w-full" />
    <div class="absolute inset-0 z-10 grid ">
      <div
        class="h-40 w-40 rounded-full drop-shadow-md bg-white -mt-24 grid place-self-center"
      >
        <img src={icon} alt="" class="w-24 place-self-center" />
      </div>
    </div>
  </div>

  <p class="text-center px-8 py-4 leading-loose ">
    {$t(`common.${detail}`)}
  </p>
</div>
