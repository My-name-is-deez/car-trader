<template>
         <div class="mt-10">
            <div class="flex-w-[600px] justify-between dark:text-black">
                <input v-model="message.name" class="border p-1" placeholder="Name" type="text" >
                <input v-model="message.email" class="border p-1" placeholder="Email" type="text" >
                <input v-model="message.phone" class="border p-1" placeholder="phone" type="text" >
                <div class="flex mt-4 w-[600px]">
                    <textarea v-model="message.message" class="border p-1 w-full dark:text-black " placeholder="message"></textarea>
                </div>
                <button 
                :disabled="disabledButton"
                @click="onSubmit"
                class="text-white bg-blue-400 px-10 mt-4 py-3 rounded">Submit</button>
                <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMeassage }}</p>
                <p v-if="successMessage" class="text-green-500 mt-2" >{{ successMessage }}</p>
            </div>
         </div>
</template>


<script setup>
const message = ref({
    name: "",
    email: "",
    phone: "",
    message: ""
})
const successMessage = ref("")
const errorMessage= ref("")
const route = useRoute()
const disabledButton = computed(() => {
    for(let key in message.value){
        if(!message.value[key]) return true;
    }
    return false;
})


async function onSubmit(){
     try{
        const response= await $fetch(`/api/car/listings/${route.params.id}/messages`,{
            method: 'POST',
            body: message.value,
        })
        message.value = {
            name: "",
            email: "",
            phone: "",
            message: ""
        };
        successMessage.value= "message sent successfully !"
        errorMessage.value = "";

    }catch(err){
        errorMessage.value= err.statusMessage || 'Something went wrong, please try again later.'
        successMessage.value = "";
    }

}

</script>