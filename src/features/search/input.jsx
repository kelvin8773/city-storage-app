import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../styles';

const SearchBar = ({ value, onChange }) => {
  return (
    <Input
      type="number"
      placeholder="Search orders by price ..."
      value={value}
      onChange={onChange}
    />
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchBar;
