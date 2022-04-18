<script lang="ts">
  import { t } from '$lib/translations'
  export let image
  export let product
  export let para
</script>

<div class="xl:w-96 llg:w-80 lg:w-72 w-96 drop-shadow-md lg:mt-0 mt-16">
  <img
    src={image}
    alt=""
    class="xl:w-96 llg:w-80 lg:w-72 w-96 h-64 object-cover"
  />
  <div class="bg-white border-primary border-2 min-h-[12rem] pt-6">
    <h1 class="text-center font-medium text-xl text-primary">
      {product}
    </h1>
    <p class="px-10 text-center leading-loose py-4">
      {$t(`${para}`)}
    </p>
  </div>
</div>
