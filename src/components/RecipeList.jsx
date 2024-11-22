import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, setCuisine } from '../features/recipes/recipesSlice';
import RecipeCard from './RecipeCard';
import Pagination from './Pagination';
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap';

const RecipeList = () => {
  const dispatch = useDispatch();
  const { recipes, currentPage, cuisine, isLoading } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes({ page: currentPage, cuisine }));
  }, [dispatch, currentPage, cuisine]);

  return (
    <Container className="my-4">
   
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search by cuisine"
            value={cuisine}
            onChange={(e) => dispatch(setCuisine(e.target.value))}
          />
        </Form.Group>
      </Form>

      {isLoading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div>
         
          <Row>
            {recipes.map((recipe) => (
              <Col key={recipe.id} lg={4} className="mb-4">
                <RecipeCard recipe={recipe} />
              </Col>
            ))}
          </Row>

          <Pagination />
        </div>
      )}
    </Container>
  );
};

export default RecipeList;
