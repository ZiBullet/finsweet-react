import Career from "./Career"
import Positions from "./Positions"

const CareerPage = ({ jobs }) => {


  return (
    <main className="main">
      <Career />
      <Positions jobs={jobs} />
    </main>
  )
}

export default CareerPage