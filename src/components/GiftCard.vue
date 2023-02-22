<template>
  <div class="gift-card">
    <div>
      {{ gift.tag }}
    <img :src="gift.url" :alt="gift.tag + 'Image here'">
    <span>{{ gift.opened }}</span>
    </div>
    
  </div>
</template>


<script>
import { Gift } from "../models/Gift.js";
export default {
  props: {
      gift: { type: Gift }
    },
  setup(){
  return {};
  },
}
</script>


<style lang="scss" scoped></style>