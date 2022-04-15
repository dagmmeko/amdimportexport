<script lang="ts">
  import { t } from '$lib/translations'

  export let title: string
  export let desc: string
  export let color: string
  export let length: number
</script>

<div class=" drop-shadow-md grid grid-cols-3 mt-8">
  <div
    class="grid place-items-center {color == 'blue'
      ? 'bg-primary'
      : 'bg-secondary'}"
  >
    <h1 class=" py-4 text-white text-2xl font-medium ">{title}</h1>
  </div>
  <div class="col-span-2 bg-white p-8 leading-loose">
    {#each new Array(length) as _, index}
      <li>{$t(`about.${desc}.${index}`)}</li>
    {/each}
  </div>
</div>
