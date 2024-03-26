import { gameControllers } from './gameControllers';

// Mock elements to use in the tests
const mockFieldWrapper = document.createElement('div');
const mockChangeSizeBtn = document.createElement('button');
const mockSpeedInput = document.createElement('input');
const mockPlayBtn = document.createElement('button');
const mockWidthInput = document.createElement('input');
const mockHeightInput = document.createElement('input');

describe('gameControllers', () => {
  beforeEach(() => {
    mockFieldWrapper.innerHTML = '';
    mockChangeSizeBtn.removeEventListener('click', jest.fn());
  });

  it('changes game speed on input change', () => {
    gameControllers(
      10, // sizeX
      10, // sizeY
      mockFieldWrapper,
      mockChangeSizeBtn,
      mockSpeedInput,
      mockPlayBtn,
      mockWidthInput,
      mockHeightInput,
      false, // gameIsRunning
      setInterval(() => {}, 0), // timer
    );

    mockSpeedInput.value = '200';
    mockSpeedInput.dispatchEvent(new Event('input'));
  });
  it('changes the size of the game field', () => {
    gameControllers(
      10, // sizeX
      10, // sizeY
      mockFieldWrapper,
      mockChangeSizeBtn,
      mockSpeedInput,
      mockPlayBtn,
      mockWidthInput,
      mockHeightInput,
      false, // gameIsRunning
      setInterval(() => {}, 0), // timer
    );

    mockWidthInput.value = '15';
    mockHeightInput.value = '15';
    mockChangeSizeBtn.click();
  });
});
