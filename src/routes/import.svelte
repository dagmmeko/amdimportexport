<script lang="ts">
  import { t } from '$lib/translations'

  import Contact from '../shared/contact.svelte'
  import ImportCard from '../shared/components/import-card.svelte'

  import hand from '../../static/assets/icons/handPoint.svg'
  import hero from '../../static/assets/imports/hero.svg'
  import spare from '../../static/assets/exports/spare.jpg'
  import CoffeeCard from '../shared/components/coffee-card.svelte'
  import guji from '../../static/assets/imports/guji.webp'
  import yirgachefe from '../../static/assets/imports/yirgacheffe.jpg'
  import sidamo from '../../static/assets/imports/sidamo.png'
  import limu from '../../static/assets/imports/limu.jpg'
  import lekemeti from '../../static/assets/imports/lekemeti.jpg'
  import jimma from '../../static/assets/imports/jimma.jpg'
  import harar from '../../static/assets/imports/harar.webp'
</script>

<!-- Hero Section  -->

<section>
  <div class="w-full  relative z-0 sm:h-auto h-56">
    <img
      src={hero}
      class="object-cover w-full sm:h-auto h-56"
      alt="Landing background"
    />
    <div
      class="absolute inset-0 z-10 bg-black bg-opacity-70 flex justify-items-stretch "
    />
  </div>
  <div
    class="sm:grid llg:grid-cols-6 md:grid-cols-5 grid-cols-4 py-4 bg-primary "
  >
    <h1
      class="text-2xl font-bold text-white md:col-span-2 col-span-1 llg:pl-44 md:pl-24 pl-12 sm:pb-0 pb-4"
    >
      {$t('import.import')}
    </h1>

    <div
      class="vs:grid pl-10 vs:pl-0 justify-items-end grid-flow-col llg:col-start-4 md:col-start-3 col-span-3 llg:pr-44 pr-24 "
    >
      <div class="flex lg:gap-7 gap-5 flex-wrap items-center">
        <img src={hand} alt="icon" class="col-span-1" />
        <h1 class="text-lg text-white font-semibold col-span-3">
          {$t('import.linkCoffee')}
        </h1>
      </div>
      <div class="flex lg:gap-7 gap-5 flex-wrap items-center">
        <img src={hand} alt="icon" class="col-span-1" />
        <h1 class="text-lg text-white font-semibold col-span-3">
          {$t('import.linkOil')}
        </h1>
      </div>
      <div class="flex lg:gap-7 gap-5 flex-wrap items-center">
        <img src={hand} alt="icon" class="col-span-1" />
        <h1 class="text-lg text-white font-semibold col-span-3">
          {$t('import.linkHoney')}
        </h1>
      </div>
      <div class="flex lg:gap-7 gap-5 flex-wrap items-center">
        <img src={hand} alt="icon" class="col-span-1" />
        <h1 class="text-lg text-white font-semibold col-span-3">
          {$t('import.linkSpices')}
        </h1>
      </div>
    </div>
  </div>
</section>
<!-- 

Title to Coffee
 -->
<section
  class="pt-24 grid sm:px-0 px-16 "
  style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.41) 36.98%, rgba(29, 160, 236, 0.1) 100%)"
>
  <div
    class="place-self-center grid vs:grid-cols-3 bg-white llg:w-[85rem] lg:w-[70rem] md:w-[60rem] sm:w-[50rem] w-auto lg:h-[18rem] md:h-[20rem] sm:h-[24rem] h-auto  drop-shadow-md rounded-xl "
  >
    <img
      src={spare}
      alt=""
      class="object-cover rounded-xl drop-shadow-xl -m-9 lg:w-72 lg:h-72 vs:w-60 vs:h-60 h-48 w-full"
    />
    <h1
      class="bg-primary text-white text-2xl font-semibold text-center lg:-ml-56 md:-ml-44 sm:-ml-32 vs:-ml-14 vs:mt-0 mt-9 w-80 py-4 h-16"
    >
      {$t('import.coffeeTitle')}
    </h1>
    <p
      class="leading-loose sm:pt-24 vs:pt-24 pt-8 pb-8 llg:-ml-[40rem] lg:-ml-[32rem] md:-ml-[28rem] sm:-ml-[22rem] vs:-ml-[18rem] px-12 "
    >
      {$t('import.coffeeDesc')}
    </p>
  </div>
  <!-- 

Coffee List 
 -->

  <div class="grid place-items-center pb-8">
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 ">
      <CoffeeCard image={guji} product={'Guji'} para={'import.cofProdDes1'} />
      <CoffeeCard
        image={yirgachefe}
        product={'Yirgachefe'}
        para={'import.cofProdDes2'}
      />
      <CoffeeCard
        image={sidamo}
        product={'Sidamo'}
        para={'import.cofProdDes3'}
      />
      <CoffeeCard image={limu} product={'Limu'} para={'import.cofProdDes4'} />
      <CoffeeCard
        image={lekemeti}
        product={'Lekemeti'}
        para={'import.cofProdDes5'}
      />

      <CoffeeCard image={jimma} product={'Jimma'} para={'import.cofProdDes6'} />
      <CoffeeCard image={harar} product={'Harar'} para={'import.cofProdDes6'} />
    </div>
  </div>
</section>

<!-- 
Other Imports -->

<div class="relative z-0 h-72">
  <img src={hero} alt="" class="w-full h-72 object-cover" />
  <div
    class="absolute inset-0 z-10 bg-black bg-opacity-70 grid justify-items-stretch"
  >
    <h1
      class="text-white text-3xl font-bold pt-8 justify-self-center self-center "
    >
      {$t('export.machTitle')}
    </h1>
    <p
      class="text-white justify-self-center self-center text-center lg:px-72 px-16 leading-loose text-lg"
    >
      {$t('export.machDesc')}
    </p>
    <h1
      class="text-white text-xl font-bold p justify-self-center self-center pb-8"
    >
      {$t('export.machLink')}
    </h1>
  </div>
</div>

<section
  class="place-items-center py-16 grid llg:grid-cols-5 md:grid-cols-3 vs:grid-cols-2 gap-4"
  style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.41) 36.98%, rgba(29, 160, 236, 0.1) 100%);"
>
  <ImportCard image={spare} product={'import.prodTitle1'} color="blue" />
  <ImportCard image={spare} product={'import.prodTitle1'} color="blue" />
  <ImportCard image={spare} product={'import.prodTitle1'} color="blue" />
  <ImportCard image={spare} product={'import.prodTitle1'} color="blue" />
  <ImportCard image={spare} product={'import.prodTitle1'} color="blue" />
</section>

<Contact />
