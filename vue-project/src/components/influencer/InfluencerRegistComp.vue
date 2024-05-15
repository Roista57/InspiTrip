<script setup>
import { useInfluencerStore } from "@/stores/influencer";
import { onMounted, ref } from "vue";

const influencer = useInfluencerStore();

onMounted(() => {
  influencer.getInfluencers();
  console.log(influencer.influencerList);
});

const newInfluencer = ref({
  name : "",
  img : "",
  content: "",
  url: "",
})

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageSrc.value = e.target.result;
    };
    reader.readAsDataURL(file);
    influencerImage.value = event.target.files[0];
  } else {
    imageSrc.value = "";
    influencerImage.value = null;
  }
}

const insertNew = () =>{
  influencer.newInfluencer = newInfluencer.value;
  influencer.registInfluencer(influencerImage.value);
}

const influencerImage = ref(); // 이미지 file을 담는 변수
const imageSrc = ref(""); //이미지 태그에서 사용하는 변수

</script>

<template>
  <div class="container">
    <h1>인플루언서 등록</h1>
    <hr />
    <form>
      <fieldset>
        <div class="input-group">
          <span class="input-group-text">이름</span>
          <input type="text" class="form-control" placeholder="이름" v-model="newInfluencer.name"/>
        </div>

        <div class="input-groupt">
          <img
            :src="imageSrc"
            alt="없어요"
            style="width: 100px; height: 100px"
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">이미지</span>
          <input
            type="file"
            class="form-control"
            placeholder="이미지"
            @change="handleImageUpload"
          />
        </div>

        <div class="input-group">
          <span class="input-group-text">설명</span>
          <input type="text" class="form-control" placeholder="설명" v-model="newInfluencer.content"/>
        </div>
        <div class="input-group">
          <span class="input-group-text">URL</span>
          <input type="text" class="form-control" placeholder="URL" v-model="newInfluencer.url" />
        </div>
        <div>
          <button class="btn btn-outline-success" @click.submit.prevent="insertNew">수정하기</button>
          <button type="button" class="btn btn-outline-danger" @clcik="cancel">
            취소하기
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style scoped></style>
