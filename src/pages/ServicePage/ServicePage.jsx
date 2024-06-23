import Services from "./Services"
import Process from "../HomePage/Process"
import TechnicalSupport from "./TechnicalSupport"
import Development from "./Development"
import Aws from "./Aws"

const ServicePage = () => {
  return (
    <main className="main">
      <Services />
      <Process parentClass={"service-page"} />
      <TechnicalSupport />
      <Development />
      <Aws />
    </main>
  )
}

export default ServicePage