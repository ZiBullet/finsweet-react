import Services from "./Services"
import Process from "../HomePage/Process"
import TechnicalSupport from "./TechnicalSupport"
import Development from "./Development"
import Aws from "./Aws"
import Consulting from "./Consulting"

const ServicePage = () => {
  return (
    <main className="main">
      <Services />
      <Process parentClass={"service-page"} />
      <TechnicalSupport />
      <Development />
      <Aws />
      <Consulting />
    </main>
  )
}

export default ServicePage