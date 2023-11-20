/* eslint-disable no-param-reassign */
import { createGameOfLife } from "./createGameOfLife";
import { drawField } from "./drawField";

jest.mock("./drawField");
const drawFieldMock = drawField as jest.MockedFunction<typeof drawField>;

const sleep = (x: number) => new Promise((resolve) => setTimeout(resolve, x));

describe("createGameOfLife", () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement("div");
    window.alert = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
    createGameOfLife(7, 7, element);
  });
  describe("UI", () => {
    it("creates Start button and field", () => {
      createGameOfLife(10, 10, element);
      expect(element.querySelector("playBtn")).toBeTruthy();
      expect(element.querySelector("playBtn")!.innerHTML).toBe("Start");
      expect(element.querySelector(".field-wrapper")).toBeTruthy();
    });
    it("changes button name on click", () => {
      createGameOfLife(10, 10, element);
      const button = element.querySelector("button") as HTMLButtonElement;
      expect(button.innerHTML).toBe("Start");
      button.click();
      expect(button.innerHTML).toBe("Stop");
      button.click();
      expect(button.innerHTML).toBe("Start");
      button.click();
      expect(button.innerHTML).toBe("Stop");
    });
    it("draws field", () => {
      drawFieldMock.mockImplementation((fieldEl, field) => {
        fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
      });
      createGameOfLife(2, 2, element);
      expect(element.querySelector(".field-wrapper")!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`,
      );
    });
    it("redraw field on interaction with it", () => {
      let onCellClick = (x: number, y: number) => {};
      drawFieldMock.mockImplementation((fieldEl, field, cellClickHandler) => {
        onCellClick = cellClickHandler;
        fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
      });
      createGameOfLife(2, 2, element);
      expect(element.querySelector(".field-wrapper")!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`,
      );
      onCellClick(0, 0);
      expect(element.querySelector(".field-wrapper")!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [1, 0],
          [0, 0],
        ])})`,
      );
      onCellClick(0, 0);
      expect(element.querySelector(".field-wrapper")!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`,
      );
      onCellClick(0, 1);
      onCellClick(1, 1);
      expect(element.querySelector(".field-wrapper")!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [1, 1],
        ])})`,
      );
    });
    it("on start it runs 1sec timer to update state", async () => {
      let onCellClick = (x: number, y: number) => {};
      drawFieldMock.mockImplementation((fieldEl, field, cellClickHandler) => {
        onCellClick = cellClickHandler;
        fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
      });
      createGameOfLife(2, 2, element);
      onCellClick(0, 0);
      const button = element.querySelector("button") as HTMLButtonElement;
      button.click();
      expect(element.querySelector(".field-wrapper")!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [1, 0],
          [0, 0],
        ])})`,
      );
      await sleep(1000);
      expect(element.querySelector(".field-wrapper")!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`,
      );
    });
    it("stops game with alert, when none alive", async () => {
      let onCellClick = (x: number, y: number) => {};
      drawFieldMock.mockImplementation((fieldEl, field, cellClickHandler) => {
        onCellClick = cellClickHandler;
        fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
      });
      createGameOfLife(2, 2, element);
      onCellClick(0, 0);
      const button = element.querySelector("button") as HTMLButtonElement;
      button.click();
      await sleep(1000);
      expect(window.alert).toHaveBeenCalledWith("Death on the block");
      expect(button!.innerHTML).toBe("Start");
    });
  });
});
