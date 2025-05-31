<template>
  <div class="relative flex flex-col items-center h-screen max-h-[500px] bg-gray-100 dark:bg-gray-900 px-4">
    <!-- Title -->
    <h1 class="absolute top-6 font-bold text-gray-900 text-4xl dark:text-white text-center">
      How does it work?
    </h1>

    <!-- Card Container -->
    <div class="mt-28 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-7xl">
      <!-- Card 1 -->
      <div class="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow card-hover-effect ">
        <div class="w-[200px] h-[200px] mb-4 relative overflow-hidden rounded-md">
          <img src="../../assets/02.png" alt="Step 1" class="absolute inset-0 w-full h-full object-cover" />
        </div>        <p class="text-lg font-semibold text-gray-800 dark:text-yellow-500 ">01.</p>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Search Anywhere in Iraq</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Description for step one. Brief and clear explanation.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow card-hover-effect ">
        <div class="w-[200px] h-[200px] mb-4 relative overflow-hidden rounded-md">
          <img src="../../assets/01.png" alt="Step 1" class="absolute inset-0 w-full h-full object-cover" />
        </div>        <p class="text-lg font-semibold text-gray-800 dark:text-yellow-500 ">02.</p>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Filter by your preference</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Description for step two. Keep it informative and short.
        </p>
      </div>

      <!-- Card 3 -->
      <div class="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow card-hover-effect ">
        <div class="w-[200px] h-[200px] mb-4 relative overflow-hidden rounded-md">
          <img src="../../assets/03.png" alt="Step 1" class="absolute inset-0  cover mt-6" />
        </div>        <p class="text-lg font-semibold text-gray-800 dark:text-yellow-500 ">03.</p>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Meet with a trader</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Description for step three. Explain what to expect next.
        </p>
      </div>
    </div>
  </div>
</template>



<style >
.card-hover-effect {
  @apply relative flex flex-col items-center text-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow transition-all duration-300;
}
.card-hover-effect::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 4px;
  background-color: #3b82f6; 
  transition: width 0.5s ease;
}
.card-hover-effect:hover::after {
  width: 100%;
}
.dark .card-hover-effect::after {
  background-color: #eab308; 
}

.hh{
  cursor:url('../../assets/image.png') 16 16, auto;
}
</style>
