import React from 'react'
import Home from './Home'
import ContactComponent from './Contact'
import About from './About'
import Product from './Product'
import Inprodut from './Inprodut'
import Article from './Article'
import Inarticle from './Inarticle'
import{BrowserRouter,Routes,Route}from'react-router-dom'
import NavbarComponent from './navbar'
import FooterComponent from './footer'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<ContactComponent/>}/>
        <Route path='/product'element={<Product/>}/>
        <Route path='/inproduct'element={<Inprodut/>}/>
        <Route path='/article'element={<Article/>}/>
        <Route path='/inarticle'element={<Inarticle/>}/>
        
        
      </Routes>
      <FooterComponent/>
      </BrowserRouter>
    </div>
  )
}

export default App
