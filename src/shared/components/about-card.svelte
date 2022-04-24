<script lang="ts">
  export let title
  export let desc
  export let color
</script>

<div
  class="xl:w-[38rem] llg:w-[33rem] lg:w-[30rem] md:w-[45rem] w-auto md:mx-0 sm:mx-16 mx-8 drop-shadow-xl bg-white rounded-xl lg:mt-0 mt-6"
>
  <h1
    class="grid place-items-center py-4 text-white text-xl font-medium w-80 rounded-xl drop-shadow-xl {color ==
    'blue'
      ? 'bg-primary'
      : 'bg-secondary'}"
  >
    {title}
  </h1>
  <p class="text-base px-10 py-6 leading-loose  lg:min-h-[21rem] lg:pb-0 pb-8">
    {desc}
  </p>
</div>
