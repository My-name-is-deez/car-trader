<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class=" font-mono mb-15 text-7xl">{{ error?.statusCode }}</h1>
        <h3 class="text-red-400 font-mono mb-40 text-5xl">{{error?.message}}!</h3>
            <Button 
            @click="handleError"
            class="border-2 p-2 rounded-full hover:text-white hover:bg-sky-500 transition duration-300 ease-in-out">
            <- Back Home</Button>
    </div>
</template>

<script setup lang="ts">
const error= useError();

    function handleError(){
        navigateTo('/')
    }
</script>