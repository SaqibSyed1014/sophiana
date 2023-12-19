import { ParallaxBanner } from 'react-scroll-parallax';
import { Link } from "react-router-dom";

function HeaderPart() {
    return (
        <header className="relative flex justify-center items-center h-full">
            <div className="header-content w-3/4 md:w-2/4 !font-crimson text-white text-center">
                <div className="container">
                    <p className="text-lg md:text-xl lg:text-2xl pb-8 lg:py-16 2xl:py-24">
                    Sophiana - A new digital place where you dance with diamonds and mingle with masterpieces. Get ready
                    for a luxurious rendezvous with breathtaking jewels, art, and exclusive leather goods.
                        <span className="block py-3"></span>
                        Sign up now and stay tuned.
                     </p>

                    <div className="flex flex-col gap-5 lg:px-28">
                        <Link to="/contact-us">
                            <button
                                type="button"
                                className="bg-white text-black border-2 border-white">
                                Join as Dealer
                            </button>
                        </Link>
                        <Link to="/contact-us">
                            <button
                                type="button"
                                className="bg-transparent text-white border-2 border-white">
                                Join as Shopper
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

function ComingSoon() {
    return (
        <>
            <ParallaxBanner
                className="hidden md:block bg-wrapper h-screen"
                layers={[
                    {image: '/imgs/coming-soon-bg.png', speed: -20, easing: 'ease'}
                ]}
            >
                <HeaderPart/>
            </ParallaxBanner>
                <ParallaxBanner
                    className="block md:hidden bg-wrapper h-screen"
                    layers={[
                        {image: '/imgs/coming-soon-mobile-bg.png', speed: -20, easing: 'ease'}
                    ]}
                >
                    <HeaderPart/>
            </ParallaxBanner>
        </>
    )
}

export default ComingSoon
