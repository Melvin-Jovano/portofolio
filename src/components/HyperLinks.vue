<template>
    <div v-if="props.data.length > 0" class="mb-2">
        <a v-for="h in props.data" :href="h.url" :title="h.title" target="_blank" class="inline-block">
            <img width="95" :src="h.img" :alt="h.img" :srcset="h.img">
        </a>
    </div>
</template>

<script setup lang="ts">
    import type { IHyperLink } from '@/interfaces/IHyperLink';

    const props = defineProps<{ 
        data: IHyperLink[]
    }>();
</script>