<script setup>
import Cube from './cube.vue'
</script>

<template>
    <section class="section-3-container">
        <p class="cubeDesc">Unleash your inner hero and dive into a world of adventure with the latest and greatest games! Whether you’re a casual player or a dedicated enthusiast, our diverse selection offers something for everyone. Experience breathtaking graphics, immersive storylines, and challenging gameplay that will keep you on the edge of your seat. Join friends in epic multiplayer battles or embark on solo quests that test your skills and strategy. From heart-pounding action to mind-bending puzzles, every game promises hours of entertainment. Don’t miss out—explore new realms and redefine your gaming experience today! Level up with us and discover your next favorite game!</p>
       <div class="relative">
        <Cube/>
       </div>
    </section>
</template>

<style scoped>
.section-3-container{
    @apply flex flex-row md:flex-row md:gap-52 justify-center mt-5
}
.section-3-container p{
    @apply md:w-[30em] text-lg font-semibold bg-black 
    bg-opacity-50 p-4 rounded-lg z-[20]
}

</style>