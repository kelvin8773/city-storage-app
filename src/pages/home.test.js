import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../app/store';
import StyleProvider from '../styles';

import Home from './Home';

test('renders home page', () => {
  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <StyleProvider>
        <Home />
      </StyleProvider>
    </Provider>
  );

  expect(getByText('City Storage Order Tracking System')).toBeInTheDocument();
  expect(getByTestId('orderTable')).toBeInTheDocument();
});
