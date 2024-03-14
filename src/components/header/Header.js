import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.css";
import baleImage4 from "./ecembale1.jpg";
export default function Header(){

    return(
        <div className='Header'>
            <img className="Header-img" src={baleImage4} alt="Bale" />
            <div className="Header-text">
                <h2 className="Header-line">Sağlıklı Bir Aktivite, Güzel Bir Sanat!</h2>
                <Link className="Header-link" to="/InfoPage" smooth={true} duration={500}>Bizimle İletişime Geçin</Link>
            </div>
        </div>
    )
}