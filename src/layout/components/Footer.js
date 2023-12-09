import { Parallax } from "react-scroll-parallax";

export default function Footer() {
    return (
        <footer className="text-center font-inter">
            <Parallax shouldAlwaysCompleteAnimation={true} opacity={[0, 1]} easing="ease">
                <div className="hidden md:block bg-skin py-16">
                    <div className="container">
                        <div className="w-3/4 mx-auto">
                            <hr className="mb-10 border-t-2 border-[#636262] "/>
                            <div className="grid grid-cols-3 gap-14 font-light text-[#333232] tracking-[2px]">
                                <div>
                                    <a href="tel:" className="">+ 1-212-345-6789</a>
                                </div>
                                <div>
                                    <a href="mailto:team@Sophiana.com">Email: team@Sophiana.com</a>
                                </div>
                                <div className="uppercase">
                                    <span className="pr-3">Los Angeles</span>
                                    <span>Hong Kong</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light py-3">
                    <div className="container">
                        <p className="tracking-[3.75px] text-[#7E7C7C]">
                            <span className="pr-3">SOPHIANA</span>
                            <span>2024</span>
                        </p>
                    </div>
                </div>
            </Parallax>
        </footer>
    )
}
