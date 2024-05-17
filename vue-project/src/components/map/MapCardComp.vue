<script setup>
import { onMounted, ref, watch } from "vue";
import { usesidoGugunStore } from "@/stores/sidoGugun";
import { useMarkerStore } from "@/stores/marker";
import { useMapStore } from "@/stores/map";
import MapNoramlSearchComp from "./MapNoramlSearchComp.vue";

const marker = useMarkerStore();
const map = useMapStore();

const select = (select) => {
  marker.selectOne(select);
};
</script>

<template>
  <div class="container">
    <router-view></router-view>
    <div class="overflow-auto mt-3" style="max-width: 800px; max-height: 800px">
      <div class="row d-flex justify-content-center" style="max-width: 720px">
        <div class="card col-5 m-3" v-for="item in marker.markers" :key="item.contentId">
          <img
            class="card-img-top mt-1"
            :src="`http://localhost:3000/attr/${item.contentId}/first_image.webp`"
            onerror="this.onerror=null; this.src='src/assets/noimage.png';"
            alt="이미지가 없습니다"
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
      </div>
    </div>
  </div>
</template>

<style scoped></style>
