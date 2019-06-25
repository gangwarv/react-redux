
export const ADD_ALL_BOOKS = 'BOOK_ADD_ALL';
export const ADD_BOOK = 'BOOK_ADD';
export const ADD_STOCK = 'BOOK_STOCK';

//{ Array<{title, price, description}> }
export const addAllBooks = function (payload) {
    return { type: ADD_ALL_BOOKS, payload };
}
export const addBook = function (payload) {
    return { type: ADD_BOOK, payload };
}
//{ _id, increment }
export const addStock = function (payload) {
    return { type: ADD_STOCK, payload };
}
