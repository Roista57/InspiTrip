import { ref, computed, watch} from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const URL = import.meta.env.VITE_VUE_API_URL;

export const useMarkerStore = defineStore("marker", () => {
  const markers = ref([]);
  const selectedType = ref(0);

  const centerLat = ref(37.566826);
  const centerLng = ref(126.9786567);

  const selectedMarker = ref({
    title: "",
  });
  const markerInfluencer = ref([]);

  watch(()=>selectedType.value,()=>{
    console.log(selectedType.value)
    getMarkerByLatLong(centerLat.value, centerLng.value);
  })

  const getMarkerByLatLong = (lat, lng) => {
    axios({
      method: "POST",
      url: URL + "attr/list/location",
      data: {
        contentId: 0,
        contentTypeId: selectedType.value,
        sidoCode: 0,
        gunguCode: 0,
        latitude: lat,
        longitude: lng,
        level: 0,
      },
    }).then((resp) => {
      console.log(resp.data);
      markers.value = [];
      markers.value = resp.data;
    });
  };

  const getMarkerBySido = (sido, gugun) => {
    axios({
      method: "POST",
      url: URL + "attr/list/sidoGungu",
      data: {
        contentId: 0,
        contentTypeId: selectedType.value,
        sidoCode: sido,
        gunguCode: gugun,
        latitude: 0,
        longitude: 0,
        level: 0,
      },
    }).then((resp) =>{
      console.log(resp.data);
      markers.value = [];
      markers.value = resp.data;
      console.log(selectedType.value + "searched")
    }).
    then(()=>{
      centerLat.value = (markers.value)[0].latitude;
      centerLng.value = (markers.value)[0].longitude;
      console.log(centerLat.value, centerLng.value);
    });
  };

  const selectOne = (item) => {
    selectedMarker.value = item;
    axios.post(URL + "influencer/visit/" + item.contentId).then((resp) => {
      markerInfluencer.value = resp.data;
    });
  };

  return {
    markers,
    centerLat,
    centerLng,
    selectedMarker,
    getMarkerByLatLong,
    getMarkerBySido,
    selectOne,
    markerInfluencer,
    selectedType
  };
});
