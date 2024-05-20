<script setup>
import { computed, onMounted, ref } from "vue";
import { useReviewStore } from "@/stores/review";
import StarRating from "vue-star-rating";
import axios from "axios";

const reviewStore = useReviewStore();
const images = ref([]);
const props = defineProps({
  reviewinfo: {
    no: Number,
    ano: Number,
    mid: String,
    content: String,
    writeDate: String,
    grade: Number,
  },
});

onMounted(async () => {
  images.value = await reviewStore.getImageList(props.reviewinfo.no);
  console.log(images.value);
});

const rating = ref(props.reviewinfo.grade);

// 이미지 파일 리스트를 저장할 ref
const inputImageList = ref([]);
const previewImageList = ref([]);

const arrayLength = computed(() => images.value.length);
</script>

<template>
  <div class="review-component container mt-3">
    <div class="row">
      <div class="col">
        <div class="card mb-3">
          <div class="card-body">
            <div class="mb-3 d-flex justify-content-between">
              <star-rating
                v-model:rating="rating"
                active-color="#FF9600"
                v-bind:star-size="20"
                read-only=" true"
              ></star-rating>
              {{ props.reviewinfo.writeDate }}
            </div>
            <!-- 이미지가 하나라도 있으면 이미지 표시 -->
            <template v-if="arrayLength > 0">
              <div class="mb-3">
                <template v-for="(image, index) in images" :key="index">
                  <img
                    :src="`http://localhost:3000/review/${image.url}`"
                    class="rounded"
                    style="width: 100px; height: 100px; margin-right: 10px"
                    data-bs-toggle="modal"
                    :data-bs-target="`#imageModal${index}`"
                  />
                  <!-- 이미지 모달창 -->
                  <div class="modal" :id="`imageModal${index}`" @click="event.stopPropagation()">
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <!-- Modal body -->
                        <img :src="`http://localhost:3000/review/${image.url}`" />
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </template>
            <!-- textarea를 card-body의 크기에 맞춰서 전체 폭을 사용하도록 수정 -->
            <div>
              <textarea
                cols="30"
                rows="5"
                style="width: 100%; resize: none"
                v-model="props.reviewinfo.content"
                disabled
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Component -->
  </div>
</template>

<style scoped></style>
