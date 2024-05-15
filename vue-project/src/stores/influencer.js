import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const URL = import.meta.env.VITE_VUE_API_URL;

export const useInfluencerStore = defineStore("influencer", () => {
  const influencerList = ref([]);
  const getInfluencers = () => {
    axios(URL + "influencer/list").then((resp) => {
      console.log(resp.data);
      influencerList.value = resp.data;
    });
  };
  return { influencerList, getInfluencers };
});
