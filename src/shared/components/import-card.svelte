<script lang="ts">
  import { t } from '$lib/translations'

  export let image
  export let product
  export let color
</script>

<div class=" object-cover grid justify-items-center p-4">
  <img src={image} alt="" class="object-cover w-80 h-56 rounded-lg" />
  <h1
    class="text-white text-lg px-12 py-2 rounded-2xl shadow-xl -my-6 {color ==
    'blue'
      ? 'bg-primary'
      : 'bg-secondary'}"
  >
    {$t(`${product}`)}
  </h1>
</div>
