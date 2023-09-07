// mealCount.js
export const mealsnumber = async () => {
  const request = new Request('https://themealdb.com/api/json/v1/1/search.php?f=c');
  const response = await fetch(request);
  const data = await response.json();
  return data.meals.length;
};

export const showMeals = (opinionsNo) => {
  const li = document.querySelector('li.meals-num');
  li.textContent = `Meals(${opinionsNo})`;
};
