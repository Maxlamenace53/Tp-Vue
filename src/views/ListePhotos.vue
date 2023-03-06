<script setup>

import ForOnePhoto from '../components/ForOnePhoto.vue';
import { onMounted, ref } from 'vue';

const objetImages = ref([]);



onMounted(ChargerImage);


async function ChargerImage() {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/photos');
    const result = await resp.json();

    objetImages.value = result;
  }

  catch (err) {
    console.error(err);
  }
}



</script>






<template>
  <header>
    <h1>Liste des photos</h1>
  </header>
  <main>
    <button @click="ChargerImage"> Actualiser page</button>
    <ForOnePhoto v-for="objetImage of objetImages" :key="objetImage.id" :objet-image="objetImage" />


  </main>
</template>









<style scoped></style>
