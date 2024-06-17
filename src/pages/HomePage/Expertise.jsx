import rocketIcon from "./assets/icons/rocket.svg";
import settingsIcon from "./assets/icons/settings.svg";
import supportIcon from "./assets/icons/support.svg";

const Expertise = () => {
  return (
    <section className="expertise">
      <div className="expertise__wrap container">
        <div className="expertise__desc">
          <h5 className="expertise__title-mini title-mini">Our expertise</h5>
          <h2 className="expertise__title title-h2">
            We want to get local identification in every corner of the world in
            this era of global citizenship
          </h2>
          <p className="expertise__text text-p">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>
        <div className="expertise__boxes">
          <div className="expertise__box">
            <div className="expertise__box-img">
              <img src={rocketIcon} alt="rocket icon" />
            </div>
            <div className="expertise__box-desc">
              <h4 className="expertise__box-title">On Time Delivery</h4>
              <p className="expertise__box-text">
                Through True Rich Attended does no end it his mother since real
                had half every him.
              </p>
            </div>
          </div>
          <div className="expertise__box">
            <div className="expertise__box-img">
              <img src={settingsIcon} alt="settings icon" />
            </div>
            <div className="expertise__box-desc">
              <h4 className="expertise__box-title">Best Quality</h4>
              <p className="expertise__box-text">
                Through True Rich Attended does no end it his mother since real
                had half every him.
              </p>
            </div>
          </div>
          <div className="expertise__box">
            <div className="expertise__box-img">
              <img src={supportIcon} alt="support icon" />
            </div>
            <div className="expertise__box-desc">
              <h4 className="expertise__box-title">Support Assist</h4>
              <p className="expertise__box-text">
              Through True Rich Attended does no end it his mother since real had half every him.
              </p>
            </div>
          </div>
          <div className="expertise__decor decor">
            <div className="decor__line line-orange"></div>
            <div className="decor__line line-beige"></div>
            <div className="decor__line line-blue"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
