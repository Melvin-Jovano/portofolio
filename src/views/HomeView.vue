<script setup lang="ts">
  import Carousel from '../components/Carousel.vue';
</script>

<template>
  <div class="bg-teal-800 px-3 py-1 m-4 md:px-5 md:py-1 rounded-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div class="py-5">
        <Carousel />
      </div>

      <div class="py-5">
        <h2 class="font-medium leading-tight text-3xl mt-0 mb-2">
          Simopen Lalin (Sistem Monitoring Pengatur Lalu Lintas)
        </h2>
        
        <p class="mt-5 italic max-h-40 overflow-auto">
          A Mobile And Web Application To Track Users By Given Location And Time Range.
        </p>

        <div class="mt-5">
          <h3 class="font-medium leading-tight text-lg mt-0 mb-2">- Built With:</h3>
          Flutter,  Node.js, Vue.js
        </div>
      </div>
    </div>
  </div>
</template>
