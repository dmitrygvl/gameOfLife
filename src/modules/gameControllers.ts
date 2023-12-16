import { drawField } from "./drawField";
import { getNextState } from "./getNextState";
import { isAnyoneAlive } from "./isAnyoneAlive";

export function gameControllers(
  sizeX: number,
  sizeY: number,
  fieldWrapper: HTMLElement,
  changeSizeBtn: HTMLButtonElement,
  speedInput: HTMLInputElement,
  playBtn: HTMLButtonElement,
  widthInput: HTMLInputElement,
  heightInput: HTMLInputElement,
  gameIsRunning: boolean,
  timer: ReturnType<typeof setInterval>,
) {
  let speed = 100;

  // Создать поле заданного размера
  let field: number[][] = Array.from({ length: sizeY }).map(() =>
    Array.from({ length: sizeX }).map(() => 0),
  ) as number[][];

  const cellClickHandler = (x: number, y: number): void => {
    field[y][x] = field[y][x] === 0 ? 1 : 0;
    drawField(fieldWrapper, field, cellClickHandler);
  };

  // Изменить размер игрового поля
  changeSizeBtn.addEventListener("click", () => {
    const newWidth = parseInt(widthInput.value, 10);
    const newHeight = parseInt(heightInput.value, 10);

    if (newWidth > field[0].length) {
      for (let i = 0; i < field.length; i++) {
        field[i].push(...new Array(newWidth - field[i].length).fill(0));
      }
    } else if (newWidth < field[0].length) {
      for (let i = 0; i < field.length; i++) {
        field[i] = field[i].slice(0, newWidth);
      }
    }

    if (newHeight > field.length) {
      const newRows = Array.from({ length: newHeight - field.length }).map(() =>
        new Array(newWidth).fill(0),
      );
      field.push(...newRows);
    } else if (newHeight < field.length) {
      field = field.slice(0, newHeight);
    }

    drawField(fieldWrapper, field, cellClickHandler);
  });

  // Отрисовать поле заданного размера
  drawField(fieldWrapper, field, cellClickHandler);
  // При клике по ячейке поля
  // - поменять его состояние
  // - перерисовать поле
  function stopGame(): void {
    gameIsRunning = false;
    playBtn!.innerHTML = "Start";
    // При клике на кнопке `Stop` остановить таймер
    clearInterval(timer);
  }

  function updateGame() {
    // - посчитать новое состояние поля
    // - отрисовать новое состояние поля
    // - проверить, что есть живые клетки
    // - если живых клеток нет
    //    - остановить таймер
    //    - вывести сообщение
    field = getNextState(field);
    drawField(fieldWrapper, field, cellClickHandler);
    if (!isAnyoneAlive(field)) {
      alert("Death on the block!");
      stopGame();
    }
  }

  function startGame(): void {
    // При клике по кнопке старт
    // - поменять надпись на `Stop`
    gameIsRunning = true;
    playBtn!.innerHTML = "Stop";
    // - запустить таймер для обновления поля
    timer = setInterval(updateGame, speed);
  }

  playBtn!.addEventListener("click", () => {
    if (!gameIsRunning) {
      startGame();
    } else {
      stopGame();
    }
  });

  function changeGameSpeed() {
    speed = parseInt(speedInput.value, 10);

    if (gameIsRunning) {
      clearInterval(timer);
      timer = setInterval(updateGame, speed);
    }
  }

  speedInput.addEventListener("input", changeGameSpeed);
}
