<script setup>
import DefaultOverlay from './layout/default.vue';
import { section1, section2, section3, section4, section5 } from './components';
import { onMounted, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import * as Gsaps from './composables/gsap';

const store = useStore();

const sec1 = ref(null),
sec2 = ref(null),
sec3 = ref(null),
sec4 = ref(null),
sec5 = ref(null);

// Array of section refs
const sections = [sec1, sec2, sec3, sec4, sec5];

onMounted(() => {
  Gsaps.headerGsap()
  Gsaps.joinBtn()
  Gsaps.cubeGsap()
  Gsaps.descCubeGsap()
  Gsaps.newsCard1()
  Gsaps.newsCard2()
  Gsaps.leftBoxGsap()

  sections.forEach((sectionRef, index) => {
    // Check if the ref has a value to prevent committing null or undefined
    if (sectionRef) {
      store.commit('assignSection', {
        name: `section${index}`,
        component: sectionRef.value
      });
    } else {
      console.warn(`Section ${index + 1} is null.`);
    }
  });

});

// watchEffect(()=>{
//   setInterval(() => {
//     console.log(store.state.section1);
//   }, 4000);
  
// })
</script>

<template>
  <DefaultOverlay>
    <section1 ref="sec1" class="sec1"/>
    <section2 ref="sec2" class="sec2"/>
    <section3 ref="sec3" class="sec3"/>
    <section4 ref="sec4" class="sec4"/>
    <section5 ref="sec5" class="sec5"/>
  </DefaultOverlay>
</template>
