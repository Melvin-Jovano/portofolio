<template>
  <div class="bg-teal-700">
    <Card v-for="card in cards" :hyperlinks="card.hyperlinks" :position="card.position" :title="card.title" :technology="card.technology" :description="card.description" :carousel="card.carousel" :id="card.id" :key="card.id" />
  </div>
  
  <ModalCarousel />
</template>

<script setup lang="ts">
  import Card from '@/components/Card.vue';
  import ModalCarousel from '@/components/ModalCarousel.vue';
  import cards from '../assets/data/card';
</script>