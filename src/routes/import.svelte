<script lang="ts">
  import { t } from '$lib/translations'

  import Contact from '../shared/contact.svelte'
  import ImportCard from '../shared/components/import-card.svelte'

  import hand from '../../static/assets/icons/handPoint.svg'
  import hero from '../../static/assets/imports/hero.svg'
  import CoffeeCard from '../shared/components/coffee-card.svelte'
  import guji from '../../static/assets/imports/guji.webp'
  import yirgachefe from '../../static/assets/imports/yirgacheffe.jpg'
  import sidamo from '../../static/assets/imports/sidamo.png'
  import limu from '../../static/assets/imports/limu.jpg'
  import lekemeti from '../../static/assets/imports/lekemeti.jpg'
  import jimma from '../../static/assets/imports/jimma.jpg'
  import harar from '../../static/assets/imports/harar.webp'
  import honey from '../../static/assets/imports/honey.jpg'
  import cotton from '../../static/assets/imports/cotton.gif'
  import sesame from '../../static/assets/imports/sesame.jpg'
  import spice from '../../static/assets/imports/spice.jpg'
  import teff from '../../static/assets/imports/teff.jpg'
  import coffee from '../../static/assets/imports/coffee.jpg'
  import machinery from '../../static/assets/imports/machinery.jpg'
</script>

<!-- Hero Section  -->

<section>
  <div class="w-full  relative z-0 sm:h-auto h-56">
    <img
      src={hero}
      class="object-cover w-full lg:h-auto h-56"
      alt="Landing background"
    />
    <div
      class="absolute inset-0 z-10 bg-black bg-opacity-70 flex justify-items-stretch "
    />
  </div>
  <div
    class="md:grid llg:grid-cols-6 md:grid-cols-5 grid-cols-4 py-4 bg-primary "
  >
    <h1
      class="text-xl font-bold text-white md:col-span-2 col-span-1 xl:pl-44 md:pl-24 pl-12 sm:pb-0 pb-4"
    >
      {$t('import.import')}
    </h1>

    <div
      class="vs:grid pl-10 vs:pl-0 justify-items-end grid-flow-col llg:col-start-4 md:col-start-3 col-span-3 lg:pr-20 pr-12 md:pt-0 vs:pt-8 pt-0"
    >
      <div class="flex lg:gap-7 gap-2 flex-wrap items-center">
        <img src={hand} alt="icon" class="col-span-1" />
        <h1 class="text-base text-white font-semibold col-span-3">
          {$t('import.linkCoffee')}
        </h1>
      </div>
      <div class="flex lg:gap-7 gap-2 flex-wrap items-center  vs:pt-0 pt-2">
        <img src={hand} alt="icon" class="col-span-1" />
        <h1 class="text-base text-white font-semibold col-span-3">
          {$t('import.linkOil')}
        </h1>
      </div>
      <div class="flex lg:gap-7 gap-2 flex-wrap items-center  vs:pt-0 pt-2">
        <img src={hand} alt="icon" class="col-span-1" />
        <h1 class="text-base text-white font-semibold col-span-3">
          {$t('import.linkHoney')}
        </h1>
      </div>
      <div class="flex lg:gap-7 gap-2 flex-wrap items-center  vs:pt-0 pt-2">
        <img src={hand} alt="icon" class="col-span-1" />
        <h1 class="text-base text-white font-semibold col-span-3">
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
  class="pt-24 grid "
  style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.41) 36.98%, rgba(29, 160, 236, 0.1) 100%)"
>
  <div
    class="place-self-center lg:flex  bg-white drop-shadow-md rounded-xl sm:mx-32 vs:mx-16 mx-8 "
  >
    <img
      src={coffee}
      alt=""
      class="object-cover rounded-xl drop-shadow-xl vs:-m-9 sm:h-60 h-auto lg:w-60 w-auto"
    />
    <h1
      class="bg-primary text-white text-xl font-semibold text-center lg:ml-9 ml-0 lg:mt-0 mt-8 px-16 lg:w-80 w-52 h-12 flex items-center"
    >
      {$t('import.coffeeTitle')}
    </h1>
    <p
      class="leading-loose lg:pt-16 pt-4  pb-8 lg:-ml-32 vs:ml-12 ml-8 lg:pr-16 vs:pr-8 pr-6 text-base  "
    >
      {$t('import.coffeeDesc')}
    </p>
  </div>
  <!-- 

Coffee List 
 -->

  <div class="grid place-items-center pb-8 md:px-20 px-10 ">
    <div
      class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-16 mt-16 "
    >
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

<div class="relative z-0 h-56">
  <img src={machinery} alt="" class="w-full h-56 object-cover object-center" />
  <div
    class="absolute inset-0 z-10 bg-black bg-opacity-70 grid justify-items-stretch"
  >
    <h1
      class="text-white text-3xl font-bold pt-8 justify-self-center self-center "
    >
      {$t('import.importTitle')}
    </h1>
  </div>
</div>

<section
  class="place-items-center py-16 grid llg:grid-cols-5 md:grid-cols-3 vs:grid-cols-2 gap-4"
  style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.41) 36.98%, rgba(29, 160, 236, 0.1) 100%);"
>
  <ImportCard image={sesame} product={'import.prodTitle1'} color="blue" />
  <ImportCard image={honey} product={'import.prodTitle2'} color="orange" />
  <ImportCard image={cotton} product={'import.prodTitle3'} color="blue" />
  <ImportCard image={spice} product={'import.prodTitle4'} color="orange" />
  <ImportCard image={teff} product={'import.prodTitle5'} color="blue" />
</section>

<Contact />
