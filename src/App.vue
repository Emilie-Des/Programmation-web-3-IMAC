<script setup>
  import Home from './components/Home.vue'
  import { RouterView } from "vue-router";







  // watch(,(newFilter, oldFilter) =>{

  // })

  localStorage.setItem("key","value")
  const data =localStorage.getItem("key")
  localStorage.removeItem('key')
  localStorage.clear()

  localStorage.setItem(1,[,,,])
  const combination = localStorage.getItem(1)
  localStorage.removeItem('key')
</script>

<template>
  <div id="app">
    <header><h1>Mario Kart 8</h1></header>

    <RouterView />

    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
  </div>
</template>

<style scoped>

  header{
    background-color: antiquewhite;
  }

  
</style>
