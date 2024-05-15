<script setup>
import { useMarkerStore } from "@/stores/marker";
import { onMounted, ref, watch } from "vue";
import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
import { Modal } from "bootstrap";

const marker = useMarkerStore();

const map = ref();

const coordinate = {
  lat: 37.566826,
  lng: 126.9786567,
};

const latlng = ref({});

watch(
  () => latlng.value,
  () => {
    marker.getMarkerByLatLong(latlng.value.getLat(), latlng.value.getLng());
  },
  { deep: true }
);

onMounted(() => {});

watch(
  () => marker.centerLat,
  () => {
    console.log(marker.markers);
    console.log("??");
    map.value.panTo(new kakao.maps.LatLng(marker.centerLat, marker.centerLng));
  }
);

const onClickKakaoMapMarker = (item) => {
  marker.selectOne(item);
  let myModal = new Modal(document.getElementById("exampleModal"));
  myModal.show();
};

const onLoadKakaoMap = (mapRef) => {
  map.value = mapRef;
  latlng.value = map.value.getCenter();
  // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
  const mapTypeControl = new kakao.maps.MapTypeControl();
  // 지도 타입 컨트롤을 지도에 표시합니다
  map.value.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

  kakao.maps.event.addListener(map.value, "dragend", function (mouseEvent) {
    // 클릭한 위도, 경도 정보를 가져옵니다
    const tmpLatlng = map.value.getCenter();
    marker.centerLat = tmpLatlng.getLat();
    marker.centerLng = tmpLatlng.getLng();
    latlng.value = tmpLatlng;
  });
};
</script>

<template>
  <KakaoMap
    :lat="coordinate.lat"
    :lng="coordinate.lng"
    :draggable="true"
    width="100%"
    height="900px"
    @onLoadKakaoMap="onLoadKakaoMap"
  >
    <KakaoMapMarker
      v-for="item in marker.markers"
      :key="item.contentId"
      :lat="item.latitude"
      :lng="item.longitude"
      :clickable="true"
      @onClickKakaoMapMarker="onClickKakaoMapMarker(item)"
    ></KakaoMapMarker>
  </KakaoMap>
</template>

<style scoped></style>
