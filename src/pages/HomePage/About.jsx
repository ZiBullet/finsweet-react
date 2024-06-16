import arrowRightBlackIcon from "./assets/icons/arrow-right-black.svg"
import AboutSlider from "./AboutSlider";

const About = ({ images }) => {
  return (
    <section className="about">
      <div className="about__wrap container">
        <div className="about__top">
          <h5 className="about__top-title-mini title-mini">ABOUT US</h5>
          <div className="about__top-desc">
            <h2 className="about__top-title">
              The company leads entire webdesign process from concept to
              delivery.
            </h2>
            <div className="about__top-text-block">
              <h3 className="about__top-text-block-title">The Era Of Technology.</h3>
              <p className="about__top-text-block-text">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.{" "}
              </p>
            </div>
          </div>
        </div>
        
        {images && <AboutSlider images={images} />}

        <div className="about__bottom">
          <div className="about__bottom-stats">
            <div className="about__bottom-stat">
              <h4 className="about__bottom-stat-title">1560+</h4>
              <div className="about__bottom-stat-desc">
                <div className="decor">
                  <div className="decor__line line-blue"></div>
                  <div className="decor__line line-beige"></div>
                  <div className="decor__line line-orange"></div>
                </div>
                <p className="about__bottom-stat-text">Project Delivered</p>
              </div>
            </div>
            <div className="about__bottom-stat">
              <h4 className="about__bottom-stat-title">100+</h4>
              <div className="about__bottom-stat-desc">
                <div className="decor">
                  <div className="decor__line line-blue"></div>
                  <div className="decor__line line-beige"></div>
                  <div className="decor__line line-orange"></div>
                </div>
                <p className="about__bottom-stat-text">Professional</p>
              </div>
            </div>
            <div className="about__bottom-stat">
              <h4 className="about__bottom-stat-title">950+</h4>
              <div className="about__bottom-stat-desc">
                <div className="decor">
                  <div className="decor__line line-blue"></div>
                  <div className="decor__line line-beige"></div>
                  <div className="decor__line line-orange"></div>
                </div>
                <p className="about__bottom-stat-text">Happy Client</p>
              </div>
            </div>
            <div className="about__bottom-stat">
              <h4 className="about__bottom-stat-title">10 yrs</h4>
              <div className="about__bottom-stat-desc">
                <div className="decor">
                  <div className="decor__line line-blue"></div>
                  <div className="decor__line line-beige"></div>
                  <div className="decor__line line-orange"></div>
                </div>
                <p className="about__bottom-stat-text">Experience</p>
              </div>
            </div>
          </div>
          <a href="#" className="about__bottom-link">
            <span>Read about us</span>
            <img src={arrowRightBlackIcon} alt="arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
