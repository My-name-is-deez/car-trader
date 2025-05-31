<template>
  <div class="mt-10 flex flex-col lg:flex-row gap-8">
    <!-- Car Image (Left Side) -->
    <NuxtImg
      class="w-full lg:w-1/2 h-[300px] object-cover rounded"
      :src="`${config.public.supabase.url}/storage/v1/object/public/images/${car.image}`"
      alt="Car image"
    />

    <!-- Car Details (Right Side) -->
    <div class="flex-1">
      <h1 class="text-3xl font-bold mb-4">{{ car.name }}</h1>

      <div class="text-slate-500 flex flex-wrap items-center text-lg border-b pb-5 mb-4 gap-4">
        <p>{{ car.numberOfSeats }} seats</p>
        <span>|</span>
        <p>{{ car.miles }} miles</p>
      </div>

      <p class="font-bold text-2xl text-blue-600">${{ car.price }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  car: {
    type: Object,
  },
})
definePageMeta({
  layout: false
})

const config = useRuntimeConfig()
</script>

<style scoped>
</style>
