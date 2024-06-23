import Services from "./Services"
import Process from "../HomePage/Process"
import TechnicalSupport from "./TechnicalSupport"
const ServicePage = () => {
  return (
    <main className="main">
      <Services />
      <Process parentClass={"service-page"} />
      <TechnicalSupport />
    </main>
  )
}

export default ServicePage