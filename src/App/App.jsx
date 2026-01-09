import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import HomePage from "../Pages/Main/HomePage/HomePage"
import AboutCompany from '../Pages/Main/AboutCompany/AboutCompany';
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import RepairAndDecoration from '../Pages/Main/RepairAndDecoration/RepairAndDecoration';
import './App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
    <div className="container_app">
      <header className="header">
        <Header />
      </header>
      <main className="main">
          <Routes>
            <Route path='./' element={<HomePage />} />
            <Route path='./aboutCompany/*' element={<AboutCompany />} />
            <Route path='./RepairAndDecoration' element={<RepairAndDecoration />} />
          </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </BrowserRouter>  
    </>
  )
}

export default App
