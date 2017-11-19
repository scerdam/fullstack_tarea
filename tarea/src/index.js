import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import counter from './reducers';

import { createStore } from 'redux';
var store = createStore(counter);



const render = () => ReactDOM.render(
  <App sto={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}/>,
  document.getElementById('root')

);

render()
store.subscribe(render)
