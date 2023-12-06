import { ParallaxBanner } from 'react-scroll-parallax';

function AboutUs() {
    return (
        <ParallaxBanner
            className="h-screen"
            layers={[
                { image: '/imgs/about-us-bg.png', speed: -20, easing: 'ease' }
            ]}
        >
            <header className="relative flex justify-center items-center">
                <div className="header-content w-3/4 md:w-2/4 !font-crimson text-white text-center pt-14">
                    <h1 className="text-[40px]">THE SOPHIANA DIFFERENCE</h1>
                    <p className="text-2xl py-8 lg:py-16 2xl:py-24">
                        At SOPHIANA, we bring stunning jewels, watches and art pieces to global audiences. We redefine how luxury is sold—combining the digital world with personalized touch.
                    </p>
                    <button
                        type="button"
                        className="bg-white text-black border-2 border-white">
                        Get in touch
                    </button>
                </div>
            </header>
        </ParallaxBanner>
    )
}

export default AboutUs
