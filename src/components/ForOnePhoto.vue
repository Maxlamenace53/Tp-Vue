<script setup>


const props = defineProps({
  objetImage: Object,
});


const emit = defineEmits([ 'actionxAuClique' ]);

function deleteComposantPhoto() {
  // Déclencher l'évènement
  emit('actionAuClique');
}


</script>

<template>
  <div class="div-photo">
    <img v-bind:src="objetImage.thumbnailUrl" />
    <span slot="Texte par défaut">{{ objetImage.title }}</span>
    <button @click="deleteComposantPhoto">Supprimer</button>
  </div>
</template>

<style scoped>
.div-photo {
  display: grid;
  grid-template-columns: 2fr;

  justify-content: center;

  border: solid 3px black;
  margin-bottom: 10px;
}

img {
  height: 150px;
  width: 150px;
}
</style>
