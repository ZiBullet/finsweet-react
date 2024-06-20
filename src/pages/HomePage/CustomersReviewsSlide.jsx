
const CustomersReviewsSlide = ({ customer }) => {
    return (
        <div className="customers__review">
            <div className="customers__review-wrap">
                <p className="customers__review-text">Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!</p>
                <div className="customers__review-bottom">
                    <div className="customers__review-info">
                        <img src={customer.img} alt={customer.img} className="customers__review-img" />
                        <div className="customers__review-customer">
                            <h5 className="customers__review-name">{customer.name}</h5>
                            <p className="customers__review-company">{customer.company}</p>
                        </div>
                    </div>
                    <img className="customers__review-logo" src={customer.companyLogo} alt={customer.companyLogo} />
                </div>
            </div>
            <div className="customers__review-decor decor">
                <div className="decor__line line-orange"></div>
                <div className="decor__line line-beige"></div>
                <div className="decor__line line-blue"></div>
            </div>
        </div>
    )
}

export default CustomersReviewsSlide