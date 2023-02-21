<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-white rounded elevation-3">
      <img
        src="https://bcw.blob.core.windows.net/public/img/8600856373152463"
        alt="CodeWorks Logo"
        class="rounded-circle"
      >
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        Vue 3 Starter
      </h1>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { logger } from "../utils/Logger.js";
import { giftsService} from "../services/GiftsService"
import Pop from "../utils/Pop.js";

export default {
  setup() {

    async function get_gifts(){
      try {
        await giftsService.get_gifts()
      } catch (error) {
        Pop.error(error)
        logger.error(error)
      }
    }
onMounted(() => {
  logger.log('HOME PAGE YIPPEE')
  get_gifts()
})

    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
