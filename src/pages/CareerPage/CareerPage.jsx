import Career from "./Career";
import Positions from "./Positions";
import Work from "./Work";
import Newsletter from "../../components/Newsletter";

const CareerPage = ({ jobs }) => {


  return (
    <main className="main">
      <Career />
      <Positions jobs={jobs} />
      <Work />
      <Newsletter />
    </main>
  )
}

export default CareerPage