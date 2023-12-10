import { gameControllers } from "./gameControllers";

describe('gameControllers', () => {
	let sizeX: number;
	let sizeY: number;
	let fieldWrapper: HTMLElement;
	let changeSizeBtn: HTMLButtonElement;
	let speedInput: HTMLInputElement;
	let playBtn: HTMLButtonElement;
	let widthInput: HTMLInputElement;
	let heightInput: HTMLInputElement;
	let gameIsRunning: boolean;
	let timer: ReturnType<typeof setInterval>;

	beforeEach(() => {
		sizeX = 10;
		sizeY = 10;
		fieldWrapper = document.createElement('div');
		changeSizeBtn = document.createElement('button');
		speedInput = document.createElement('input');
		playBtn = document.createElement('button');
		widthInput = document.createElement('input');
		heightInput = document.createElement('input');
		gameIsRunning = false;
		timer = setInterval(() => {}, 1000); // Подставьте функцию, которая будет выполняться и интервал

		// Симулируем добавление элементов в DOM
		document.body.appendChild(fieldWrapper);
		document.body.appendChild(changeSizeBtn);
		document.body.appendChild(speedInput);
		document.body.appendChild(playBtn);
		document.body.appendChild(widthInput);
		document.body.appendChild(heightInput);
	});

	afterEach(() => {
		// Удаляем элементы после каждого теста
		fieldWrapper.remove();
		changeSizeBtn.remove();
		speedInput.remove();
		playBtn.remove();
		widthInput.remove();
		heightInput.remove();
	});

	it('should create game controllers with initial settings', () => {
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
			timer
		);

		// Тесты на возможную работу, изменение и остановку игры
		// добавьте здесь соответствующие проверки для ваших контроллеров
	});

	it('should handle size change and update the field', () => {
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
			timer
		);

		// Тесты на изменение размера и перерисовку поля
		// добавьте здесь соответствующие проверки для изменения размеров поля
	});

	it('should start and stop the game correctly', () => {
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
			timer
		);

		// Тесты на запуск и остановку игры
		// добавьте здесь соответствующие проверки для запуска и остановки игры
	});

	it('should update game speed and timer on input change', () => {
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
			timer
		);

		// Тесты на изменение скорости игры и таймера при изменении ввода
		// добавьте здесь соответствующие проверки для обработки изменения скорости и таймера
	});
});