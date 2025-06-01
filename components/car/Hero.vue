<template>
  <div class="relative h-screen w-full overflow-hidden">
    <!-- Background video -->
    <video
      controls preload="auto"
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="../../assets/afterComp2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 bg-black opacity-50 z-10"></div>

    <div class="z-20 absolute w-full h-full flex justify-center items-center">
      <div class="text-center w-1/2">
        <h1 class="text-7xl text-white font-serif mb-10">Find your drive</h1>
        <!-- search bar -->
        <CarSearchBar /> 
      </div>
    </div>
  </div>
</template>


