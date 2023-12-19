import { ParallaxBanner } from 'react-scroll-parallax';
import { Link } from "react-router-dom";

function HeaderPart() {
    return (
        <header className="relative flex justify-center items-center h-full">
            <div className="header-content z-10">
                <div className="container md:pb-14 xl:pb-0">
                    <div className="text-center mx-auto">
                        <h1 className="font-crimson text-white italic text-4xl lg:text-5xl pb-14">
                            Luxury Selling & Curating <br/>
                            <span className="font-cormorant">REDEFINED</span>
                        </h1>

                        <div className="flex flex-col gap-5 px-14 md:px-28">
                            <Link to="/contact-us">
                                <button
                                    type="button"
                                    className="bg-white text-black border-2 border-white !w-full"
                                >
                                    Join as Dealer
                                </button>
                            </Link>
                            <Link to="/contact-us">
                                <button
                                    type="button"
                                    className="bg-transparent text-white border-2 border-white"
                                >
                                    Join as Shopper
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

function Header() {
    return (
        <>
            <ParallaxBanner
                className="h-screen hidden md:block"
                layers={[
                    {image: '/imgs/header-bg.png', speed: -20, easing: 'ease'}
                ]}
            >
                <HeaderPart/>
            </ParallaxBanner>
            <ParallaxBanner
                className="bg-wrapper h-screen block md:hidden"
                layers={[
                    {image: '/imgs/header-mobile-bg.png', speed: -15, easing: 'ease'}
                ]}
            >
                <HeaderPart/>
            </ParallaxBanner>
        </>
    )
}

export default Header
