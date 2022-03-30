<script lang="ts">
  import { t } from '$lib/translations'
  import landing from '../../static/assets/images/landing.jpg'
  import logo from '../../static/assets/logo/amdlogo.png'
  import polygon1 from '../../static/assets/icons/Polygon1.svg'
  import polygon2 from '../../static/assets/icons/Polygon2.svg'
  import vector2 from '../../static/assets/icons/Vector2.svg'

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
  <div class="absolute inset-0 z-10 bg-black bg-opacity-60 ">
    <div class="">
      <h1 class="text-white font-sans font-light text-7xl ">
        {$t('common.landTitle')}
      </h1>
      <p class="w-96 text-3xl text-white">
        {$t('common.landDesc')}
      </p>
      <a href="#contact" class="">
        <div class="text-white bg-bgTwo p-4 w-56 h-14 rounded-md">
          {$t('common.contact')}
        </div>
      </a>
    </div>
  </div>
</section>

<!-- 
  ABOUT US SECTION
    -->

<section class="w-full relative z-0 bg-bgOne">
  <div class="relative z-0">
    <img src={polygon2} alt="" />
    <div class="absolute inset-0 z-10">
      <img src={polygon1} alt="" />
    </div>
  </div>
  <div class="absolute inset-0 z-10 grid grid-cols-3 ">
    <div class="-m-8 h-80 w-96 bg-white">
      <img src={logo} alt="Who icon" />
      <p class="text-center">
        {$t('common.who')}
      </p>
    </div>
    <div class="-m-8 h-80 w-96 bg-white">
      <img src={logo} alt="Who icon" />
      <p class="text-center">
        {$t('common.how')}
      </p>
    </div>
    <div class="-m-8 h-80 w-96 bg-white">
      <img src={logo} alt="Who icon" />
      <p class="text-center">
        {$t('common.serve')}
      </p>
    </div>
  </div>
  <div class="grid grid-cols-2">
    <div>
      <h1>{$t('common.whatTitle')}</h1>
      <p>{$t('common.whatDesc')}</p>
    </div>
    <img src={landing} alt="" />
  </div>
</section>

<!--   
Products section
   -->

<section class="bg-bgOne">
  <!-- Import Products -->
  <div>
    <h1>{$t('common.importTitle')}</h1>
    <div class="grid grid-cols-4">
      <div class="h-64 w-72">
        <img src={landing} alt="" />
        <h1>{$t('common.importProd1')}</h1>
      </div>
      <div class="h-64 w-72">
        <img src={landing} alt="" />
        <h1>{$t('common.importProd2')}</h1>
      </div>
      <div class="h-64 w-72">
        <img src={landing} alt="" />
        <h1>{$t('common.importProd3')}</h1>
      </div>
      <div class="h-64 w-72">
        <img src={landing} alt="" />
        <h1>{$t('common.importProd4')}</h1>
      </div>
    </div>
    <a href="#contact" class="">
      <div class="text-white bg-bgTwo p-4 w-56 h-14 rounded-md">
        {$t('common.importLink')}
      </div>
    </a>
  </div>

  <!-- Export Products -->
  <div>
    <h1>{$t('common.exportTitle')}</h1>
    <div class="grid grid-cols-4">
      <div class="h-64 w-72">
        <img src={landing} alt="" />
        <h1>{$t('common.exportProd1')}</h1>
      </div>
      <div class="h-64 w-72">
        <img src={landing} alt="" />
        <h1>{$t('common.exportProd2')}</h1>
      </div>
      <div class="h-64 w-72">
        <img src={landing} alt="" />
        <h1>{$t('common.exportProd3')}</h1>
      </div>
      <div class="h-64 w-72">
        <img src={landing} alt="" />
        <h1>{$t('common.exportProd4')}</h1>
      </div>
    </div>
    <a href="#contact" class="">
      <div class="text-white bg-bgTwo p-4 w-56 h-14 rounded-md">
        {$t('common.exportLink')}
      </div>
    </a>
  </div>
</section>

<!-- 
Customer Service
 -->

<section>
  <div class="relative z-0 h-56">
    <img src={landing} alt="" class="w-full h-56 object-cover" />
    <div class="absolute inset-0 z-10 bg-black bg-opacity-60">
      <h1 class="text-white text-5xl">{$t('common.customer')}</h1>
    </div>
  </div>

  <div class="bg-bgTwo bg-opacity-20 grid grid-cols-3 ">
    <div class="relative z-0 h-72 w-96 bg-white mt-24">
      <div class="relative z-0">
        <img src={vector2} alt="" />
        <div class="absolute inset-0 z-10">
          <img src={logo} alt="" class="bg-white h-36 w-36 -my-20" />
        </div>
      </div>

      <p>{$t('common.social')}</p>
    </div>
    <div class="relative z-0 h-72 w-96 bg-white">
      <div class="relative z-0">
        <img src={vector2} alt="" />
        <div class="absolute inset-0 z-10">
          <img src={logo} alt="" class="bg-white h-36 w-36 -my-20" />
        </div>
      </div>

      <p>{$t('common.communicate')}</p>
    </div>
    <div class="relative z-0 h-72 w-96 bg-white">
      <div class="relative z-0">
        <img src={vector2} alt="" />
        <div class="absolute inset-0 z-10">
          <img src={logo} alt="" class="bg-white h-36 w-36 -my-20" />
        </div>
      </div>

      <p>{$t('common.partner')}</p>
    </div>
  </div>
</section>

<!-- 
Reviews
  -->

<section
  style="background: linear-gradient(360deg, #ADC1C8 0%, #F1F1F1 100%)"
  class=" py-24"
>
  <h1>{$t('common.reviewTitle')}</h1>
  <div class="grid grid-cols-2">
    <p class="p-8 bg-white border-blue-500 w-[33rem] h-80">
      {$t('common.review')}
    </p>
    <img src={landing} alt="" class="w-[33rem] h-80" />
  </div>
</section>

<!-- 
Contact Us
   -->

<section id="contact">
  <Contact />
</section>
