<script setup>
import { onMounted } from 'vue';
import { Button } from '../components';
// import { scrollNews } from '../composables/scroll';

function scrollItem(item){
const element = document.querySelector(item);
if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
}
}
</script>

<template>
<div class="px-8 overflow-hidden">
    <header>
        <img src="../assets/img/logo.svg" class="w-20">
        
        <ul class="menu">
            <li @click="scrollItem('.sec1')">Home</li>
            <li @click="scrollItem('.sec2')">Heros</li>
            <li @click="scrollItem('.sec3')">About</li>
            <li @click="scrollItem('.sec4')">Purchase</li>
            <li @click="scrollItem('.sec5')">News</li>
        </ul>
        <Button >Login</Button>
    </header>
    <main class="mx-auto w-fit">
        <slot/>
    </main>
</div>
</template>

<style scoped>
header{
    @apply flex justify-between items-center backdrop-blur-md
    sticky top-0 z-[560];
}
header .menu{
    @apply md:flex gap-4 font-semibold hidden
}
header .menu > li{
    @apply cursor-pointer relative
}
header .menu > li::before{
    content: "";
    @apply h-0.5 w-[0%] bg-violet-600 absolute bottom-0 duration-200
}
header .menu > li:hover::before{
    @apply w-[100%]
}
</style>