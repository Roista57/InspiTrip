<script setup>
import { useMapStore } from "@/stores/map";
import { onMounted } from "vue";
import InfluencerListComp from "./MapInfluencerListComp.vue";
import { useInfluencerStore } from "@/stores/influencer";
import { useMarkerStore } from "@/stores/marker";

const map = useMapStore();
const influencer = useInfluencerStore();
const marker = useMarkerStore();

onMounted(() => {
  influencer.selectedInfluencer = 0;
  influencer.getInfluencers();
  map.isCard = false;
  marker.markers = [];
});
</script>

<template>
  <div class="container">
    <div class="row">
      <InfluencerListComp
        v-for="item in influencer.influencerList"
        :key="item.no"
        :item="item"
        class="col-4"
      ></InfluencerListComp>
    </div>
  </div>
</template>

<style scoped></style>
