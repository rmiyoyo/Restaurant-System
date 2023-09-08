const fetchFoodInfo = async () => {
  const request = new Request('https://themealdb.com/api/json/v1/1/search.php?f=c');
  const response = await fetch(request);
  const data = await response.json();
  return data.meals;
};

export default fetchFoodInfo;
