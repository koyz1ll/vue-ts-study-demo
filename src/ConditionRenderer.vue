<!--列表渲染-->
<script setup lang="ts">
import { ref } from 'vue'

// 给每个 todo 对象一个唯一的 id
let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])

function addTodo() {
  if(newTodo.value != ""){
     todos.value.push({id:id++, text:newTodo.value});
     newTodo.value ='';
  }
}

function removeTodo(todo) {
  // ...
  todos.value = todos.value.filter((value, index, self)=>{
    return todo != value;
  })
}
</script>

<template>
   <input v-model="newTodo">
   <button @click="addTodo">Add Todo</button>   
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>