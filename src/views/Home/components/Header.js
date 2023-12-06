import '../../../styles/home-view.css'
import { ParallaxBanner } from 'react-scroll-parallax';

function Header() {
    return (
        <ParallaxBanner
            className="h-screen"
            layers={[
                { image: '/imgs/header-bg.png', speed: -20 }
            ]}
        >
            <header className="">
                <div className="header-content z-10">
                    <div className="container pb-20 2xl:pb-32">
                        <div className="text-center mx-auto">
                            <h1 className="font-crimson text-white italic text-5xl pb-14">
                                Luxury Selling & Curating <br/>
                                <span className="font-cormorant">REDEFINED</span>
                            </h1>

                                <div className="flex flex-col gap-5 px-28">
                                    <button
                                        type="button"
                                        className="bg-white text-black border-2 border-white">
                                        Join as Dealer
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-transparent text-white border-2 border-white">
                                        Join as Shopper
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </header>
        </ParallaxBanner>
    )
}

export default Header