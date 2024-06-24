import Company from "./Company";
import Story from "./Story";
import Expertise from "../HomePage/Expertise";
import Vision from "./Vision";
import Team from "./Team";
import Newsletter from "../../components/Newsletter"

const CompanyPage = ({ images }) => {
  return (
    <main className="main">
      <Company images={images} parentClass={"company-page"} />
      <Story />
      <Expertise />
      <Vision />
      <Team />
      <Newsletter />
    </main>
  )
}

export default CompanyPage