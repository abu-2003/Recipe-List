export const fetchRecipesAPI = async (page = 1, cuisine = '') => {
    const limit = 9; // Number of recipes per page
    const skip = (page - 1) * limit;
    const response = await fetch(
      `https://dummyjson.com/recipes?skip=${skip}&limit=${limit}`
    );
    const data = await response.json();
  
  
    if (cuisine) {
      data.recipes = data.recipes.filter((recipe) =>
        recipe.cuisine.toLowerCase().includes(cuisine.toLowerCase())
      );
    }
  
    return data.recipes;
  };
  
  export const fetchRecipeDetailsAPI = async (id) => {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipe details');
    }
    return response.json();
  };
  