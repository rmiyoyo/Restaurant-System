import './styles/style.css';
import './assets/close.svg';
import popup from './module/popup.js';

document.addEventListener('click', (e) => {
  popup(e);
});
