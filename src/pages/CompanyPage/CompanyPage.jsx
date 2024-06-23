import Company from "./Company"

const CompanyPage = ({ images }) => {
  return (
    <main className="main">
      <Company images={images} parentClass={"company-page"} />
    </main>
  )
}

export default CompanyPage