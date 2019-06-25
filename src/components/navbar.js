import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-default">
            <div className="container container-fluid">
                <div className="navbar-header">
                    <a href="#" className="navbar-brand">Redux-App</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart ({props.cart.length})</Link></li>
                </ul>
                {/* <ul className="nav navbar-nav nav-right">
                    <li><Link to="/">Home</Link></li>
                </ul> */}
            </div>
        </nav>
    )
}
