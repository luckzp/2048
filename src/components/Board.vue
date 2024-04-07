<template>
    <div class="w-[568px] h-[568px] bg-[#bbada0] rounded-md p-4 flex flex-wrap gap-4">
        <Cell v-for="(cell, index) in cells" :key="index" :cell="cell" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Cell from './Cell.vue';

const props = defineProps({
    cells: Array
});
</script>