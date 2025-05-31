<template>
  <!-- card -->
  <div
    class="relative shadow border border-gray-200 dark:border-gray-700 
           w-full overflow-hidden mb-5 cursor-pointer h-[200px] 
           bg-white dark:bg-gray-800 transition-colors duration-300 flex"
  >
    <img
      @click="emit('favor', car.id)"
      :src="favored ? hertFilled : hertOuline"
      class="absolute w-7 right-5 top-2 z-10"
    />
    <div @click="navigateTo(`/car/${car.name}-${car.id}`)" class="flex h-full w-full">
      <NuxtImg class="w-[300px] h-full object-cover" :src="`${config.public.supabase.url}/storage/v1/object/public/images/${car.image}`" alt="" />
      <div class="p-4 flex flex-col text-black dark:text-white">
        <h1 class="text-blue-700 dark:text-blue-400 font-semibold">{{ car.name }}</h1>
        <p class="text-gray-700 dark:text-gray-300">{{ car.description }}</p>
        <h1 class="mt-auto text-xl">${{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NuxtImg } from '#components'
import hertOuline from '../assets/heartOutline.png'
import hertFilled from '../assets/heartFilled.png'

const props = defineProps({
  car: Object,
  favored: Boolean
})

const emit = defineEmits(['favor'])
const config = useRuntimeConfig()
</script>

<style scoped>
</style>
