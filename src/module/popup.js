import closeIcon from '../assets/close.svg';
import demoSpaceship from '../assets/demoSpaceship.webp';

const popupContent = `
<section id="popup">
<img  id="close" src="${closeIcon}" alt="close">
<img class="popup-img" src="${demoSpaceship}" alt="spaceship">
<h2 class="ship-name">Space 3</h2>
<article class="ship-properties">
    <div>
        <p>Fuel: Titanuim</p>
        <p>Weight: 400</p>
    </div>
    <div>
        <p>Length: 100,000</p>
        <p>Power: 100,000,000</p>
    </div>
</article>
<h3>Comments (2)</h3>
<article class="comments">
    <p>3/11/2021 Alex: I'd love to buy it!</p>
    <p>03/12/2021 Mia: I love</p>
</article>
<h3>Add a comment</h3>
<form action="#">
    <input type="text" required maxlength="50" placeholder="Your name">
    <textarea type="text" required maxlength="1024" placeholder="Your insights"></textarea>
    <button id="submit-comment" type="submit">Comment</button>
</form>
</section>
`;

const popupConatiner = document.getElementById('popup-container');
const header = document.querySelector('header');
let popupMonitor = null;

const popup = (e) => {
  const { target } = e;
  if (target.id === 'close') {
    while (popupConatiner.firstChild) {
      popupConatiner.firstChild.remove();
      popupMonitor.classList.toggle('displayNone');
      header.classList.toggle('displayNone');
    }
  } else if (target.id === 'popup-demo') {
    popupConatiner.innerHTML = popupContent;
    target.classList.toggle('displayNone');
    header.classList.toggle('displayNone');
    popupMonitor = target;
  }
};

export default popup;