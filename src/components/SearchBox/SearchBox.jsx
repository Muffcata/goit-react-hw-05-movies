import React from 'react';
import style from 'components/SearchBox/SearchBox.module.css';

export const SearchBox = ({ onSubmit }) => {
  return (
    <form className={style.wrapper} onSubmit={onSubmit}>
      <input
        className={style.input}
        type="text"
        name="query"
        placeholder="Search here"
      />
      <button className={style.icon} type="submit"></button>
    </form>
  );
};

export default SearchBox;
