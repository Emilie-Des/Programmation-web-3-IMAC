<script setup>
  import CharacterCard from './components/CharacterCard.vue'
  import VehiculeCard from './components/VehiculeCard.vue'
  import CarData from './BodyData.js'
  import CharModelData from './CharModelData';
  import TiresData from './TiresData';
  import GlidersData from './GlidersData';

  import {ref,computed, watch} from 'vue'

  const search = ref('')
  const sortBy = ref('name')

  const filteredCharList = computed(() => {
    const charList = CharModelData.filter(
      (model) => model.characters.some((name) => name.toLowerCase().includes(search.value.toLowerCase()))
    )

    charList.sort((a,b)=> {
      if (sortBy.value === 'name') {
        // sort in alphabetical order
        // return a.name.localeCompare(b.name)
      }
      else if (sortBy.value === 'speed') {
        return (a.speedGnd) - (b.speedGnd)
      }
      else if (sortBy.value === 'acceleration') {
        return (a.acceleration) - (b.acceleration)
      }
      else if (sortBy.value === 'weight') {
        return (a.weight) - (b.weight)
      }
      else if (sortBy.value === 'handling') {
        return (a.handlingGnd) - (b.handlingGnd)
      }
      else if (sortBy.value === 'grip') {
        return (a.grip) - (b.grip)
      }
      else if (sortBy.value === 'turbo') {
        return (a.turbo) - (b.turbo)
      }
    })
    return charList
  })

  const filteredCarsList = computed(() => {
    const carsList = CarData.filter(
      (kart) => kart.name.toLowerCase().includes(search.value.toLowerCase())
    )

    carsList.sort((a,b)=> {
      if (sortBy.value === 'name') {
        // sort in alphabetical order
        return a.name.localeCompare(b.name)
      }
      else if (sortBy.value === 'speed') {
        return (a.speedGnd) - (b.speedGnd)
      }
      else if (sortBy.value === 'acceleration') {
        return (a.acceleration) - (b.acceleration)
      }
      else if (sortBy.value === 'weight') {
        return (a.weight) - (b.weight)
      }
      else if (sortBy.value === 'handling') {
        return (a.handlingGnd) - (b.handlingGnd)
      }
      else if (sortBy.value === 'grip') {
        return (a.grip) - (b.grip)
      }
      else if (sortBy.value === 'turbo') {
        return (a.turbo) - (b.turbo)
      }
    })
    return carsList
  })

  const filteredTiresList = computed(() => {
    const tiresList = TiresData.filter(
      (tire) => tire.name.toLowerCase().includes(search.value.toLowerCase())
    )

    tiresList.sort((a,b)=> {
      if (sortBy.value === 'name') {
        // sort in alphabetical order
        return a.name.localeCompare(b.name)
      }
      else if (sortBy.value === 'speed') {
        return (a.speedGnd) - (b.speedGnd)
      }
      else if (sortBy.value === 'acceleration') {
        return (a.acceleration) - (b.acceleration)
      }
      else if (sortBy.value === 'weight') {
        return (a.weight) - (b.weight)
      }
      else if (sortBy.value === 'handling') {
        return (a.handlingGnd) - (b.handlingGnd)
      }
      else if (sortBy.value === 'grip') {
        return (a.grip) - (b.grip)
      }
      else if (sortBy.value === 'turbo') {
        return (a.turbo) - (b.turbo)
      }
    })
    return tiresList
  })

  const filteredGlidersList = computed(() => {
    const glidersList = GlidersData.filter(
      (glider) => glider.name.toLowerCase().includes(search.value.toLowerCase())
    )

    glidersList.sort((a,b)=> {
    if (sortBy.value === 'name') {
      // sort in alphabetical order
      return a.name.localeCompare(b.name)
    }
    else if (sortBy.value === 'speed') {
      return (a.speedGnd) - (b.speedGnd)
    }
    else if (sortBy.value === 'acceleration') {
      return (a.acceleration) - (b.acceleration)
    }
    else if (sortBy.value === 'weight') {
      return (a.weight) - (b.weight)
    }
    else if (sortBy.value === 'handling') {
      return (a.handlingGnd) - (b.handlingGnd)
    }
    else if (sortBy.value === 'grip') {
      return (a.grip) - (b.grip)
    }
    else if (sortBy.value === 'turbo') {
      return (a.turbo) - (b.turbo)
    }
  })
    return glidersList
  })



</script>

<template>
  <header><h1>Mario Kart 8</h1></header>
  
  <div id="gallery-filter">
    <input type="text" placeholder="Search..." v-model="search" />
    <label>Sort by</label>
    <select v-model="sortBy" placeholder="name">
      <option value="name">Name</option>
      <option value="speed">Speed</option>
      <option value="acceleration">Acceleration</option>
      <option value="weight">Weight</option>
      <option value="handling">Handling</option>
      <option value="grip">Grip</option>
      <option value="turbo">Mini-turbo</option>
    </select>
  </div>

  <h2>Characters</h2>
  <div class="gallery">
    <CharacterCard class="card"
    v-for="Model in filteredCharList"
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
      v-for="kart in filteredCarsList" 
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
      <VehiculeCard class="card"
      v-for="kart in filteredTiresList" 
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
    <h3>Gliders</h3>
    <div class="gallery">
      <VehiculeCard class="card"
      v-for="kart in filteredGlidersList" 
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

  label{
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
</style>
