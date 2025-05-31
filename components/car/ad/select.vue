<template>
    <div class="flex flex-col w-[48%] mt-2">
        <label class="text-cyan-500 mb-1 text-sm" for="">{{ title }}</label>
        <select 
        v-model="state"
        @change="onChange"
        class="p-2 border w-100 rounded dark:text-black">
            <option 
            v-for="option in options"
             :key="option.id" :value="option">{{ option }}</option>
        </select>
    </div>
</template>


<script setup>
const props =defineProps({
    title :String,
    name:String,
    options:Array
})
const emits = defineEmits(['changeInput'])
const state = ref('')
function onChange(){
emits('changeInput',state.value,props.name)
}
</script>