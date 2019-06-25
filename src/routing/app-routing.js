import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../containers/navbar';

const Books = lazy(() => import('../containers/books'));
const Book = lazy(() => import('../components/book'));
const Cart = lazy(() => import('../containers/cart'));

export default function AppRouting() {
    return (
        <div className="container">
            <BrowserRouter>
                <Navbar />
                <Suspense fallback={<h2 style={{ textAlign: 'center' }}>Loading...</h2>}>
                    <Route exact path="/" component={Books} />
                    <Route path="/book/:id" component={Book} />
                    <Route path="/cart" component={Cart} />
                </Suspense>
            </BrowserRouter>
        </div>
    )
}
