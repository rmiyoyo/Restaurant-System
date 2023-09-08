import './styles/style.css';
import './styles/mystyle.css';

import fetchFoodInfo from './module/foodApi.js';
import enterMeals from './module/foodCards.js';
import { oneLike, fetchInfo, showInfo } from './module/like.js';
import { mealsnumber, showMeals } from './module/mealCount.js';
import { showPopup, togglePopup } from './module/popup.js';
import { InvolvementApiClient, extractEntries } from './module/comments.js';

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
const commentApi = new InvolvementApiClient('#msg');
let activeCardId = null;

const viewComments = async () => {
  (async () => {
    const result = await commentApi.fetchComments(activeCardId);
    const cmn = document.getElementById('cmn');
    cmn.innerHTML = '';

    const commentsP = document.getElementById('comments-pp');

    if (result) {
      cmn.innerHTML = `<h2>Comments (${result.length})</h>`;
      let commentpp = '';
      result.forEach((item) => {
        const { comment, username } = item;
        commentpp += `<div class="usr-name">
        <span>${item.creation_date} </span>
        <h3>${username}</h3>
        <p>${comment}</p>
        </div>`;
      });
      commentsP.innerHTML = commentpp;
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
    const data = foodDescr[comment.indexOf(target)];
    const {
      idMeal, strInstructions, strMealThumb, strMeal,
    } = data;
    popWindow.innerHTML = showPopup(strMealThumb, strMeal);
    activeCardId = idMeal;
    togglePopup();
    viewComments();
    const ingredients = extractEntries(data, 'strIngredient');
    const measure = extractEntries(data, 'strMeasure');
    const combinedArray = ingredients.map((element, index) => `${measure[index]} ${element}`);
    let content = '';
    combinedArray.forEach((item) => {
      content += `<li>${item}</li>`;
    });
    document.getElementById('ingredients').innerHTML = content;
    document.getElementById('instruction').innerText = strInstructions;
  } else if (target.matches('#close')) {
    togglePopup();
    activeCardId = null;
  } else if (target.matches('#submit-comment')) {
    e.preventDefault();
    const msg = document.getElementById('msg');
    msg.classList.remove('hidden');
    msg.textContent = 'Posting...';
    const userName = document.getElementById('user-name').value;
    const userComment = document.getElementById('user-comment').value;
    commentApi.postComment(activeCardId, userName, userComment, '#msg');

    setTimeout(() => {
      viewComments();
    }, 3000);
  }
});
