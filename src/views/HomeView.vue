<script setup lang="ts">
  import Carousel from '../components/Carousel.vue';
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-3 md:px-0">
    <div class="py-5">
      <Carousel />
    </div>

    <div class="py-5">
      <h2 class="font-medium leading-tight text-3xl mt-0 mb-2">Simopen Lalin (Sistem Monitoring Pengatur Lalu Lintas)</h2>
      
      <p class="mt-5">
        A Mobile And Web Application To Track Users With Given Location And Time Range.
      </p>

      <div class="mt-5">
        <h3 class="font-medium leading-tight text-xl mt-0 mb-2">Technology Used:</h3>
        Flutter, Node.js, Vue.js
      </div>
    </div>
  </div>
</template>
