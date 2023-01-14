import React from 'react'


export default function Footer(){
    return(
        <div className='footer'>
            <a href="https://www.twitter.com/Ofarouq310" target={'_blank'}>
                <img className='footer-img' src='./public/Twitter Icon.png' alt='twitter-icon' />
            </a>

            <a href="https://www.facebook.com/Ofarouq310" target={'_blank'}>
                <img className='footer-img' src='./public/Facebook Icon.png' alt='facebook-icon' />
            </a>

            <a href="https://www.linkedin.com/in/Ofarouq310/" target={'_blank'}>    
                <img className='footer-img' src='./public/Linkedin Icon.png' alt='linkedin-icon' />
            </a>

            <a href="https://www.github.com/Ofarouq310" target={'_blank'}>
                <img className='footer-img' src='./public/GitHub Icon.png' alt='github-icon' />
            </a>
        </div>
    )
}