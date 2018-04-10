import React from 'react';
import ReactDOM from 'react-dom';

import ListRecipes from './components/list-recipes';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

import './css/style.pcss';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}>
      <ListRecipes />
   </Provider>, document.getElementById('root'));
registerServiceWorker();
