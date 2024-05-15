<script setup>
import { computed, onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board";
import { useMemberStore } from "@/stores/member";

const router = useRouter();
const boardStore = useBoardStore();
const memberStore = useMemberStore();

const board = ref({
    mid: "ssafy",
    title: "",
    content: "",
});

const boardInsert = computed(() => {
    console.log("동작");
    boardStore.board = board.value;
    boardStore.boardInsert(memberStore.member.id);
});
</script>

<template>
    <div>
        <label for="email" class="form-label">제목</label>
        <input type="email" class="form-control" v-model="board.title" />
        <label for="comment">내용</label>
        <textarea class="form-control" rows="5" v-model="board.content"></textarea>
        <button type="button" class="btn btn-outline-primary" @click="boardInsert">등록하기</button>
    </div>
</template>

<style scoped></style>
