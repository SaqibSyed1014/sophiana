import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTopBtn from "./components/ScrollToTopBtn";

export default function DefaultLayout({ children }) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
            <ScrollToTopBtn />
        </>
    )
}
