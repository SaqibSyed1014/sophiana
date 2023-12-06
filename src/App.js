import './styles/global.css';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from "./views/Home";
import DefaultLayout from "./layout";
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
              </Switch>
          </Router>
      </ParallaxProvider>
  );
}

export default App;
