import React from 'react';
import { Link } from 'react-router-dom';
import LoginPage from '../assets/login-page.jpg';
import './Home.css';
import { Payments } from '../components/Payments';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${LoginPage})` }}>
            <div className="content-container">
                <h1 className="title">Order delivery near you</h1>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Enter delivery address"
                        className="address-input"
                    />
                    <select className="time-select">
                        <option>Deliver now</option>
                        <option>Schedule for later</option>
                    </select>
                    <Link to="products" className="find-food-button">
                        Find Food
                    </Link>
                </div>
            </div>
        </div>
        // <div>
        //     <Payments/>
        // </div>
    );
}

export default Home;
