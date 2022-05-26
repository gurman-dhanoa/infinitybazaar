import React from 'react'
import logo from "./../../../images/Infinity-logo.png";
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="foot-logo foot-div">
    <img className='nav-logo-img' src={logo} alt="Infinity Bazaar" />
        <div className="foot-comp">
            <p>e-Commerce Platform</p>
            <p>GURMAN DHANOA Ltd.</p>
        </div>
        <p className="copyright">2022 	&#169; All rights reserved</p>
    </div>
    <div className="foot-div">
        <h3>Company</h3>
        <div className="footer-buttons">
            <p>About</p>
            <p>Store</p>
            <p>FAQ</p>
        </div>
    </div>
    <div className="foot-div">
        <h3>Services</h3>
        <div className="footer-buttons">
            <p>Delivery</p>
            <p>Payment</p>
            <p>Contacts</p>
        </div>
    </div>
    <div className="foot-div">
        <h3>Follow us</h3>
        <div className="footer-buttons">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>twitter</p>
        </div>
    </div>
    <div className="foot-div">
        <h3>Get our newsletters:</h3>
        <div className="footer-buttons">
            <input type="text" className="footer-input" placeholder="Your email" /><span className="footer-input-tick"></span>
            {/* <div className="footer-terms">
                <a href="gurman">Terms and Conditions</a>
                <a href="gurman">Privacy Policy</a>
            </div> */}
        </div>
    </div>
</footer>
  )
}
