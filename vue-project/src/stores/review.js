import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const { VITE_VUE_API_URL } = import.meta.env;

export const useReviewStore = defineStore("review", () => {
  const review = ref({
    no: "",
    mid: "",
    ano: "",
    title: "",
    content: "",
    inputImageList: [],
    write_date: "",
    grade: "",
  });

  const reviewList = ref([]);

  const insertReview = () => {};

  const getReviewList = () => {
    const test_contentId = 126509;
    axios({
      method: "GET",
      url: `${VITE_VUE_API_URL}review/list/${test_contentId}`,
    })
      .then((resp) => {
        console.log(resp);
        reviewList.value = resp.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getImageList = async (rno) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_VUE_API_URL}review/image/${rno}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      return null; // 에러가 발생했을 때 null을 반환
    }
  };

  return { review, insertReview, getReviewList, reviewList, getImageList };
});
