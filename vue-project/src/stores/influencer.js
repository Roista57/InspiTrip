import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

const URL = import.meta.env.VITE_VUE_API_URL;

export const useInfluencerStore = defineStore("influencer", () => {
  const influencerList = ref([]);
  const newInfluencer = ref();
  const router = useRouter();
  const selectedInfluencer = ref({
    no: 0,
  });

  const selectInfluencer = async (no) => {
    await axios(URL + "influencer/find/" + no)
      .then((resp) => resp.data)
      .then((data) => {
        console.log(data);
        selectedInfluencer.value = data;
      });
  };

  const uploadImage = async (imageFile) => {
    console.log("uploadImage >> " + imageFile);
    const formData = new FormData();
    if (imageFile != null) {
      formData.append("image", imageFile);
      await fetch("http://localhost:3000/upload/influencer", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Success:", data);
          newInfluencer.value.img = `http://localhost:3000/influencer/${data}`;
          console.log("uploadImage >> " + newInfluencer.value);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      console.log("last >>>>>> ");
    }
  };

  const registInfluencer = async (imageFile) => {
    await uploadImage(imageFile);
    console.log("registMember >> " + newInfluencer.value);
    axios({
      url: `${URL}influencer/add`,
      method: "POST",
      data: newInfluencer.value,
    })
      .then((response) => {
        console.log(response.data);
        alert("인플루언서 등록이 성공");
        router.replace({ name: "main" });
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const getInfluencers = async () => {
    await axios(URL + "influencer/list").then((resp) => {
      console.log(resp.data);
      influencerList.value = resp.data;
    });
  };

  const getInfluencersByFollow = async (id) => {
    await axios(URL + "influencer/list/" + id).then((resp) => {
      console.log(resp.data);
      influencerList.value = resp.data;
    });
  };

  const rank = ref([
    {
      name: "",
      img: "/src/assets/noImage.png",
    },
    {
      name: "",
      img: "/src/assets/noImage.png",
    },
    {
      name: "",
      img: "/src/assets/noImage.png",
    },
  ]);

  const getRank = () => {
    axios(URL + "influencer/rank")
      .then((resp) => resp.data)
      .then((data) => {
        rank.value = data;
      });
  };

  const rankUp = (no) => {
    axios.post(URL + "influencer/rankup/" + no);
  };

  return {
    influencerList,
    newInfluencer,
    getInfluencers,
    registInfluencer,
    selectedInfluencer,
    selectInfluencer,
    getInfluencersByFollow,
    getRank,
    rank,
    rankUp,
  };
});
