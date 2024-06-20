import Banner from "./Banner";
import About from "./About";
import Expertise from "./Expertise"
import Services from "./Services";
import Process from "./Process";
import Customers from "./Customers";
import Blogs from "./Blogs";
import Newsletter from "../../components/Newsletter";
import { useState } from "react";

import about1 from "./assets/images/about1.png";
import about2 from "./assets/images/about2.png";
import about3 from "./assets/images/about3.png";

import blog1 from "./assets/images/blog1.png";
import blog2 from "./assets/images/blog2.png";


const HomePage = () => {
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

  return (
    <main className="main">
      <Banner />
      <About images={images} />
      <Expertise />
      <Services />
      <Process />
      <Customers />
      <Blogs allBlogs={allBlogs} />
      <Newsletter />
    </main>
  );
};

export default HomePage;
