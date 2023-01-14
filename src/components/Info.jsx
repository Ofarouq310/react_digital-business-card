import React from 'react';


export default function Info() {
    return(
        <div className='info-container'>
            <div className='img-placeholder'></div>
            <div className="headings-container">
                <h4 id="heading-1">Omar Mohammed</h4>
                <h6 id="heading-2">Full-Stack Developer</h6>
                <h6 id="heading-3">Ofarouq310.website</h6>
            </div>
            <div className="btns-container">
                <a href="mailto:ofarouq310@gmail.com">
                    <img src="src/assets/email-btn.png" className='main-btns' />
                </a>
                <a href="https://www.linkedin.com/in/Ofarouq310/" target={'_blank'}>
                    <img src="src/assets/linkedin-btn.png" className='main-btns' />
                </a>
                
            </div>
        </div>
    )
}