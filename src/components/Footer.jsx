import React from 'react'
import twitterLogo from '../assets/Twitter Icon.png'
import facebookLogo from '../assets/Facebook Icon.png'
import linkedinLogo from '../assets/Linkedin Icon.png'
import githubLogo from '../assets/GitHub Icon.png'


export default function Footer(){
    return(
        <div className='footer'>
            <a href="https://www.twitter.com/Ofarouq310" target={'_blank'}>
                <img className='footer-img' src={twitterLogo} alt='twitter-icon' />
            </a>

            <a href="https://www.facebook.com/Ofarouq310" target={'_blank'}>
                <img className='footer-img' src={facebookLogo} alt='facebook-icon' />
            </a>

            <a href="https://www.linkedin.com/in/Ofarouq310/" target={'_blank'}>    
                <img className='footer-img' src={linkedinLogo} alt='linkedin-icon' />
            </a>

            <a href="https://www.github.com/Ofarouq310" target={'_blank'}>
                <img className='footer-img' src={githubLogo} alt='github-icon' />
            </a>
        </div>
    )
}