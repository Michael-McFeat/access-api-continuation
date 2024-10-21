import React from 'react';
import WorldpayLogo from '../assets/worldpay.png'
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <img src={WorldpayLogo} className="wp-logo"/>
            <p>&copy; Worldpay Food Company. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
