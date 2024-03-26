import { createGameUI } from './createGameUI';

describe('createGameUI', () => {
  let appElement: HTMLElement;

  beforeEach(() => {
    appElement = document.createElement('div');
    appElement.id = 'app';
    document.body.appendChild(appElement);
  });

  afterEach(() => {
    appElement?.remove();
  });

  it('should create game UI with initial settings', () => {
    createGameUI(appElement);
    const controlSpeedElement = appElement.querySelector(
      '.control-speed',
    ) as HTMLInputElement;
    const controlWidthElement = appElement.querySelector(
      '.control-width',
    ) as HTMLInputElement;
    const controlHeightElement = appElement.querySelector(
      '.control-height',
    ) as HTMLInputElement;
    const changeSizeBtnElement = appElement.querySelector(
      '.changeSizeBtn',
    ) as HTMLButtonElement;
    const fieldWrapperElement = appElement.querySelector(
      '.field-wrapper',
    ) as HTMLElement;
    const playBtnElement = appElement.querySelector(
      '.playBtn',
    ) as HTMLButtonElement;

    expect(controlSpeedElement).not.toBeNull();
    expect(controlWidthElement).not.toBeNull();
    expect(controlHeightElement).not.toBeNull();
    expect(changeSizeBtnElement).not.toBeNull();
    expect(fieldWrapperElement).not.toBeNull();
    expect(playBtnElement).not.toBeNull();
  });

  it('should set initial values for input elements', () => {
    createGameUI(appElement);
    const controlSpeedElement = appElement.querySelector(
      '.control-speed',
    ) as HTMLInputElement;
    const controlWidthElement = appElement.querySelector(
      '.control-width',
    ) as HTMLInputElement;
    const controlHeightElement = appElement.querySelector(
      '.control-height',
    ) as HTMLInputElement;

    expect(controlSpeedElement.value).toBe('100');
    expect(controlWidthElement.value).toBe('7');
    expect(controlHeightElement.value).toBe('7');
  });
});
