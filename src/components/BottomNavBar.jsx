import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import './BottomNavBar.css';

function BottomNavBar()
{
    return( 
        <div className='footer'>
            <div className='social-container-1'>
                <h2>Connect With Us</h2>
            </div>         
            <div className='social-container-2'>                         
                <a href='https://www.youtube.com' className='youtube social'>
                    <FontAwesomeIcon icon={faYoutube} size='2x'></FontAwesomeIcon>
                </a>
                <a href='https://www.facebook.com' className='facebook social'>
                    <FontAwesomeIcon icon={faFacebook} size='2x'></FontAwesomeIcon>
                </a>
                <a href='https://www.Twitter.com' className='twitter social'>
                    <FontAwesomeIcon icon={faTwitter} size='2x'></FontAwesomeIcon>
                </a>
                <a href='https://www.instagram.com' className='instagram social'>
                    <FontAwesomeIcon icon={faInstagram} size='2x'></FontAwesomeIcon>
                </a>
            </div>
        </div>       
    )

}

export default BottomNavBar;
