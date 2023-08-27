import React from 'react'
import Header from './componente/header/Header'
import Home from './componente/home/Home'
import Services from './componente/services/Services'
import Skills from './componente/skils/Skills'
import Portfolio from './componente/portfolio/Portfolio'
import Resume from './componente/resume/Resume'
import Contact from './componente/contact/Contact'
import Footer from './componente/footer/Footer'
import './App.css'


function App() {
  

  return (
    <main className="main">
      <Header/>
      <Home/>
      <Services/> 
      <Portfolio/>
      <Skills/>
      <Resume/>
      <Contact/>
      <Footer/>
    </main>

  )
}

export default App;
