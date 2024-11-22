import React from 'react';
import { Button, Card } from 'react-bootstrap';


const RecipeCard = ({ recipe }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
          <Button variant="primary" href={`/recipe/${recipe.id}`}>
            View Details
          </Button>
        </Card.Body>
      </Card>
    );
  };
  
export default RecipeCard;
