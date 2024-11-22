import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeDetails } from '../features/recipes/recipesSlice';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipeDetails = useSelector((state) => state.recipes.recipeDetails);

  useEffect(() => {
    dispatch(fetchRecipeDetails(id));
  }, [dispatch, id]);

  return recipeDetails ? (
    <div className='container'>
       <div className="col-md-4 d-flex justify-content-center align-items-center mb-3 mt-2">
          <img
            src={recipeDetails.image}
            alt={recipeDetails.name}
            style={{
              height: '300px',
              width: '300px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
            className="img-fluid shadow"
          />
        </div>
      <h1>{recipeDetails.name}</h1>
      <p>{recipeDetails.description}</p>
      <p><strong>Cuisine:</strong> {recipeDetails.cuisine}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipeDetails.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipeDetails.instructions}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};


export default RecipeDetails;
