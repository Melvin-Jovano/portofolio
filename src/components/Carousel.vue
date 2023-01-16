<template>
    <div
        :id="props.id"
        class="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel" data-bs-interval="false">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button v-for="(i, idx) in props.img"
            :data-bs-target="`#${props.id}`"
            :data-bs-slide-to="idx"
            :class="`${idx !== props.active ? '' : 'active'}`"
            ></button>
        </div>

        <div class="carousel-inner relative w-full overflow-hidden">
            <div v-for="(i, idx) in props.img" :class="`${idx === props.active ? 'active' : ''} carousel-item relative float-left w-full cursor-pointer`" @click="setModal(idx)" :data-bs-toggle="`${!props.isOnModal ? 'modal' : ''}`" :data-bs-target="`${!props.isOnModal ? '#carousel-modal' : ''}`">
                <img
                    :src="i.url"
                    :class="`${i.type === 'potrait' ? 'w-48 mx-auto' : 'block w-full'}`"
                    :alt="i.alt"
                />
                <div class="carousel-caption hidden md:block absolute text-center">
                    <span class="bg-slate-200 shadow-xl italic px-2 py-1 text-xs text-gray-900">
                        {{ i.alt }} {{ props.active }}
                    </span>
                </div>
            </div>
        </div>
        <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            :data-bs-target="`#${props.id}`"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            :data-bs-target="`#${props.id}`"
            data-bs-slide="next">
            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    
</template>

<script setup lang="ts">
    import type { ICarousel } from '@/interfaces/ICarousel';
    import type { PropType } from 'vue';
    import carouselModal from '@/stores/carousel_modal';

    const carouselModalStore = carouselModal();

    const props = defineProps({
        img: {
            type: Array as PropType<ICarousel[]>,
            default: () => []
        },
        id: {
            type: String,
            default: () => '0'
        },
        active: {
            type: Number,
            default: () => 0
        },
        isOnModal: {
            type: Boolean,
            default: () => false
        }
    });

    function setModal(active: number) {
        try {
            console.log(active);
            carouselModalStore.selectedImg.img = props.img;
            carouselModalStore.selectedImg.active = active;
        } catch (error) {
            alert('An Error Has Occured...')
        }
    }
</script>