<script setup>
import leftBox from './leftBox.vue'
import rightBox from './rightBox.vue'
</script>

<template>
    <section class="section-5-container">
        <div class="flex items-center justify-between lg:-mb-20">
            <h1 class="news">HEARD THE NEWS?</h1>
            <img src="../../assets/img/arcanist.webp" class="w-96 lg:block hidden">
        </div>
        <div class="flex flex-col lg:flex-row gap-12">
                <leftBox/>

                <rightBox/>
        </div>
    </section>
</template>

<style scoped>
.section-5-container{
    @apply pb-20 mt-10 flex flex-col
}
.section-5-container h1.news{
    @apply text-7xl;
    font-family: Gaming;
}
</style>