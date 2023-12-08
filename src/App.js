import './styles/global.css';
import { Route, Routes } from "react-router-dom";
import HomeView from "./views/Home";
import AboutUsView from "./views/AboutUs";
import ContactUsView from "./views/ContactUs";
import ComingSoonView from "./views/ComingSoon";
import NavBar from "./layout/components/NavBar";
import Footer from "./layout/components/Footer";

import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
      <ParallaxProvider>
          <NavBar />
              <Routes>
                  <Route path="/" element={<HomeView />} exact/>
                  <Route path="/about-us" element={<AboutUsView />}/>
                  <Route path="/contact-us" element={<ContactUsView />}/>
                  <Route path="/coming-soon" element={<ComingSoonView />}/>
              </Routes>
          <Footer />
      </ParallaxProvider>
  );
}

export default App;
