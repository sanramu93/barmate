const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

export const fetchCocktailsByFirstChar = async (char = "a") => {
  const res = await fetch(`${BASE_URL}?f=${char}`);
  const data = await res.json();
  console.log(data);
};
