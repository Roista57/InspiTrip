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
    <h1>인플루언서 등록</h1>
    <hr />
    <form>
      <fieldset>
        이름:
        <input type="text" name="" id="" />
      </fieldset>
    </form>
  </div>
</template>

<style scoped></style>
