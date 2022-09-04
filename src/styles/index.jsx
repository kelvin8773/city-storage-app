import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, globalTheme } from './global';
import { TableWrapper, TableHeader, TableRow, TableCell } from './table';
import { AppContainer, Container } from './content';
import { Input } from './input';

const StyleProvider = ({ children }) => (
  <ThemeProvider theme={globalTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

StyleProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default StyleProvider;

export { AppContainer, Container, TableWrapper, TableHeader, TableRow, TableCell, Input };
