import React, {useEffect, useLayoutEffect} from "react";
import "./Payments.css";


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

    // useLayoutEffect(() => {
    //         // Make sure to call the remove method (once) in order to deallocate the SDK from memory
    //         return () => checkout.remove();
    //     },
    //     []);

    return (
        <div className="row">
  <div className="col-75">
    <div className="container">
      <form action="/action_page.php">
      
        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label >Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            {/* <label >Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"/> */}
            <label >Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label > City</label>
            <input type="text" id="city" name="city" placeholder="New York"/>

            <div className="row">
              <div className="col-50">
                <label>State</label>
                <input type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div className="col-50">
                <label >Postal Code</label>
                <input type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
            <label >Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label >Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label >Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
            <div className="row">
              <div className="col-50">
                <label >Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div className="col-50">
                <label >CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
        </label>
        <input type="submit" value="Continue to checkout" className="btn" />
      </form>
    </div>
  </div>
</div>
    );
}

