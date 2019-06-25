import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';

const myLogger = (store) => (next) => (action) => {
    console.log(action.type + ': action performed');
    next(action);
}

const store = createStore(allReducers, {}, compose(applyMiddleware(myLogger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

store.subscribe(_ => console.log(store.getState()));

export default store;