import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ServicePage from "./pages/ServicePage"
import CompanyPage from "./pages/CompanyPage"
import CareerPage from "./pages/CareerPage"
import BlogPage from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={HomePage} />
        <Route path="/service" element={ServicePage} />
        <Route path="/company" element={CompanyPage} />
        <Route path="/career" element={CareerPage} />
        <Route path="/blog" element={BlogPage} />
        <Route path="/contact" element={ContactPage} />
      </Routes>
    </Router>
  )
}

export default App