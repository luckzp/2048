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
        2: { backgroundColor: '#eee4da', textColor: '#776e65' },
        4: { backgroundColor: '#ede0c8', textColor: '#776e65' },
        8: { backgroundColor: '#f2b179', textColor: '#f9f6f2' },
        16: { backgroundColor: '#f59563', textColor: '#f9f6f2' },
        32: { backgroundColor: '#f67c5f', textColor: '#f9f6f2' },
        64: { backgroundColor: '#f65e3b', textColor: '#f9f6f2' },
        128: { backgroundColor: '#edcf72', textColor: '#f9f6f2' },
        256: { backgroundColor: '#edcc61', textColor: '#f9f6f2' },
        default: { backgroundColor: '#cdc1b4', textColor: '#000' }
    };

    const { backgroundColor, textColor } = colorMap[valueNumber] || colorMap.default;

    return {
        [`bg-[${backgroundColor}]`]: true,
        [`text-[${textColor}]`]: true
    };
});
</script>