import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const { VITE_VUE_API_URL } = import.meta.env;

export const useReviewStore = defineStore("review", () => {
    const review = ref({
        no: "",
        ano: "126509",
        mid: "",
        content: "",
        write_date: "",
        grade: "",
    });

    const inputImageList = ref([]);

    // ReviewListComp.vue 에서 사용
    const reviewList = ref([]);
    const reviewImageList = ref([]);

    const insertReview = async () => {
        console.log(review.value);
        try {
            const response = await axios({
                method: "POST",
                url: `${VITE_VUE_API_URL}review/add`,
                data: review.value,
            });
            console.log(response);
            return response.data;
        } catch (err) {
            console.error(err);
            // 필요에 따라 에러를 더 구체적으로 처리하거나 다른 값을 반환할 수 있습니다.
            return null;
        }
    };

    const insertReviewImage = async (rno, name) => {
        let image = {
            rno: rno,
            url: name,
        };
        await axios({
            method: "POST",
            url: `${VITE_VUE_API_URL}review/image/add`,
            data: image,
        })
            .then((resp) => {
                console.log(resp);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const upload_image = async (file) => {
        console.log(file);
        let resp_url = null;
        const formData = new FormData();
        formData.append("image", file);
        await axios
            .post("http://localhost:3000/upload/review", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((resp) => {
                console.log(resp);
                resp_url = `${resp.data}`;
                console.log(resp_url);
            })
            .catch((err) => {
                console.error("Error:", err);
            });
        return resp_url;
    };

    const getReviewList = async () => {
        let list = [];
        const test_contentId = 126509;
        await axios({
            method: "GET",
            url: `${VITE_VUE_API_URL}review/list/${test_contentId}`,
        })
            .then((resp) => {
                console.log(resp);
                list = resp.data;
                reviewList.value = list;
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

    return {
        review,
        insertReview,
        getReviewList,
        reviewList,
        getImageList,
        inputImageList,
        insertReviewImage,
        upload_image,
        reviewImageList,
    };
});
