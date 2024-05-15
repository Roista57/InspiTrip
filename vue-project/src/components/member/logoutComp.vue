<script setup>
import { computed } from "vue";
import { useMemberStore } from "@/stores/member";

const memberStore = useMemberStore();

const logout = computed(() => {
  memberStore.logoutMember();
});
</script>

<template>
  <div>{{ logout }}</div>
</template>

<style scoped></style>
