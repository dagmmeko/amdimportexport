<script>
  import logo from '../../static/assets/logo/amdlogo.png'
  import facebook from '../../static/assets/social-media/facebook.svg'
  import twitter from '../../static/assets/social-media/twitter.svg'
  import linkedin from '../../static/assets/social-media/linkedin.svg'
  import instagram from '../../static/assets/social-media/instagram.svg'

  import location from '../../static/assets/icons/location.svg'
  import phone from '../../static/assets/icons/phone.svg'
  import email from '../../static/assets/icons/email.svg'
  import copyright from '../../static/assets/icons/copyright.svg'
</script>

<div class="grid lg:grid-cols-3 grid-cols-1 bg-bgTwo py-10">
  <div
    class="bg-white rounded-full h-28 w-28 grid lg:ml-44 ml-0 place-self-center "
  >
    <img src={logo} alt="" class="place-self-center" />
  </div>

  <div class="grid lg:mt-0 mt-16">
    <div class="grid grid-cols-4 place-self-center">
      <a href="/">
        <img src={facebook} alt="Facebook Link" class="lg:px-8 px-4" />
      </a>
      <a href="/">
        <img src={twitter} alt="Twitter Link" class="lg:px-8 px-4" />
      </a>
      <a href="/">
        <img src={linkedin} alt="Linkedin Link" class="lg:px-8 px-4" />
      </a>
      <a href="/">
        <img src={instagram} alt="Instagram Link" class="lg:px-8 px-4" />
      </a>
    </div>
    <div class="flex items-center place-self-center pt-8">
      <h1 class="text-white font-medium text-xl px-4 ">2022</h1>

      <img src={copyright} alt="Facebook Link" class="px-2" />
      <h1 class="text-white font-medium text-xl px-4 ">
        AMD International Trading
      </h1>
    </div>
  </div>
  <div class="pl-16 lg:mt-0 mt-16 place-self-center">
    <div class="flex items-center pb-4">
      <img src={phone} alt="" />
      <h1 class="text-white font-medium text-xl px-4 ">+251 91 148 0875</h1>
    </div>
    <div class="flex items-center pb-4">
      <img src={email} alt="" />
      <h1 class="text-white font-medium text-xl px-4 ">
        info@amdimportexport.com
      </h1>
    </div>
    <div class="flex items-center">
      <img src={location} alt="" />
      <h1 class="text-white font-medium text-xl px-4 ">
        Bad Nauheimer Str. 8 , 61231
      </h1>
    </div>
  </div>
</div>
