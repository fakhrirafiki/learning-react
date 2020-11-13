import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './View/Home'
import About from './View/About'


function App() {
  return (
    <div>
      <Router>
        <Header />


        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>

      </Router>

      <Footer />
    </div>

  );
}

export default App;