<template>
  <div class="w-full">
    <ClientOnly>
      <CarCard
        v-for="car in props.cars"
        :key="car.id"
        :car="car"
        :favored="carStore.favorite[car.id]"     
        @favor="handleFavorite"                  
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import { useCarStore } from '~/stores/car'

const props = defineProps({ cars: Array })

const carStore = useCarStore()
carStore.loadFavorites()

function handleFavorite(id) {
  carStore.toggleFavorite(id)
}
</script>
