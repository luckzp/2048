<template>
    <div class="w-[122px] h-[122px] bg-[#cdc1b4] rounded-md flex items-center justify-center font-bold text-5xl"
        :class="cellClasses">
        {{ cell.valueNumber === 0 ? '' : cell.valueNumber }}
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    cell: Object
});

const cellClasses = computed(() => {
    const valueNumber = props.cell.valueNumber;

    const colorMap = {
        2: { backgroundColor: 'bg-cell-2', textColor: 'text-cell-black' },
        4: { backgroundColor: 'bg-cell-4', textColor: 'text-cell-black' },
        8: { backgroundColor: 'bg-cell-8', textColor: 'text-cell-white' },
        16: { backgroundColor: 'bg-cell-16', textColor: 'text-cell-white' },
        32: { backgroundColor: 'bg-cell-32', textColor: 'text-cell-white' },
        64: { backgroundColor: 'bg-cell-64', textColor: 'text-cell-white' },
        128: { backgroundColor: 'bg-cell-128', textColor: 'text-cell-white' },
        256: { backgroundColor: 'bg-cell-256', textColor: 'text-cell-white' },
        default: { backgroundColor: '#cdc1b4', textColor: '#000' }
    };

    const { backgroundColor, textColor } = colorMap[valueNumber] || colorMap.default;

    return {
        [`${backgroundColor}`]: true,
        [`${textColor}`]: true
    };
});
</script>