<script setup>
import { useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useMemberStore } from "@/stores/member";
const memberStore = useMemberStore();
const router = useRouter();

const memberImage = ref(); // 이미지 file을 담는 변수
const imageSrc = ref(""); //이미지 태그에서 사용하는 변수

// 업데이트
const updateMember = computed(() => {
  console.log("updateMember >> " + memberImage);
  memberStore.imageFile = memberImage.value;
  memberStore.updateMember();
});

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageSrc.value = e.target.result;
    };
    reader.readAsDataURL(file);
    memberImage.value = event.target.files[0];
  } else {
    imageSrc.value = "";
    memberImage.value = null;
  }
}

onMounted(() => {
  imageSrc.value = memberStore.member.img;
});

const cancel = () => {
  router.back();
};
</script>

<template>
  <div class="container">
    <h1>수정하기</h1>
    <hr />
    <form @submit.prevent="updateMember" method="post">
      <div class="input-group">
        <span class="input-group-text">아이디</span>
        <input
          type="text"
          class="form-control"
          placeholder="아이디"
          v-model="memberStore.member.id"
          readonly
        />
      </div>

      <div class="input-group">
        <span class="input-group-text">비밀번호</span>
        <input
          type="password"
          class="form-control"
          placeholder="비밀번호"
          v-model="memberStore.member.pw"
        />
      </div>
      <div class="input-group">
        <span class="input-group-text">이름</span>
        <input
          type="text"
          class="form-control"
          placeholder="이름"
          v-model="memberStore.member.name"
        />
      </div>
      <div class="input-group">
        <span class="input-group-text">이메일</span>
        <input
          type="text"
          class="form-control"
          placeholder="이메일"
          v-model="memberStore.member.email"
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
            v-model="memberStore.member.gender"
          />남자
          <label class="form-check-label"></label>
        </div>
        <div class="form-check">
          <input
            type="radio"
            class="form-check-input"
            name="gender"
            value="2"
            v-model="memberStore.member.gender"
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
          v-model="memberStore.member.tel"
        />
      </div>
      <div class="input-groupt">
        <img :src="imageSrc" alt="없어요" style="width: 100px; height: 100px" />
      </div>
      <div class="input-group">
        <span class="input-group-text">이미지</span>
        <input type="file" class="form-control" placeholder="이미지" @change="handleImageUpload" />
      </div>
      <div>
        <button class="btn btn-outline-success">수정하기</button>
        <button type="button" class="btn btn-outline-danger" @clcik="cancel">취소하기</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
