<script setup>
import { useInfluencerStore } from "@/stores/influencer";
import { onMounted } from "vue";
import InfluencerCardComp from "./InfluencerCardComp.vue";

const influencer = useInfluencerStore();

onMounted(() => {
  influencer.getInfluencers();
  console.log(influencer.influencerList);
});

</script>

<template>
  <div class="container">
    <h1>인플루언서 리스트</h1>
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <InfluencerCardComp v-for="item in influencer.influencerList" :key="item.no" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
