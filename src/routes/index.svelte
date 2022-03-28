<script>
	import landing from '../../static/assets/images/landing.jpg';
	import logo from '../../static/assets/logo/amdlogo.png';
</script>

<div class="w-full">
	<div class="w-full h-screen relative z-0">
		<img src={landing} class="object-cover h-screen w-full" alt="Landing background" />
		<div class="absolute inset-0 grid z-10 bg-black bg-opacity-80 ">
			<div class="grid place-items-center h-screen">
				<img src={logo} alt="AMD Logo" />
				<h1 class="lg:text-5xl text-3xl text-white text-center ">
					Welcome to AMD Import and Export!
				</h1>
				<h1 class="lg:text-4xl text-xl text-white">Our website is under construction!</h1>
			</div>
		</div>
	</div>
</div>

<style>
	h1 {
		font-family: 'Open Sans';
		font-style: normal;
	}
</style>
