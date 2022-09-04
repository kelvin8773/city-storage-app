import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Home from './pages';

import { store } from './app/store';
import StyleProvider from './styles';
import '../src/assets/css/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <StyleProvider>
      <Home />
    </StyleProvider>
  </Provider>
);
