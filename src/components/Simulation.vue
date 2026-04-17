<script setup>
    import StatCard from './StatCard.vue'
    import {ref,computed, watch, onMounted} from 'vue'
    import CarData from '../BodyData.js'
    import CharModelData from '../CharModelData';
    import TiresData from '../TiresData';
    import GlidersData from '../GlidersData';

    const charSelection = ref('[Baby Peach,Baby Daisy]')
    const bodySelection = ref('Standard Kart')
    const tireSelection = ref('Standard')
    const gliderSelection = ref('Super Glider')

    const selectedChar = computed(() => 
    {
        const choosenChar = []
        CharModelData.forEach((char)=> 
        { 
            if ("[" + char.characters.toString() + "]" == charSelection.value)
            {
                choosenChar.push(char)
            }
        })
        return choosenChar[0]
    })

    const selectedBody = computed(() => 
    {
        const choosenBody = []
        CarData.forEach((body)=> 
        { 
            if (body.name == bodySelection.value)
            {
                choosenBody.push(body)
            }
        })
        return choosenBody[0]
    })

    const selectedTires = computed(() => 
    {
        const choosenTires = []
        TiresData.forEach((tires)=> 
        { 
            if (tires.name == tireSelection.value)
            {
                choosenTires.push(tires)
            }
        })
        return choosenTires[0]
    })

    const selectedGlider = computed(() => 
    {
        const choosenGlider = []
        GlidersData.forEach((glider)=> 
        { 
            if (glider.name == gliderSelection.value)
            {
                choosenGlider.push(glider)
            }
        })
        return choosenGlider[0]
    })
</script>

<template>
  <h2>Character</h2>
    <div id="character-filter">
    <label>Your character : </label>
    <select v-model="charSelection" placeholder='["Baby Peach","Baby Daisy"]'>
      <option v-for="Char in CharModelData" value="Char.characters">{{Char.characters}}</option>
    </select>
    </div>
    <StatCard class="card charCard"
    :key="selectedChar.name"
    :name="selectedChar.characters"
    :size="selectedChar.size"
    :speedWtr="selectedChar.speedWtr"
    :speedAir="selectedChar.speedAir"
    :speedGnd="selectedChar.speedGnd"
    :speedGty="selectedChar.speedGty"
    :acceleration="selectedChar.acceleration"
    :weight="selectedChar.weight"
    :handlingAir="selectedChar.handlingAir"
    :handlingGnd="selectedChar.handlingGnd"
    :handlingWtr="selectedChar.handlingWtr"
    :handlingGty="selectedChar.handlingGty"
    :grip="selectedChar.grip"
    :turbo="selectedChar.miniturbo"/>
  
  <div>
    <h2>Vehicules</h2>
    <h3>Body</h3>
    <div id="body-filter">
    <label>Your kart body : </label>
    <select v-model="bodySelection" placeholder='Standard Kart'>
      <option v-for="Body in BodyData" value="Body.name">{{Body.name}}</option>
    </select>
    </div>
    <div class="gallery">
      <StatCard class="card bodyCard"
      :key="selectedBody.name"
      :name="selectedBody.name"
      :speedAir="selectedBody.speedAir"
      :speedGnd="selectedBody.speedGnd"
      :speedGty="selectedBody.speedGty"
      :speedWtr="selectedBody.speedWtr"
      :acceleration="selectedBody.acceleration"
      :weight="selectedBody.weight"
      :handlingAir="selectedBody.handlingAir"
      :handlingGnd="selectedBody.handlingGnd"
      :handlingWtr="selectedBody.handlingWtr"
      :handlingGty="selectedBody.handlingGty"
      :grip="selectedBody.grip"
      :turbo="selectedBody.miniturbo"
      />
    </div>
    <h3>Tires</h3>
    <div id="tires-filter">
    <label>Your tires : </label>
    <select v-model="tireSelection" placeholder='Standard'>
      <option v-for="Tires in TiresData" value="Tires.name">{{Tires.name}}</option>
    </select>
    </div>
    <div class="gallery">
      <StatCard class="card tireCard"
      :key="selectedTires.name"
      :name="selectedTires.name"
      :speedAir="selectedTires.speedAir" 
      :speedGnd="selectedTires.speedGnd"
      :speedGty="selectedTires.speedGty"
      :speedWtr="selectedTires.speedWtr"
      :acceleration="selectedTires.acceleration"
      :weight="selectedTires.weight"
      :handlingAir="selectedTires.handlingAir"
      :handlingGnd="selectedTires.handlingGnd"
      :handlingWtr="selectedTires.handlingWtr"
      :handlingGty="selectedTires.handlingGty"
      :grip="selectedTires.grip"
      :turbo="selectedTires.miniturbo"
      />
    </div>
    <h3>Gliders</h3>
    <div id="body-filter">
    <label>Your glider : </label>
    <select v-model="gliderSelection" placeholder='Standard Kart'>
      <option v-for="Glider in GlidersData" value="Glider.name">{{Glider.name}}</option>
    </select>
    </div>
    <div class="gallery">
      <StatCard class="card gliderCard"
      :key="selectedGlider.name"
      :name="selectedGlider.name"
      :speedAir="selectedGlider.speedAir"
      :speedGnd="selectedGlider.speedGnd"
      :speedGty="selectedGlider.speedGty"
      :speedWtr="selectedGlider.speedWtr"
      :acceleration="selectedGlider.acceleration"
      :weight="selectedGlider.weight"
      :handlingAir="selectedGlider.handlingAir"
      :handlingGnd="selectedGlider.handlingGnd"
      :handlingWtr="selectedGlider.handlingWtr"
      :handlingGty="selectedGlider.handlingGty"
      :grip="selectedGlider.grip"
      :turbo="selectedGlider.miniturbo"
      />
    </div>
  </div>
   <input type="button" v-model="simulation"/>
   
</template>

<style>
  body{
    margin: 0;
  }

  label{
    margin: 2%;
  }

  input{
    margin: 2%;
  }

  .gallery{
    display: flex;
  }

  .card{
    background-color: rgb(166, 166, 166);
    margin: 2%;
    padding: 1%;
  }
  .tireCard{
    /* color: blue; */
  }
</style>