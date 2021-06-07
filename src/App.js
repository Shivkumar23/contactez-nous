
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from './components/ScrollToTop'
import Home from './components/pages/HomePage/Home'
import Error from './components/Error/Error'
import Footer from './components/Layout/Footer/Footer';
import Bureau from './components/pages/BureauPage/Bureau';
import Projets from './components/pages/ProjectPage/Projets';
import Contact from './components/pages/ContactPage/Contact';
import Competences from './components/pages/Competences/Competences';
import Historique from './components/pages/Other/Historique/Historique';
import Blogs from './components/pages/HomePage/Blog/Blogs';
import Blog from './components/pages/BlogPage/Blog';
import Nosmoyens from './components/pages/Other/Nosmoyens/Nosmoyens ';
import AApi from "./components/pages/Other/AApi";

const App = () => {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, []);

  return (
    <>
      {
        loading ?
          // Preloader Section
          <div class="preloader-section">
            <div className="preloader-sec">
              <div class="wrapper">
                <div class="loader"><div class="dot"></div></div>
                <div class="loader"><div class="dot"></div></div>
                <div class="loader"><div class="dot"></div></div>
                <div class="loader"><div class="dot"></div></div>
                <div class="loader"><div class="dot"></div></div>
                <div class="loader"><div class="dot"></div></div>
              </div>
              <div class="text">Please wait</div>
            </div>
          </div>
          :

          <BrowserRouter basename='/'>
            <ScrollToTop />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/bureau' component={Bureau} />
              <Route path='/projet' component={Projets} />
              <Route path='/competences' component={Competences} />
              <Route path='/contact' component={Contact} />
              <Route path='/historique' component={Historique} />
              <Route path='/nosmoyens' component={Nosmoyens} />
              <Route path='/blog' component={Blog} />
              <Route path="/blogs" exact component={Blogs} />
              <Route path="/blogs/:id" component={Blog} />

              {/* axios API Coll */}
              <Route path="/api" component={AApi} />

              <Route path="*" component={Error} />
            </Switch>
            <Footer />
          </BrowserRouter>
      }
    </>
  )
}

export default App
