const baseURL =process.env.REACT_APP_API_URL;
const foodDataAPIKey = process.env.REACT_APP_FOODDATA_API_KEY;

export const urlWeather =`${baseURL}/weatherforecast`;

export const urlRecipes =`${baseURL}/api/Recipes`;
export const urlRecipesCategories =`${baseURL}/api/RecipeCategory`;

export const urlFoods =`${baseURL}/api/Food`;
export const urlFoodsCategories =`${baseURL}/api/FoodCategory`;

export const urlMeasurements =`${baseURL}/api/Measurements`;

export const urlBlogs =`${baseURL}/api/Blog`;
export const urlBlogCategories =`${baseURL}/api/BlogCategory`;
export const urlBlogconnectionBlogCategories =`${baseURL}/api/BlogbetweenBCategory/GetBlogsByCategory`;

export const urlUSDAFoodData = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${foodDataAPIKey}`;

