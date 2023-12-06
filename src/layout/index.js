import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function DefaultLayout({ children }) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}
