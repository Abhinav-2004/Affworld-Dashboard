import React from 'react'
import './App.css'
import SectionTwo from './Components/SecondSection/SectionTwo'
import FirstSection from './Components/FirstSection/FirstSection'
import ThirdSection from './Components/ThirdSection/ThirdSection'
import FourthSection from './Components/FourthSection/FourthSection'
import FifthSection from './Components/FifthSection/FifthSection'
import SixthSection from './Components/SixthSection/SixthSection'
import SeventhSection from './Components/SeventhSection/SeventhSection'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <FirstSection/>
    <SectionTwo/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
    <SixthSection/>
    <SeventhSection/>
    <Footer/>
    </>
  )
}

export default App
