<script setup>
import { useMemberStore } from "@/stores/member";
import { computed, ref } from "vue";

const memberStore = useMemberStore();
const id = ref("ssafy");
const password = ref("ssafy");
const login = computed(() => {
  memberStore.member.id = id.value;
  memberStore.member.pw = password.value;
  memberStore.loginMember();
});
</script>

<template>
  <div class="container">
    <div>
      <div class="mb-3 mt-3">
        <label for="id" class="form-label">아이디: </label>
        <input type="text" class="form-control" placeholder="아이디를 입력해주세요." v-model="id" />
      </div>
      <div class="mb-3">
        <label for="pwd" class="form-label">비밀번호: </label>
        <input
          type="password"
          class="form-control"
          placeholder="비밀번호를 입력해주세요."
          v-model="password"
        />
      </div>
      <div class="form-check mb-3">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="remember" /> 아이디 저장
        </label>
      </div>
      <button class="btn btn-primary" @click="login">로그인</button>
    </div>
  </div>
</template>

<style scoped></style>
