<template>
  <div class="mt-20 px-4 max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-8 text-black dark:text-white">Your Favorite Cars</h1>

    <div v-if="carStore.favoriteCars.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="car in carStore.favoriteCars"
        :key="car.id"
        class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg card-hover-effect
               transition-shadow duration-300 cursor-pointer flex flex-col mb-3 relative"
        @click="navigateTo(`/car/${car.name}-${car.id}`)"
      >
        <img
          @click.stop="carStore.toggleFavorite(car.id)"
          :src="carStore.favorite[car.id] ? hertFilled : hertOuline"
          class="absolute w-7 right-4 top-3 z-10"
        />

        <img
          :src="`${config.public.supabase.url}/storage/v1/object/public/images/${car.image}`"
          alt="Car image"
          class="w-full h-48 object-cover rounded-t-lg"
          loading="lazy"
        />

        <div class="p-4 flex flex-col flex-grow">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 truncate">
            {{ car.name }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {{ car.description }}
          </p>
          <div class="mt-auto">
            <span class="text-lg font-bold text-blue-600 dark:text-blue-400">
              ${{ car.price }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="text-gray-500 dark:text-gray-400">No favorite cars yet.</p>
  </div>
</template>

<script setup>
import { useCarStore } from '@/stores/car'
import hertOuline from '@/assets/heartOutline.png'
import hertFilled from '@/assets/heartFilled.png'

const config = useRuntimeConfig()
const carStore = useCarStore()

await carStore.fetchCars()
carStore.loadFavorites()

function navigateTo(path) {
  useRouter().push(path)
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
