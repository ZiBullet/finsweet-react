import arrowRightWhiteIcon from "./assets/icons/arrow-right-white.svg";
import arrowRightBlackIcon from "./assets/icons/arrow-right-black.svg";
import headphonesIcon from "./assets/icons/headphones.svg";
import supportIcon from "./assets/icons/support.svg";
import developmentIcon from "./assets/icons/web-development.svg";

const Services = () => {
  return (
    <section className="services home-page">
      <div className="services__wrap container">
        <div className="services__desc">
          <h5 className="services__title-mini title-mini">Our Services</h5>
          <h2 className="services__title title-h2">
            We build software solutions that solve client's business challenges
          </h2>
          <button className="services__btn btn-request">
            <span>Start a Project</span>
            <img src={arrowRightWhiteIcon} alt="arrow right icon" />
          </button>
        </div>
        <div className="services__boxes">
          <div className="services__box">
            <div className="services__box-img">
              <img src={headphonesIcon} alt="headphones icon" />
            </div>
            <div className="services__box-desc">
              <h4 className="services__box-title">Technical support</h4>
              <p className="services__box-text text-p">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service
              </p>
              <a href="#" className="services__box-link">
                <span>Read more</span>
                <img src={arrowRightBlackIcon} alt="arrow right black" />
              </a>
            </div>
          </div>
          <div className="services__box">
            <div className="services__box-img">
              <img src={supportIcon} alt="support icon" />
            </div>
            <div className="services__box-desc">
              <h4 className="services__box-title">Testing Management</h4>
              <p className="services__box-text text-p">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service
              </p>
              <a href="#" className="services__box-link">
                <span>Read more</span>
                <img src={arrowRightBlackIcon} alt="arrow right black" />
              </a>
            </div>
          </div>
          <div className="services__box">
            <div className="services__box-img">
              <img src={developmentIcon} alt="development icon" />
            </div>
            <div className="services__box-desc">
              <h4 className="services__box-title">Development</h4>
              <p className="services__box-text text-p">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service
              </p>
              <a href="#" className="services__box-link">
                <span>Read more</span>
                <img src={arrowRightBlackIcon} alt="arrow right black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
