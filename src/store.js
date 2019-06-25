import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import promiseMiddleware from 'redux-promise-middleware';

const myLogger = (store) => (next) => (action) => {
    let ret = next(action);
    console.log(action, ret)
    return ret;
}

const store = createStore(allReducers, {}, compose(applyMiddleware(myLogger, promiseMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

store.subscribe(_ => console.log(store.getState()));

export default store;