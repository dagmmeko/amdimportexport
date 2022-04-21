<script lang="ts">
  export let title
  export let desc
  export let color
</script>

<div
  class="llg:w-[45rem] lg:w-[40rem] sm:w-[45rem] w-auto sm:mx-0 mx-16 drop-shadow-md bg-white rounded-xl lg:mt-0 mt-6"
>
  <h1
    class="grid place-items-center py-4 text-white text-2xl font-medium w-80 rounded-xl drop-shadow-xl {color ==
    'blue'
      ? 'bg-primary'
      : 'bg-secondary'}"
  >
    {title}
  </h1>
  <p class=" px-14 py-8 leading-loose min-h-[18rem]">{desc}</p>
</div>
