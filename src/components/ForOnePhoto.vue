<script setup>
const props = defineProps({
    objetImage: Object,

});

</script>

<template>
    <div class="div-photo">
        <img v-bind:src=objetImage.thumbnailUrl>
        <span slot="Texte par défaut">{{ objetImage.title }}</span>
        <button>Supprimer</button>
    </div>
</template>

<style scoped>
.div-photo {
    display: flex;
    flex-direction: column;

    justify-content: center;

    border: solid 3px black;
    margin-bottom: 10px;
}

img {
    height: 150px;
    width: 150px;
}
</style>
