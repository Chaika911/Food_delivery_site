import React from "react";
import SocialIcons from "../../assets/img/social";
import logo from '../../assets/img/icon/logo.svg'
import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer-block">

                    <Link to='/' className="logo footer-logo">
                        <img  src={logo} alt="logo"/>
                    </Link>

                    <nav className="footer-nav">
                        <a className="footer-link" href="#">Ресторанам</a>
                        <a className="footer-link" href="#">Кур'єрам</a>
                        <a className="footer-link" href="#">Прес-центр</a>
                        <a className="footer-link" href="#">Контакти</a>
                    </nav>

                    <div className="social-links">
                        <a href="#" target="_blank" className="social-link">
                            <SocialIcons.fb />
                        </a>
                        <a href="#" target="_blank" className="social-link">
                            <SocialIcons.instagram />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;