<script lang="ts">
  import { t } from '$lib/translations'
  import landing from '../../static/assets/images/landing.jpg'

  import polygon1 from '../../static/assets/icons/Polygon1.svg'
  import polygon2 from '../../static/assets/icons/Polygon2.svg'
  import vector from '../../static/assets/icons/vector.svg'
  import service from '../../static/assets/icons/service.svg'
  import who from '../../static/assets/icons/who.svg'
  import feedback from '../../static/assets/icons/feedback.svg'
  import tractor from '../../static/assets/images/tractor.png'
  import community from '../../static/assets/icons/community.svg'
  import handshake from '../../static/assets/icons/handshake.svg'
  import message from '../../static/assets/icons/message.svg'

  import yirgacheffe from '../../static/assets/images/yirgacheffe.svg'
  import sesame from '../../static/assets/images/sesame.svg'
  import teff from '../../static/assets/images/teff.jpg'
  import soyaBeans from '../../static/assets/images/Soya-Beans.svg'

  import sparePart from '../../static/assets/images/spare-part.svg'
  import rangerover from '../../static/assets/exports/range-rover.webp'
  import hansaplast from '../../static/assets/images/hansaplast.svg'
  import excavator from '../../static/assets/images/machine.jpg'

  import coffeehands from '../../static/assets/images/coffeehands.png'
  import SeriveCard from '../shared/components/service-card.svelte'
  import Productcard from '../shared/components/home-product.svelte'

  import team from '../../static/assets/images/team.svg'
  import Contact from '../shared/contact.svelte'
</script>

<!--   
    Hero Section
      -->

<section class="w-full h-[55rem] relative z-0">
  <img
    src={landing}
    class="object-cover h-[55rem] w-full"
    alt="Landing background"
    loading="lazy"
  />
  <div
    class="absolute inset-0 z-10 bg-black bg-opacity-70 flex justify-items-stretch "
  >
    <div class="self-center md:pl-36 pl-10">
      <h1
        class="leading-relaxed text-white font-sans font-light lg:w-[30rem] md:w-[25rem] w-auto md:pr-0 pr-12 lg:text-5xl md:text-4xl text-3xl"
      >
        {$t('common.landTitle')}
      </h1>
      <p
        class="md:text-xl text-lg sm:w-[34rem] w-auto sm:pr-0 pr-12 text-white mt-8 leading-loose"
      >
        {$t('common.landDesc')}
      </p>
      <a href="#contact" class="">
        <div
          class="text-white mt-8 bg-bgTwo p-4 w-56 h-14 rounded-md text-center"
        >
          {$t('common.contact')}
        </div>
      </a>
    </div>
  </div>
</section>

<!-- 
  ABOUT US SECTION
    -->

<section class="w-full relative z-0 bg-bgOne grid justify-items-stretch">
  <div class="absolute -z-30 ">
    <div class=" relative -mt-10">
      <img src={polygon2} alt="" class="  h-[25rem]" />
    </div>
    <div class="absolute inset-0  ">
      <img src={polygon1} alt="" class="h-[20rem]" />
    </div>
  </div>

  <div
    class="relative inset-0 z-0 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:px-0 sm:px-12 vs:px-24 px-8"
  >
    <div
      class="-mt-16 md:h-[26rem] h-auto xl:w-[24rem] llg:w-[20rem] lg:w-[18rem] md:w-[20rem] w-auto bg-white drop-shadow-md grid justify-items-stretch"
    >
      <img src={who} alt="Who icon" class="justify-self-center pt-10" />
      <p class="text-center p-8 leading-relaxed">
        {$t('common.who')}
      </p>
    </div>
    <div
      class="lg:-mt-16 md:-mt-16 sm:mt-8 mt-8 md:h-[26rem] h-auto  xl:w-[24rem] llg:w-[20rem] lg:w-[18rem] md:w-[20rem] w-auto bg-primary drop-shadow-md grid justify-items-stretch"
    >
      <img src={service} alt="Who icon" class="justify-self-center pt-10" />
      <p class="text-center p-8 leading-relaxed text-white">
        {$t('common.how')}
      </p>
    </div>
    <div
      class="lg:-mt-16 sm:mt-8 mt-8 md:h-[26rem] h-auto xl:w-[24rem] llg:w-[20rem] lg:w-[18rem] md:w-[20rem] w-auto bg-white drop-shadow-md grid justify-items-stretch "
    >
      <img src={feedback} alt="Who icon" class="justify-self-center pt-10" />
      <p class="text-center p-8 leading-relaxed">
        {$t('common.serve')}
      </p>
    </div>
  </div>

  <div class="grid lg:grid-cols-2 grid-cols-1 px-16  mt-16 place-items-center">
    <div>
      <h1 class="text-4xl mb-6">{$t('common.whatTitle')}</h1>
      <hr class="bg-primary h-1 w-48 mb-6" />
      <p
        class="xl:w-[40rem] llg:w-[30rem] lg:w-[28rem] md:w-[44rem] w-auto  text-base text-justify leading-loose "
      >
        {$t('common.whatDesc')}
      </p>
    </div>
    <img
      src={tractor}
      alt=""
      class="xl:w-[33rem] llg:w-[30rem] lg:w-[25rem] md:w-auto xl:h-[20rem] llg:h-[23rem] h-[26rem] object-cover self-center lg:mt-0 mt-8 drop-shadow-md rounded-md"
    />
  </div>

  <a
    href="/about"
    class="justify-self-center mt-16 text-primary border-primary rounded-md border-2 h-12 w-52 grid"
  >
    <div class=" place-self-center">Learn More About AMD</div></a
  >
</section>

<!--   
Products section
   -->

<section class="bg-bgOne grid place-items-center py-16 px-8 ">
  <!-- Import Products -->
  <div class="grid justify-items-stretch ">
    <h1 class="text-3xl mb-6 ">{$t('common.importTitle')}</h1>
    <hr class="bg-primary h-1 w-44 mb-6" />
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6  ">
      <Productcard image={yirgacheffe} product={'common.importProd1'} />
      <Productcard image={sesame} product={'common.importProd2'} />
      <Productcard image={teff} product={'common.importProd3'} />
      <Productcard image={soyaBeans} product={'common.importProd4'} />
    </div>
    <a href="/import" class="justify-self-center mt-10">
      <div
        class="text-white mt-8 bg-bgTwo py-4 px-16 h-14 rounded-md text-center"
      >
        {$t('common.importLink')}
      </div>
    </a>
  </div>

  <!-- Export Products -->
  <div class="grid justify-items-stretch mt-12">
    <h1 class="text-3xl mb-6 ">{$t('common.exportTitle')}</h1>
    <hr class="bg-primary h-1 w-44 mb-6" />
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 ">
      <Productcard image={rangerover} product={'common.exportProd1'} />
      <Productcard image={excavator} product={'common.exportProd2'} />
      <Productcard image={hansaplast} product={'common.exportProd3'} />
      <Productcard image={sparePart} product={'common.exportProd4'} />
    </div>
    <a href="/export" class="justify-self-center mt-10">
      <div
        class="text-white mt-8 bg-bgTwo py-4 px-16 h-14 rounded-md text-center"
      >
        {$t('common.exportLink')}
      </div>
    </a>
  </div>
</section>
<div
  style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.64) 36.98%, rgba(29, 160, 236, 0.1) 100%);"
>
  <!-- 
  Customer Service
   -->

  <section class="">
    <div class="relative z-0 h-56">
      <img src={coffeehands} alt="" class="w-full h-56 object-cover" />
      <div
        class="absolute inset-0 z-10 bg-black bg-opacity-80 grid justify-items-stretch"
      >
        <h1 class="text-white text-3xl justify-self-center self-center">
          {$t('common.customer')}
        </h1>
      </div>
    </div>

    <div
      class="grid llg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center pb-8 "
    >
      <SeriveCard image={vector} icon={community} detail={'social'} />
      <SeriveCard image={vector} icon={message} detail={'communicate'} />
      <SeriveCard image={vector} icon={handshake} detail={'partner'} />
    </div>
  </section>

  <!-- 
  Reviews
    -->

  <section class="llg:px-24 px-12 py-16 grid place-items-center ">
    <h1 class="text-3xl mb-6 place-self-start md:pl-24 pl-12">
      {$t('common.reviewTitle')}
    </h1>
    <hr class="bg-primary h-1 w-44 mb-16 place-self-start md:ml-24 ml-12" />
    <div class="grid lg:grid-cols-2 grid-cols-1 place-items-center ">
      <p
        class="px-8 py-6 bg-white border-primary border-2 xl:w-[36rem] llg:w-[30rem] w-full text-lg text-justify leading-loose"
      >
        {$t('common.review')}
      </p>
      <img
        src={team}
        alt=""
        class="xl:h-[19rem] llg:h-[21rem] h-[24rem] lg:w-[25rem] vs:w-[30rem] w-full lg:mt-0 mt-8 rounded-md shadow-lg object-cover "
      />
    </div>
  </section>
</div>

<!-- 
Contact Us 
   -->

<section id="contact">
  <Contact />
</section>
