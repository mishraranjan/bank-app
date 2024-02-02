import{BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react'

// Pages****************************
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound/NotFound'

// Components******************************
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import CopyRight from '../Components/CopyRight/CopyRight';


function Router() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/'  element={<Home/>}></Route>
        <Route path='*'  element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
      <CopyRight/>
    </BrowserRouter>
  )
}

export default Router
