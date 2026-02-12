<script setup>
  import CharacterCard from './components/CharacterCard.vue'
  import VehiculeCard from './components/VehiculeCard.vue'
  import CarData from './BodyData.js'
  import CharacterData from './CharacterData.js';
  import CharModelData from './CharModelData';

</script>

<template>
  <header><h1>Mario Kart 8</h1></header>
  

  <h2>Characters</h2>
  <div class="gallery">
    <CharacterCard class="card"
    v-for="Model in CharModelData"
    :key="Model.name"
    :name="Model.characters"
    :size="Model.size"
    :speedWtr="Model.speedWtr"
    :speedAir="Model.speedAir"
    :speedGnd="Model.speedGnd"
    :speedGty="Model.speedGty"
    :acceleration="Model.acceleration"
    :weight="Model.weight"
    :handlingAir="Model.handlingAir"
    :handlingGnd="Model.handlingGnd"
    :handlingWtr="Model.handlingWtr"
    :handlingGty="Model.handlingGty"
    :grip="Model.grip"
    :turbo="Model.miniturbo"/>
    <!--  -->
  </div>
  <div>
    <h2>Vehicules</h2>
    <h3>Body</h3>
    <div class="gallery">
      <VehiculeCard class="card"
      v-for="kart in CarData" 
      :key="kart.name"
      :name="kart.name"
      :speedAir="kart.speedAir"
      :speedGnd="kart.speedGnd"
      :speedGty="kart.speedGty"
      :speedWtr="kart.speedWtr"
      :acceleration="kart.acceleration"
      :weight="kart.weight"
      :handlingAir="kart.handlingAir"
      :handlingGnd="kart.handlingGnd"
      :handlingWtr="kart.handlingWtr"
      :handlingGty="kart.handlingGty"
      :grip="kart.grip"
      :turbo="kart.miniturbo"
      />
    </div>
    <h3>Tires</h3>
    <div class="gallery">
      <VehiculeCard class="card"/>
    </div>
    <h3>Gliders</h3>
    <div class="gallery">
      <VehiculeCard class="card"/>
    </div>
  </div>

  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped>
  header{
    background-color: antiquewhite;
  }

  .gallery{
    display: flex;
  }
  
  .card{
    background-color: rgb(166, 166, 166);
    margin: 2%;
    padding: 1%;
  }
</style>
