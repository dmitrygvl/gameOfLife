/* eslint-disable no-param-reassign */
import { createGameOfLife } from './createGameOfLife';
import { drawField } from './drawField';

jest.mock('./drawField');
const drawFieldMock = drawField as jest.MockedFunction<typeof drawField>;

const sleep = (x: number) => new Promise((resolve) => setTimeout(resolve, x));

describe('createGameOfLife', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
    window.alert = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
    createGameOfLife(7, 7, element);
  });
  describe('UI', () => {
    it('creates Start button and field', () => {
      createGameOfLife(10, 10, element);
      expect(element.querySelector('.playBtn')).toBeTruthy();
      expect(element.querySelector('.playBtn')!.innerHTML).toBe('Start');
      expect(element.querySelector('.field-wrapper')).toBeTruthy();
    });
    it('changes button name on click', () => {
      createGameOfLife(10, 10, element);
      const button = element.querySelector('.playBtn') as HTMLButtonElement;
      expect(button.innerHTML).toBe('Start');
      button.click();
      expect(button.innerHTML).toBe('Stop');
      button.click();
      expect(button.innerHTML).toBe('Start');
      button.click();
      expect(button.innerHTML).toBe('Stop');
    });
    it('draws field', () => {
      drawFieldMock.mockImplementation((fieldEl, field) => {
        fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
      });
      createGameOfLife(2, 2, element);
      expect(element.querySelector('.field-wrapper')!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`,
      );
    });
    it('redraw field on interaction with it', () => {
      let onCellClick = (x: number, y: number) => {};
      drawFieldMock.mockImplementation((fieldEl, field, cellClickHandler) => {
        onCellClick = cellClickHandler;
        fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
      });
      createGameOfLife(2, 2, element);
      expect(element.querySelector('.field-wrapper')!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`,
      );
      onCellClick(0, 0);
      expect(element.querySelector('.field-wrapper')!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [1, 0],
          [0, 0],
        ])})`,
      );
      onCellClick(0, 0);
      expect(element.querySelector('.field-wrapper')!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`,
      );
      onCellClick(0, 1);
      onCellClick(1, 1);
      expect(element.querySelector('.field-wrapper')!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [1, 1],
        ])})`,
      );
    });
    it('on start it runs 1sec timer to update state', async () => {
      let onCellClick = (x: number, y: number) => {};
      drawFieldMock.mockImplementation((fieldEl, field, cellClickHandler) => {
        onCellClick = cellClickHandler;
        fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
      });
      createGameOfLife(2, 2, element);
      onCellClick(0, 0);
      const button = element.querySelector('.playBtn') as HTMLButtonElement;
      button.click();
      expect(element.querySelector('.field-wrapper')!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [1, 0],
          [0, 0],
        ])})`,
      );
      await sleep(1000);
      expect(element.querySelector('.field-wrapper')!.innerHTML).toBe(
        `drawField(${JSON.stringify([
          [0, 0],
          [0, 0],
        ])})`,
      );
    });
    it('stops game with alert, when none alive', async () => {
      let onCellClick = (x: number, y: number) => {};
      drawFieldMock.mockImplementation((fieldEl, field, cellClickHandler) => {
        onCellClick = cellClickHandler;
        fieldEl.innerHTML = `drawField(${JSON.stringify(field)})`;
      });
      createGameOfLife(2, 2, element);
      onCellClick(0, 0);
      const button = element.querySelector('.playBtn') as HTMLButtonElement;
      button.click();
      await sleep(1000);
      expect(window.alert).toHaveBeenCalledWith('Death on the block!');
      expect(button!.innerHTML).toBe('Start');
    });
    it('handles changeSizeBtn click and updates the field', () => {
      // Тест для изменения размера поля
      createGameOfLife(5, 5, element);

      const changeSizeBtn = element.querySelector(
        '.changeSizeBtn',
      ) as HTMLButtonElement;
      const widthInput = element.querySelector(
        '.control-width',
      ) as HTMLInputElement;
      const heightInput = element.querySelector(
        '.control-height',
      ) as HTMLInputElement;

      widthInput.value = '9';
      heightInput.value = '9';
      changeSizeBtn.click();

      const mockCalls = drawFieldMock.mock.calls;
      const chengedField = mockCalls[mockCalls.length - 1][1];
      expect(chengedField).toHaveLength(9);
      expect(chengedField[0]).toHaveLength(9);
    });
  });
});
