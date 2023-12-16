/* eslint-disable no-param-reassign */

import { drawField } from "./drawField";
import { getNextState } from "./getNextState";
import { isAnyoneAlive } from "./isAnyoneAlive";
import { createGameUI } from "./createGameUI";
import { gameControllers } from "./gameControllers";

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
  const gameIsRunning = false;
  // let timer: ReturnType<typeof setInterval>;
  let timer: NodeJS.Timeout;

  // Создать блок для поля
  createGameUI(htmlElement);

  // Создать кнопки управления игрой
  const speedInput = htmlElement.querySelector(
    ".control-speed",
  ) as HTMLInputElement;
  const widthInput = htmlElement.querySelector(
    ".control-width",
  ) as HTMLInputElement;
  const heightInput = htmlElement.querySelector(
    ".control-height",
  ) as HTMLInputElement;
  const changeSizeBtn = htmlElement.querySelector(
    ".changeSizeBtn",
  ) as HTMLButtonElement;
  const fieldWrapper = htmlElement.querySelector(
    ".field-wrapper",
  ) as HTMLElement;
  const playBtn = htmlElement.querySelector(".playBtn") as HTMLButtonElement;
  gameControllers(
    sizeX,
    sizeY,
    fieldWrapper,
    changeSizeBtn,
    speedInput,
    playBtn,
    widthInput,
    heightInput,
    gameIsRunning,
    timer!,
  );
}
