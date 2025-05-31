<template>
    <div class="col-md-5 offset-md-1 mt-2 w-[100%] ">
        <label class="text-cyan-500 mb-1 text-sm">Image *</label>
        <form class="mt-2">
            <div class="form-group">
                <div class="relative">
                    <input
                    class="opacity-0 absolute  cursor-pointer" 
                    type="file"
                    accept="image/*"
                    @change="onImageUpload"
                    />
                    <span class="cursor-pointer">Browse File</span>
                </div>
                <div v-if="image.Preview" class="border p-2 mt-3 w-56">
                    <img :src="image.Preview" class="img-fluid" alt="Preview" />
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
const image= useState('image',()=>{
    return {
        image: null,
        Preview: null,
    }
})
const emits = defineEmits(['changeInput'])

function onImageUpload(event){
    const input = event.target
    if(input.files){
        const reader= new FileReader()
        reader.onload=(e)=>{
            image.value.Preview= e.target.result
        }
        image.value.image= input.files[0]
        reader.readAsDataURL(input.files[0])
        emits('changeInput',input.files[0],'image')
    }
}

</script>