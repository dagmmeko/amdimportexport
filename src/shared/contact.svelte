<script lang="ts">
  import landing from '../../static/assets/images/landing.jpg'

  import { t } from '$lib/translations'
</script>

<div class="relative z-0 llg:h-[55rem] h-[72rem] ">
  <img
    src={landing}
    alt=""
    class="object-cover llg:h-[55rem] h-[72rem] w-full"
  />
  <div
    class="absolute inset-0 z-10 bg-black bg-opacity-60 grid  place-items-center"
  >
    <div
      class="lg:w-[60rem] sm:w-[40rem] vs:w-[25rem] vvs:w-[22rem] w-auto grid my-16 rounded-md md:grid-cols-2 grid-cols-1 bg-bgTwo"
    >
      <form class=" grid justify-items-stretch py-16 lg:px-12 px-8">
        <h1 class="justify-self-center text-white font-semibold text-3xl mb-8">
          {$t('common.contact')}
        </h1>
        <input type="text" placeholder={$t('common.contactName')} />
        <input type="text" placeholder={$t('common.contactEmail')} />
        <textarea placeholder={$t('common.contactMessage')} class="textarea" />

        <button
          class="bg-bgOne w-40  justify-self-center py-4 rounded-md mt-4 font-medium "
        >
          {$t('common.contactButton')}
        </button>
      </form>

      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.5746017953015!2d8.74721282445034!3d50.39572110765927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bcfe86975fd76d%3A0x1934a654f83f9f31!2sBad%20Nauheimer%20Str.%208%2C%2061231%20Bad%20Nauheim%2C%20Germany!5e0!3m2!1sen!2set!4v1648675446438!5m2!1sen!2set"
        style="border:0;"
        allowfullscreen={false}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="rounded-md w-full md:h-full h-96 place-self-end"
      />
    </div>
  </div>
</div>

<style>
  input[type='text'],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    height: 150px;
  }
</style>
