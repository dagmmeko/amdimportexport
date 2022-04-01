<script lang="ts">
  import { t } from '$lib/translations'
  export let image
  export let icon
  export let detail
</script>

<div class="relative z-0 h-96 w-96 bg-white drop-shadow-md mt-32">
  <div class="relative z-0">
    <img src={image} alt="" />
    <div
      class="absolute inset-0 z-10 h-40 w-40 rounded-full drop-shadow-md bg-white grid place-content-center -my-20"
    >
      <img src={icon} alt="" class="w-24" />
    </div>
  </div>

  <p class="text-center p-8 leading-loose ">
    {$t(`common.${detail}`)}
  </p>
</div>
