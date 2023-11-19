import "./styles/style.css";

// Запуск игры
//
// - создать элемент и добавить его на страницу
// - создать на этом элементе игру с помощью `createGameOfLife` с размерами поля x / y

const { createGameOfLife } = require("./modules/createGameOfLife");

// - для проверки своего кода можно создать еще один элемент и создать вторую игру на этой же странице
const gameWrapper1 = document.createElement("div");
const gameWrapper2 = document.createElement("div");

document.body.appendChild(gameWrapper1);
document.body.appendChild(gameWrapper2);

createGameOfLife(7, 7, gameWrapper1);
createGameOfLife(12, 12, gameWrapper2);
