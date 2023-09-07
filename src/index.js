import './styles/style.css';
import './styles/mystyle.css';
import {
  fetchFoodInfo, enterMeals, fetchInfo, showInfo,
} from './module/mealDetails.js';

import {showPopup, togglePopup} from './module/popup.js';

const foodDescr = await fetchFoodInfo();
const metricsInfo = await fetchInfo();

  enterMeals(foodDescr);
  foodDescr.forEach((element) => {
    showInfo(metricsInfo, `M${element.idMeal}`);
  });

const comment = [...document.querySelectorAll('.comment')];
const popWindow = document.getElementById('my-popup-window');

document.addEventListener('click', (e) => {
  const { target } = e;
  if (target.matches('.comment')) {
    const { strMealThumb, strMeal } = foodDescr[comment.indexOf(target)];
    popWindow.innerHTML = showPopup(strMealThumb, strMeal);
    togglePopup();
  } else if(target.matches('#close'))
    togglePopup();
});