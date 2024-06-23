import bulbIcon from "./assets/icons/bulb.svg";
import noteIcon from "./assets/icons/note.svg";
import developmentBoxIcon from "./assets/icons/development-box.svg";
import testingIcon from "./assets/icons/testing.svg";
import deploymentIcon from "./assets/icons/deployment.svg";
import maintanceIcon from "./assets/icons/maintance.svg";


const Process = ({ parentClass }) => {
    return (
        <section className={`process ${parentClass}`}>
            <div className="process__wrap container">
                <div className="process__desc">
                    <h5 className="process__title-mini title-mini">Our Process</h5>
                    <h2 className="process__title title-h2">The process we are working With Our client Worldwide</h2>
                    <p className="process__text text-p">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
                </div>
                <div className="process__boxes">
                    <div className="process__box">
                        <span className="process__box-num">01</span>
                        <div className="process__box-img">
                            <img src={bulbIcon} alt="bulb icon" />
                        </div>
                        <div className="process__box-desc">
                            <h4 className="process__box-title">Discover</h4>
                            <p className="process__box-text text-p">We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>
                        <div className="process__box-decor decor">
                            <div className="decor__line line-orange"></div>
                            <div className="decor__line line-beige"></div>
                            <div className="decor__line line-blue"></div>
                        </div>
                    </div>
                    <div className="process__box">
                        <span className="process__box-num">02</span>
                        <div className="process__box-img">
                            <img src={noteIcon} alt="note icon" />
                        </div>
                        <div className="process__box-desc">
                            <h4 className="process__box-title">Designing</h4>
                            <p className="process__box-text text-p">We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>
                    </div>
                    <div className="process__box">
                        <span className="process__box-num">03</span>
                        <div className="process__box-img">
                            <img src={developmentBoxIcon} alt="development-box icon" />
                        </div>
                        <div className="process__box-desc">
                            <h4 className="process__box-title">Development</h4>
                            <p className="process__box-text text-p">We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>
                    </div>
                    <div className="process__box">
                        <span className="process__box-num">04</span>
                        <div className="process__box-img">
                            <img src={testingIcon} alt="testing icon" />
                        </div>
                        <div className="process__box-desc">
                            <h4 className="process__box-title">Testing</h4>
                            <p className="process__box-text text-p">We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>
                    </div>
                    <div className="process__box">
                        <span className="process__box-num">05</span>
                        <div className="process__box-img">
                            <img src={deploymentIcon} alt="deployment icon" />
                        </div>
                        <div className="process__box-desc">
                            <h4 className="process__box-title">Deployment</h4>
                            <p className="process__box-text text-p">We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>
                    </div>
                    <div className="process__box">
                        <span className="process__box-num">06</span>
                        <div className="process__box-img">
                            <img src={maintanceIcon} alt="maintance icon" />
                        </div>
                        <div className="process__box-desc">
                            <h4 className="process__box-title">Maintenance</h4>
                            <p className="process__box-text text-p">We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>
                        <div className="process__box-decor decor">
                            <div className="decor__line line-orange"></div>
                            <div className="decor__line line-beige"></div>
                            <div className="decor__line line-blue"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process