<template>
  <div class="flex flex-col min-h-screen justify-center items-center" v-if="showComponent">
    <Board :cells="cells" />
    <div class="text-zinc-700 mt-4">
      <p class="text-xl">
        HOW TO PLAY: Use your arrow keys to move the tiles. Tiles with the same number
        <span class="font-bold">merge into one</span> when they touch. Add them up to
        reach 2048!
      </p>
    </div>
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
  document.addEventListener('keyup', keyDown)
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
      valueNumber: i === random1 ? 2 : i === random2 ? 4 : 0
    };

    cells.value.push(obj);
  }
};

//键盘监听事件
const keyDown = (e) => {
  switch (e.keyCode) {
    case 38: //上
      moveUp()
      break
    case 40: //下
      moveDown()
      break
    case 37: //左
      moveLeft()
      break
    case 39: //右
      moveRight()
      break
  }
  generateRandomNumber();
};
const moveUp = () => {
  console.log('上');
  for (let i = 4; i <= 15; i++) {
    if (cells.value[i].valueNumber === 0) {
      continue;
    }
    let upLineId = i - 4;
    // 当前有值
    if (cells.value[upLineId].valueNumber === cells.value[i].valueNumber) {
      cells.value[upLineId].valueNumber *= 2;
      cells.value[i].valueNumber = 0;
      continue;
    }

    if (cells.value[upLineId].valueNumber === 0) {
      let firstLineId = upLineId;
      while (cells.value[firstLineId].valueNumber === 0 && firstLineId > 3) {
        firstLineId -= 4;
      }
      if (cells.value[firstLineId].valueNumber === 0) {
        cells.value[firstLineId].valueNumber = cells.value[i].valueNumber;
        cells.value[i].valueNumber = 0;
      } else {
        if (cells.value[firstLineId].valueNumber == cells.value[i].valueNumber) {
          cells.value[firstLineId].valueNumber *= 2;
          cells.value[i].valueNumber = 0;
        } else {
          while (cells.value[firstLineId].valueNumber > 0 && firstLineId < 12) {
            firstLineId = firstLineId + 4;
          }
          if (cells.value[firstLineId].valueNumber === 0) {
            cells.value[firstLineId].valueNumber = cells.value[i].valueNumber;
            cells.value[i].valueNumber = 0;
          }
        }
      }
    }
  }
};
const moveDown = () => {
  console.log('下');
  for (let i = 11; i >= 0; i--) {
    if (cells.value[i].valueNumber === 0) {
      continue;
    }
    let upLineId = i + 4;
    // 当前有值
    if (cells.value[upLineId].valueNumber === cells.value[i].valueNumber) {
      cells.value[upLineId].valueNumber *= 2;
      cells.value[i].valueNumber = 0;
      continue;
    }

    if (cells.value[upLineId].valueNumber === 0) {
      let firstLineId = upLineId;
      while (cells.value[firstLineId].valueNumber === 0 && firstLineId < 12) {
        firstLineId += 4;
      }
      if (cells.value[firstLineId].valueNumber === 0) {
        cells.value[firstLineId].valueNumber = cells.value[i].valueNumber;
        cells.value[i].valueNumber = 0;
      } else {
        if (cells.value[firstLineId].valueNumber == cells.value[i].valueNumber) {
          cells.value[firstLineId].valueNumber *= 2;
          cells.value[i].valueNumber = 0;
        } else {
          while (cells.value[firstLineId].valueNumber > 0 && firstLineId > 3) {
            firstLineId = firstLineId - 4;
          }
          if (cells.value[firstLineId].valueNumber === 0) {
            cells.value[firstLineId].valueNumber = cells.value[i].valueNumber;
            cells.value[i].valueNumber = 0;
          }
        }
      }
    }
  }
};
const moveLeft = () => {
  console.log('左');
  for (let i = 1; i <= 15; i++) {
    if (i % 4 === 0) {
      continue;
    }
    if (cells.value[i].valueNumber === 0) {
      continue;
    }
    let upLineId = i - 1;
    // 当前有值
    if (cells.value[upLineId].valueNumber === cells.value[i].valueNumber) {
      cells.value[upLineId].valueNumber *= 2;
      cells.value[i].valueNumber = 0;
      continue;
    }

    if (cells.value[upLineId].valueNumber === 0) {
      let firstLineId = upLineId;
      while (cells.value[firstLineId].valueNumber === 0 && firstLineId % 4 != 0) {
        firstLineId -= 1;
      }
      if (cells.value[firstLineId].valueNumber === 0) {
        cells.value[firstLineId].valueNumber = cells.value[i].valueNumber;
        cells.value[i].valueNumber = 0;
      } else {
        if (cells.value[firstLineId].valueNumber == cells.value[i].valueNumber) {
          cells.value[firstLineId].valueNumber *= 2;
          cells.value[i].valueNumber = 0;
        } else {
          while (cells.value[firstLineId].valueNumber > 0 && firstLineId % 4 != 3) {
            firstLineId = firstLineId + 1;
          }
          if (cells.value[firstLineId].valueNumber === 0) {
            cells.value[firstLineId].valueNumber = cells.value[i].valueNumber;
            cells.value[i].valueNumber = 0;
          }
        }
      }
    }
  }
};
const moveRight = () => {
  console.log('右');
  for (let i = 14; i >= 0; i--) {
    if (i % 4 === 3) {
      continue;
    }
    if (cells.value[i].valueNumber === 0) {
      continue;
    }
    let upLineId = i + 1;
    // 当前有值
    if (cells.value[upLineId].valueNumber === cells.value[i].valueNumber) {
      cells.value[upLineId].valueNumber *= 2;
      cells.value[i].valueNumber = 0;
      continue;
    }

    if (cells.value[upLineId].valueNumber === 0) {
      let firstLineId = upLineId;
      while (cells.value[firstLineId].valueNumber === 0 && firstLineId % 4 != 3) {
        firstLineId += 1;
      }
      if (cells.value[firstLineId].valueNumber === 0) {
        cells.value[firstLineId].valueNumber = cells.value[i].valueNumber;
        cells.value[i].valueNumber = 0;
      } else {
        if (cells.value[firstLineId].valueNumber == cells.value[i].valueNumber) {
          cells.value[firstLineId].valueNumber *= 2;
          cells.value[i].valueNumber = 0;
        } else {
          while (cells.value[firstLineId].valueNumber > 0 && firstLineId % 4 != 0) {
            firstLineId = firstLineId - 1;
          }
          if (cells.value[firstLineId].valueNumber === 0) {
            cells.value[firstLineId].valueNumber = cells.value[i].valueNumber;
            cells.value[i].valueNumber = 0;
          }
        }
      }
    }
  }
};
const generateRandomNumber = () => {
  // 随机选择一个空格
  const emptyCells = cells.value.filter(cell => cell.valueNumber === 0);
  if (emptyCells.length === 0) {
    // 没有空格可用，游戏可能结束或者棋盘已满
    console.log(cells.value);
    console.log("Game Over!");
    return;
  }
  const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

  // 随机生成一个数字（一般是2或4）
  randomCell.valueNumber = Math.random() < 0.9 ? 2 : 4;
}

</script>
