<script lang="ts">
  import { t } from '$lib/translations'
  export let image
  export let icon
  export let detail
</script>

<div
  class="relative z-0 sm:w-[30rem] w-[24rem] min-h-[20rem] bg-white drop-shadow-md mt-32 grid place-content-center"
>
  <div class="relative z-0  grid place-content-center ">
    <img src={image} alt="" />
    <div class="absolute inset-0 z-10 grid place-content-center">
      <div
        class="h-40 w-40 rounded-full drop-shadow-md bg-white grid place-content-center -mt-24"
      >
        <img src={icon} alt="" class="w-24" />
      </div>
    </div>
  </div>

  <p class="text-center p-8 leading-loose mt-8">
    {$t(`common.${detail}`)}
  </p>
</div>
