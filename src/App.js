import './styles/global.css';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultLayout from "./layout";
import HomeView from "./views/Home";
import AboutUsView from "./views/AboutUs";
import ComingSoonView from "./views/ComingSoon";

import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
      <ParallaxProvider>
          <Router>
              <Switch>
                  <Route path="/" exact>
                      <DefaultLayout>
                          <HomeView />
                      </DefaultLayout>
                  </Route>
                  <Route path="/about-us">
                      <DefaultLayout>
                          <AboutUsView />
                      </DefaultLayout>
                  </Route>
                  <Route path="/coming-soon">
                      <DefaultLayout>
                          <ComingSoonView />
                      </DefaultLayout>
                  </Route>
              </Switch>
          </Router>
      </ParallaxProvider>
  );
}

export default App;
