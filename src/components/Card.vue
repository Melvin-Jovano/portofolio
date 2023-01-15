<template>
    <div class="bg-teal-800 px-3 py-1 m-4 md:px-5 md:py-1 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div class="py-5">
            <Carousel :img="props.carousel" :id="props.id.toString()" />
        </div>

        <div class="py-5">
            <h2 class="font-medium leading-tight text-3xl mt-0 mb-2">
                {{ props.title }}
            </h2>
            
            <p class="flex space-x-2 justify-left mt-4">
                <span v-for="t in props.technology" class="text-xs inline-block py-1 px-2.5 leading-none text-center italic whitespace-nowrap align-baseline bg-teal-600 text-white rounded-full">
                    {{ t }}
                </span>
            </p>

            <p class="mt-5 italic max-h-32 overflow-auto">
                {{ props.description }}
            </p>

            <div class="mt-5">
                <p class="font-medium mb-2">My Position:</p>
                <div class="flex space-x-2 justify-left">
                    <button v-for="p in props.position"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        class="inline-block px-3 py-2 bg-teal-600 text-white text-xs leading-none rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >{{ p }}</button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { PropType } from 'vue';
    import Carousel from '../components/Carousel.vue';
    import type { ICarousel } from '@/interfaces/ICarousel';

    const props = defineProps({
        id: {
            type: String,
            default: () => 'random-string'
        },
        position: {
            type: Array as PropType<string[]>,
            default: () => []
        },
        title: {
            type: String,
            default: () => ''
        },
        description: {
            type: String,
            default: () => ''
        },
        carousel: {
            type: Array as PropType<ICarousel[]>,
            default: () => []
        },
        technology: {
            type: Array as PropType<string[]>,
            default: () => []
        }
    });
</script>