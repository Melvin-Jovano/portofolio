<template>
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="carousel-modal" tabindex="-1" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-xl modal-dialog-centered relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-body relative p-4">
                    <Carousel :id="`carousel-${carouselModalStore.selectedImg.id}-modal`" :img="carouselModalStore.selectedImg.img" :active="carouselModalStore.selectedImg.active" :is-on-modal="true" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import carouselModal from '@/stores/carousel_modal';
    import Carousel from './Carousel.vue';

    const carouselModalStore = carouselModal();
</script>