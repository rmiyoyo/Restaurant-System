import './styles/style.css';
import './assets/close.svg'
import popup from './module/popup';

document.addEventListener('click', (e) => {
    popup(e);
})
