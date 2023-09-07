import './styles/style.css';
import './styles/mystyle.css';

import fetchFoodInfo from './module/foodApi.js';
import enterMeals from './module/foodCards.js';
import { oneLike, fetchInfo, showInfo } from './module/like.js';
import { mealsnumber, showMeals } from './module/mealCount';

const foodDescr = await fetchFoodInfo();
const metricsInfo = await fetchInfo();
enterMeals(foodDescr);
const opinionsNo = await mealsnumber();
showMeals(opinionsNo);
foodDescr.forEach((element) => {
  showInfo(metricsInfo, `M${element.idMeal}`);
});

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