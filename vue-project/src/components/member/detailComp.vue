<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useMemberStore } from "@/stores/member";
const memberStore = useMemberStore();
const route = useRoute();
const router = useRouter();

onMounted(() => {
  console.log(">> " + memberStore.token);
  memberStore.getMember();
  console.log(memberStore.member);
  console.log("너는 ? >> " + memberStore.member.gender);
});

const update = computed(() => {
  router.push({ name: "member-update" });
});

const gender = computed(() => {
  if (memberStore.member.gender == "m") {
    memberStore.member.gender = "1";
  } else {
    memberStore.member.gender = "2";
  }
});
</script>

<template>
  <div class="container">
    <h1>사용자 정보</h1>
    <hr />
    <form @submit.prevent="" method="post">
      <div class="input-group">
        <span class="input-group-text">아이디</span>
        <input
          type="text"
          class="form-control"
          placeholder="아이디"
          :value="memberStore.member.id"
          disabled
        />
      </div>

      <div class="input-group">
        <span class="input-group-text">비밀번호</span>
        <input
          type="password"
          class="form-control"
          placeholder="비밀번호"
          :value="memberStore.member.pw"
          disabled
        />
      </div>
      <div class="input-group">
        <span class="input-group-text">이름</span>
        <input
          type="text"
          class="form-control"
          placeholder="이름"
          :value="memberStore.member.name"
          disabled
        />
      </div>
      <div class="input-group">
        <span class="input-group-text">이메일</span>
        <input
          type="text"
          class="form-control"
          placeholder="이메일"
          :value="memberStore.member.email"
          disabled
        />
      </div>
      <div class="input-group">
        <span class="input-group-text">성별</span>
        <div class="form-check">
          <input
            type="radio"
            class="form-check-input"
            name="gender"
            value="1"
            :v-model="gender"
          />남자
          <label class="form-check-label"></label>
        </div>
        <div class="form-check">
          <input
            type="radio"
            class="form-check-input"
            name="gender"
            value="2"
            :v-model="gender"
          />여자
          <label class="form-check-label"></label>
        </div>
      </div>
      <div class="input-group">
        <span class="input-group-text">전화번호</span>
        <input
          type="text"
          class="form-control"
          placeholder="전화번호"
          :value="memberStore.member.tel"
          disabled
        />
      </div>
      <div class="input-groupt">
        <img :src="memberStore.member.img" alt="없어요" style="width: 100px; height: 100px" />
      </div>
      <div>
        <button type="button" class="btn btn-outline-success" @click="update">수정하기</button>
        <button type="button" class="btn btn-outline-danger">삭제하기</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
