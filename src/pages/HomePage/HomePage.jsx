import Banner from "./Banner";
import About from "./About";
import Expertise from "./Expertise"
import Services from "./Services";
import Process from "./Process";
import Customers from "./Customers";
import Blogs from "./Blogs";
import Newsletter from "../../components/Newsletter";


const HomePage = ({ images, allBlogs, clients }) => {
  const parentClass = "home-page";

  return (
    <main className="main">
      <Banner clients={clients} />
      <About images={images} parentClass={parentClass} />
      <Expertise />
      <Services />
      <Process parentClass={parentClass} />
      <Customers />
      <Blogs allBlogs={allBlogs} />
      <Newsletter />
    </main>
  );
};

export default HomePage;
