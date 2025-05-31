<template>
  <div>
    <!-- car page -->
    <div class="cont mx-auto max-w-7xl px-4 xs:px-8 sm:px-10 lg:px-6 pb-16 w-full">
      <div class="mt-32">
        <NuxtErrorBoundary>
          <!-- Updated Layout: Cards left, Sidebar right -->
          <div class="flex flex-col lg:flex-row gap-8">
            <!-- Cards List -->
            <div class="flex-1">
              <NuxtPage />
            </div>

            <!-- Sidebar -->
            <div class="w-full lg:w-[280px] shrink-0">
              <CarSideBar />
            </div>
          </div>

          <template #error="{ error }">
            <div class="w-full mb-15 flex flex-col items-center justify-center h-[500px]">
              <h1 class="text-4xl text-red-500">Error</h1>
              <p class="text-lg text-gray-700 mt-5">{{ error.message }}</p>
              <button
                @click="handleError"
                class="mt-5 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Try Again
              </button>
            </div>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const city = route.params.city.toLocaleUpperCase()

useHead({
  title: `Cars in ${city}`,
})

function handleError() {
  navigateTo(`/city/${city}/car`)
}
</script>

<style scoped>
</style>
