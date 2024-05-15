<script setup>
import { computed, onMounted, ref } from "vue";
import { RouterLink, useRouter, useRoute } from "vue-router";
import { useBoardStore } from "@/stores/board";
import { useMemberStore } from "@/stores/member";

const router = useRouter();
const route = useRoute();
const boardStore = useBoardStore();
const memberStore = useMemberStore();

onMounted(() => {
    boardStore.getBoard(route.params.no);
});

const onUpdate = computed(() => {
    boardStore.boardUpdate();
});

const cancelUpdate = computed(() => {
    router.replace({ name: "board-detail", params: { no: route.params.no } });
});
</script>

<template>
    <div>
        <label for="email" class="form-label">제목</label>
        <input type="email" class="form-control" :value="boardStore.board.title" />
        <label for="comment">작성자</label>
        <input type="email" class="form-control" :value="boardStore.board.mid" disabled />
        <textarea class="form-control" rows="5" v-model="boardStore.board.content"></textarea>
        <button type="button" class="btn btn-outline-primary" @click="onUpdate">확인</button>
        <button type="button" class="btn btn-outline-danger" @click="cancelUpdate">취소</button>
    </div>
</template>

<style scoped>
input:disabled {
    color: inherit; /* 일반 상태의 텍스트 색상을 상속받음 */
    background-color: inherit; /* 일반 상태의 배경 색상을 상속받음 */
}
</style>
