<script setup lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
</script>

<template>
  <div class="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 px-6 py-3">
    <div class="banner-wrapper">
      <a-carousel arrows >
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
          </div>
        </template>
        <div>
          <img src="https://img.freepik.com/free-psd/banner-with-online-shoppings-theme_23-2148561363.jpg?t=st=1732285158~exp=1732288758~hmac=2894d8d60fbc1aea07af2834bbcab1c4c7ddc360f68c373afe867061f7002cd9&w=1380" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-psd/end-season-flash-sale-banner-template_23-2149170767.jpg?t=st=1732285233~exp=1732288833~hmac=d578d4282fb8fec81981ac0594ff1db7cffc8ec4dfe3433df6deed60df0b4e30&w=1380" />
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<style scoped>
.banner-wrapper{
  width: 1380px;
}
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: fit-content;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>