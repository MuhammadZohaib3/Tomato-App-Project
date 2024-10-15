import React from 'react'
import './Footer.css';
import { assets } from '../../assets/javascript';
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque et perspiciatis voluptatibus illo consequuntur suscipit nihil neque eum voluptatem! Consequuntur quasi quod perferendis vero unde architecto voluptatum fugit porro adipisci.
                </p>
                <div className="icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon}alt="" />
                </div>
            </div>
            <div className="footer-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-right">
            <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-202-656-4764</li>
                    <li>contact@tomato.com</li>           
                </ul>
            </div>

        </div>
        <hr />
        <p className="copy-right">Copyright 2024 &copy; Tomato.com - All Right Reserved</p>

    </div>
  )
}

export default Footer