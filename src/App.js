import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import Competition from './pages/Competition';
import Register from './pages/Register';
import "../src/styles/Footer.css";

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
        <Routes>
          <Route path = '/' exact element = {<Home />}/>
          <Route path='/Competition' element = {<Competition />} />
          <Route path='/Register' element = {<Register />} />
        </Routes>
      </Router>
    
      <Footer />
    
    </div>
    
  )
}

export default App