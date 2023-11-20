// /* eslint-disable no-param-reassign */

// import { drawField } from "./drawField";
// import { getNextState } from "./getNextState";
// import { isAnyoneAlive } from "./isAnyoneAlive";

// /**
//  * Создание игры Жизнь
//  * @param sizeX {number} - число колонок
//  * @param sizeY {number} - число строк
//  * @param htmlElement {HTMLElement} - элемент, в котором будет отрисована игра
//  * @returns void
//  */
// export function createGameOfLife(sizeX: number, sizeY: number, htmlElement: HTMLElement): void {
//   let gameIsRunning = false;
//   let timer: ReturnType<typeof setInterval>;

//   // Создать блок для поля
//   // Создать кнопку управления игрой
//   htmlElement.innerHTML = `<div class="field-wrapper"></div><button>Start</button>`;
//   const fieldWrapper = htmlElement.querySelector(".field-wrapper") as HTMLElement;
//   const button = htmlElement.querySelector("button");

//   // Создать поле заданного размера
//   let field = Array.from({ length: sizeY }).map(() =>
//     Array.from({ length: sizeX }).fill(0),
//   );

//   const cellClickHandler = (x: number, y: number): void => {
//     field[y][x] = field[y][x] === 0 ? 1 : 0;
//     drawField(fieldWrapper, field, cellClickHandler);
//   };

//   // Отрисовать поле заданного размера
//   drawField(fieldWrapper, field, cellClickHandler);
//   // При клике по ячейке поля
//   // - поменять его состояние
//   // - перерисовать поле
//   function stopGame() {
//     gameIsRunning = false;
//     button!.innerHTML = "Start";
//     // При клике на кнопке `Stop` остановить таймер
//     if (timer) {
//     clearInterval(timer);
//     }
//   }
//   function startGame(): void {
//     // При клике по кнопке старт
//     // - поменять надпись на `Stop`
//     gameIsRunning = true;
//     button!.innerHTML = "Stop";
//     // - запустить таймер для обновления поля
//     timer = setInterval(() => {
//       // В таймере обновления поля
//       // - посчитать новое состояние поля
//       // - отрисовать новое состояние поля
//       // - проверить, что есть живые клетки
//       // - если живых клеток нет
//       //    - остановить таймер
//       //    - вывести сообщение
//       field = getNextState(field);
//       drawField(fieldWrapper, field, cellClickHandler);
//       if (!isAnyoneAlive(field)) {
//         alert("Death on the block");
//         stopGame();
//       }
//     }, 1000);
//   }

//   button!.addEventListener("click", () => {
//     if (!gameIsRunning) {
//       startGame();
//     } else {
//       stopGame();
//     }
//   });
// }

//

/* eslint-disable no-param-reassign */

import { drawField } from "./drawField";
import { getNextState } from "./getNextState";
import { isAnyoneAlive } from "./isAnyoneAlive";

/**
 * Создание игры Жизнь
 * @param sizeX {number} - число колонок
 * @param sizeY {number} - число строк
 * @param htmlElement {HTMLElement} - элемент, в котором будет отрисована игра
 * @returns void
 */
export function createGameOfLife(
  sizeX: number,
  sizeY: number,
  htmlElement: HTMLElement,
): void {
  let gameIsRunning = false;
  let timer: ReturnType<typeof setInterval>;

  // Создать блок для поля
  // Создать кнопки управления игрой

    htmlElement.innerHTML = `
   <div class="control">
    <div class="input-box">
      <label for="control-speed">Speed: </label>
      <input class="control-speed" type="range" min="10" max="200" value="100" step="10">
    </div>
    <div class="input-box">
     <label for="control-width">Width: </label>
     <input class="input control-width" type="number" value="7" min="3">
    </div>
    <div class="input-box">
     <label for="control-height">Height: </label>
     <input class="input control-height" type="number" value="7" min="3">
    </div>
    <button class="button changeSizeBtn">Change size</button>
  </div>
  <div class="field-wrapper"></div>
  <div class="playBtn-box"><button class="button playBtn">Start</button></div>
  `;

 const speedInput = htmlElement.querySelector(".control-speed") as HTMLInputElement;
 const widthInput = htmlElement.querySelector(".control-width") as HTMLInputElement;
 const heightInput = htmlElement.querySelector("control-height") as HTMLInputElement;
 const changeSizeBtn = htmlElement.querySelector(".changeSizeBtn") as HTMLButtonElement;
 const playBtn = htmlElement.querySelector(".playBtn") as HTMLButtonElement;
 const fieldWrapper = htmlElement.querySelector(
    ".field-wrapper",
  ) as HTMLElement;
  

    let speed = 100;

  // Создать поле заданного размера
  let field: number[][] = Array.from({ length: sizeY }).map(() =>
    Array.from({ length: sizeX }).fill(0),
  ) as number[][];

  const cellClickHandler = (x: number, y: number): void => {
    field[y][x] = field[y][x] === 0 ? 1 : 0;
    drawField(fieldWrapper, field, cellClickHandler);
  };

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
  function startGame(): void {
    // При клике по кнопке старт
    // - поменять надпись на `Stop`
    gameIsRunning = true;
    playBtn!.innerHTML = "Stop";
    // - запустить таймер для обновления поля
    timer = setInterval(() => {
      // В таймере обновления поля
      // - посчитать новое состояние поля
      // - отрисовать новое состояние поля
      // - проверить, что есть живые клетки
      // - если живых клеток нет
      //    - остановить таймер
      //    - вывести сообщение
      field = getNextState(field);
      drawField(fieldWrapper, field, cellClickHandler);
      if (!isAnyoneAlive(field)) {
        alert("Death on the block");
        stopGame();
      }
    }, 1000);
  }

  playBtn!.addEventListener("click", () => {
    if (!gameIsRunning) {
      startGame();
    } else {
      stopGame();
    }
  });
}
