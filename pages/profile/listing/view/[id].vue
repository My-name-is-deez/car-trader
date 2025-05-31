<template>
<div v-if="messages" class="rounded shadow mt-20">
    <CarMessageCard 
    v-for="message in messages"
     :key="message.id" 
     :message="message"/>
</div>
    <p v-else class="text-gray-700 text-4xl dark:text-white text-center mt-20">No messages available</p>
</template>

<script setup>
definePageMeta({
    layout: 'custom',
        middleware: ['auth']
})

const route = useRoute()
const{data:messages}= await useFetch(`/api/car/listings/${route.params.id}/messages`, {})
   



</script>