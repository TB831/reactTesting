import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise';


export default ({ children, initialState={} }) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(reduxPromise));

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

// Props.children renders any children that is provided