import { Parallax } from "react-scroll-parallax";

function JoinOurNetworks() {
    return (
        <section className="py-32">
            <div className="container">
                <Parallax opacity={[0, 1]} easing="ease">
                    <div className="w-3/4 mx-auto">
                        <div className="grid grid-cols-2 items-center gap-20">
                            <Parallax speed={6} easing="easeInOut">
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
        </section>
    )
}

export default JoinOurNetworks
