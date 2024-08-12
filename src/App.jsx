import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './helpers/BasicModal'
import TextNav from './helpers/TextNav'
import Header2 from './components/Header2'
import Success from './payment/Success'
import Fail from './payment/Fail'

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Header2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/singleProduct/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        {/* payment  */}
        <Route path='/paymentSuccess' element={<Success />} />
        <Route path='/paymentFail' element={<Fail />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/login' element={<Modal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App