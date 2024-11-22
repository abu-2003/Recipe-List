import React from 'react';
import RecipeList from '../components/RecipeList';

const HomePage = () => {
  return (
    <div>
      <h1 className='container'>Recipes</h1>
      <RecipeList />
    </div>
  );
};

export default HomePage;
