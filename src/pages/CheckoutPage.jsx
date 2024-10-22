import React from 'react';
import Checkout from '../components/Checkout.jsx';
import PaymentForm from "../components/PaymentForm.jsx";
import { Payments } from '../components/Payments.jsx';

function CheckoutPage() {
    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <Checkout />
            <Payments/>
        </div>
    );
}

export default CheckoutPage;
