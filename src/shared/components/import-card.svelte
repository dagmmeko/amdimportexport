<script lang="ts">
  import { t } from '$lib/translations'

  export let image
  export let product
</script>

<div
  class="xl:w-96 llg:w-80 lg:w-72 w-96 h-64 object-cover grid justify-items-center p-4"
>
  <img src={image} alt="" />
  <h1>{$t(`${product}`)}</h1>
</div>
