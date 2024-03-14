import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import "./Navbar.css";
import baleImage from "./ecem-bale-logo.jpg";

export default function Navbar(){

    return(
        <div className='Navbar'>
            <div className="Navbar-top">
                <p className="Navbar-top-text">Instagram: @ecembale</p>
                <p className="Navbar-top-text">Telefon: 0372 333 07 08</p>
            </div>
            <div className="Navbar-main">
                <section className='Navbar-left'>
                    {/* <div className="Navbar-left-text">
                    <h1 className='Navbar-left-Header-up'>Özel Ecem Bale ve Dans Okulu</h1>
                    <h2 className='Navbar-left-Header-down'>MEB'e bağlı ruhsatlı bir eğitim kurumudur</h2>
                    </div> */}
                    <img src={baleImage} className='logo' alt='logo'/>
                </section>

                <section className='Navbar-right'>
                <Link to="/" className='Navbar-right-link'>Ana Sayfa</Link>
                <Link to="/InfoPage" smooth={true} duration={500} className='Navbar-right-link'>Hakkımızda</Link>
                <ScrollLink to="contact" smooth={true} duration={500} className='Navbar-right-link'>İletişim</ScrollLink>
                </section>
            </div>
        </div>
    )
}