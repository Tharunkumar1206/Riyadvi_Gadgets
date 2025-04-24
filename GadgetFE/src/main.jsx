import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Product from './components/Product'
import CardsSection from './components/CardsSection'
import OculusVRSection from './components/OculusVRSection'
import FeaturedProducts from './components/FeaturedProduct'
import IPadProShowcase from './components/IpadProwShowCase'
import FeaturesSection from './components/FeaturesSection'
import LatestNews from './components/LatestNews'
import Footer from './components/Footer'
import Form from './components/Form'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <HomePage/> 
    <Product/> 
    {/* <CardsSection/> */}
    <OculusVRSection/>
    <FeaturedProducts/>
    <IPadProShowcase/>
    <FeaturesSection/>
    <LatestNews/>
    <Form/>
    <Footer/>
  </StrictMode>,
)
