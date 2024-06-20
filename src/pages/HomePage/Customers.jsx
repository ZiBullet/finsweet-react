
import customer1 from "./assets/images/customer1.png";
import customer2 from "./assets/images/customer2.png";
import customer3 from "./assets/images/customer3.png";
import companyLogoIcon from "./assets/icons/company-logo.svg";
import CustomersReviewsSlide from "./CustomersReviewsSlide";
import { useState } from "react";



const Customers = () => {
    const customers = [
        {
            id: 1,
            name: "Johnny Andro",
            company: "Director, Company",
            companyLogo: companyLogoIcon,
            img: customer1,
            reviewText: `Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!`
        },
        {
            id: 2,
            name: "Antonio Montano",
            company: "Director, Company",
            companyLogo: companyLogoIcon,
            img: customer2,
            reviewText: `Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!`
        },
        {
            id: 3,
            name: "Aya Gulshat",
            company: "Director, Company",
            companyLogo: companyLogoIcon,
            img: customer3,
            reviewText: `Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!`
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="customers">
            <div className="customers__wrap container">
                <div className="customers__desc">
                    <h2 className="customers__title title-h2">Our customers love what we do</h2>
                    <h4 className="customers__subtitle">Transform your idea into reality with finsweet</h4>
                    <p className="customers__text text-p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className="customers__amount">
                        <div className="customers__amount-photos">
                            {
                                customers.map(customer => (
                                    <img
                                        className="customers__amount-img"
                                        key={customer.id}
                                        src={customer.img}
                                        alt={customer.img}
                                    />
                                ))
                            }
                        </div>
                        <p className="customers__amount-num"><span>30+</span> Customer Reviews</p>
                    </div>
                </div>
                <div className="customers__reviews">
                    <div className="customers__reviews-slides" style={{ transform: `translateX(calc(-${(currentIndex * 100)}% - ${currentIndex * 40}px))` }}>
                        {
                            customers.map(customer => (
                                <CustomersReviewsSlide key={customer.id} customer={customer} />
                            ))
                        }
                    </div>
                    <div className="customers__reviews-pagination">
                        {
                            customers.map((customer, i) => (
                                <button
                                    key={customer.id}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`customers__reviews-dot ${currentIndex == i ? 'active' : ''}`}>
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customers