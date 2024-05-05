import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import axios from 'axios'
import './App.scss'

function App() {

  useEffect(() => {
    const pingAPI = async () => {
      try {
        await axios.get("https://varvault-web-ui.onrender.com/d");
      } catch (error) {
        console.error("Error pinging API:", error);
      }
    };
    pingAPI();
  }, []); 
    
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/hello' element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
