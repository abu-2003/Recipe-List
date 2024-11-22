import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipesAPI, fetchRecipeDetailsAPI } from './recipesAPI';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async ({ page, cuisine }) => {
    const response = await fetchRecipesAPI(page, cuisine);
    return response;
  }
);

export const fetchRecipeDetails = createAsyncThunk(
  'recipes/fetchRecipeDetails',
  async (id) => {
    const response = await fetchRecipeDetailsAPI(id);
    return response;
  }
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    recipeDetails: null,
    
    currentPage: 1,
    cuisine: '',
    isLoading: false,
  },
  reducers: {
    setCuisine(state, action) {
      state.cuisine = action.payload;
    },
    setPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchRecipeDetails.fulfilled, (state, action) => {
        state.recipeDetails = action.payload;
        
      });
  },
});

export const { setCuisine, setPage } = recipesSlice.actions;
export default recipesSlice.reducer;
