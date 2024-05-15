<script setup>
import { useInfluencerStore } from "@/stores/influencer";
import { onMounted } from "vue";

const influencer = useInfluencerStore();

onMounted(() => {
  influencer.getInfluencers();
  console.log(influencer.influencerList);
});
</script>

<template>
  <div class="container">
    <h1>인플루언서 리스트</h1>
  </div>
</template>

<style scoped></style>
