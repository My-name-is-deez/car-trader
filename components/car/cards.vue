<template>
  <div>
    <div class="w-full">
        <ClientOnly>
        <CarCard
         @favor="handleFavorite(car.id)"
         v-for="car in cars" :key="car.id" 
         :car="car" 
         :favored="car.id in favorite"
         />
        </ClientOnly>

    </div>
  </div>
</template>

<script setup >
const props= defineProps({
    cars:Array,
})

const favorite= useLocalStorage('favorite', {})

function handleFavorite(id){
    if(id in favorite.value){
        delete favorite.value[id]
    }else{
        favorite.value={
        ...favorite.value,
        [id] : true
    }}
}
</script>

<style scoped>

</style>
