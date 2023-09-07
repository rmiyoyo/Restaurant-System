const enterMeals = async (foodDescr) => {
  const mealArea = document.querySelector('.menu');
  foodDescr.forEach((element) => {
    const mealAccrdn = document.createElement('div');
    mealAccrdn.classList.add('food-card', 'scn-scn');
    mealAccrdn.innerHTML = `<div class = 'image-box'><img src = '${element.strMealThumb}' alt = 'meal'></div>
                          <div class = 'ncs-ncs ppup-area'>
                            <h2 class = 'expand-id'>${element.strMeal}</h2>
                            <i id ="M${element.idMeal}" class="fa-sharp fa-solid fa-heart heart" style="color: red;"></i><span id ="L${element.idMeal}" class ="likes">0 Likes</span>
                          </div>
                          <div class = "press-feature ncs-ncs">
                            <button id = "opinionFtr${element.idMeal}" class = 'comment'>Comments</button>
                          </div>
                          <hr>
                          `;
    mealArea.appendChild(mealAccrdn);
  });
};

export default enterMeals;
