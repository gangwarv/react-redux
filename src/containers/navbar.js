import Navbar from '../components/navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(Navbar);