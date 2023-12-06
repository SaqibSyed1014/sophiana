import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 bg-baltic text-[#F4F4F4] text-sm w-full font-crimson py-6 z-30">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="flex gap-5">
                        <Link to="/coming-sson">Product Listings</Link>
                        <Link to="/contact-us">Dealer / Personal Shopper Sign-up</Link>
                    </div>
                    <div className="font-inter text-xl tracking-[5px]">
                        <Link to="/">SOPHIANA</Link>
                    </div>
                    <div className="flex gap-5">
                        <Link to="/about-us">About SOPHIANA</Link>
                        <Link to="/contact-us">Personal Shopper Service</Link>
                        <Link to="/contact-us">Contact us</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
