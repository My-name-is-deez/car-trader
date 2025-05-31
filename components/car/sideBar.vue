<template>
    <div class="bg-white text-black dark:bg-gray-900 dark:text-white">
        <div class=" shadow border w-64 mr-10 z-50 h-[190px]">
        <!-- location -->
            <div class=" p-5 flex justify-between relative cursor-pointer border-b">
            <h3>City</h3>
            <h3 @click="toggleModal('location')" class="text-blue-400 capitalize">{{ route.params.city }}</h3>
            <div v-if="modal.location" class="z-10 absolute border shadow left-60 p-5 top-1 -m-1 bg-white dark:text-black">
                <input v-model="city" type="text" class="border p-1 rounded">
                <button 
                @click="changeLocation()"
                class="bg-blue-400 w-full mt-2 rounded text-white p-1">Apply</button>
            </div>
        </div>
        <!-- make -->
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Make</h3>
            <h3 @click="toggleModal('make')" class="text-blue-400 capitalize">{{ route.params.make || "Any" }}</h3>
            <div 
            v-if="modal.make"
            class="absolute border shadow left-60 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white z-10">
            <h4 
            v-for="make in makes" :key="make"
            @click="changeMake(make)"
            class="w-1/3 dark:text-black">
                {{ make }}
            </h4>
            </div>
        </div>

        <!-- price -->
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Price</h3>
            <h3 @click="toggleModal('price')" class="text-blue-400 capitalize">{{ priceRangeText}}</h3>
            <div
            v-if="modal.price"  

            class="absolute border shadow left-60 p-5 top-1 -m-1 bg-white z-10"
            >
                <input
                class="border p-1 rounded dark:text-black"
                 type="number" placeholder="min" 
                 v-model="priceRange.min">
                 <input
                class="border p-1 rounded mt-1 dark:text-black"
                 type="number" placeholder="max" 
                 v-model="priceRange.max">
                 <button 
                 @click="priceChange()"
                 class="bg-blue-400 w-full text-white rounded p-1 mt-1 ">Apply</button>
            </div>
        </div>


    </div>
    </div>
</template>

<script setup>

const route=useRoute()
const city=ref('')
const {makes}=useCars()
const priceRange=ref({
    min:"",
    max:""
})
const modal=ref({
    make:false,
    location:false,
    price:false
})
//change state
function toggleModal(key){
    modal.value[key] = !modal.value[key]
};
//location
function changeLocation(){
    if(!city.value) return;
    if(!isNaN(parseInt(city.value))) {
        throw createError({
            statusCode: 400,
            message: 'Invalid city format'
        })
    };
    toggleModal('location')
    navigateTo(`/city/${city.value}/car/${route.params.make}`)
    city.value = ''
}
// make 
function changeMake(make){
    toggleModal('make')
    navigateTo(`/city/${route.params.city}/car/${make}`)
}

// price
const priceRangeText= computed(()=> {
    const minPrice=route.query.minPrice
    const maxPrice=route.query.maxPrice

    if(!minPrice && !maxPrice) return "Any"
    else if(!minPrice && maxPrice){return `<$${maxPrice}`}
    else if(minPrice && !maxPrice){return `>$${minPrice}`}
    else{return `$${minPrice} - $${maxPrice}`}
})

function priceChange(){
    toggleModal('price')
    navigateTo(`/city/${route.params.city}/car/${route.params.make}?minPrice=${priceRange.value.min}&maxPrice=${priceRange.value.max}`)
    priceRange.value.min = ''
    priceRange.value.max = ''
}


</script>

<style scoped>

</style>