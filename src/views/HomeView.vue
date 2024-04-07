<template>
  <div class="flex min-h-screen justify-center items-center" v-if="showComponent">
    <Board :cells="cells" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Board from '@/components/Board.vue';

const cells = ref([]);
const showComponent = ref(false);

onMounted(() => {
  initializeCells();
  showComponent.value = true;
});

const initializeCells = () => {
  const random1 = Math.round(Math.random() * (16 - 1)) + 1;
  let random2 = 0;

  while (random2 === 0 || random1 === random2) {
    random2 = Math.ceil(Math.random() * (16 - 1) + 1);
  }

  for (let i = 1; i <= 16; i++) {
    const obj = {
      id: i,
      status: 0,
      valueNumber: i === random1 ? 2 : i === random2 ? 4 : 0
    };

    cells.value.push(obj);
  }
};
</script>
