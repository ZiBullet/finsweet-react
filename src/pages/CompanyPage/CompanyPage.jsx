import Company from "./Company";
import Story from "./Story";
import Expertise from "../HomePage/Expertise";
import Vision from "./Vision";

const CompanyPage = ({ images }) => {
  return (
    <main className="main">
      <Company images={images} parentClass={"company-page"} />
      <Story />
      <Expertise />
      <Vision />
    </main>
  )
}

export default CompanyPage