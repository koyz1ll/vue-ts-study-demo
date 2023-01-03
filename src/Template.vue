<script setup lang="ts">
import { onMounted, ref } from 'vue'

const p:any = ref(null)

onMounted(()=>{
  p.value.textContent = 'mounted!'
})
</script>

<template>
  <p ref="p">hello</p>
</template>