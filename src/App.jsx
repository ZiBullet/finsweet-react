/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage/HomePage"
import ServicePage from "./pages/ServicePage/ServicePage"
import CompanyPage from "./pages/CompanyPage/CompanyPage"
import CareerPage from "./pages/CareerPage/CareerPage"
import BlogPage from "./pages/BlogPage/BlogPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import PolicyPage from './pages/PolicyPage/PolicyPage';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<PolicyPage />} />
      </Routes>
    </Router>
  )
}

export default App