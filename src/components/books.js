import React, { Component } from 'react';
import Book from './book';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Books extends Component {
    componentDidMount() {
        // axios.get('http://localhost:3001/books')
        //     .then(res => {
        //         this.props.addAllBooks(res.data);
        //     });
        let p = axios.get('http://localhost:3001/books')
            .then(res => {
                return res.data;
            })
        // .then(d=>{
        //     //console.log(d);
        //     this.props.addAllBooks(d);
        // });
        this.props.addAllBooks(p);
    }
    render() {
        return (
            <div className="row">
                {this.props.isLoading ? <h2 style={{textAlign:'center'}}>Retrieving data from the server.</h2> :
                    this.props.books.map(
                        (book, i) => <div key={i} className="col-sm-4"><Book book={book} addToCart={this.props.addToCart} /></div>
                    )
                }
            </div>
        )
    }
}

Book.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    )
}