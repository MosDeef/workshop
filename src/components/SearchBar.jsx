import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    const { searchGifs } = props;
    searchGifs(event.currentTarget.value);
  };
  return (
    <input className="form-search form-control" type="text" placeholder="Search for a .GIF" onChange={handleChange} />
  );
};

export default SearchBar;
