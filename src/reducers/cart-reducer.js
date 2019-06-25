import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart-actions';

const initialState = { cartItems: [] };

const cartReducer = function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            let index = state.cartItems.findIndex(x => x.bookId === action.payload.bookId);
            const cartItems = [...state.cartItems];
            //console.log(cart, index)
            if (index > -1) {
                const newQuantity = cartItems[index].quantity + action.payload.quantity;
                if (newQuantity < 1) {
                    cartItems.splice(index, 1);
                }
                else {
                    cartItems[index].quantity = newQuantity
                }
            }
            else {
                cartItems.push(action.payload);
            }
            //console.log(cart)
            return { ...state, cartItems };

        case REMOVE_FROM_CART:
            return { ...state, cartItems: [...state.cartItems.filter(x => x.bookId !== action.payload.bookId)] };
        default:
            return { ...state };
    }
}

export default cartReducer;