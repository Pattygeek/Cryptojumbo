import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistCombineReducers, persistReducer } from 'redux-persist';
import rootSaga from './sagas';
import allReducers from './reducers';
export * from './types';
export * from './actions';
const sagaMiddleWare = createSagaMiddleware();

export type AppState = ReturnType<typeof allReducers>;
export const store = createStore(allReducers, applyMiddleware(sagaMiddleWare));
export const persistor = persistStore(store);
sagaMiddleWare.run(rootSaga);
