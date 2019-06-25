import booksReducer from './books-reducer';
import cartReducer from './cart-reducer';
import { combineReducers } from 'redux';

export default combineReducers({ booksReducer, cart:cartReducer });
