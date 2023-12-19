export default function Footer() {
    return (
        <footer className="text-center font-inter">
            <div className="hidden md:block bg-skin py-16">
                <div className="">
                    <div className="max-w-[630px] mx-auto">
                        <hr className="border-t border-[#636262]/70"/>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 font-light text-[#333232] tracking-[2px] text-xs sm:text-[10px] sm:pt-12 px-8">
                            <div>
                                <a href="tel:">+ 1-212-345-6789</a>
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
                    <p className="font-inter font-light tracking-[3.75px] text-[#7E7C7C] text-[10px] sm:text-sm">
                        <span className="pr-3">SOPHIANA</span>
                        <span>2024</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
