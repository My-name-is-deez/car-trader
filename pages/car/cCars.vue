<template>
  <div class="mt-20 px-4 max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">Available Cars</h1>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="car in useCars.cars"
        :key="car.id"
        class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col card-hover card-hover-effect mb-3"
        @click="navigateTo(`/car/${car.name}-${car.id}`)"
      >
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
  </div>
</template>

<script setup>
import { useCarStore } from '~/stores/car'
import { useRouter, useRuntimeConfig } from '#imports'

const useCars = useCarStore()
const router = useRouter()
const config = useRuntimeConfig()

function navigateTo(path) {
  router.push(path)
}

onMounted(() => {
  useCars.fetchCars()
})
</script>

<style scoped>
/* Optional: Add text clamp support */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
