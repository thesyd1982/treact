import React from 'react';
import {BrowserRouter as Router,Switch, Route}from 'react-router-dom';
import './App.styles.scss';

import Header from './components/core-components/header/header.component';
import Footer from './components/core-components/footer/footer.component';

import Home from './pages/home/home';
import About from './pages/about/about';
import Products from './pages/product/product';
import Contact from './pages/contact/contact';

import NoMatch from './pages/error/error404';

function App() {

  return (
    <Router> 
    <div className="App">

    <Header/>
    
     {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route  path="/contact">
            <Contact />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
     
      <Footer />
    </div>
    </Router>
  );
}

export default App;
