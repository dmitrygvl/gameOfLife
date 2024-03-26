import './styles/style.css';
import { createGameOfLife } from './modules/createGameOfLife';

const gameWrapper1 = document.createElement('section');
const gameWrapper2 = document.createElement('section');

document.body.appendChild(gameWrapper1);
document.body.appendChild(gameWrapper2);

createGameOfLife(7, 7, gameWrapper1);
createGameOfLife(12, 12, gameWrapper2);
