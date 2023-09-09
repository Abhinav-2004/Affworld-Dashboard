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
    </>
  )
}

export default App
