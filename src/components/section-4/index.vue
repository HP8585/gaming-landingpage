<script setup>
import CreditCard from './creditCard.vue'
import creditCard2 from './creditCard2.vue';
</script>

<template>
<section class="section-3-container">
    <div class="flex flex-col text-center capitalize">
        <h1>Purchase</h1>
        <span> With your credit card wherever you are!</span>
    </div>
    <CreditCard class="md:block hidden"/>
    <creditCard2 class="md:hidden block"/>
</section>
</template>

<style scoped>
.section-3-container{
    @apply flex flex-col gap-4 justify-center items-center mt-5 py-12
}
.section-3-container h1{
    @apply font-semibold text-6xl;
    font-family: Gaming2;
}
</style>