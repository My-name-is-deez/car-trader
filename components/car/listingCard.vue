<template>
    <div class="dark:border  shadow rounded overflow-hidden flex justify-between mb-4 bg-white text-black dark:bg-gray-900 dark:text-white">
        <div class="flex ">
            <img :src= "`${config.public.supabase.url}/storage/v1/object/public/images/${listing.image}`" class="w-80 mr-2 h-44">
            <div class="p-3">
                <h1 class="text-2xl">{{ listing.name }}</h1>
                <p class="text-blue-400">${{ listing.price }}</p>
            </div>
        </div>
        <div class="p-3 flex">
            <NuxtLink :to="`/profile/listing/view/${listing.id}`" class="text-blue-400">Veiw</NuxtLink>
            <p 
            @click="emits('deleteClick', listing.id )"
            class="text-red-400 cursor-pointer ml-2"
            >Delete</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    listing:Object,
})
const emits= defineEmits(['deleteClick']) 

const config = useRuntimeConfig()

</script>

