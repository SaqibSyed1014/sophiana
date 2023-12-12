import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen === true) document.body.classList.add('overflow-hidden');
        else document.body.classList.remove('overflow-hidden');
    }, [isOpen])

    const location = useLocation();
    const navigate = useNavigate ()

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const scrollToSection = async (id) => {
        if (location.pathname !== '/') await navigate('/')
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
            setIsOpen(false);
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="bg-skin w-full h-6"></div>
            <nav className="sticky top-0 left-0 bg-baltic text-[#F4F4F4] text-base w-full font-crimson py-6 z-30">
                <div className="container">
                    <div className="flex justify-between items-center px-3 lg:px-0">
                        <div className="hidden lg:flex gap-5">
                            <Link to="/coming-soon">Product Listings</Link>
                            <Link to="/contact-us">Dealer / Personal Shopper Sign-up</Link>
                        </div>
                        <div onClick={() => setIsOpen(true)} className="hamburger-icon block lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 15"
                                 fill="none">
                                <path
                                    d="M23.5827 1.59375H1.41724C1.3012 1.59375 1.18992 1.54766 1.10788 1.46561C1.02583 1.38356 0.979736 1.27228 0.979736 1.15625C0.979736 1.04022 1.02583 0.928938 1.10788 0.84689C1.18992 0.764843 1.3012 0.71875 1.41724 0.71875H23.5827C23.6988 0.71875 23.81 0.764843 23.8921 0.84689C23.9741 0.928938 24.0202 1.04022 24.0202 1.15625C24.0202 1.27228 23.9741 1.38356 23.8921 1.46561C23.81 1.54766 23.6988 1.59375 23.5827 1.59375ZM23.5827 7.9375H1.41724C1.3012 7.9375 1.18992 7.89141 1.10788 7.80936C1.02583 7.72731 0.979736 7.61603 0.979736 7.5C0.979736 7.38397 1.02583 7.27269 1.10788 7.19064C1.18992 7.10859 1.3012 7.0625 1.41724 7.0625H23.5827C23.6988 7.0625 23.81 7.10859 23.8921 7.19064C23.9741 7.27269 24.0202 7.38397 24.0202 7.5C24.0202 7.61603 23.9741 7.72731 23.8921 7.80936C23.81 7.89141 23.6988 7.9375 23.5827 7.9375ZM23.5827 14.2812H1.41724C1.3012 14.2812 1.18992 14.2352 1.10788 14.1531C1.02583 14.0711 0.979736 13.9598 0.979736 13.8438C0.979736 13.7277 1.02583 13.6164 1.10788 13.5344C1.18992 13.4523 1.3012 13.4062 1.41724 13.4062H23.5827C23.6988 13.4062 23.81 13.4523 23.8921 13.5344C23.9741 13.6164 24.0202 13.7277 24.0202 13.8438C24.0202 13.9598 23.9741 14.0711 23.8921 14.1531C23.81 14.2352 23.6988 14.2812 23.5827 14.2812Z"
                                    fill="white"/>
                            </svg>
                        </div>
                        <div className="font-inter text-xl tracking-[5px]">
                            <Link to="/">SOPHIANA</Link>
                        </div>
                        <div className="hidden lg:flex gap-5">
                            <Link to="/about-us">About SOPHIANA</Link>
                            <Link to="/contact-us">Personal Shopper Service</Link>
                            <Link to="/contact-us">Contact us</Link>
                        </div>
                        <div className="block lg:hidden" />
                    </div>
                </div>
            </nav>

        {/* Sidebar */}
            <div
                className={`mobile-side-bar bg-white w-full z-50 fixed top-0 left-0 block lg:hidden ${isOpen ? 'expanded' : 'collapsed'}`}
            >
                <button onClick={() => setIsOpen(false)} className="close-side-bar-btn absolute right-12 top-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M20 1.75L18.25 0L10 8.25L1.75 0L0 1.75L8.25 10L0 18.25L1.75 20L10 11.75L18.25 20L20 18.25L11.75 10L20 1.75Z" fill="black"/>
                    </svg>
                </button>

                <div className="side-bar-content px-8 py-20">
                    <ul>
                        <li className="!pb-0">
                            <Link to="/" className="menu-link">Home</Link>
                        </li>
                    </ul>
                    <hr className="my-6" />
                    <div>
                        <label>Dealers</label>
                        <ul>
                            <li>
                                <span
                                    onClick={() => scrollToSection('partnershipSection')}>
                                    Partnership Program
                                </span>
                            </li>
                            <li>
                                <Link to="/contact-us">Sign Up Now</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <label>Personal Shoppers</label>
                        <ul>
                            <li>
                                <Link to="/coming-soon">Product Listings</Link>
                            </li>
                            <li className="!pb-0">
                                <Link to="/contact-us">Get Access</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6" />
                    <div>
                        <label>Concierge Area</label>
                        <ul>
                            <li>
                                <Link to="/contact-us">Personal Shopper Service</Link>
                            </li>
                            <li>

                                <Link to="/about-us">About Sophiana</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}
