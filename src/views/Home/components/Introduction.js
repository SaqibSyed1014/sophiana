import { Parallax } from 'react-scroll-parallax';

function Introduction() {
    return (
        <Parallax opacity={[0, 1]} easing='ease'>
            <section className="our-introduction bg-skin py-20">
                <div className="container text-center">
                    <div className="w-2/4 mx-auto">
                        <h2 className="font-cormorant-sc font-bold text-2xl">What is Sophiana?</h2>
                        <p className="text-lg">
                            At Sophiana, we bring stunning jewels, arts and exclusive leather goods to global audiences. By
                            joining our curated network, your products will reach access to a pool of dedicated digital
                            resellers and shoppers, each with their own customer base. Your creations are presented and
                            promoted to a diverse and engaged clientele, enhancing your brand visibility and maximize
                            sales potential.
                        </p>
                    </div>
                </div>
            </section>
        </Parallax>
    )
}

export default Introduction
