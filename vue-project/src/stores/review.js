import { ref, computed } from "vue";
import { defineStore } from "pinia";

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

    const insertReview = () => {};

    return { review, insertReview };
});
