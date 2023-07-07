import React from 'react'
import {BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom"
import Navbar from "./components2/Navbar/Navbar"
import Home from "./components2/Home"
import About from "./components2/About"
import Skills from "./components2/Skills"
import Contact from "./components2/Contact"
import Signup from "./components2/Signup"
const App =()=> {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} >
      {/* <Home/> */}
      </Route>
      <Route path='/about' element={<About/>} exact>
       {/* <About/> */}
      </Route>
       <Route path='/skills' element={<Skills/>} exact>
       {/* <Skills/> */}
       </Route>
       <Route path='/contact' element={<Contact/>} exact>
       {/* <Contact/> */}
       </Route>
       <Route path='/signup' element={<Signup/>} exact>
       {/* <Signup/> */}
       </Route>
    </Routes>
  </Router>
  )
}
export default App;
