import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '~/rootSaga';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares configuration
const sagaMiddleware = createSagaMiddleware();
// add more middleware if need
const middlewares = [sagaMiddleware];

const applyMiddlewares = [applyMiddleware(...middlewares)];
// integrate Redux DevTools if available
const composedEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

const enhancers = composedEnhancers(...applyMiddlewares);

const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);

export default store;
