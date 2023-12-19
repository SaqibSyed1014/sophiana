import { ParallaxBanner } from 'react-scroll-parallax';
import { Link } from "react-router-dom";

function HeaderPart() {
    return (
        <header className="relative flex justify-center items-center h-full">
            <div className="header-content w-3/4 md:w-2/4 !font-cormorant text-white text-center">
                <h1 className="text-2xl sm:text-[40px] pb-3">
                    THE SOPHIANA
                    <span className="italic block sm:inline"> DIFFERENCE</span>
                </h1>
                <hr className="vertical-line" />
                <p className="text-lg md:text-xl lg:text-2xl pt-5 pb-8 lg:pb-16 2xl:pb-24">
                    At SOPHIANA, we bring stunning jewels, watches and art pieces to global audiences. We redefine how luxury is sold—combining the digital world with personalized touch.
                </p>
                <Link to="/contact-us">
                    <button
                        type="button"
                        className="bg-white text-black border-2 border-white"
                    >
                        Get in touch
                    </button>
                </Link>
            </div>
        </header>
    )
}

function AboutUs() {
    return (
        <>
            <ParallaxBanner
                className="hidden md:block h-screen"
                layers={[
                    {image: '/imgs/about-us-bg.png', speed: -20, easing: 'ease'}
                ]}
            >
                <HeaderPart/>
            </ParallaxBanner>
            <ParallaxBanner
                className="block md:hidden h-screen"
                layers={[
                    {image: '/imgs/about-us-mobile-bg.png', speed: -20, easing: 'ease'}
                ]}
            >
                <HeaderPart/>
            </ParallaxBanner>
        </>
    )
}

export default AboutUs
