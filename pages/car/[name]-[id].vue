<template>
<div>
    
        <DetailHero :car="car"/>
        <DetailAttrbt :features="car.features"/>
        <DetailDescription :description="car.description"/>
        <DetailContact/>

</div>

</template>

<script setup>
definePageMeta({
    layout: 'custom',
   
})
const route = useRoute();
const name= route.params.name
const id= route.params.id
const {data:car}= await useFetchCar(id)

if(!car.value){
    throw createError({
        statusCode: 404,
        statusMessage: `Car with ID: ${id}does not exist`,
    })
}

useHead({
  title:`${name} ${id} details`,
});
</script>

<style scoped>

</style>