import { Parallax } from "react-scroll-parallax";
import { ParallaxBanner } from 'react-scroll-parallax';

function JoinOurNetworks() {
    return (
        <section className="lg:py-32">
            <div className="hidden lg:block container">
                <Parallax opacity={[0, 1]} easing="ease">
                    <div className="w-3/4 mx-auto">
                        <div className="grid lg:grid-cols-2 items-center gap-20">
                            <Parallax speed={6}>
                                <div className="flex justify-center">
                                    <img src="/imgs/model-image.png" alt="Model Ramp Walk"/>
                                </div>
                            </Parallax>
                            <div className="flex justify-center flex-col">
                                <h2 className="font-cormorant-sc text-3xl font-bold">
                                    Interested in Joining our Reseller Network?
                                </h2>
                                <p className="pt-6 pb-12">
                                    Sofiana redefines luxury reselling by providing exclusive access to a selection of
                                    highly curated luxury jewelry, watches, and artworks to our digital reseller network.
                                    Eliminate the challenges of time-consuming product searches and photography by
                                    leveraging our SHOWROOM—a comprehensive tool for your selling success.
                                </p>
                                <div>
                                    <button
                                        type="button"
                                        className="bg-transparent text-black border-2 border-black">
                                        Join Our Network Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>
            <div className="block lg:hidden">
                <ParallaxBanner
                    layers={[
                        { image: '/imgs/model-image-mobile-bg.png', speed: -10, easing: 'ease' }
                    ]}
                >
                    <div className="relative py-40 flex justify-center items-center font-cormorant-sc">
                        <div className="content text-white text-center px-10">
                            <h2 className="text-[22px] capitalize font-bold">Interested in Joining our Reseller Network?</h2>
                            <hr className="border-[.5px] border-white w-7/12 mx-auto my-7" />
                            <p className="pb-14 text-base">Sofiana offers a unique opportunity for dealers to showcase products that will reach access to a pool of dedicated clientele. This not only expands your reach but also ensures that your creations are presented and promoted to a diverse and engaged clientele, enhancing your brand visibility and sales potentials!</p>
                            <button
                                type="button"
                                className="bg-transparent text-white border-2 border-white">
                                Join Our Network Now
                            </button>
                        </div>
                    </div>

                </ParallaxBanner>
            </div>
        </section>
    )
}

export default JoinOurNetworks
