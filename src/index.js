import './styles/style.css';
import './styles/mystyle.css';
import {
  fetchFoodInfo, enterMeals, oneLike, fetchInfo, showInfo,
} from './module/mealDetails.js';

import { showPopup, togglePopup } from './module/popup.js';

const foodDescr = await fetchFoodInfo();
const metricsInfo = await fetchInfo();

enterMeals(foodDescr);
foodDescr.forEach((element) => {
  showInfo(metricsInfo, `M${element.idMeal}`);
});

const comment = [...document.querySelectorAll('.comment')];
const popWindow = document.getElementById('my-popup-window');

const mealArea = document.querySelector('.menu');
mealArea.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target && e.target.matches('i.heart')) {
    const uniqueID = e.target.id;
    await oneLike(uniqueID);
    const metricsInfo = await fetchInfo();
    showInfo(metricsInfo, uniqueID);
  }
});
const popupWindow = document.querySelector('.popup-window');
popupWindow.addEventListener('click', (e) => {
  if (e.target && e.target.matches('i.minimize-card')) {
    popupWindow.innerHTML = '';
  }
});

document.addEventListener('click', (e) => {
  const { target } = e;
  if (target.matches('.comment')) {
    const { strMealThumb, strMeal } = foodDescr[comment.indexOf(target)];
    popWindow.innerHTML = showPopup(strMealThumb, strMeal);
    togglePopup();
  } else if (target.matches('#close')) togglePopup();
});
