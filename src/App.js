import React from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Faq from './component/Faq/Faq'
import Hero from './component/Hero/Hero'
import Footer from './component/Footer/Footer'
import Testimonial from './component/Testimonial/Testimonial'
import Banner from './component/Banner/Banner'
import Feature from './component/Feature/Feature'
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Feature></Feature>
      <Testimonial></Testimonial>
      <Faq></Faq>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  )
}

export default App
