<script setup>
import JoinBtn from './join-btn.vue'
</script>

<template>
    <section class="section-1-container">
        <h1 class="sec1Header">Get Ready For Ecstasy</h1>
        <div class="relative overflow-hidde hero w-fit h-fit flex">
            <img src="../../assets/img/hero-banner-bg.png" class="hidden md:block md:w-[70em]">
            <img src="../../assets/img/hero-banner.png" class=" md:absolute bottom-0 left-1/2 md:-translate-x-1/2">
        </div>
        <JoinBtn class="joinBtn"/>
    </section>
</template>

<style scoped>
@font-face {
    font-family: Gaming;
    src: url('../../assets/Gaming.ttf');
}
.section-1-container{
    @apply relative pb-2 pt-40 flex flex-col justify-center items-center gap-2
}
h1{
    @apply text-white absolute top-24 sm:top-[4.2em] md:top-4 font-semibold
    text-4xl lg:text-7xl text-center;
    font-family: Gaming;
}
.hero::before{
    content: "";
    background-image: linear-gradient(90deg, transparent 0%, #9841ff 50%, transparent 100%);
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    z-index: 10;
    position: absolute;
}
</style>