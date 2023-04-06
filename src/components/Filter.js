import React from 'react';


const Filter = ({ titleFilter, ratingFilter, onTitleFilterChange, onRatingFilterChange }) => {



  return (
    <div className="filter" >
      <label htmlFor="title-filter">Title : </label>
      <input type="text" id="title-filter" value={titleFilter} onChange={onTitleFilterChange} />
      <label htmlFor="rating-filter">Rating : </label>
      <input type="number" id="rating-filter" value={ratingFilter} onChange={onRatingFilterChange} min="1" max="10" />
      
    </div>
  );
};

export default Filter;
