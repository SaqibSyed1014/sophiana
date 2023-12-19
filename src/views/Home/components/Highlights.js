import { Parallax } from 'react-scroll-parallax';

function Highlights() {
    return (
        <section className="major-highlights bg-skin py-20 lg:py-36">
            <div className="lg:container">
                <div className="lg:w-3/4 mx-auto">
                    <h2 className="divider-heading">
                        <span>TREASURES HIGHLIGHTS</span>
                    </h2>

                    <div className="px-8 lg:px-0">
                        <p className="text-lg lg:pr-60 pb-3 pt-14">
                            From everyday fine jewelry and high jewelry to vintage & estate jewels or important
                            gemstones. We
                            curate the finest collections from independent jewelry houses and designers, connecting them
                            with
                            our reseller network and their discerning clientele.
                        </p>

                        <Parallax speed={10}>
                        <div className="gallery-highlights grid lg:grid-cols-2 gap-x-7 gap-y-14">
                                <div className="highlights-image">
                                    <img src="/imgs/highlight-image-1.png" alt="Highlights 01"/>
                                    <label>Vintage & Estate Jewels</label>
                                </div>
                                <div className="highlights-image">
                                    <img src="/imgs/highlight-image-2.png" alt="Highlights 01"/>
                                    <label> High Jewellery</label>
                                </div>
                                <div className="highlights-image">
                                    <img src="/imgs/highlight-image-3.png" alt="Highlights 01"/>
                                    <label>Designer Jewelry</label>
                                </div>
                                <div className="highlights-image">
                                    <img src="/imgs/highlight-image-4.png" alt="Highlights 01"/>
                                    <label>Important Gemstones</label>
                                </div>
                        </div>
                        </Parallax>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights
