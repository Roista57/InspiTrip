<script setup>
import { usesidoGugunStore } from "@/stores/sidoGugun.js";
import { useMarkerStore } from "@/stores/marker.js";
import MapCardComp from "@/components/map/MapCardComp.vue";
import MapComp from "@/components/map/MapComp.vue";
import { onMounted, watch } from "vue";
import MapInfluencerCompVue from "@/components/map/MapInfluencerComp.vue";

const sidoGugun = usesidoGugunStore();

const marker = useMarkerStore();

watch(
  () => marker.selectedMarker,
  () => {
    console.log(marker.selectedMarker);
  }
);

onMounted(() => {
  sidoGugun.getSido();
});
</script>

<template>
  <div class="container-fluid bg-warning" height="900px">
    <div class="row" width="100%">
      <div class="col-5" height="900px">
        <MapCardComp></MapCardComp>
      </div>
      <div class="col-7">
        <MapComp></MapComp>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">세부 정보</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="container">
          <div class="modal-body">{{ marker.selectedMarker.title }}</div>
          <div class="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-5">
              <img
                :src="`http://localhost:3000/attr/${marker.selectedMarker.contentId}/first_image.webp`"
                alt=""
                style="height: 300px"
              />
            </div>
            <div class="col-sm-5 text-center">{{ marker.selectedMarker.overview }}</div>
            <div class="col-sm-1"></div>
          </div>
        </div>

        <div
          class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center"
        >
          <MapInfluencerCompVue
            v-for="item in marker.markerInfluencer"
            :key="item.contentId"
            :item="item"
          />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.d-flex {
  display: flex;
  flex-wrap: wrap; /* 강제로 각 요소들을 개별 행에 표시 */
}

.flex-md-row {
  flex-direction: column; /* 중간 크기 스크린 이상일 때 세로로 나열 */
}
</style>
