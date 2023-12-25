const board = document.getElementById('board');
const cellSize = 40; // 각 셀의 크기
const stones = []; // 바둑알 저장 배열

function createCell(row, col) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('click', (event) => {
    const rect = cell.getBoundingClientRect();
    const offsetX = event.clientX - rect.left; // 셀 내부의 x 좌표
    const offsetY = event.clientY - rect.top; // 셀 내부의 y 좌표
    const colIndex = Math.round(offsetX / (rect.width / 15)); // 클릭한 위치의 열 번호
    const rowIndex = Math.round(offsetY / (rect.height / 15)); // 클릭한 위치의 행 번호
    const stoneX = colIndex * (rect.width / 15); // 바둑알의 x 좌표
    const stoneY = rowIndex * (rect.height / 15); // 바둑알의 y 좌표

    if (!stones[rowIndex]) {
      stones[rowIndex] = [];
    }

    if (!stones[rowIndex][colIndex]) {
      const stone = document.createElement('div');
      stone.classList.add('stone');
      stone.style.top = `${stoneY}px`; // 바둑알의 y 좌표를 픽셀로 변환
      stone.style.left = `${stoneX}px`; // 바둑알의 x 좌표를 픽셀로 변환
      cell.appendChild(stone);
      stones[rowIndex][colIndex] = true;
    }
  });
  return cell;
}

for (let row = 0; row < 15; row++) {
  for (let col = 0; col < 15; col++) {
    const cell = createCell(row, col);
    board.appendChild(cell);
  }
}
