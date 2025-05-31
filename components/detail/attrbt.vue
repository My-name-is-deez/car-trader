<template>
         <div class="mr-10 mt-5 border-b pb-5">
            <div v-for="x in features" :key="x" class="flex text-lg mt-2">
                <p class="rounded text-lime-800 mr-3">✔</p>
                <p>{{ x }}</p>
            </div>
         </div>
</template>

<script setup >
const props = defineProps({
    features: Array
})
</script>

<style scoped>

</style>