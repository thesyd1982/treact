import React, {useEffect ,useState , Suspense} from 'react';
import {BrowserRouter as Router,Switch, Route}from 'react-router-dom';

import './App.styles.scss';

import Header from './components/core-components/header/header.component';
import Footer from './components/core-components/footer/footer.component';
import Loading from './components/core-components/loading/loading.component';


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
  const  [loading, setLoading] = useState(true)

  
  const handleLoading = () => {
    setFooterPos(height())
    setTimeout(() => {setLoading(false)},2500)
  }

 useEffect(() =>{ 
  handleLoading()
  setCurrentPage(value)
  },[value,loading]);
 


  return (
    
    <PageContext.Provider value={{value,setValue}}>
    <Router> 
    <div className="App">
    <Suspense fallback={<Loading />}>
    {!loading?<Header/>:null
    }       
        <Switch>
       
          <Route  exact path="/">
          {loading?<Loading />:
            <Home />}
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
        {((currentPage === value && !loading)&&<Footer position={footerPos}/>)}
        </Suspense>     
    </div>
    </Router>
    </PageContext.Provider>
  );
}

export default App;
