import React, {useEffect ,useState} from 'react';
import {BrowserRouter as Router,Switch, Route,  useLocation}from 'react-router-dom';

import './App.styles.scss';

import Header from './components/core-components/header/header.component';
import Footer from './components/core-components/footer/footer.component';

import Home from './pages/home/home';
import About from './pages/about/about';
import Products from './pages/product/product';
import Contact from './pages/contact/contact';
import NoMatch from './pages/error/error404';

import height from './helpers/compute-heigth';
import PageContext from './context/page-context';


function App() {

  const  [currentPage , setCurrentPage] = useState('/')
  const  [value , setValue] = useState('/')
  const  [footerPos , setFooterPos] = useState(0)


  const handleLoading = () => {
    setFooterPos(height())
  }

//   useEffect(() =>{ 
//     //handleLoading()
//     if(pageLoaded)
//     {
//       console.log('loaded...')
//       // setLoadingPage(false)
//     }else{console.log('loading...')
//     setLoadingPage(true)
//   }
//   }
//  ,[pageLoaded]);

 useEffect(() =>{ 
  handleLoading()
  console.log(' app '+value)
  setCurrentPage(value)
}
,[value]);
 


  return (
    <PageContext.Provider value={{value,setValue}}>
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
        {( (currentPage === value)&&<Footer position={footerPos}/>)}
    </div>
    </Router>
    </PageContext.Provider>
  );
}

export default App;
