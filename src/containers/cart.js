import Cart from '../components/cart';
import { connect } from 'react-redux';
import { removeFromCart, addToCart } from '../actions/cart-actions';

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (book) => {
            dispatch(removeFromCart(book));
        },
        addToCart:(book)=>{
            dispatch(addToCart(book));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);