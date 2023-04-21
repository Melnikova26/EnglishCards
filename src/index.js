import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'mobx-react';
import WordsStore from './stores/WordsStore';

import './style/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider dataStore={WordsStore}>
    <App />
  </Provider>
);
