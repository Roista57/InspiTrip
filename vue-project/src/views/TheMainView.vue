<template>
  <div id="app" class="container mt-5">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
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
            <h5>런던</h5>
            <p>540여 개의 여행 상품</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://source.unsplash.com/800x400/?bangkok"
            class="d-block w-100"
            alt="Bangkok"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>방콕</h5>
            <p>700여 개의 여행 상품</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://source.unsplash.com/800x400/?paris" class="d-block w-100" alt="Paris" />
          <div class="carousel-caption d-none d-md-block">
            <h5>파리</h5>
            <p>860여 개의 여행 상품</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://source.unsplash.com/800x400/?barcelona"
            class="d-block w-100"
            alt="Barcelona"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>바르셀로나</h5>
            <p>350여 개의 여행 상품</p>
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
  </div>
</template>

<script></script>

<style>
.carousel-item img {
  height: 500px;
  object-fit: cover;
}
</style>
