<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps(['item'])
const { item } = toRefs(props)
</script>

<template>
    <div class="card">
        <div class="wrapper">
        <img src="https://static.ucraft.net/fs/ucraft/userFiles/mythrill/images/4006-the-dark-rider-homepage-bannersmall-16739674208698.png?v=1673967479" class="cover-image" />
        </div>
        
        <img src="https://pngimg.com/d/medival_knight_PNG15943.png" class="character" />
    </div>
</template>

<style>
.carousel__viewport{
    @apply overflow-y-visible overflow-x-hidden
}
.carousel__track{
    @apply overflow-visible
}
ol{
    @apply overflow-y-visible
}
ol > li{
    @apply overflow-y-visible
}
</style>

<style scoped>
.card {
  @apply w-full h-[26em];
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 36px;
  perspective: 2500px;
  margin-inline: 2px;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wrapper {
  transition: all 0.5s;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.wrapper img{
    @apply object-cover 
}

.card:hover .wrapper {
  transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
  box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
}

.wrapper::before,
.wrapper::after {
  content: "";
  opacity: 0;
  width: 100%;
  height: 80px;
  transition: all 0.5s;
  position: absolute;
  left: 0;
}
.wrapper::before {
  top: 0;
  height: 100%;
  background-image: linear-gradient(
    to top,
    transparent 46%,
    rgba(12, 13, 19, 0.5) 68%,
    rgba(12, 13, 19) 97%
  );
}
.wrapper::after {
  bottom: 0;
  opacity: 1;
  background-image: linear-gradient(
    to bottom,
    transparent 46%,
    rgba(12, 13, 19, 0.5) 68%,
    rgba(12, 13, 19) 97%
  );
}

.card:hover .wrapper::before,
.wrapper::after {
  opacity: 1;
}

.card:hover .wrapper::after {
  height: 120px;
}
.title {
  width: 100%;
  transition: transform 0.5s;
}
.card:hover .title {
  transform: translate3d(0%, -50px, 100px);
}

.character {
  width: 100%;
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  z-index: -1;
}

.card:hover .character {
  opacity: 1;
  transform: translate3d(0%, -10%, 100px);
}

</style>