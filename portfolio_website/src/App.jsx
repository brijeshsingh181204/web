import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/home/Home'
import Aboutme from './Component/Aboutme/Aboutme'
import Services from './Component/Services/Services'
import Mywork  from './Component/Mywork/Mywork'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import MyWork from './Component/Work/Work'
import Work from './Component/Work/Work'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Aboutme/>
      <Services/>
      <Mywork/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App