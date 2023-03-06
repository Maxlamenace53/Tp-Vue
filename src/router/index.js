import { createRouter, createWebHistory } from "vue-router";
import Accueil from "/src/views/Accueil.vue";
import ListePhotos from "/src/views/ListePhotos.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Accueil",
      component: Accueil,
    },
    {
      path: "/listesPhotos",
      name: "Liste des Photos",
      component: ListePhotos,
    },
  ],
});

export default router;
