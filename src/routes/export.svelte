<script lang="ts">
  import Contact from '../shared/contact.svelte'
  import hero from '../../static/assets/exports/hero.svg'
  import hand from '../../static/assets/icons/handPoint.svg'
  import tractor from '../../static/assets/exports/types.jpg'
  import Productcard from '../shared/components/home-product.svelte'
</script>

<!-- Hero Section  -->

<section>
  <div class="w-full  relative z-0">
    <img src={hero} class="object-cover w-full" alt="Landing background" />
    <div
      class="absolute inset-0 z-10 bg-black bg-opacity-70 flex justify-items-stretch "
    />
  </div>
  <div class="flex bg-primary">
    <h1>Export Products</h1>

    <div class="flex space-x-6">
      <img src={hand} alt="icon" />
      <h1>Medical Equipment</h1>
    </div>
    <div class="flex">
      <img src={hand} alt="icon" />
      <h1>Machineries</h1>
    </div>
    <div class="flex">
      <img src={hand} alt="icon" />
      <h1>Cars</h1>
    </div>
  </div>
</section>

<div
  style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.41) 36.98%, rgba(29, 160, 236, 0.1) 100%);"
>
  <!-- Product Category  -->
  <section class="pl-44 pt-24 grid grid-cols-3">
    <div class="relative z-0 bg-primary w-96 col-span-1">
      <div class="h-[35rem] pt-96 ">
        <h1>Our Exports</h1>
        <p>
          AMD is a competent supplier of imported equipment, spare parts and
          accessories directly from European manufacturers from a warehouse
          directly in the centre of Germany.
        </p>
      </div>
      <img src={tractor} alt="" class="absolute inset-0 z-10 w-96 h-96 -m-9" />
    </div>

    <!-- Cars and Spare parts  -->

    <div class="col-span-2 ">
      <div class="relative z-0 bg-white w-[40rem] h-52 drop-shadow-lg">
        <div class="pl-52 ">
          <h1 class="bg-primary">Spare Parts</h1>
          <p>
            Do you like flaunting the high-end specs of your vehicle, but you
            cannot find that one spare part? Scroll through our largest pool,
            brimmed with several options, enabling buyers to get import quality
            spare parts and accessories under one roof. Not only Africans but
            parts and accessories can be sought from different regions of the
            globe.
          </p>
        </div>
        <img
          src={tractor}
          alt=""
          class="absolute inset-0 z-10 w-52 h-52 -m-9"
        />
      </div>
      <div class="relative z-0 bg-primary w-[40rem] h-52 mt-24">
        <div class="pl-52 ">
          <h1>Our Exports</h1>
          <p>
            AMD is a competent supplier of imported equipment, spare parts and
            accessories directly from European manufacturers from a warehouse
            directly in the centre of Germany.
          </p>
        </div>
        <img
          src={tractor}
          alt=""
          class="absolute inset-0 z-10 w-52 h-52 -m-9"
        />
      </div>
    </div>
  </section>

  <!-- Initial Product Types  -->

  <section class="grid place-items-center py-16 ">
    <!-- Import Products -->
    <div class="grid justify-items-stretch">
      <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 ">
        <Productcard image={tractor} product={'importProd1'} />
        <Productcard image={tractor} product={'importProd2'} />
        <Productcard image={tractor} product={'importProd3'} />
        <Productcard image={tractor} product={'importProd4'} />
      </div>

      <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 ">
        <Productcard image={tractor} product={'importProd1'} />
        <Productcard image={tractor} product={'importProd2'} />
        <Productcard image={tractor} product={'importProd3'} />
        <Productcard image={tractor} product={'importProd4'} />
      </div>
    </div>
  </section>
</div>

<!-- Medical Products  -->

<section
  style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.41) 36.98%, rgba(29, 160, 236, 0.1) 100%);"
>
  <div class="relative z-0 h-56">
    <img src={hero} alt="" class="w-full h-56 object-cover" />
    <div
      class="absolute inset-0 z-10 bg-black bg-opacity-80 grid justify-items-stretch"
    >
      <h1 class="text-white text-5xl justify-self-center self-center">
        Medical Equipment
      </h1>
      <p class="text-white justify-self-center self-center text-center">
        We specialised in the purchase and sale of medical consumables for
        Ethiopia hospitals, Medical Institutions and other medical facilities
        from a warehouse directly in the center of Germany. Direct Supplies and
        Deliveries of Original equipment and consumables products directly from
        Germany manufacturers without extra changes from intermediaries and
        distribution companies.
      </p>
      <h1 class="text-white justify-self-center self-center">
        Contact us & Order what you need
      </h1>
    </div>
  </div>

  <div class="grid place-items-center py-16">
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 ">
      <Productcard image={tractor} product={'importProd1'} />
      <Productcard image={tractor} product={'importProd2'} />
      <Productcard image={tractor} product={'importProd3'} />
      <Productcard image={tractor} product={'importProd4'} />
    </div>
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 ">
      <Productcard image={tractor} product={'importProd1'} />
      <Productcard image={tractor} product={'importProd2'} />
      <Productcard image={tractor} product={'importProd3'} />
      <Productcard image={tractor} product={'importProd4'} />
    </div>
  </div>
</section>

<!-- Machinaries Products  -->

<section
  style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.41) 36.98%, rgba(29, 160, 236, 0.1) 100%);"
>
  <div class="relative z-0 h-56">
    <img src={hero} alt="" class="w-full h-56 object-cover" />
    <div
      class="absolute inset-0 z-10 bg-black bg-opacity-80 grid justify-items-stretch"
    >
      <h1 class="text-white text-5xl justify-self-center self-center">
        Medical Equipment
      </h1>
      <p class="text-white justify-self-center self-center text-center">
        We specialised in the purchase and sale of medical consumables for
        Ethiopia hospitals, Medical Institutions and other medical facilities
        from a warehouse directly in the center of Germany. Direct Supplies and
        Deliveries of Original equipment and consumables products directly from
        Germany manufacturers without extra changes from intermediaries and
        distribution companies.
      </p>
      <h1 class="text-white justify-self-center self-center">
        Contact us & Order what you need
      </h1>
    </div>
  </div>

  <div class="grid place-items-center py-16">
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 ">
      <Productcard image={tractor} product={'importProd1'} />
      <Productcard image={tractor} product={'importProd2'} />
      <Productcard image={tractor} product={'importProd3'} />
      <Productcard image={tractor} product={'importProd4'} />
    </div>
  </div>
</section>
<Contact />
