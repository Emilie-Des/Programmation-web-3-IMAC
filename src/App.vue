<script setup>
  import Home from './components/Home.vue'
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Simulation from './components/Simulation.vue';
  import { RouterView } from "vue-router";


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
    
    <Header />
    <RouterView />
    <Footer />

  </div>
</template>

<style scoped>
  body{
    margin: 0, 0,0,0;
  }


  footer{
    background-color: antiquewhite;
    padding: 2%;
  }
  
</style>
