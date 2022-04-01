<script lang="ts">
  import { t } from '$lib/translations'
  export let image
  export let product
</script>

<div class="h-80 w-96 grid drop-shadow-md">
  <img src={image} alt="" class="w-96" />
  <div class="">
    <h1
      class="text-center font-medium text-xl bg-white border-primary border-2 p-4"
    >
      {$t(`common.${product}`)}
    </h1>
  </div>
</div>
