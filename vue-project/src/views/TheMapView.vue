<script setup>
import { usesidoGugunStore } from "@/stores/sidoGugun.js";
import { useMarkerStore } from "@/stores/marker.js";
import MapCardComp from "@/components/map/MapCardComp.vue";
import MapComp from "@/components/map/MapComp.vue";
import { onMounted, watch } from "vue";

const sidoGugun = usesidoGugunStore();

const marker = useMarkerStore();

watch(
  () => marker.selectedMarker,
  ()=>{
    console.log(marker.selectedMarker)
  }
)

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
    <div class="modal-dialog modal-xl">
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
        <div class="modal-body">
          {{marker.selectedMarker.title}},    
          {{marker.selectedMarker.contentId}}
        </div>
        <p class="d-flex justify-content-center" v-for="item in marker.markerInfluencer" :key="item.no">
          <a :href="item.url">바로가기</a>
        </p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" >Save changes</button>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped></style>
