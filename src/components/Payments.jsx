import React, {useEffect, useLayoutEffect, useState} from "react";
import "./Payments.css";
import axios from "axios";


// function scriptAlreadyLoaded(src) {
//     return document.querySelector(`script[src="${src}"]`);
// }

// function loadCheckoutScript(src) {
//     return new Promise((resolve, reject) => {
//         if (scriptAlreadyLoaded(src)) {
//             resolve();
//             return;
//         }

//         let checkoutScript = document.createElement("script");
//         checkoutScript.src = src;
//         checkoutScript.onload = resolve;
//         checkoutScript.onerror = reject;
//         document.head.appendChild(checkoutScript);
//     });
// }

// function addWorldpayCheckoutToPage() {
//     return new Promise((resolve, reject) => {
//         (function () {
//             window.Worldpay.checkout.init(
//                 {
//                     id: "identity",
//                     form: "#container",
//                     fields: {
//                         pan: {
//                             selector: "#card-pan",
//                         },
//                         expiry: {
//                             selector: "#card-expiry",
//                         },
//                         cvv: {
//                             selector: "#card-cvv",
//                         },
//                     },
//                     styles: {
//                         "input.is-valid": {
//                             "color": "green",
//                         },
//                         "input.is-invalid": {
//                             "color": "red",
//                         },
//                         "input.is-onfocus": {
//                             "color": "black",
//                         },
//                     },
//                     enablePanFormatting: true,
//                 },
//                 function (error, checkout) {
//                     if (error) {
//                         reject(error);
//                     } else {
//                         resolve(checkout);
//                     }
//                 },
//             );
//         })();
//     });
// }

// function submitForm(){

// }



export function Payments() {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const testData =
    {
      "transactionReference": "Memory265-13/08/1876",
        "merchant": {
      "entity": "default"
    },
      "instruction": {
      "method": "card",
          "paymentInstrument": {
        "type": "plain",
            "cardHolderName": "Sherlock Holmes",
            "cardNumber": "4000000000001091",
            "expiryDate": {
          "month": 5,
              "year": 2035
        },
        "billingAddress": {
          "address1": "221B Baker Street",
              "address2": "Marylebone",
              "address3": "Westminster",
              "postalCode": "SW1 1AA",
              "city": "London",
              "state": "Greater London",
              "countryCode": "GB"
        },
        "cvc": "123"
      },
      "narrative": {
        "line1": "trading name"
      },
      "value": {
        "currency": "GBP",
            "amount": 42
      }
    }

    }

    axios.post('https://try.access.worldpay.com/api/payments', testData, {
      auth: {
        username: 'WULlOqbjOuxGKpC4',
        password: ' Gxxm9GQZKm5WeboUmUmUaHblIHNH71b4UKrT9z0AMIkp2MEZgVnFAkcEvAWNB0si'
      },
      headers: {
        'content-type': 'application/json',
        'WP-Api-Version': '2024-06-01'
    }}).then(response => {
      console.log(response);
    });

    //console.log(formData);
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
                <input type="checkbox" name="sameAddress" /> Shipping address same as billing
              </label>
              <input type="submit" value="Continue to checkout" className="btn" />
            </form>
          </div>
        </div>
      </div>
  );
}

