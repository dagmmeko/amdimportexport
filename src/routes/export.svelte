<script lang="ts">
  import { t } from '$lib/translations'

  import Contact from '../shared/contact.svelte'
  import Productcard from '../shared/components/home-product.svelte'

  import hero from '../../static/assets/exports/hero.svg'
  import hand from '../../static/assets/icons/handPoint.svg'
  import tractor from '../../static/assets/exports/tractor.jpg'
  import types from '../../static/assets/exports/types.jpg'
  import spare from '../../static/assets/exports/spare.jpg'
  import volks from '../../static/assets/exports/volks.png'
  import hyundai from '../../static/assets/exports/hyundai.webp'
  import landcruiser from '../../static/assets/exports/landcruiser.webp'
  import rangerover from '../../static/assets/exports/range-rover-2.jpg'
  import chr from '../../static/assets/exports/chr.webp'
  import wheat from '../../static/assets/exports/wheat.svg'
  import sugar from '../../static/assets/exports/sugar.svg'
  import sunflower from '../../static/assets/exports/sunflower.svg'
  import milk from '../../static/assets/exports/milk.svg'
  import insulindiabetes from '../../static/assets/exports/insulindiabetes.jpg'
  import gm from '../../static/assets/exports/gm.jpg'
  import wheelchair from '../../static/assets/exports/wheelchair.jpg'
  import bpmeter from '../../static/assets/exports/bpmeter.webp'

  import hansaplast from '../../static/assets/images/hansaplast.svg'
  import nivea from '../../static/assets/exports/nivea.jpg'
  import prairie from '../../static/assets/exports/prairie.jpg'
  import eucerin from '../../static/assets/exports/eucerin.jpg'
  import machine from '../../static/assets/exports/machine.png'
  import industrial from '../../static/assets/exports/industrial.png'
  import bullDozer from '../../static/assets/exports/bull-dozer.jpg'
  import excavator from '../../static/assets/exports/excavator.jpg'
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
      {$t('export.export')}
    </h1>

    <div
      class="vs:grid pl-10 vs:pl-0 justify-items-end grid-flow-col llg:col-start-4 md:col-start-3 col-span-3 lg:pr-20 pr-12 md:pt-0 vs:pt-8 pt-0 "
    >
      <div class="flex lg:gap-7 gap-2 flex-wrap items-center">
        <img src={hand} alt="icon" class="col-span-1" />
        <h1 class="text-base text-white font-semibold col-span-3">
          {$t('export.linkMedical')}
        </h1>
      </div>
      <div class="flex lg:gap-7 gap-2  flex-wrap items-center vs:pt-0 pt-2">
        <img src={hand} alt="icon" class="col-span-1" />
        <h1 class="text-base text-white font-semibold col-span-3">
          {$t('export.linkMachineries')}
        </h1>
      </div>
      <div class="flex lg:gap-7 gap-2  flex-wrap items-center vs:pt-0 pt-2">
        <img src={hand} alt="icon" class="col-span-1" />
        <h1 class="text-base text-white font-semibold col-span-3">
          {$t('export.linkCar')}
        </h1>
      </div>
    </div>
  </div>
</section>

<div
  style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.41) 36.98%, rgba(29, 160, 236, 0.1) 100%);"
>
  <!-- Product Category  -->
  <section class="pt-24 grid xl:grid-cols-3 place-items-center">
    <div
      class="bg-primary xl:w-80 w-[full] xl:mx-0 lg:mx-24 vs:mx-16 mx-8 xl:col-span-1 drop-shadow-md rounded-xl"
    >
      <div class="xl:pt-80 mmd:pt-0 vs:pt-[27rem] pt-80   ">
        <h1
          class="xl:text-center text-white text-3xl font-bold mb-4 xl:pl-0 llg:pl-80 mmd:pl-72 pl-10 xl:pt-0 vs:pt-10 vsss:pt-36 vvs:pt-12 pt-0"
        >
          {$t('export.categoryTitle')}
        </h1>
        <p
          class="xl:text-center text-white xl:px-6 xl:pt-8 pt-4 xl:pb-12 pb-16 xl:pl-0 llg:pl-80 mmd:pl-72 pl-10 xl:pr-0 llg:pr-20 lg:pr-16 pr-10  text-lg leading-loose"
        >
          {$t('export.categoryDesc')}
        </p>
      </div>
      <img
        src={types}
        alt=""
        class="absolute inset-0 z-10 mmd:w-72 mmd:h-72 vs:w-[30rem] vs:h-[30rem] -m-9 rounded-xl drop-shadow-xl"
      />
    </div>

    <!-- Cars and Spare parts  -->

    <div
      class="xl:col-span-2 pt-0 xl:mt-0 mt-28 grid w-full xl:px-0 lg:px-24 vs:px-16 px-8"
    >
      <div
        class="bg-white xl:w-[50rem] w-full xl:h-72 lg:h-80 mmd:h-[22rem] md:h-[40rem] sm:h-[38rem] vs:h-[40rem] h-[40rem] drop-shadow-md rounded-xl"
      >
        <div class=" absolute inset-0 z-10 mmd:flex ">
          <img
            src={spare}
            alt=""
            class="xl:w-52 xl:h-52 mmd:h-72 mmd:w-72 VS:w-[30rem] VS:h-[30rem] object-cover -m-9 rounded-xl drop-shadow-xl"
          />
          <div class="mmd:pl-9 pl-0 mmd:pt-0 pt-9">
            <h1
              class="bg-primary w-48 py-4 px-8 text-white text-2xl font-semibold mb-6"
            >
              {$t('export.spareTitle')}
            </h1>
            <p class="xl:px-8 pl-8 lg:pr-20 pr-12 leading-loose text-base">
              {$t('export.spareDesc')}
            </p>
          </div>
        </div>
      </div>
      <div
        class="bg-white xl:w-[50rem] w-full xl:h-72  llg:h-80 lgg:h-[20rem] lg:h-80 mdd:h-[21rem]  mmd:h-[24rem] md:h-[42rem] sm:h-[40rem] vs:h-[40rem] vss:h-[38rem]  h-[42rem] drop-shadow-md rounded-xl mt-24"
      >
        <div class=" absolute inset-0 z-10 mmd:flex ">
          <img
            src={volks}
            alt=""
            class="xl:w-52 xl:h-52 mmd:h-72 mmd:w-72 VS:w-[30rem] VS:h-[30rem] object-cover -m-9 rounded-xl drop-shadow-xl"
          />
          <div class="mmd:pl-9 pl-0 mmd:pt-0 pt-9">
            <h1
              class="bg-primary w-48 py-4 px-8 text-white text-2xl font-semibold mb-6"
            >
              {$t('export.carTitle')}
            </h1>
            <p class="xl:px-8 pl-8 lg:pr-20 pr-12 leading-loose text-base">
              {$t('export.carDesc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Initial Product Types  -->

  <section class="grid place-items-center py-16 px-8 ">
    <!-- Import Products -->
    <div class="grid justify-items-stretch">
      <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 ">
        <Productcard image={hyundai} product={'export.carProd1'} />
        <Productcard image={landcruiser} product={'export.carProd2'} />
        <Productcard image={rangerover} product={'export.carProd3'} />
        <Productcard image={chr} product={'export.carProd4'} />
      </div>

      <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 ">
        <Productcard image={wheat} product={'export.expoProd1'} />
        <Productcard image={sugar} product={'export.expoProd2'} />
        <Productcard image={sunflower} product={'export.expoProd3'} />
        <Productcard image={milk} product={'export.expoProd4'} />
      </div>
    </div>
  </section>
</div>

<!-- Medical Products  -->

<section
  class="grid place-items-center"
  style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.41) 36.98%, rgba(29, 160, 236, 0.1) 100%);"
>
  <div class="relative z-0">
    <img src={hero} alt="" class="w-full sm:h-80 h-[26rem] object-cover" />
    <div
      class="absolute inset-0 z-10 bg-black bg-opacity-80 grid justify-items-stretch"
    >
      <h1
        class="text-white md:text-3xl text-2xl font-bold justify-self-center self-center "
      >
        {$t('export.medTitle')}
      </h1>
      <p
        class="text-white justify-self-center self-center text-center lg:px-36 sm:px-16 px-4 leading-loose md:text-lg text-base"
      >
        {$t('export.medDesc')}
      </p>
      <h1
        class="text-white text-xl font-bold p justify-self-center self-center pb-8"
      >
        {$t('export.medLink')}
      </h1>
    </div>
  </div>

  <div class="grid place-items-center py-16 px-8">
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 ">
      <Productcard image={bpmeter} product={'export.medProd1'} />
      <Productcard image={insulindiabetes} product={'export.medProd2'} />
      <Productcard image={gm} product={'export.medProd3'} />
      <Productcard image={wheelchair} product={'export.medProd4'} />
    </div>
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 ">
      <Productcard image={hansaplast} product={'export.medProd5'} />
      <Productcard image={eucerin} product={'export.medProd6'} />
      <Productcard image={prairie} product={'export.medProd7'} />
      <Productcard image={nivea} product={'export.medProd8'} />
    </div>
  </div>
</section>

<!-- Machinaries Products  -->

<section
  style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.41) 36.98%, rgba(29, 160, 236, 0.1) 100%);"
>
  <div class="relative z-0">
    <img src={machine} alt="" class="w-full sm:h-56 h-[15rem] object-cover" />
    <div
      class="absolute inset-0 z-10 bg-black bg-opacity-70 grid justify-items-stretch"
    >
      <h1
        class="text-white md:text-3xl text-2xl font-bold justify-self-center self-center  "
      >
        {$t('export.machTitle')}
      </h1>
      <p
        class="text-white justify-self-center text-center xl:px-72 lg:px-36 sm:px-16 px-4 leading-loose md:text-lg text-base"
      >
        {$t('export.machDesc')}
      </p>
      <h1
        class="text-white text-lg font-bold p justify-self-center self-center pb-8"
      >
        {$t('export.machLink')}
      </h1>
    </div>
  </div>

  <div class="grid place-items-center py-16 px-8">
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 ">
      <Productcard image={excavator} product={'export.machProd1'} />
      <Productcard image={tractor} product={'export.machProd2'} />
      <Productcard image={bullDozer} product={'export.machProd3'} />
      <Productcard image={industrial} product={'export.machProd4'} />
    </div>
  </div>
</section>
<Contact />
