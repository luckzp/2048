<template>
  <div class="flex min-h-screen justify-center items-center" v-if="showComponent">
    <div class="w-[568px] h-[568px] bg-[#bbada0] rounded-md p-4 flex flex-col gap-y-4">
      <div class="flex gap-4" v-for="i in 4">
        <div class="w-[122px] h-[122px] bg-[#cdc1b4] rounded-md flex items-center justify-center font-bold text-5xl"
          :class="classObject(i, j)" v-for="j in 4">
          <template v-if="cells[(i - 1) * 4 + j].valueNumber != 0">
            {{ cells[(i - 1) * 4 + j].valueNumber }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const cells = ref([16]);
const showComponent = ref(false);
onMounted(() => {

  let random1 = Math.round(Math.random() * (16 - 1)) + 1;
  let random2 = 0;
  while (random2 == 0 || random1 == random2) {
    random2 = Math.ceil(Math.random() * (16 - 1) + 1);
  }
  for (let i = 1; i <= 16; i++) {
    var obj = new Object();
    obj.id = i;
    obj.status = 0;
    obj.valueNumber = 0;
    if (i == random1) {
      obj.valueNumber = 2;
      obj.status = 1;
    } else if (i == random2) {
      obj.valueNumber = 4;
      obj.status = 1;
    }
    cells.value[i] = obj;
  }
  showComponent.value = true;
})
const classObject = (i, j) => {
  const valueNumber = cells.value[(i - 1) * 4 + j]?.valueNumber || 0;

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
};
</script>