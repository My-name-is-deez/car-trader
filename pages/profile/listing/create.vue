<template>
    <div class="bg-white text-black dark:bg-gray-900 dark:text-white">
         <div class="mt-24">
            <h1 class="text-5xl">create a New Listing</h1>
         </div>
         <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
            <CarAdSelect
             name="make"
             title="Make *"
             :options="makes"
             @changeInput="onChangeInput"
             />
            <CarAdInput
            :name="input.name"
            :title="input.title"
            :placeholder="input.placholder"
            @changeInput="onChangeInput"
            v-for="input in inputs"
            :key="input.id"
            />
            <CarAdTextArea
            name="description"
            title="Description *"
            placeholder=""
            @changeInput="onChangeInput"
            />
           <CarAdImage 
           @changeInput="onChangeInput"
           />
           <div>
            <button
            @click="handleSubmit"
            :disabled="isButtonDisabled"
             class="bg-blue-400 text-white rounded py-2 px-7 mt-3">
             Submit</button>
            <p v-if="errorMeassage" class="text-red-500 mt-2">{{ errorMeassage }}</p>
           </div>
         </div>
         

    </div>
</template>

  
<script setup>
const user= useSupabaseUser()
const supabase= useSupabaseClient()
definePageMeta({
    layout: 'custom',
        middleware: ['auth']
})
const {makes}= useCars()  
const errorMeassage= ref('')

const info =useState('adInfo',()=>{
    return{
        make: '',
        model: '',
        year: '',
        price: '',
        miles: '',
        city: '',
        seats:'',
        features:'',
        price:'',
        description: '',
        image: null,
    }
})

function onChangeInput(data,name){
    info.value[name] = data
}

const inputs=[
    {
        id:1,
        title:'Model *',
        name:'model',
        placholder:'civic'
    },
    {
        id:2,
        title:'Year *',
        name:'year',
        placholder:'2019'
    },
    {
        id:3,
        title:'Price *',
        name:'price',
        placholder:'10000'
    },
    {
        id:4,
        title:'Miles *',
        name:'miles',
        placholder:'10000'
    },
    {
        id:5,
        title:'City *',
        name:'city',
        placholder:'basra'
    },
    {
        id:6,
        title:'Number of Seats *',
        name:'seats',
        placholder:'5'
    },
    {
        id:7,
        title:'Features *',
        name:'features',
        placholder:'leather interior, sunroof'
    },
]
  
async function handleSubmit (){
    const fileName= Math.floor(Math.random() * 100000000000000)
    const {data, error} = await supabase.storage.from('images').upload(`public/${fileName}`, info.value.image)
    if(error){
        errorMeassage.value= "Cannot upload image, please try again later."
        return
    } 
    const body={
        ...info.value,
        city: info.value.city.toLowerCase(),
        features:info.value.features.split(", "),
        numberOfSeats: parseInt(info.value.seats),
        price: parseInt(info.value.price),
        miles: parseInt(info.value.miles),
        year: parseInt(info.value.year),
        name: info.value.make + ' ' + info.value.model,
        listerId: user.value.id,
        image:data.path,
    }
    delete body.seats 


    try{
        const response= await $fetch('/api/car/listings',{
            method: 'POST',
            body
        })
        
        navigateTo('/profile/listing')

    }catch(err){
        errorMeassage.value=err.statusMessage || 'Something went wrong, please try again later.'
        await supabase.storage.from('images').remove(data.path)
    }



}



const isButtonDisabled= computed(()=>{
    for(let key in info.value){
        if(!info.value[key]) return true
    }
    return false
})

</script>