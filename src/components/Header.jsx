import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const cartItemsCount = useSelector(state => state.cart.items.length);

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/checkout">Cart ({cartItemsCount})</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
