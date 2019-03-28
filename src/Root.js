import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';


export default ({ children, initialState={} }) => {
  return (
    <Provider store={createStore(rootReducer, initialState)}>
      {children}
    </Provider>
  )
}

// Props.children renders any children that is provided