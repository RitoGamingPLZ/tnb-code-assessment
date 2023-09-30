<script lang="ts" setup>
</script>

<template>
  <!-- TODO text family: Open Sans, Roboto Slab -->
  <div class="relative flex flex-col bg-white min-h-screen min-w-screen">
    <header class="sticky top-0 bg-primary-900 w-full h-[124px] z-10">

    </header>

    <main>
      <!-- banner section -->
      <section class="w-full">
        <img class="w-full" src="src/assets/images/banner-1.png" />
      </section>

      <!-- Introduction section -->
      <section class="w-full px-17.5 space-y-10 -translate-y-12">
        <!-- What's New Block -->
        <div>
          <h4 class=" text-lg font-bold text-white">What's New</h4>
          <!-- container -->
          <div class="grid grid-cols-12 gap-5">
            <div v-for="i in 3" :key="i" class="col-span-4 aspect-[2/1] p-5 flex flex-col border-l-6 border-primary-700 bg-neutral-50">
              <p class="flex-1 text-neutral-900 font-semibold">
                randow text
              </p>
              <p class="text-primary-700 font-bold">Register Now »</p>
            </div>
          </div>
        </div>

        <!-- Introduction Block -->
        <div>
          <div class="grid grid-cols-12 gap-5">
            <div class="col-start-3 col-span-8 flex flex-col">
              <p class=" text-neutral-900 text-center ">
                Tourism Excellence North (TEN) provides tourism operators, communities, and destinations across Northern Ontario with the knowledge they need to succeed by connecting learners to a community of like-minded Northern Ontario tourism
                professionals
                and a network of industry tools and resources.
              </p>
              <br />
              <h4 class="text-primary-700 text-center font-bold">Enroll today to access online and in-person training courses »</h4>
            </div>
          </div>
        </div>

        <!-- Search Block -->
        <div>
          <div class="grid grid-cols-12 gap-5">
            <div class="col-start-4 col-span-6 flex px-5 space-x-2.5">
              <input class="flex-1 h-12 border-2 rounded-sm border-neutral-400 overflow-hidden p-4" />
              <button class="flex justify-center items-center rounded-4 bg-primary-700 text-white px-5">
                Search »
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Learn more about course section -->
      <section class="w-full px-17.5 space-y-10 py-12 bg-primary-900">
        <div class="grid grid-cols-12 gap-5">
          <h3 class="col-span-10 col-start-2 text-white  text-3xl text-center">
            Learn at your own pace, online or in-person
          </h3>
        </div>
        <!-- Selection Block -->
        <div>
          <h4 class="text-white font-bold text-lg mb-5">Tell use who you are and we will suggest training for you</h4>
          <div class="grid grid-cols-12 gap-5">
            <div v-for="i in 3" :key="i" class="col-span-4 p-6 flex flex-col bg-neutral-50">
              <p class="text-primary-700 text-center">I am a tourism business owner or operator</p>
            </div>
          </div>
        </div>


        <!-- Browse Online Course Block -->
        <div class="relative">
          <div class="flex justify-between mb-5">
            <h4 class="text-white font-bold text-lg">Tell use who you are and we will suggest training for you</h4>
            <button class="text-white ">See all online courses »</button>
          </div>
          <div class=" grid grid-cols-12 gap-5">
            <article v-for="i in 4" :key="i" class="col-span-3 flex flex-col aspect-[0.8] bg-neutral-50">
              <img src="src/assets/images/thumbnail-1.png" class="aspect-video w-full" />
              <div class="flex-1 p-5">
                <p class="font-semibold">Course for Operators #1</p>
              </div>
            </article>

            <button class="absolute left-full top-1/2 translate-x-2.5 -translate-y-1/2 text-white">
              »
            </button>
          </div>
        </div>

        <!-- Popular Training Topic Block -->
        <div>
          <div class="flex justify-between mb-5">
            <h4 class="text-white font-bold text-lg">See our most popular training topics</h4>
            <button class="text-white ">See all training »</button>
          </div>
          <div class=" grid grid-cols-12 gap-5">
            <button v-for="i in 8" :key="i" class="col-span-3 bg-primary-100 rounded-4 p-3 text-primary-900">
              Training Topic
            </button>
          </div>
        </div>

        <!-- Upcoming In-person training topics -->
        <div class="relative">
          <div class="flex justify-between mb-5">
            <h4 class="text-white font-bold text-lg">Upcoming In-person training</h4>
            <button class="text-white ">See all in-person courses »</button>
          </div>
          <div class="grid grid-cols-12 gap-5">
            <article v-for="i in 2" :key="i" class="col-span-6 flex  aspect-[2.48] bg-neutral-50">
              <img src="src/assets/images/thumbnail-1.png" class="aspect-[0.942] h-full" />
              <div class="flex-1 p-5">
                <p class="font-semibold">Course for Operators #1</p>
              </div>
            </article>

            <button class="absolute left-full top-1/2 translate-x-2.5 -translate-y-1/2 text-white">
              »
            </button>
          </div>
        </div>
      </section>

      <!-- Goal Section -->
      <section class="relative px-17.5 space-y-10 py-12">
        <div class="grid grid-cols-12 gap-5">
          <h3 class="col-span-8 col-start-3  text-3xl text-center">
            At TEN, our goal is to
          </h3>
        </div>

        <!-- Video List Block -->
        <div>
          <div class="grid grid-cols-12 gap-5">
            <article v-for="i in 3" :key="i" class="col-span-4 flex flex-col bg-neutral-50">
              <p class="font-semibold text-neutral-800 text-center p-5">Strengthen Northern Ontario tourism as a whole </p>
              <video class=" aspect-video w-full bg-black">

              </video>
            </article>
          </div>
        </div>

        <div class="mx-auto w-fit text-center">
          <button class="text-primary-900">Learn more about TEN »</button>
        </div>
      </section>

      <!-- Member Section -->
      <section class="relative px-17.5 space-y-10 py-12 bg-[url('src/assets/images/background-1.png')] bg-cover">
        <div class="grid grid-cols-12 gap-5">
          <h3 class="col-span-8 col-start-3 text-white text-3xl text-center">
            TEN training is already helping operators, communities, and destinations like you
          </h3>
        </div>

        <!-- Member Block -->
        <div class="grid grid-cols-12 gap-5">
          <article v-for="i in 3" :key="i" class="col-span-4 flex flex-col aspect-[0.83] bg-neutral-50 p-5 space-y-5">
            <img src="src/assets/images/background-1.png" class="mx-auto w-36 aspect-square rounded-full">
            <p class="text-center flex-1">
              When I read through best practices, I see a checklist of what I have to do to have a good visitor experience in terms of a community, destination or route. That’s a really powerful thing.
            </p>
            <h4 class="text-center font-bold">Dr. Rebecca Pollock</h4>
            <p class="text-center font-bold">Executive Director, <span class="text-primary-700">Georgian Bay Biosphere Reserve</span></p>
          </article>
        </div>

        <div class="grid grid-cols-12 gap-5">
          <h3 class="col-span-8 col-start-3 text-white text-3xl text-center">
            Get started
          </h3>
        </div>
        <div class="w-fit mx-auto">
          <button class="text-primary-700 bg-white rounded-4 px-5 py-1.5">Enroll »</button>
        </div>
      </section>
    </main>

    <footer class="relative px-17.5 space-y-10 py-12 bg-neutral-100 w-full h-[215px]">
      <div class="grid grid-cols-12 gap-5">
        <div class=" col-span-8 col-start-3 -mx-2.5 flex">
          <div class="flex justify-center items-center flex-[5]">
            <h4 class="font-bold">Still not sure what TEN can do for you? </h4>
          </div>

          <div class="flex flex-col justify-center items-center flex-3 space-y-5">
            <button class="rounded-4 w-full h-10 bg-primary-700 text-white px-3 py-1">Talk to a broker in your area »</button>
            <button class="rounded-4 w-full h-10 bg-primary-700 text-white px-3 py-1">Check out our FREE resources »</button>
          </div>
        </div>
      </div>
    </footer>
    <div class="absolute inset-0 grid grid-cols-12 px-17.5 gap-5 pointer-events-none">
      <div v-for="i in 12" :key="i" class="bg-red-600/10 col-span-1 h-full"></div>
    </div>
  </div>
</template>