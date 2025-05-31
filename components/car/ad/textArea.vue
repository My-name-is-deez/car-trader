<template>
    <div class="flex flex-col w-[100%] mt-2">
        <label class="text-cyan-500 mb-1 text-sm" for="">{{ title }}</label>
        <textarea
         @input="onChange"
         :name="name"
         v-model="state"
         type="text"
         :placeholder="placeholder"
         class="p-2 border w-100 rounded dark:text-black">
        </textarea>
    </div>
</template>


<script setup>
const props =defineProps({
    title:String,
    name:String,
    placeholder:String
})
const emits = defineEmits(['changeInput'])
const state = ref('')
function onChange(){
emits('changeInput',state.value,props.name)
}
</script>