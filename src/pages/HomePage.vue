<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-12 gifts">
<GiftCard v-for="g in gifts" :key="g.id" :gift="g"/>
    </div>
  </div>
</div>
</template>

<script>
import { onMounted, computed, ref } from "vue";
import { logger } from "../utils/Logger.js";
import { giftsService} from "../services/GiftsService"
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState";

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

    return {
      gifts: computed(() => AppState.gifts)
    }
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
