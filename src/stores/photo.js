import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const usephotoStore = defineStore ("photo", () => {
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

return {objetImages};
})
