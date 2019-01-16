import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '~/rootSaga';
import rootReducer from '../reducers';

// middlewares configuration
const sagaMiddleware = createSagaMiddleware();
// add more middleware if need
const middlewares = [sagaMiddleware];

const applyMiddlewares = [applyMiddleware(...middlewares)];
// integrate Redux DevTools if available
const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composedEnhancers(...applyMiddlewares);

const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);

export default store;
