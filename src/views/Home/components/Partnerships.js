import { Parallax } from 'react-scroll-parallax';

function Partnerships() {
    return (
        <section className="our-partnerships py-32">
            <div className="container">
                <div className="w-3/4 mx-auto">
                    <Parallax opacity={[0, 1]} easing="ease">
                        <div className="text-center pb-32">
                                <h2 className="divider-heading uppercase">
                                <span>Partnerships Program</span>
                            </h2>
                            <p className="sub-heading">For Brands, Designers & Jewelers</p>
                        </div>
                    </Parallax>

                    <div className="gallery-layout container">
                        <Parallax opacity={[0, 1]} easing="ease">
                            <div className="grid md:grid-cols-2 items-center justify-center gap-20">
                                <Parallax speed={10} easing='easeInOut'>
                                    <div className="">
                                        <img src="/imgs/gallery-image-1.png" alt="Image 01"/>
                                    </div>
                                </Parallax>
                                <div className="flex justify-center flex-col">
                                    <h3>Global Reach</h3>
                                    <p>
                                        Sofiana offers a unique opportunity for sellers to showcase your products that
                                        will
                                        reach access to a pool of dedicated clientele. This not only expands your reach
                                        but
                                        also
                                        ensures that your creations are presented and promoted to a diverse and engaged
                                        clientele, enhancing your brand visibility and sales potential.
                                    </p>
                                </div>
                            </div>
                        </Parallax>

                        <Parallax opacity={[0, 1]} easing="ease">
                            <div className="grid md:grid-cols-2 items-center justify-center gap-20">
                                <div className="flex justify-center flex-col">
                                    <h3 className="uppercase">a win-win Opporunity</h3>
                                    <p>
                                        Not only can we showcase your creations to a wide audience, but we also
                                        collaborate
                                        with
                                        our partners to promote their products, ensuring they reach the right audiences.
                                        Our
                                        sales expertise and network support bridge the gap between East and West, making
                                        sales
                                        happen seamlessly.
                                    </p>
                                </div>
                                <Parallax speed={10} easing='easeInOut'>
                                    <div className="flex justify-end">
                                        <img src="/imgs/gallery-image-2.png" alt="Image 02"/>
                                    </div>
                                </Parallax>
                            </div>
                        </Parallax>

                        <div className="text-center pt-28">
                            <Parallax opacity={[0, 1]} easing="ease">
                                <button
                                    type="button"
                                    className="bg-transparent text-black border-2 border-black">
                                    Apply as Shopper
                                </button>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Partnerships
