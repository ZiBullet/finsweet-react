import Career from "./Career"
import Positions from "./Positions"
import Work from "./Work"

const CareerPage = ({ jobs }) => {


  return (
    <main className="main">
      <Career />
      <Positions jobs={jobs} />
      <Work />
    </main>
  )
}

export default CareerPage