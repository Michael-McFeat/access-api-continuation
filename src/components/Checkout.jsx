import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';

function Checkout() {
    const dispatch = useDispatch();
    const { items, total } = useSelector(state => state.cart);

    const handleCheckout = () => {
        // Implement checkout logic here (e.g., payment processing)
        alert('Thank you for your purchase!');
        dispatch(clearCart());
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            {items.map(item => (
                <div key={item.id}>
                    {item.name} - Quantity: {item.quantity} - £{item.price * item.quantity}
                </div>
            ))}
            <div>Total: £{total}</div>
            <button onClick={handleCheckout}>Complete Purchase</button>
        </div>
    );
}

export default Checkout;
