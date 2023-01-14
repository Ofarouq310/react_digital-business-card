import React from 'react'
import githubLogo from '../assets/GitHub Icon.png'


export default function Footer(){
    return(
        <div className='footer'>
            <a href="https://www.twitter.com/Ofarouq310" target={'_blank'}>
                <img className='footer-img' src='src/assets/Twitter Icon.png' alt='twitter-icon' />
            </a>

            <a href="https://www.facebook.com/Ofarouq310" target={'_blank'}>
                <img className='footer-img' src='src/assets/Facebook Icon.png' alt='facebook-icon' />
            </a>

            <a href="https://www.linkedin.com/in/Ofarouq310/" target={'_blank'}>    
                <img className='footer-img' src='src/assets/Linkedin Icon.png' alt='linkedin-icon' />
            </a>

            <a href="https://www.github.com/Ofarouq310" target={'_blank'}>
                <img className='footer-img' src={githubLogo} alt='github-icon' />
            </a>
        </div>
    )
}