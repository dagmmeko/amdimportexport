<script lang="ts">
  export let title
  export let desc
  export let color
</script>

<div class="w-[40rem] drop-shadow-md ">
  <h1
    class="grid place-items-center py-4 text-white text-2xl font-medium {color ==
    'blue'
      ? 'bg-primary'
      : 'bg-secondary'}"
  >
    {title}
  </h1>
  <p class="bg-white p-8 leading-loose min-h-[22rem]">{desc}</p>
</div>
