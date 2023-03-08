<script setup>
import ForOnePhoto from "../components/ForOnePhoto.vue";

import { usephotoStore } from "../stores/photo";

const photoStore = usephotoStore();

const objetImages = photoStore.objetImages;

function deleteComposantPhoto(objetImage) {
  const index = objetImages.indexOf(objetImage);

  objetImages.splice(index, 1);
}
</script>

<template>
  <header>
    <h1>Liste des photos</h1>
  </header>
  <main>
    <ForOnePhoto
      v-for="objetImage of objetImages.slice(0, 10)"
      :key="objetImage.id"
      :objet-image="objetImage"
      @action-au-clique="deleteComposantPhoto(objetImage)"
    >
    </ForOnePhoto>
  </main>
</template>

<style scoped></style>
