import React from 'react'
import { Link } from 'react-router-dom'
import arrowRightBlackIcon from "../assets/icons/arrow-right-black.svg"
import logoBlackIcon from "../assets/icons/logo-black.svg"
import faceIcon from "../assets/icons/face.svg"
import twitIcon from "../assets/icons/twit.svg"
import instIcon from "../assets/icons/inst.svg"
import linkedInIcon from "../assets/icons/linkedin.svg"


const FooterNav = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__top-wrap container">
                    <div className="footer__desc">
                        <h2 className="footer__title title-h2">Let's make
                            something special
                        </h2>
                        <h4 className="footer__subtitle">Let's talk! 🤙 </h4>
                        <address className="footer__links">
                            <div className="footer__links-top">
                                <a href="tel:020 7993 2905" className="footer__link footer__tel">020 7993 2905</a>
                                <a href="mailto: hi@finsweet.com" className="footer__link footer__email">hi@finsweet.com</a>
                            </div>
                            <a href="#" className="footer__link-address">DLF Cybercity, Bhubaneswar,
                                India, &52050</a>
                        </address>
                    </div>
                    <nav className="footer__nav">
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <Link to="/" className="footer__list-link">Home</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to="/service" className="footer__list-link">Service</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to="/company" className="footer__list-link">Company</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to="/career" className="footer__list-link">Career </Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to="/blog" className="footer__list-link">News</Link>
                            </li>
                        </ul>
                        <ul className="footer__service footer__list">
                            <li className="footer__service-item">
                                <Link to="/service" className='footer__list-title'>Service</Link>
                            </li>
                            <li className="footer__service-item">
                                <Link to="/service#technical-support" className='footer__service-link'>Technical support</Link>
                            </li>
                            <li className="footer__service-item">
                                <Link to="/service#testing" className='footer__service-link'>Testing</Link>
                            </li>
                            <li className="footer__service-item">
                                <Link to="/service#development" className='footer__service-link'>Development</Link>
                            </li>
                            <li className="footer__service-item">
                                <Link to="/service#aws" className='footer__service-link'>AWS/Azure </Link>
                            </li>
                            <li className="footer__service-item">
                                <Link to="/service#consulting" className='footer__service-link'>Consulting</Link>
                            </li>
                            <li className="footer__service-item">
                                <Link to="/service#information-technology" className='footer__service-link'>Information Technology</Link>
                            </li>
                        </ul>
                        <ul className="footer__resources footer__list">
                            <li className="footer__resources-item">
                                <Link to="/" className="footer__list-title">Resourses</Link>
                            </li>
                            <li className="footer__resources-item">
                                <Link to="/company" className="footer__resources-link">About Us</Link>
                            </li>
                            <li className="footer__resources-item">
                                <Link to="/" className="footer__resources-link">Testimonial</Link>
                            </li>
                            <li className="footer__resources-item">
                                <Link to="/policy" className="footer__resources-link">Privacy Policy</Link>
                            </li>
                            <li className="footer__resources-item">
                                <Link to="/policy" className="footer__resources-link">Terms of use</Link>
                            </li>
                            <li className="footer__resources-item">
                                <Link to="/blog" className="footer__resources-link">Blog</Link>
                            </li>
                        </ul>
                    </nav>

                    <button className="footer__btn">
                        <div className="footer__btn-decor decor">
                            <div className="decor__line line-beige"></div>
                            <div className="decor__line line-blue"></div>
                        </div>
                        <span><span className='footer__btn-span-letter'>C</span>ontact Us</span>
                        <img src={arrowRightBlackIcon} alt="arrow-right-black" />
                    </button>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-wrap container">
                    <div className="footer__bottom-left">
                        <Link className="footer__bottom-left-logo">
                            <img src={logoBlackIcon} alt="logo-black" />
                        </Link>
                        <span className="footer__bottom-left-est">©2021 Finsweet</span>
                    </div>
                    <ul className="footer__bottom-right-list">
                        <li className="footer__bottom-right-list-item">
                            <a href="#" className="footer__bottom-list-link">
                                <img src={faceIcon} alt="facebook icon" />
                            </a>
                        </li>
                        <li className="footer__bottom-right-list-item">
                            <a href="#" className="footer__bottom-list-link">
                                <img src={twitIcon} alt="twitter icon" />
                            </a>
                        </li>
                        <li className="footer__bottom-right-list-item">
                            <a href="#" className="footer__bottom-list-link">
                                <img src={instIcon} alt="instagram icon" />
                            </a>
                        </li>
                        <li className="footer__bottom-right-list-item">
                            <a href="#" className="footer__bottom-list-link">
                                <img src={linkedInIcon} alt="linkedin icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterNav