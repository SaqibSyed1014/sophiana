import { ParallaxBanner } from 'react-scroll-parallax';

function ComingSoon() {
    return (
        <ParallaxBanner
            className="bg-wrapper h-screen"
            layers={[
                { image: '/imgs/coming-soon-bg.png', speed: -20, easing: 'ease' }
            ]}
        >
            <header className="relative flex justify-center items-center">
                <div className="header-content w-3/4 md:w-2/4 !font-crimson text-white text-center pt-28">
                    <p className="text-2xl pb-8 lg:py-16 2xl:py-24">
                        Sophiana - A new digital place where you dance with diamonds and mingle with masterpieces. Get ready for a luxurious rendezvous with breathtaking jewels, art, and exclusive leather goods.  Sign up now and stay tuned.                    </p>
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
            </header>
        </ParallaxBanner>
    )
}

export default ComingSoon
