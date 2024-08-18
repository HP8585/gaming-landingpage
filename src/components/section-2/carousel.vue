<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import carSlider from './car-slider.vue'


</script>

<template>
    <div class="mt-4 pb-10 overflow-y-visible overflow-x-hidden">
        <Carousel  :breakpoints="{
            440:{
                itemsToShow: 1
            },
            500:{
                itemsToShow: 1.5
            },
            590:{
                itemsToShow: 2
            },
            650:{
                itemsToShow: 2.5
            },
            790:{
                itemsToShow: 3
            },
            940:{
                itemsToShow: 3.5
            },
            1070:{
                itemsToShow: 4
            }
        }" :wrapAround="true" class="overflow-visible">
            <Slide v-for="(item, idx) in 10" :key="idx" >
                <carSlider :item="item"/>
            </Slide>

            <template #addons>
                <Navigation/>
            </template>
        </Carousel>
    </div>
</template>

<style>
.carousel{
    @apply overflow-auto
}
.carousel__slide{

    width: fit-content;

}
.carousel__next,
.carousel__prev{
    @apply text-violet-600 bg-white rounded-full w-10 h-10
}
</style>