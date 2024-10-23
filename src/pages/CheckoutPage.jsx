import React from 'react';
import Checkout from '../components/Checkout.jsx';
import PaymentForm from "../components/PaymentForm.jsx";
import { Payments } from '../components/Payments.jsx';
import {Tokens} from "../components/Tokens.jsx";

function CheckoutPage() {
    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <Checkout />
            <Tokens/>
        </div>
    );
}

export default CheckoutPage;
