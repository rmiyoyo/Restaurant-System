import closeIcon from '../assets/close.svg';

const showPopup = (img, strMeal) => {
  const popupContent = `
<section id="popup">
<img id="close" src="${closeIcon}" alt="spaceship">
<img class="popup-img" src="${img}" alt="spaceship">
<div class="sec">
  <h2 class="strMeal">${strMeal}</h2>
  <div id="cmn"></div>
  <article id="comments-pp"></article>
  <h3>Add a comment</h3>
  <form action="#">
      <input id="user-name" type="text" required maxlength="50" placeholder="Your name">
      <textarea id="user-comment" type="text" required maxlength="1024" placeholder="Your insights"></textarea>
      <div id="msg" class="hidden"></div>
      <button class="bt" id="submit-comment" type="submit">Comment</button>
  </form>
</div>
</section>
`;
  return popupContent;
};

const toggleHiddenList = [
  document.querySelector('.menu'),
  document.querySelector('header'),
  document.getElementById('my-popup-window'),
];

const togglePopup = () => {
  toggleHiddenList.forEach((element) => {
    element.classList.toggle('hidden');
  });
};

export { showPopup, togglePopup };