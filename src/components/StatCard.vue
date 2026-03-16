<script setup>
import { vModelCheckbox } from 'vue';

    const props = defineProps(["name","size","speedAir","speedWtr","speedGnd","speedGty","acceleration","weight","handlingAir","handlingGnd","handlingGty","handlingWtr","grip","turbo"])
</script>


<template>
    <div>
        <input type="checkbox">
        <h4>{{props.name}}</h4>
        <p>Size : {{ props.size }}</p>
        <p>Speed : {{ props.speedGnd }} {{ props.speedAir }} {{ props.speedWtr }} {{ props.speedGty }}</p>
        <p>Acceleration : {{ props.acceleration }}</p>
        <p>Weight : {{ props.weight }}</p>
        <p>Handling : {{ props.handlingGnd }} {{ props.handlingAir }} {{ props.handlingWtr }} {{ props.handlingGty }}</p>
        <p>Grip : {{ props.grip }}</p>
        <p>Mini turbo : {{ props.turbo }}</p>
    </div>
</template>