import './styles/style.css';
import './styles/mystyle.css';
import {
  fetchFoodInfo, enterMeals, fetchInfo, showInfo,
} from './module/mealDetails.js';

import {showPopup, togglePopup} from './module/popup.js';

const foodDescr = await fetchFoodInfo();
const metricsInfo = await fetchInfo();

const displayMeals = () => {
  enterMeals(foodDescr);
  foodDescr.forEach((element) => {
    showInfo(metricsInfo, `M${element.idMeal}`);
  });
}

displayMeals();

console.log(foodDescr);
console.log(metricsInfo);

const comment = [...document.querySelectorAll('.comment')];
const popWindow = document.getElementById('my-popup-window');
const menu = document.querySelector('.menu');

document.addEventListener('click', (e) => {
  const { target } = e;
  if (e.target && e.target.matches('i.minimize-card')) {
    popupWindow.innerHTML = '';
  }
  if (target.matches('.comment')) {
    const index = comment.indexOf(target);
    const food = foodDescr[index];
    console.log(food);
    const { strMealThumb, strMeal } = food;
    popWindow.innerHTML = showPopup(strMealThumb, strMeal);
    togglePopup();
  } else if(target.matches('#close')) {
    togglePopup();
  }
});