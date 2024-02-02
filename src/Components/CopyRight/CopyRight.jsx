// import style
import './CopyRight.css'

// import socials from data 
import { FootersLinksData } from '../../Data/Data';


import { Link } from 'react-router-dom'

export default function CopyRight() {
    return (
        <div className='footer-copyright'>
            <div className="container copyright-container">
                <p>
                    &copy; 2024 Ranjan Mishra Book Store. All rights reserved </p>
                <div className="footer-social">
                        {FootersLinksData.socials.map(({ icon: IconComponent, link }, index) => (
                            <a href={link} target="_blank" rel="noopener noreferrer" key={index}><IconComponent /></a>
                        ))}
                </div>
            </div>
        </div>
    )
}
