<script lang="ts">
  import Contact from '../shared/contact.svelte'
  import AboutCard from '../shared/components/about-card.svelte'
  import MissionCard from '../shared/components/mission-card.svelte'

  import ValuesCard from '../shared/components/values-card.svelte'
  import { t } from '$lib/translations'

  import team from '../../static/assets/images/team.svg'
  import aboutHero from '../../static/assets/images/about-hero.svg'

  import polygon1 from '../../static/assets/icons/Polygon1.svg'
  import polygon2 from '../../static/assets/icons/Polygon2.svg'
  import vision from '../../static/assets/icons/vision.svg'
  import mission from '../../static/assets/icons/mission.svg'
  import values from '../../static/assets/icons/values.svg'
  import goals from '../../static/assets/icons/goals.svg'
  import businessman from '../../static/assets/icons/businessman.svg'
  import owner from '../../static/assets/images/owner.png'
</script>

<!--  
Hero Section  
 -->

<section class="w-full  relative z-0 md:h-96 h-72">
  <img
    src={aboutHero}
    class="object-cover md:h-96 h-72  w-full"
    alt="Landing background"
  />
  <div
    class="absolute inset-0 z-10"
    style="background: linear-gradient(90deg, #8EAAB4 31.01%, rgba(142, 170, 180, 0) 122.19%);"
  >
    <h1
      class="md:pl-44 vs:pl-32 pl-16  md:pt-44 pt-32 text-white md:text-5xl text-3xl font-bold"
    >
      About us
    </h1>
    <h1 class="md:pl-44 vs:pl-32 pl-16 pt-4 vs:pr-0 pr-16 text-white text-lg">
      AMD International Import and Export
    </h1>
  </div>
</section>

<!-- 
All about us Section
 -->
<div
  style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.64) 36.98%, rgba(29, 160, 236, 0.1) 100%);"
>
  <section class="grid place-items-center md:grid-cols-3 pt-16">
    <img
      src={owner}
      alt="Manager/Owner"
      class=" rounded-xl drop-shadow-xl object-cover justify-self-center lg:w-80 w-96 md:lg:h-96 md:h-[25rem] llg:ml-44 ml-20"
    />
    <div
      class=" w-auto lg:mt-0 mt-8 col-span-2 llg:px-24 lg:px-16 vs:pl-16 pl-8 pr-8"
    >
      <h1 class="text-3xl mb-4 ml-12 text-primary font-bold  ">
        {$t('about.whoTitle')}
      </h1>
      <div class="flex drop-shadow-md">
        <div class="bg-primary flex-none w-1 mr-4" />

        <p class="leading-loose bg-white p-8 rounded-lg">
          {$t('about.whoDesc')}
        </p>
      </div>
    </div>
  </section>

  <!-- 
Missions section
 -->

  <section class="llg:grid grid-cols-2 vs:mt-16 vvs:mt-28 ">
    <div class="relative z-0  ">
      <img
        src={team}
        alt=""
        class="w-full  llg:h-full vs:h-[40rem] h-[45rem] object-cover"
      />
      <div class="absolute inset-0 z-10  bg-primary bg-opacity-60 grid ">
        <MissionCard
          icon={mission}
          title={$t('about.missionTitle')}
          desc="missionDesc"
          color="blue"
        />
        <MissionCard
          icon={vision}
          title={$t('about.visionTitle')}
          desc="visionDesc"
          color="orange"
        />
      </div>
    </div>

    <div class="grid pb-8">
      <ValuesCard
        icon={goals}
        title={$t('about.goalsTitle')}
        desc="goalsDesc"
        color="orange"
        length={3}
      />
      <ValuesCard
        icon={values}
        title={$t('about.valuesTitle')}
        desc="valuesDesc"
        color="blue"
        length={5}
      />
    </div>
  </section>
</div>

<section
  style="background: linear-gradient(180deg, rgba(173, 193, 200, 0.64) 36.98%, rgba(29, 160, 236, 0.1) 100%);"
>
  <div class="relative z-0">
    <img src={aboutHero} alt="" class="w-full sm:h-96 h-[36rem] object-cover" />
    <div
      class="absolute inset-0 z-10 bg-black bg-opacity-80 grid justify-items-stretch"
    >
      <h1
        class="text-white md:text-3xl text-2xl font-bold justify-self-center pt-16"
      >
        {$t('about.compTitle')}
      </h1>
      <p
        class="text-white justify-self-center text-center xl:px-72 lg:px-36 sm:px-16 px-4 leading-loose md:text-lg text-base"
      >
        {$t('about.compDesc')}
      </p>
    </div>
  </div>

  <div class="grid lg:grid-cols-2 place-items-center py-16  ">
    <AboutCard
      title={$t('about.howTitle')}
      desc={$t('about.howDesc')}
      color="orange"
    />
    <AboutCard
      title={$t('about.workTitle')}
      desc={$t('about.workDesc')}
      color="blue"
    />
  </div>

  <section
    class="w-full relative z-0 grid justify-items-stretch pb-2 lg:pt-0 pt-10"
  >
    <div class="absolute -z-30 ">
      <div class=" relative -mt-7">
        <img src={polygon2} alt="" class="  h-[20rem]" />
      </div>
      <div class="absolute inset-0  ">
        <img src={polygon1} alt="" class="h-[17rem]" />
      </div>
    </div>

    <div
      class="relative inset-0 z-0 grid lg:grid-cols-5 sm:grid-cols-2 place-items-center"
    >
      <img src={businessman} alt="" class="lg:block hidden pt-40 " />
      <div
        class="bg-white drop-shadow-xl border-primary border-2 rounded-md col-span-2 xl:mx-16 mx-8"
      >
        <h1
          class="pl-8 py-4 text-2xl font-semibold text-primary drop-shadow-md"
        >
          {$t('about.socialTitle')}
        </h1>
        {#each new Array(3) as _, index}
          <li class="pl-16 pr-8 leading-loose pb-4">
            {$t(`about.socialDesc.${index}`)}
          </li>
        {/each}
      </div>
      <div class="xl:px-10 px-6 lg:my-0 my-8 col-span-2">
        <div class="bg-primary drop-shadow-md ">
          <h1 class="pl-8 py-4 text-2xl font-semibold text-white">
            {$t('about.socialTypes.innovation')}
          </h1>
          <p class="px-8 leading-loose pb-8 text-white">
            {$t('about.socialTypes.invoDesc')}
          </p>
        </div>
        <div class="bg-secondary mt-4 drop-shadow-md">
          <h1 class="pl-8 py-4 text-2xl font-semibold text-white">
            {$t('about.socialTypes.env')}
          </h1>
          <p class="px-8 leading-loose pb-8 text-white">
            {$t('about.socialTypes.envDesc')}
          </p>
        </div>
        <div class="bg-primary mt-4 drop-shadow-md">
          <h1 class="pl-8 py-4 text-2xl font-semibold text-white">
            {$t('about.socialTypes.social')}
          </h1>
          <p class="px-8 leading-loose pb-8 text-white">
            {$t('about.socialTypes.socialDesc')}
          </p>
        </div>
      </div>
    </div>
  </section>
</section>

<!-- 
Social value section
 -->

<section>
  <Contact />
</section>
