
export const ADD_TO_CART = 'BOOK_ADD_TO_CART';
export const REMOVE_FROM_CART = 'BOOK_REMOVE_FROM_CART';


// //{ _id, userId, quantity }
// const orderBook = function (payload) {
//     return { type: ORDER, payload };
// }

// { bookId, quantity }
export const addToCart = function (payload) {
    return { type: ADD_TO_CART, payload };
}

// { bookId, quantityToRemove}
export const removeFromCart = function (payload) {
    return { type: REMOVE_FROM_CART, payload };
}
