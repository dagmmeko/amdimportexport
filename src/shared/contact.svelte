<script lang="ts">
  import landing from '../../static/assets/images/landing.jpg'
  import logo from '../../static/assets/logo/amdlogo.png'
</script>

<div class="relative z-0">
  <img src={landing} alt="" />
  <div class="absolute inset-0 z-10 bg-black bg-opacity-60">
    <div>
      <h1>Contact Us</h1>
      <div class="grid grid-cols-2">
        <form class="bg-bgTwo">
          <div>
            <label for="contact-name" class="text-white text-xl">
              <img src={logo} alt="" class="h-2 w-2" /> Full Name
            </label>
            <input />
          </div>
          <div>
            <label for="contact-email" class="text-white text-xl">
              <img src={logo} alt="" class="h-2 w-2" /> example@email.com
            </label>
            <input />
          </div>
          <div>
            <label for="contact-message" class="text-white text-xl">
              <img src={logo} alt="" class="h-2 w-2" /> Your Message
            </label>
            <textarea />
          </div>
          <button> Request Price </button>
        </form>
        <div>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.5746017953015!2d8.74721282445034!3d50.39572110765927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bcfe86975fd76d%3A0x1934a654f83f9f31!2sBad%20Nauheimer%20Str.%208%2C%2061231%20Bad%20Nauheim%2C%20Germany!5e0!3m2!1sen!2set!4v1648675446438!5m2!1sen!2set"
            width="400"
            height="250"
            style="border:0;"
            allowfullscreen={false}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </div>
</div>
