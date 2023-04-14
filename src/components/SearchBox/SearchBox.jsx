import React from 'react';

export const SearchBox = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" placeholder="Search here" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
