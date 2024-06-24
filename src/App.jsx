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

import about1 from "./assets/images/about1.png";
import about2 from "./assets/images/about2.png";
import about3 from "./assets/images/about3.png";

import blog1 from "./assets/images/blog1.png";
import blog2 from "./assets/images/blog2.png";



const App = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: about1,
    },
    {
      id: 2,
      src: about2,
    },
    {
      id: 3,
      src: about3,
    },
    {
      id: 4,
      src: about1,
    },
    {
      id: 5,
      src: about2,
    },
  ]);
  const allBlogs = [
    {
      id: 1,
      img: blog1,
      title: "Today’s best design trends for digital products",
      date: "Jan 19, 2021",
      link: "#"
    },
    {
      id: 2,
      img: blog2,
      title: "A practical guide to building a brand strategy",
      date: "Jan 19, 2021",
      link: "#"
    },
  ]
  

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
        <Route path="/" element={<HomePage images={images} allBlogs={allBlogs} />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/company" element={<CompanyPage images={images} />} />
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