<script lang="ts">
  import { t } from '$lib/translations'
  export let image
  export let product
</script>

<div class="xl:w-96 llg:w-80 lg:w-72 w-96 drop-shadow-md lg:mt-0 mt-16">
  <img src={image} alt="" class="xl:w-96 llg:w-80 lg:w-72 w-96" />
  <div class="">
    <h1
      class="text-center font-medium text-xl bg-white border-primary border-2 p-4"
    >
      {$t(`common.${product}`)}
    </h1>
  </div>
</div>
