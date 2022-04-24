<script lang="ts">
  import { t } from '$lib/translations'
  export let image
  export let product
  export let para
</script>

<div class="lg:w-72 md:w-80 w-full drop-shadow-md ">
  <img src={image} alt="" class="lg:w-72 w-full md:h-64 h-96 object-cover" />
  <div class="bg-white border-primary border-2 md:min-h-[12rem] h-auto pt-2">
    <h1 class="text-center font-medium text-xl text-primary">
      {product}
    </h1>
    <p class="px-8 text-center leading-loose md:py-2 py-4">
      {$t(`${para}`)}
    </p>
  </div>
</div>
