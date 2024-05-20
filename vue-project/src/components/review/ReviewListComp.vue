<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useReviewStore } from "@/stores/review";
import ReviewListDetailComp from "./ReviewListDetailComp.vue";

const reviewStore = useReviewStore();

onMounted(() => {
    reviewStore.getReviewList();
});
</script>

<template>
    <template v-if="reviewStore.reviewList != null">
        <div calss="text-center scrollable-div overflow-auto">
            <ReviewListDetailComp
                v-for="(review, index) in reviewStore.reviewList"
                :key="index"
                :reviewinfo="review"
            ></ReviewListDetailComp>
        </div>
    </template>
</template>

<style scoped></style>
