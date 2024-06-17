import Banner from "./Banner";
import About from "./About";
import Expertise from "./Expertise"
import Services from "./Services";
import { useState } from "react";

import about1 from "./assets/images/about1.png";
import about2 from "./assets/images/about2.png";
import about3 from "./assets/images/about3.png";

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

  return (
    <main className="main">
      <Banner />
      <About images={images} />
      <Expertise />
      <Services />
    </main>
  );
};

export default HomePage;
