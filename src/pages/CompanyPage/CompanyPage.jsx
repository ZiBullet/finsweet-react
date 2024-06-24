import Company from "./Company"
import Story from "./Story"

const CompanyPage = ({ images, clients }) => {
  return (
    <main className="main">
      <Company images={images} parentClass={"company-page"} />
      <Story />
    </main>
  )
}

export default CompanyPage