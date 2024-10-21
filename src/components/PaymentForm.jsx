import React, {useEffect, useLayoutEffect} from "react";
import "./PaymentForm.css";

function scriptAlreadyLoaded(src) {
    return document.querySelector(`script[src="${src}"]`);
}

function loadCheckoutScript(src) {
    return new Promise((resolve, reject) => {
        if (scriptAlreadyLoaded(src)) {
            resolve();
            return;
        }

        let checkoutScript = document.createElement("script");
        checkoutScript.src = src;
        checkoutScript.onload = resolve;
        checkoutScript.onerror = reject;
        document.head.appendChild(checkoutScript);
    });
}

function addWorldpayCheckoutToPage() {
    return new Promise((resolve, reject) => {
        (function () {
            window.Worldpay.checkout.init(
                {
                    id: "identity",
                    form: "#container",
                    fields: {
                        pan: {
                            selector: "#card-pan",
                        },
                        expiry: {
                            selector: "#card-expiry",
                        },
                        cvv: {
                            selector: "#card-cvv",
                        },
                    },
                    styles: {
                        "input.is-valid": {
                            "color": "green",
                        },
                        "input.is-invalid": {
                            "color": "red",
                        },
                        "input.is-onfocus": {
                            "color": "black",
                        },
                    },
                    enablePanFormatting: true,
                },
                function (error, checkout) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(checkout);
                    }
                },
            );
        })();
    });
}

function PaymentForm() {
    const checkoutScriptUrl = "https://preprod.access.worldpay.com/access-checkout/v2/checkout.js";
    let checkout;

    function generateSession () {
        checkout.generateSessionState(
            function (error, session) {
                if (error) {
                    console.warn(`Failed to generate session: ${error}`);
                    return;
                }

                const infoDiv = document.querySelector(".info");
                infoDiv.innerHTML += `<div>Session retrieved is ${session}</div>`;
            });
    }

    function clearForm () {
        checkout.clearForm(() => {
            document.querySelector(".info").innerHTML = "";
        });
    }

    useEffect(() => {
        loadCheckoutScript(checkoutScriptUrl)
            .then(() => {
                addWorldpayCheckoutToPage()
                    .then((checkoutInstance) => {
                        checkout = checkoutInstance;
                    })
                    .catch(console.warn);
            })
            .catch(console.warn);
    }, []);

    // useLayoutEffect(() => {
    //         // Make sure to call the remove method (once) in order to deallocate the SDK from memory
    //         return () => checkout.remove();
    //     },
    //     []);

    return (
        <div className="payment-info">
            <h1>Payment Info</h1>

            <section className="container" id="container">
                <section className="card">
                    <section id="card-pan" className="field" />
                    <section id="card-expiry" className="field" />
                    <section id="card-cvv" className="field" />
                    <section className="columns">
                    </section>
                    <button className="clear" type="button" onClick={clearForm}>
                        Clear
                    </button>
                </section>
            </section>
            <section className="submit-button">
                <button className="submit" type="button" onClick={generateSession}>
                    Complete Checkout and Pay
                </button>
            </section>
            <div id="info" className="info" />
        </div>
    );
}

export default PaymentForm;
