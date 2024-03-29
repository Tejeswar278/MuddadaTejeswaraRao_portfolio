import { useState } from 'react'
import  Navbar  from './components/Navbar'
import  Sidebar  from './components/sidebar'
import { Home } from './components/Home'
import { About } from './components/About'
import  Skills  from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
