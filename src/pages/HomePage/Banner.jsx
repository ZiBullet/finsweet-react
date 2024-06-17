import arrowRightIcon from "./assets/icons/arrow-right.svg"
import bannerImg from "./assets/images/banner__img.png"
import client1 from "./assets/images/client1.png"
import client2 from "./assets/images/client2.png"
import client3 from "./assets/images/client3.png"
import client4 from "./assets/images/client4.png"
import client5 from "./assets/images/client5.png"
const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__wrap container">
                <div className="banner__top">
                    <div className="banner__top-desc">
                        <h1 className="banner__top-title">Transform Your Idea Into Reality with Finsweet</h1>
                        <p className="banner__top-text text-p">The entire Finsweet team knows what&apos;s good with Webflow and you can too with 1 week and a good attitude.</p>
                        <button className="banner__top-btn btn-request">
                            <span>Request Quote</span>
                            <img src={arrowRightIcon} alt="arrowRightIcon" />
                        </button>
                    </div>
                    <div className="banner__top-img">
                        <div className="banner__decor-before decor">
                            <div className="decor__line line-orange"></div>
                            <div className="decor__line line-beige"></div>
                            <div className="decor__line line-blue"></div>
                        </div>
                        <img src={bannerImg} alt="banner img" />
                        <div className="banner__decor-after decor">
                            <div className="decor__line line-orange"></div>
                            <div className="decor__line line-beige"></div>
                            <div className="decor__line line-blue"></div>
                        </div>
                    </div>
                </div>
                <div className="banner__bottom">
                    <div className="banner__bottom-desc">
                        <h5 className="banner__bottom-title">Our Clients</h5>
                        <p className="banner__bottom-text">We&apos;ve Worked with</p>
                    </div>
                    <div className="banner__bottom-clients">
                        <img src={client1} alt="client1" />
                        <img src={client2} alt="client2" />
                        <img src={client3} alt="client3" />
                        <img src={client4} alt="client4" />
                        <img src={client5} alt="client5" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner