/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import NavbarModal from './components/NavbarModal';
import HomePage from "./pages/HomePage/HomePage"
import ServicePage from "./pages/ServicePage/ServicePage"
import CompanyPage from "./pages/CompanyPage/CompanyPage"
import CareerPage from "./pages/CareerPage/CareerPage"
import BlogPage from "./pages/BlogPage/BlogPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import PolicyPage from './pages/PolicyPage/PolicyPage';
import FooterNav from './components/FooterNav';


const App = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const openNavbar = () => {
    setIsNavbarOpen(true);
  }
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  }

  return (
    <Router>
      <Navbar openNavbar={openNavbar} />
      <NavbarModal isNavbarOpen={isNavbarOpen} closeNavbar={closeNavbar} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policy" element={<PolicyPage />} />
      </Routes>
      <FooterNav />
    </Router>
  )
}

export default App