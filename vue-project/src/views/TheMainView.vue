<template>
  <div id="app" class="container">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
      style="height: 500px"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://source.unsplash.com/800x400/?london"
            class="d-block w-100"
            alt="London"
          />
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://source.unsplash.com/800x400/?bangkok"
            class="d-block w-100"
            alt="Bangkok"
          />
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://source.unsplash.com/800x400/?paris" class="d-block w-100" alt="Paris" />
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://source.unsplash.com/800x400/?barcelona"
            class="d-block w-100"
            alt="Barcelona"
          />
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-6">
          <h6 class="text-center mb-4">인플루언서 랭킹</h6>
          <ul class="list-group">
            <li class="list-group-item d-flex">
              <div class="ranking-icon me-3">
                <img src="/src/assets/first.jpg" height="48px" alt="" />
              </div>
              <img :src="influencer.rank[0].img" height="48px" alt="" class="rounded-circle" />
              <div class="align-self-center ms-3">{{ influencer.rank[0].name }}</div>
            </li>
            <li class="list-group-item d-flex">
              <div class="ranking-icon me-3">
                <img src="/src/assets/second.jpg" height="48px" alt="" />
              </div>
              <img :src="influencer.rank[1].img" height="48px" alt="" class="rounded-circle" />
              <div class="align-self-center ms-3">{{ influencer.rank[1].name }}</div>
            </li>
            <li class="list-group-item d-flex">
              <div class="ranking-icon me-3">
                <img src="/src/assets/third.jpg" height="48px" alt="" />
              </div>
              <img :src="influencer.rank[2].img" height="48px" alt="" class="rounded-circle" />
              <div class="align-self-center ms-3">{{ influencer.rank[2].name }}</div>
            </li>
          </ul>
        </div>
        <div class="col-1"></div>
        <div class="col-5">
          <h6 class="text-center mb-3">최신 공지글</h6>
          <div class="row" id="noticeList">
            <div class="card mb-4" v-for="notice in board.threeNotice" :key="notice.no">
              <div class="card-body">
                <h5 class="card-title">{{ notice.title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBoardStore } from "@/stores/board";
import { useInfluencerStore } from "@/stores/influencer";
import { onMounted } from "vue";

const influencer = useInfluencerStore();
const board = useBoardStore();

onMounted(() => {
  influencer.getRank();
  board.getThree();
  console.log(influencer.rank);
});
</script>

<style scoped>
.carousel-item img {
  height: 500px;
  object-fit: cover;
}

.ranking-icon {
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
}

.list-group-item {
  display: flex;
  align-items: center;
  border: none;
  padding: 1rem 1.5rem;
  margin-bottom: 0.5rem;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}
.list-group-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.15);
}
</style>
