import '../css/footer.css';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook , faInstagram, faPinterest, faTwitter} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faInstagram ,faPinterest, faTwitter} from '@fortawesome/free-brands-svg-icons';


function Footer(){
    return<>
        <div className='foot-main'>
            <div className="top">
            <div className='foot-left'>
                <p className='head'>about</p>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className='head mg-top'>social</p>
                <div className='icons'>
                    <a href='#'><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href='#'><FontAwesomeIcon icon={faPinterest} /></a>
                    <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
            <div className="foot-right">
                <p className='head'>company</p>
                <div className="company">
                    <div className="nav-left">
                        <a href="">About us</a>
                        <a href="">Services</a>
                        <a href="">Vision</a>
                        <a href="">Mission</a>
                        <a href="">Terms</a>
                        <a href="">Privacy</a>
                    </div>
                    <div className="nav-right">
                        <a href="">Partners</a>
                        <a href="">Business</a>
                        <a href="">Careers</a>
                        <a href="">Blog</a>
                        <a href="">FAQ</a>
                        <a href="">Creative</a>
                    </div>
                </div>
            </div>
            </div>
            <div className='copy'>
                <p>Copyright ©2024. All Rights Reserved.</p>
            </div> 
        </div>
                      
        
    </>
}
export default Footer;