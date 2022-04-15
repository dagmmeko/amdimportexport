<script lang="ts">
  import Contact from '../shared/contact.svelte'
  import AboutCard from '../shared/components/about-card.svelte'
  import MissionCard from '../shared/components/mission-card.svelte'

  import { t } from '$lib/translations'

  import team from '../../static/assets/images/team.svg'
  import aboutHero from '../../static/assets/images/about-hero.svg'
  import vector from '../../static/assets/icons/vector.svg'

  import polygon1 from '../../static/assets/icons/Polygon1.svg'
  import polygon2 from '../../static/assets/icons/Polygon2.svg'
</script>

<!--  
Hero Section  
 -->

<section class="w-full  relative z-0">
  <img src={aboutHero} class="object-cover  w-full" alt="Landing background" />
  <div
    class="absolute inset-0 z-10 bg-black bg-opacity-70 flex justify-items-stretch "
  />
</section>

<!-- 
All about us Section
 -->

<section
  class="grid place-items-center"
  style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.64) 36.98%, rgba(29, 160, 236, 0.1) 100%);"
>
  <div
    class="grid grid-cols-4 gap-11 bg-white -mt-16 z-20 mx-48 p-8 drop-shadow-md"
  >
    <img
      src={aboutHero}
      alt="Manager/Owner"
      class="rounded-full h-64 w-64 object-cover border-primary border-4 ml-16 "
    />
    <div class="col-span-3 mr-24">
      <h1 class="text-2xl mb-8 ">{$t('about.whoTitle')}</h1>
      <p class="leading-loose">
        {$t('about.whoDesc')}
      </p>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-12 my-16 ">
    <AboutCard
      color="blue"
      title={$t('about.whatTitle')}
      desc={$t('about.whatDesc')}
    />
    <AboutCard
      color="orange"
      title={$t('about.whyTitle')}
      desc={$t('about.whyDesc')}
    />
    <img
      src={team}
      alt="team"
      class="w-[40rem] h-[26rem] object-cover object-top "
    />
    <AboutCard
      color="orange"
      title={$t('about.whyTitle')}
      desc={$t('about.whyDesc')}
    />
    <AboutCard
      color="blue"
      title={$t('about.workTitle')}
      desc={$t('about.workDesc')}
    />
    <img
      src={team}
      alt="team"
      class="w-[40rem] h-[26rem] object-cover object-top "
    />
  </div>
</section>

<!-- 
Why us section
 -->

<section>
  <div class="w-full  relative z-0">
    <img
      src={aboutHero}
      class="object-cover  w-full"
      alt="Landing background"
    />
    <div
      class="absolute inset-0 z-10 bg-black bg-opacity-70 justify-items-stretch "
    >
      <h1 class="text-white text-2xl">{$t('about.compTitle')}</h1>
      <p class="text-white ">{$t('about.compDesc')}</p>
    </div>
  </div>

  <div class="w-full relative z-0 ">
    <img
      src={vector}
      class="object-cover absolute -z-30  w-full"
      alt="Landing background"
    />
    <div class="relative inset-0 z-0  grid grid-cols-2 px-24 ">
      <MissionCard
        title={$t('about.missionTitle')}
        desc="missionDesc"
        color="blue"
        length={1}
      />
      <MissionCard
        title={$t('about.visionTitle')}
        desc="visionDesc"
        color="orange"
        length={1}
      />
      <MissionCard
        title={$t('about.goalsTitle')}
        desc="goalsDesc"
        color="blue"
        length={3}
      />
      <MissionCard
        title={$t('about.valuesTitle')}
        desc="valuesDesc"
        color="orange"
        length={4}
      />
    </div>
  </div>
</section>

<!-- 
Social value section
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
    class="relative inset-0 z-0 grid  lg:pl-44 px-24 place-items-center"
    style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.64) 36.98%, rgba(29, 160, 236, 0.1) 100%);"
  >
    <div class="grid grid-cols-2 ">
      <img src={team} alt="" />
      <div>
        <h1>{$t('about.socialTitle')}</h1>
        {#each new Array(3) as _, index}
          <li>{$t(`about.socialDesc.${index}`)}</li>
        {/each}
      </div>
    </div>

    <div class="grid grid-cols-2 ">
      <div>
        <h1>{$t('about.socialTypes.innovation')}</h1>
        <p>{$t('about.socialTypes.invoDesc')}</p>
        <h1>{$t('about.socialTypes.env')}</h1>
        <p>{$t('about.socialTypes.envDesc')}</p>
        <h1>{$t('about.socialTypes.social')}</h1>
        <p>{$t('about.socialTypes.socialDesc')}</p>
      </div>

      <img src={team} alt="" />
    </div>
  </div>
</section>

<section>
  <Contact />
</section>
