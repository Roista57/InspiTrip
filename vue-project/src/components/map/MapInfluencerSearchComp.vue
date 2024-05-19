<script setup>
import { useMapStore } from "@/stores/map";
import { onMounted } from "vue";
import InfluencerListComp from "./MapInfluencerListComp.vue";
import { useInfluencerStore } from "@/stores/influencer";
import { useMarkerStore } from "@/stores/marker";
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";

const map = useMapStore();
const influencer = useInfluencerStore();
const marker = useMarkerStore();
const router = useRouter();
const route = useRoute();

onBeforeRouteLeave((to, from) => {
  marker.markers = [];
});

onMounted(async () => {
  map.isCard = false;
  await influencer.getInfluencers();
  console.log(influencer.selectedInfluencer);
  if (influencer.selectedInfluencer.no !== 0) {
    await marker.getMarkerByInfluencer(influencer.selectedInfluencer.no);
    console.log(marker.markers);
  } else {
    marker.markers = [];
  }
});
</script>

<template>
  <div class="container">
    <input type="checkbox" checked data-toggle="toggle" data-size="sm" />
    <div class="row scrollable-div overflow-auto">
      <InfluencerListComp
        v-for="item in influencer.influencerList"
        :key="item.no"
        :item="item"
        class="col-4"
      ></InfluencerListComp>
    </div>
  </div>
</template>

<style scoped>
.scrollable-div {
  height: 150px; /* 원하는 높이로 설정 */
}
</style>
