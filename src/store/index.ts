import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevToolsDevelopmentOnly(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
