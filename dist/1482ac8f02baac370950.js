import './styles/style.css';
import './styles/mystyle.css';
import {
  fetchFoodInfo, enterMeals, fetchInfo, showInfo,
} from './module/mealDetails.js';

import { showPopup, togglePopup } from './module/popup.js';
import InvolvementApiClient from './module/comments.js';

const appID = 'R35CzyDIJMb5HV6XSpZu';

const commentApi = new InvolvementApiClient(appID, '#msg');

const foodDescr = await fetchFoodInfo();
const metricsInfo = await fetchInfo();

enterMeals(foodDescr);
foodDescr.forEach((element) => {
  showInfo(metricsInfo, `M${element.idMeal}`);
});

const comment = [...document.querySelectorAll('.comment')];
const popWindow = document.getElementById('my-popup-window');

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
        p.textContent = `${item.creation_date} ${username} ${comment}`;
        fragment.appendChild(p);
      });
      commentsP.appendChild(fragment);
      document.getElementById('user-name').value = '';
      document.getElementById('user-comment').value = '';
    } else cmn.innerHTML = 'Drop first comment';
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
