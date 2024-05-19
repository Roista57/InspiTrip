<script setup>
import { ref } from "vue";

const reviews = ref([
    {
        id: 1,
        title: "김*수",
        content: "훌륭한 맛과 향이 나는 자몽잼입니다. 강추!",
        rating: 5,
        images: [
            { id: 1, url: "/path/to/image1.jpg" },
            { id: 2, url: "/path/to/image2.jpg" },
        ],
    },
    // Add more reviews as needed
]);
</script>

<template>
    <div class="review-component container mt-3">
        <div class="row">
            <div class="col">
                <h2>리뷰</h2>
                <div v-for="review in reviews" :key="review.id" class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">{{ review.title }}</h5>
                        <p class="card-text">{{ review.content }}</p>
                        <div class="mb-2">
                            <span
                                v-for="star in 5"
                                :key="star"
                                class="bi"
                                :class="{ 'bi-star-fill': star <= review.rating, 'bi-star': star > review.rating }"
                            ></span>
                        </div>
                        <div>
                            <img
                                v-for="image in review.images"
                                :src="image.url"
                                :alt="`Image ${image.id}`"
                                :key="image.id"
                                class="img-fluid rounded"
                                style="width: 100px; height: 100px; object-fit: cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
