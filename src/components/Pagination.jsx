import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../features/recipes/recipesSlice';
import { Button } from 'react-bootstrap';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.recipes);

  return (
    <div className="d-flex justify-content-center my-3">
      <Button
        variant="outline-primary"
        onClick={() => dispatch(setPage(currentPage - 1))}
        disabled={currentPage === 1}
        className="me-2"
      >
        <i className="fas fa-arrow-left" />
      </Button>
      <span className="align-self-center">{currentPage}</span>
      <Button
        variant="outline-primary"
        onClick={() => dispatch(setPage(currentPage + 1))}
        className="ms-2"
      >
        <i className="fas fa-arrow-right" />
      </Button>
    </div>
  );
};

export default Pagination;
