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
                        <p>Keep in mind that a "modal window" overlays on either the primary window or another modal window. Windows under a modal are inert. That is, users cannot interact with content outside an active modal window. This might create conflicting behaviors.</p>
                   
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
                            <span>647  shshsh street<br/>
                            bssbsb sssjsjsjs sssss<br/>
                            USA </span>
                            </li>
                            <li>
                            <span> <FaPhone /></span>
                            <p>07756985555</p>
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
                <p>Copyright c 2020 online tutorial All Right Reserved </p>
                </div>
        </div>
    )
}

export default Footer
