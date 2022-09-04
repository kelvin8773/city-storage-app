import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../styles';

const SearchBar = ({ value }) => {
  return <Input type="search" placeholder="Search orders by price ..." />;
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired
};

export default SearchBar;
