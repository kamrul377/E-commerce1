import React, { useContext } from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services';
import Trusted from '../components/Trusted';
import Footer from '../components/Footer';
import FeatureProduct from '../components/FeatureProduct'



const Home = () => {

  const storeName = "E-SHOP ONLINE";



  return (
    <>


      <HeroSection storeName={storeName} />
      <FeatureProduct />
      <Services />
      <Trusted />

    </>
  )
}

export default Home