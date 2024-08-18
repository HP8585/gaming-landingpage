<script setup>
import carousel from './carousel.vue'
</script>

<template>
    <section class="section-2-container">
        <h1 class="hero relative">Our Hero Cards</h1>
        <carousel/>
    </section>
</template>

<style scoped>
@font-face {
    font-family: Gaming2;
    src: url('../../assets/Gaming2.ttf');
}
.section-2-container{
    @apply relative mt-36
}
h1{
    @apply text-5xl text-center;
 font-family: Gaming2;
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