import "./Payments.css";
import React, {useEffect, useLayoutEffect, useState} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4} from 'uuid';

export function Tokens() {

    const value = useSelector((state) => state.cart.total);
    const credentials = btoa("WULlOqbjOuxGKpC4" + ":" + "Gxxm9GQZKm5WeboUmUmUaHblIHNH71b4UKrT9z0AMIkp2MEZgVnFAkcEvAWNB0si");
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://try.access.worldpay.com/cardPayments/customerInitiatedTransactions';

    const [formData, setFormData] = useState({
        fullName: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        cardName: "",
        cardNumber: "",
        expMonth: "",
        expYear: "",
        cvv: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            // `${uuidv4()}${Date.now()}`

            const testData =
                {
                    "transactionReference": "Memory265-13/09/1333",
                    "merchant": {
                        "entity": "default"
                    },
                    "instruction": {
                        "requestAutoSettlement": {
                            "enabled": false
                        },
                        "narrative": {
                            "line1": "Mind Palace"
                        },
                        "value": {
                            "currency": "GBP",
                            "amount": 230
                        },
                        "paymentInstrument": {
                            "type": "card/plain",
                            "cardNumber": "4444333322221111",
                            "expiryDate": {
                                "month": 5,
                                "year": 2035
                            }
                        }
                    },
                    "channel": "ecom"
                }

            console.log(testData);


            const res = await axios.post(proxyUrl + targetUrl, testData, {
                headers: {
                    'Authorization': `Basic ${credentials}`,
                    'Content-Type': 'application/vnd.worldpay.payments-v7+json',
                    'Accept': 'application/vnd.worldpay.payments-v7+json'
                }
            });

            console.log(res.data);


        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="row">
            <div className="col-75">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-50">
                                <h3>Billing Address</h3>
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="John M. Doe"
                                />
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="542 W. 15th Street"
                                />
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="New York"
                                />

                                <div className="row">
                                    <div className="col-50">
                                        <label htmlFor="state">State</label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            placeholder="NY"
                                        />
                                    </div>
                                    <div className="col-50">
                                        <label htmlFor="postalCode">Postal Code</label>
                                        <input
                                            type="text"
                                            id="postalCode"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleChange}
                                            placeholder="10001"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-50">
                                <h3>Payment</h3>
                                <label htmlFor="cardName">Name on Card</label>
                                <input
                                    type="text"
                                    id="cardName"
                                    name="cardName"
                                    value={formData.cardName}
                                    onChange={handleChange}
                                    placeholder="John More Doe"
                                />
                                <label htmlFor="cardNumber">Credit card number</label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    placeholder="1111-2222-3333-4444"
                                />
                                <label htmlFor="expMonth">Exp Month</label>
                                <input
                                    type="text"
                                    id="expMonth"
                                    name="expMonth"
                                    value={formData.expMonth}
                                    onChange={handleChange}
                                    placeholder="September"
                                />
                                <div className="row">
                                    <div className="col-50">
                                        <label htmlFor="expYear">Exp Year</label>
                                        <input
                                            type="text"
                                            id="expYear"
                                            name="expYear"
                                            value={formData.expYear}
                                            onChange={handleChange}
                                            placeholder="2023"
                                        />
                                    </div>
                                    <div className="col-50">
                                        <label htmlFor="cvv">CVV</label>
                                        <input
                                            type="text"
                                            id="cvv"
                                            name="cvv"
                                            value={formData.cvv}
                                            onChange={handleChange}
                                            placeholder="352"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label>
                            <input type="checkbox" name="sameAddress"/> Shipping address same as billing
                        </label>
                        <input type="submit" value="Continue to checkout" className="btn"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

