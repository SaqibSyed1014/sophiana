import { Parallax } from 'react-scroll-parallax';

function Partnerships() {
    return (
        <section id="partnershipSection" className="our-partnerships py-32">
            <div className="lg:container">
                <div className="lg:w-3/4 mx-auto">
                    <div className="font-crimson text-center pb-16 md:pb-32">
                            <h2 className="divider-heading uppercase text-4xl">
                            <span>Partnerships Program</span>
                        </h2>
                        <hr className="block md:hidden border-[1px] border-[#8E8D8D] w-7/12 mx-auto my-4" />
                        <p className="sub-heading text-[22px]">For Brands, Designers & Jewelers</p>
                    </div>

                    <div className="gallery-layout lg:container">
                        <div className="grid md:grid-cols-2 items-center justify-center gap-10 md:gap-20">
                            <Parallax speed={10}>
                                <div className="flex">
                                    <img className="w-full md:w-auto" src="/imgs/gallery-image-1.png" alt="Image 01"/>
                                </div>
                            </Parallax>
                            <div className="flex justify-center flex-col pb-20 md:pb-0 px-10 md:px-0">
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

                        <div className="grid md:grid-cols-2 items-center justify-center gap-20">
                            <div className="flex justify-center flex-col px-10 md:px-0">
                                <h3>a win-win Opporunity</h3>
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
                            <Parallax speed={10} className="hidden md:block">
                                <div className="flex justify-end">
                                    <img src="/imgs/gallery-image-2.png" alt="Image 02"/>
                                </div>
                            </Parallax>
                        </div>

                        <div className="text-center pt-28">
                            <button
                                type="button"
                                className="bg-transparent text-black border-2 border-black">
                                Apply as Shopper
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Partnerships
