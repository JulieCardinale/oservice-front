/* Import(s) */
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import middlewares from 'middlewares';

/* Redux Devtool */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* Enhancers list */
const enhancers = composeEnhancers(
  applyMiddleware(
    ...middlewares
    // secondMiddleware,
  )
);

/* Create store */
const store = createStore(rootReducer, enhancers);

/* Export store */
export default store;
