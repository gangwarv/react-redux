import Books from '../components/books';
import { connect } from 'react-redux';
import { addAllBooks } from '../actions/books-actions';
import { addToCart } from '../actions/cart-actions';

const mapStateToProps = (state) => {
    return {
        books: state.booksReducer.books
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addAllBooks: (books) => {
            dispatch(addAllBooks(books));
        },
        addToCart: (book) => {
            dispatch(addToCart(book));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);