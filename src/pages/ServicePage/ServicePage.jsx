import Services from "./Services"
import Process from "../HomePage/Process"
import TechnicalSupport from "./TechnicalSupport"
import Development from "./Development"

const ServicePage = () => {
  return (
    <main className="main">
      <Services />
      <Process parentClass={"service-page"} />
      <TechnicalSupport />
      <Development />
    </main>
  )
}

export default ServicePage