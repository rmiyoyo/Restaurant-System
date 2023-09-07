import './styles/style.css';
import './styles/mystyle.css';
import {
  fetchFoodInfo, enterMeals, fetchInfo, showInfo,
} from './module/mealDetails.js';

import showPopup from './module/popup.js';

const foodDescr = await fetchFoodInfo();
const metricsInfo = await fetchInfo();
enterMeals(foodDescr);
foodDescr.forEach((element) => {
  showInfo(metricsInfo, `M${element.idMeal}`);
});

console.log(foodDescr);
console.log(metricsInfo);

const comment = [...document.querySelectorAll('.comment')];
const popWindow = document.querySelector('popup-window');

document.addEventListener('click', (e) => {
  const { target } = e;
  if (e.target && e.target.matches('i.minimize-card')) {
    popupWindow.innerHTML = '';
  }
  if (target.matches('.comment')) {
    const index = comment.indexOf(target);
    const food = foodDescr[index];
    console.log(index);
    showPopup(food.strMealThumb);
  }
});