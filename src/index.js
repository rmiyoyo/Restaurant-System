import './styles/style.css';
import './styles/mystyle.css';

import fetchFoodInfo from './module/foodApi.js';
import enterMeals from './module/foodCards.js';
import { oneLike, fetchInfo, showInfo } from './module/like.js';
import { mealsnumber, showMeals } from './module/mealCount.js';
import { showPopup, togglePopup } from './module/popup.js';
import InvolvementApiClient from './module/comments.js';

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

const comment = [...document.querySelectorAll('.comment')];
const popWindow = document.getElementById('my-popup-window');
const appID = 'R35CzyDIJMb5HV6XSpZu';
const commentApi = new InvolvementApiClient(appID, '#msg');
let activeCardId = null;

const viewComments = async () => {
  (async () => {
    const result = await commentApi.fetchComments(activeCardId);
    const cmn = document.getElementById('cmn');
    cmn.innerHTML = '';

    const commentsP = document.getElementById('comments-pp');
    while (commentsP.firstChild) {
      commentsP.firstChild.remove();
    }
    if (result) {
      cmn.innerHTML = `<h2>Comments (${result.length})</h>`;
      const fragment = document.createDocumentFragment();
      result.forEach((item) => {
        const p = document.createElement('p');
        const { comment, username } = item;
        p.textContent = `${item.creation_date} ${username}: ${comment}`;
        fragment.appendChild(p);
      });
      commentsP.appendChild(fragment);
      document.getElementById('user-name').value = '';
      document.getElementById('user-comment').value = '';
    } else {
      cmn.innerHTML = 'Drop first comment';
    }
  })();
};

document.addEventListener('click', (e) => {
  const { target } = e;
  if (target.matches('.comment')) {
    const { idMeal, strMealThumb, strMeal } = foodDescr[comment.indexOf(target)];
    popWindow.innerHTML = showPopup(strMealThumb, strMeal);
    activeCardId = idMeal;
    togglePopup();
    viewComments();
  } else if (target.matches('#close')) {
    togglePopup();
    activeCardId = null;
  }

  if (target.matches('#submit-comment')) {
    e.preventDefault();
    const userName = document.getElementById('user-name').value;
    const userComment = document.getElementById('user-comment').value;
    commentApi.postComment(activeCardId, userName, userComment, '#msg');
    viewComments();
  }
});
