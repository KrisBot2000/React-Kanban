import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer.js';

// react - redux binding
import { Provider } from 'react-redux';


// our application
import KanbanBoard from './components/KanbanBoard';
//import todoReducers from './reducers';

// create a redux store for our application
import { createStore } from 'redux';
let store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <KanbanBoard/>
  </Provider>,
  document.getElementById('root'));

