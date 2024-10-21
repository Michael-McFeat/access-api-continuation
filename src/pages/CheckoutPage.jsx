import React from 'react';
import Checkout from '../components/Checkout.jsx';
import PaymentForm from "../components/PaymentForm.jsx";

function CheckoutPage() {
    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <Checkout />
            <PaymentForm/>
        </div>
    );
}

export default CheckoutPage;
