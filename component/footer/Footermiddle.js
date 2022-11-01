import React from 'react';
import EmailData from './EmailData'
function Footermiddle(){
    return(
        <div className='footer-middle'>
             <div className='footer-middle-box'>
                <div>
                    <h5>Company Info</h5>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                </div>
                <div>
                    <h5>Legal</h5>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                </div>
                <div>
                    <h5>Features</h5>
                    <p>Business Marketting</p>
                    <p>User Analytic</p>
                    <p>Live Chat</p>
                    <p>Unlimited Support</p>
                </div>
                <div>
                    <h5>Resources</h5>
                    <p>IOS & Android</p>
                    <p>Watch a Demo</p>
                    <p>Customers</p>
                    <p>API</p>
                </div>
                <div>
                    <h5>Get In Touch</h5>
                    <EmailData/>
                    <p>Lorem impsum dolar amit</p>
                </div>
             </div>
        </div>
    )
}
export default Footermiddle;