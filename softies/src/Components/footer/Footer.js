import React from 'react'
import "./footer.css"

const Footer = () => {

    const year = new Date().getFullYear();
    
  return (
    <footer>
    <div className="footer_container">
        <div className="footr_details_one">
            <h3>Get to Know Us</h3>
            <p>About us</p>
            <p>Careers</p>
        </div>
        <div className="footr_details_one">
            <h3>Connect with Us</h3>
            <p>Facebook</p>
            <p>Insta</p>
        </div>
        <div className="footr_details_one forres">
            <h3>Make Money with Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
        </div>
    </div>
    <div className="lastdetails">
        <h1>Softies</h1>
        <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
    </div>
</footer>
  )
}

export default Footer