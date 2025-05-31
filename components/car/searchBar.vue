<template>
    <div>
        <div class="font-serif w-[800px] text-2xl rounded-full bg-white flex justify-csnter overflow-hidden drop-shadow-2xl mx-auto">
        <input
         @keyup.enter="handlesearch"
         :class="cityError ? 'border-red-400 border-2' : ''" v-model="city" type="text" class="py-2 px-5 w-full text-2xl rounded-full focus:outline-none dark:text-black" placeholder="Search by city..." />
        <button
         @click="handlesearch" 
         class="bg-sky-500 px-5 text-whit  "
         
         >search</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const city = ref('')
const cityError= ref(false)

function handlesearch(){
if(!city.value){
    return cityError.value = true
}else{
    navigateTo(`/city/${city.value}/car`)
}
}

</script>

<style scoped>

</style>