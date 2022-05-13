<script>
  import logo from '../../static/assets/logo/amdlogo.webp'
  import facebook from '../../static/assets/social-media/facebook.svg'
  import twitter from '../../static/assets/social-media/twitter.svg'
  import linkedin from '../../static/assets/social-media/linkedin.svg'
  import instagram from '../../static/assets/social-media/instagram.svg'

  import location from '../../static/assets/icons/location.svg'
  import phone from '../../static/assets/icons/phone.svg'
  import whatsapp from '../../static/assets/icons/whatsapp.svg'
  import email from '../../static/assets/icons/email.svg'
  import copyright from '../../static/assets/icons/copyright.svg'
</script>

<div class="grid lg:grid-cols-3 md:grid-cols-5 vs:grid-cols-1 bg-bgTwo py-2">
  <div class="bg-white rounded-full h-28 w-28 grid place-self-center  ">
    <img src={logo} alt="" class="place-self-center" />
  </div>

  <div class="lg:mt-16 my-8 grid lg:col-span-1 md:col-span-2">
    <div class="grid grid-cols-4 justify-self-center gap-10 ">
      <a href="/" class="grid">
        <img src={facebook} alt="Facebook Link" class=" place-self-center" />
      </a>
      <a href="/" class="grid">
        <img src={twitter} alt="Twitter Link" class="place-self-center" />
      </a>
      <a href="/" class="grid">
        <img src={linkedin} alt="Linkedin Link" class="place-self-center" />
      </a>
      <a href="/" class="grid">
        <img src={instagram} alt="Instagram Link" class="place-self-center" />
      </a>
    </div>
    <div class="flex items-center place-self-center pt-8">
      <h1 class="text-white font-medium text-base px-4 ">2022</h1>

      <img src={copyright} alt="Facebook Link" class="" />
      <h1 class="text-white font-medium text-base px-4 ">
        AMD International Import-Export Trading Company
      </h1>
    </div>
  </div>
  <div
    class="lg:pl-16 pl-8 lg:mt-0 my-8 place-self-center lg:col-span-1 vs:col-span-2 col-span-1 grid md:grid-cols-1 vs:grid-cols-2 grid-cols-1"
  >
    <div class="flex items-center pb-4">
      <img src={phone} alt="" />
      <h1 class="text-white font-medium text-base px-4 ">+4960327843114</h1>
    </div>
    <div class="flex items-center pb-4">
      <img src={whatsapp} alt="" />
      <h1 class="text-white font-medium text-base px-4 ">+4915212947362</h1>
    </div>
    <div class="flex items-center pb-4">
      <img src={email} alt="" />
      <h1 class="text-white font-medium text-base px-4 ">
        info@amdimportexport.com
      </h1>
    </div>
    <div class="flex items-center">
      <img src={location} alt="" />
      <h1 class="text-white font-medium text-base px-4 ">
        Bad Nauheimer Str. 8 , 61231
      </h1>
    </div>
  </div>
</div>
