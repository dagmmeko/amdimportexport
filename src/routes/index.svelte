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
  import sunflower from '../../static/assets/images/sunflower.svg'
  import soyaBeans from '../../static/assets/images/Soya-Beans.svg'

  import sparePart from '../../static/assets/images/spare-part.svg'
  import rangrover from '../../static/assets/images/rangrover.svg'
  import hansaplast from '../../static/assets/images/hansaplast.svg'
  import excavator from '../../static/assets/images/excavator.svg'

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
  />
  <div
    class="absolute inset-0 z-10 bg-black bg-opacity-70 flex justify-items-stretch "
  >
    <div class="self-center md:pl-36 pl-16">
      <h1
        class="lg:leading-relaxed md:leading-relaxed leading-relaxed text-white font-sans font-light lg:w-[40rem] md:w-[30rem] w-[23rem] lg:text-6xl md:text-5xl text-4xl"
      >
        {$t('common.landTitle')}
      </h1>
      <p class="text-xl sm:w-[34rem] w-[24rem] text-white mt-8 leading-loose">
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
    <div class=" relative -mt-12">
      <img src={polygon2} alt="" class="  h-[32rem]" />
    </div>
    <div class="absolute inset-0  ">
      <img src={polygon1} alt="" class="h-[27rem]" />
    </div>
  </div>

  <div
    class="relative inset-0 z-0 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:pl-44 px-24 place-items-center"
  >
    <div
      class="-mt-8 min-h-[25rem] h-auto w-[26rem] bg-white drop-shadow-md grid justify-items-stretch"
    >
      <img src={who} alt="Who icon" class="justify-self-center pt-10" />
      <p class="text-center p-8 leading-relaxed">
        {$t('common.who')}
      </p>
    </div>
    <div
      class="lg:-mt-8 md:-mt-8 sm:mt-8 mt-8 min-h-[25rem] h-auto w-[26rem] bg-primary drop-shadow-md grid justify-items-stretch"
    >
      <img src={service} alt="Who icon" class="justify-self-center pt-10" />
      <p class="text-center p-8 leading-relaxed text-white">
        {$t('common.how')}
      </p>
    </div>
    <div
      class="lg:-mt-8 sm:mt-8 mt-8 min-h-[25rem] h-auto w-[26rem] bg-white drop-shadow-md grid justify-items-stretch"
    >
      <img src={feedback} alt="Who icon" class="justify-self-center pt-10" />
      <p class="text-center p-8 leading-relaxed">
        {$t('common.serve')}
      </p>
    </div>
  </div>

  <div
    class="grid lg:grid-cols-2 grid-cols-1 md:pl-44 px-20 justify-items-stretch mt-16 place-items-center"
  >
    <div>
      <h1 class="text-4xl mb-6">{$t('common.whatTitle')}</h1>
      <hr class="bg-primary h-1 w-48 mb-6" />
      <p
        class="llg:w-[44rem] lg:w-[35rem] md:w-[44rem] sm:w-[40rem]  text-xl leading-loose "
      >
        {$t('common.whatDesc')}
      </p>
    </div>
    <img
      src={tractor}
      alt=""
      class="w-[41rem] h-[26rem] object-cover self-center lg:mt-0 mt-8"
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

<section class="bg-bgOne grid place-items-center py-16 ">
  <!-- Import Products -->
  <div class="grid justify-items-stretch">
    <h1 class="text-4xl mb-6 ">{$t('common.importTitle')}</h1>
    <hr class="bg-primary h-1 w-48 mb-6" />
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 ">
      <Productcard image={yirgacheffe} product={'importProd1'} />
      <Productcard image={sesame} product={'importProd2'} />
      <Productcard image={sunflower} product={'importProd3'} />
      <Productcard image={soyaBeans} product={'importProd4'} />
    </div>
    <a href="#contact" class="justify-self-center mt-10">
      <div
        class="text-white mt-8 bg-bgTwo py-4 px-16 h-14 rounded-md text-center"
      >
        {$t('common.importLink')}
      </div>
    </a>
  </div>

  <!-- Export Products -->
  <div class="grid justify-items-stretch mt-24">
    <h1 class="text-4xl mb-6 ">{$t('common.exportTitle')}</h1>
    <hr class="bg-primary h-1 w-48" />
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8 ">
      <Productcard image={rangrover} product={'exportProd1'} />
      <Productcard image={excavator} product={'exportProd2'} />
      <Productcard image={hansaplast} product={'exportProd3'} />
      <Productcard image={sparePart} product={'exportProd4'} />
    </div>
    <a href="#contact" class="justify-self-center mt-10">
      <div
        class="text-white mt-8 bg-bgTwo py-4 px-16 h-14 rounded-md text-center"
      >
        {$t('common.exportLink')}
      </div>
    </a>
  </div>
</section>

<!-- 
Customer Service
 -->

<section class="">
  <div class="relative z-0 h-56">
    <img src={coffeehands} alt="" class="w-full h-56 object-cover" />
    <div
      class="absolute inset-0 z-10 bg-black bg-opacity-80 grid justify-items-stretch"
    >
      <h1 class="text-white text-5xl justify-self-center self-center">
        {$t('common.customer')}
      </h1>
    </div>
  </div>

  <div
    class="bg-bgTwo bg-opacity-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center py-16 "
  >
    <SeriveCard image={vector} icon={community} detail={'social'} />
    <SeriveCard image={vector} icon={message} detail={'communicate'} />
    <SeriveCard image={vector} icon={handshake} detail={'partner'} />
  </div>
</section>

<!-- 
Reviews
  -->

<section
  style="background: linear-gradient(360deg, #ADC1C8 0%, #F1F1F1 100%)"
  class="md:px-44 px-10 py-16 grid place-items-center "
>
  <h1 class="text-4xl mb-6 place-self-start">{$t('common.reviewTitle')}</h1>
  <hr class="bg-primary h-1 w-48 mb-16 place-self-start" />
  <div class="grid lg:grid-cols-2 grid-cols-1  ">
    <p
      class="p-12 bg-white border-primary border-2 xl:w-[44rem] lg:w-[38rem] md:w-[44rem]  w-auto text-xl text-center leading-loose"
    >
      {$t('common.review')}
    </p>
    <img src={team} alt="" class="h-[27rem] lg:ml-16 lg:mt-0 mt-8 " />
  </div>
</section>

<!-- 
Contact Us 
   -->

<section id="contact">
  <Contact />
</section>
