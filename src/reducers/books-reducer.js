
import { ADD_ALL_BOOKS, ADD_BOOK, ADD_STOCK, addAllBooks, addBook, addStock } from '../actions/books-actions';

const initialState = {
    books: []
}
const booksReducer =function (state=initialState, action) {
    switch (action.type) {
        case ADD_ALL_BOOKS:
            return Object.assign({}, state, { books: action.payload });
        case ADD_BOOK:
            return Object.assign({}, state, { books: [state.books, action.payload] });
        case ADD_STOCK:
            return Object.assign({}, state, {
                books: state.books.map(book => {
                    if (book._id == action.payload._id) {
                        return { ...book, quantity: action.payload.quantity };
                    }
                })
            });
        default: return {...state};
    }
}

export default booksReducer; 