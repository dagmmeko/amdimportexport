<script lang="ts">
  import { t } from '$lib/translations'
  export let image
  export let product
</script>

<div class="xl:w-80 lg:w-60 w-full drop-shadow-md lg:mt-0 mt-8">
  <img src={image} alt="" class="w-full h-52 object-cover" />
  <div class="">
    <h1
      class="text-center font-medium text-lg bg-white border-primary border-2 p-2"
    >
      {$t(`${product}`)}
    </h1>
  </div>
</div>
