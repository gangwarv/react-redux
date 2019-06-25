import React from 'react';
import './book.css';
import PropTypes from 'prop-types';

export default function Book(props) {
    return (
        <div className="card">
            <img src="http://localhost/img/banner10.jpg" />
            <div className="ccontainer">
                <h4><b>{props.book.title}</b></h4>
                <h4 className="green">Price ${props.book.price}</h4>
                <p>{props.book.description}</p>
                <input type="button" onClick={_ => props.addToCart({ ...props.book, bookId: props.book._id, quantity: 1 })} className="btn" value="Add to Cart" />
            </div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }),
    addToCart: PropTypes.func
}