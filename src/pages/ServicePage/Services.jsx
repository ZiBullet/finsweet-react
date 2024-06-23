import arrowRightWhiteIcon from "./assets/icons/arrow-right-white.svg";
import arrowRightBlackIcon from "./assets/icons/arrow-right-black.svg";

const Services = () => {
  return (
    <section className="services service-page">
      <div className="services__wrap container">
        <div className="services__desc">
          <h5 className="services__title-mini title-mini">Our Services</h5>
          <h2 className="services__title title-h2">We Build Software Solutionthat Solve Clients Business Challenges</h2>
          <p className="services__text text-p">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
          <button className="services__btn btn-request">
            <span>Request A Quote</span>
            <img src={arrowRightWhiteIcon} alt="arrow-right white icon" />
          </button>
        </div>
        <ul className="services__list">
          <li className="services__list-item">
            <a href="#technical-support" className="services__list-link">Technical support</a>
          </li>
          <li className="services__list-item">
            <a href="#development" className="services__list-link">
              <span>Development</span>
              <img src={arrowRightBlackIcon} alt="arrow-right-black icon" />
            </a>
          </li>
          <li className="services__list-item">
            <a href="#aws" className="services__list-link">AWS/Azure</a>
          </li>
          <li className="services__list-item">
            <a href="#consulting" className="services__list-link">Consulting</a>
          </li>
          <li className="services__list-item">
            <a href="#information-technology" className="services__list-link">Information Technology</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Services