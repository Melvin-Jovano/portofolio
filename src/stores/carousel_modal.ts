import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { ICarousel } from '@/interfaces/ICarousel';

const carouselModal = defineStore('carouselModal', () => {
  const selectedImg: Ref<{ img: ICarousel[]; active: number; id: string; }> = ref({
    img: [],
    active: 0,
    id: 'random-string'
  });

  return {
    selectedImg
  }
});

export default carouselModal;