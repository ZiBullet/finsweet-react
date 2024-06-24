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
import PositionsItem from './pages/CareerPage/PositionsItem';



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
  ];
  const jobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      city: "Bengaluru",
      type: "Full Time",
      salaryRange: "$10K - $18K",
      equity: "No equity"
    },
    {
      id: 2,
      title: "Testing Engineer",
      city: "Remote",
      type: "Full Time",
      salaryRange: "$10K - $18K",
      equity: "No equity"
    },
    {
      id: 3,
      title: "Hr Manager",
      city: "Mumbai",
      type: "Full Time",
      salaryRange: "$08K - $10K",
      equity: "4 to 5 Yrs Exp"
    },
    {
      id: 4,
      title: "Product Designer",
      city: "Mumbai",
      type: "Full Time",
      salaryRange: "$08K - $10K",
      equity: "4 to 5 Yrs Exp"
    },
    {
      id: 5,
      title: "Wordpress Developer",
      city: "Mumbai",
      type: "Full Time",
      salaryRange: "$08K - $10K",
      equity: "4 to 5 Yrs Exp"
    },
    {
      id: 6,
      title: "Jr. QA Tester",
      city: "California, USA",
      type: "Full Time",
      salaryRange: "$14K - $23K",
      equity: "No equity"
    },
    {
      id: 7,
      title: "Sr. UX Designer",
      city: "California, USA",
      type: "Full Time",
      salaryRange: "$14K - $23K",
      equity: "No equity"
    },
    {
      id: 8,
      title: "Social Media Manager",
      city: "Kolkata, India",
      type: "Full Time",
      salaryRange: "$5K - $6K",
      equity: "Fresher"
    },
    {
      id: 9,
      title: "Golang Developer",
      city: "Mumbai",
      type: "Full Time",
      salaryRange: "$08K - $10K",
      equity: "4 to 5 Yrs Exp"
    },
  ];


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
        <Route path="/career" element={<CareerPage jobs={jobs} />} />
        <Route path="/career/:id" element={<PositionsItem />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policy" element={<PolicyPage />} />
      </Routes>
      <FooterNav />
    </Router>
  )
}

export default App