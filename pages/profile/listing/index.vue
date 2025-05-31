<template>
    <div class="flex justify-between mt-24 items-center 
    bg-white text-black dark:bg-gray-900 dark:text-white
    ">
        <h1 class="text-5xl">My Listings</h1>
        <NuxtLink
         class="bg-blue-400 w-9 h-9  text-white font-bold flex justify-center items-center rounded-full cursor-pointer"
         to="/profile/listing/create"
        >+</NuxtLink>
    </div>
    <!-- cards -->
    <div class="shadow rounded p-3 mt-5">
        <CarListingCard 
        v-for="listing in listings" :key="listing.id"
        :listing="listing"
        @delete-click="handleDelete"
        />
    </div>

</template>

  
<script setup>
definePageMeta({
    layout: 'custom',
    middleware: ['auth'],
    
})
const user = useSupabaseUser()
const {data:listings}= await useFetch(
    `/api/car/listings/user/${user.value.id}`,
)


async function handleDelete(id){
    await $fetch(`/api/car/listings/${id}`, {
        method: 'DELETE',
    })
    listings.value = listings.value.filter(listing => listing.id !== id)
}

</script>