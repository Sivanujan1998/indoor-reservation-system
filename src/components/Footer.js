import React from 'react'
import '../Style/Footer.css'

import {FaTwitter,FaFacebook,FaYoutube,FaLinkedin,FaMap,FaPhone,FaEnvelope} from "react-icons/fa"


function Footer() {
    return (
        <div>
           
           <footer>
                <div className="container">
                    <div className="sec aboutus">
                        <h2>About Us</h2>
                        <p>Book courts 24/7 online
With online reservation software you can easily let members (or non-members) make reservations for tennis courts, Badminton courts, TableTennis courts and Gym online at any time. </p>
                   
                    <ul className="sci">
                        <li><a href="#"><FaTwitter /></a></li>
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><FaYoutube /></a></li>
                        <li><a href="#"><FaLinkedin /></a></li>
                     
                              </ul>
                    </div>
                    <div className="sec quickLinks">
                        <h2> Quick Links</h2>
                        <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="sec contact">
                        <h2>Contact Info</h2>
                        <ul class="info">
                            <li>
                            <span> <FaMap /></span>
                            <span>No-135/3 Nelliady<br/>
                            Cross plant Road,North<br/>
                            Srilanka </span>
                            </li>
                            <li>
                            <span> <FaPhone /></span>
                            <p>+94779126840, </p>
                            <p>+94779126820</p>
                            </li>
                            <li>
                            <span> <FaEnvelope /></span>
                            <p>ssivanujan1998gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copyrightText">
                <p>Copyright &copy; 2021 <i>PLAY<sub>24/7</sub></i> Club All Right Reserved </p>
                </div>
        </div>
    )
}

export default Footer
