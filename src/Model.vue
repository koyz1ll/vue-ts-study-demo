<!--表单绑定 v-model-->
<script setup lang="ts">
import {ref} from 'vue';
const text = ref('');
function onInput(e:any){
    text.value = e.target.value;
}

</script>

<template>
    <input v-model="text" placeholder="Type here">
    <p>{{ text }}</p>
</template>