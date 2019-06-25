import React, { Component } from 'react';
import Book from './book';
import axios from 'axios';

export default class Books extends Component {
    componentDidMount() {
        axios.get('http://localhost:3001/books')
            .then(res => {
                this.props.addAllBooks(res.data);
                // setTimeout(() => {
                //     this.props.addAllBooks(res.data);
                // }, 2000);
            })
    }
    render() {
        return (
            <div className="row">
                {
                    this.props.books.map(
                        (book, i) => <div key={i} className="col-sm-4"><Book book={book} addToCart={this.props.addToCart} /></div>
                    )
                }
            </div>
        )
    }
}
