<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { usesidoGugunStore } from "@/stores/sidoGugun";
import { useMarkerStore } from "@/stores/marker";
import { useMapStore } from "@/stores/map";
import MapNoramlSearchComp from "./MapNoramlSearchComp.vue";

const marker = useMarkerStore();
const map = useMapStore();

const select = (select) => {
  marker.selectOne(select);
};
const handleImageError = (item) => {
  if (item.image == "") {
    event.target.src = "/src/assets/noImage.png";
  } else {
    event.target.src = item.image;
  }
  // 필요하다면 추가적으로 이미지 교체 실패시 다른 대체 이미지를 설정할 수 있습니다.
};

// const test = (item) => {
//   if (item.image == null) {
//     //no image
//   } else if()
// };

/***/

onMounted(() => {
  const scrollableElement = document.querySelector("#scrollable");
  watch(
    () => marker.markers,
    () => {
      scrollToTop(scrollableElement);
    }
  );
});

function scrollToTop(element) {
  // 요소의 scrollTop 속성을 0으로 설정하여 스크롤을 맨 위로 이동
  element.scrollTop = 0;
}
</script>

<template>
  <div class="container bg-success bg-opacity-25" style="height: 820px">
    <router-view></router-view>
    <div class="overflow-auto mt-3" id="scrollable" style="max-width: 800px; height: 620px">
      <div class="row d-flex justify-content-center" style="max-width: 720px">
        <div class="card col-5 m-3" v-for="item in marker.markers" :key="item.contentId">
          <img
            class="card-img-top mt-1"
            :src="`http://localhost:3000/attr/${item.contentId}/first_image.webp`"
            @error="handleImageError(item)"
            :alt="item.alt || '이미지가 없습니다'"
            style="height: 200px"
          />
          <div class="card-body">
            <h4 class="card-title">{{ item.title }}</h4>
            <p class="card-text">{{ item.address }}</p>
            <a
              href="#"
              class="btn btn-primary"
              @click="select(item)"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              >See detail</a
            >
          </div>
        </div>
        <div id="listEnd"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
