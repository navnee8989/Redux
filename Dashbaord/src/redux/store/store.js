import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootreducer from '../reducer/reducer'

const composeEnhancers = composeWithDevTools({
  
});
const middleware = [thunk]
const intialstate = {}
const store = createStore(
 rootreducer,
  intialstate,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;