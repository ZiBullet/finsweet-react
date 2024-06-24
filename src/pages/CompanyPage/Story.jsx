import story1 from "./assets/images/story1.png";
import story2 from "./assets/images/story2.png";
import story3 from "./assets/images/story3.png";
import story4 from "./assets/images/story4.png";
import story5 from "./assets/images/story5.png";

const Story = () => {
    return (
        <section className="story">
            <div className="story__wrap container">
                <div className="story__top">
                    <div className="story__desc">
                        <h5 className="story__top-title-mini">Our Story 👇</h5>
                        <h3 className="story__top-title title-h3">From Startups to Titans of Industry</h3>
                        <p className="story__top-text text-p">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up</p>
                    </div>
                    <div className="story__top-stats">
                        <div className="story__top-stat">
                            <h3 className="story__top-stat-title title-h3">1560+</h3>
                            <div className="story__top-stat-decor decor">
                                <div className="decor__line line-blue"></div>
                                <div className="decor__line line-beige"></div>
                                <div className="decor__line line-orange"></div>
                            </div>
                            <p className="story__top-stat-text">Project Delivered</p>
                        </div>
                        <div className="story__top-stat">
                            <h3 className="story__top-stat-title title-h3">100+</h3>
                            <div className="story__top-stat-decor decor">
                                <div className="decor__line line-blue"></div>
                                <div className="decor__line line-beige"></div>
                                <div className="decor__line line-orange"></div>
                            </div>
                            <p className="story__top-stat-text">Professional</p>
                        </div>
                        <div className="story__top-stat">
                            <h3 className="story__top-stat-title title-h3">950+</h3>
                            <div className="story__top-stat-decor decor">
                                <div className="decor__line line-blue"></div>
                                <div className="decor__line line-beige"></div>
                                <div className="decor__line line-orange"></div>
                            </div>
                            <p className="story__top-stat-text">Happy Client</p>
                        </div>
                        <div className="story__top-stat">
                            <h3 className="story__top-stat-title title-h3">10 yrs</h3>
                            <div className="story__top-stat-decor decor">
                                <div className="decor__line line-blue"></div>
                                <div className="decor__line line-beige"></div>
                                <div className="decor__line line-orange"></div>
                            </div>
                            <p className="story__top-stat-text">Experience</p>
                        </div>
                    </div>
                </div>
                    <div className="story__bottom">
                        <img src={story1} alt="story 1" className="story__bottom-img" />
                        <img src={story2} alt="story 2" className="story__bottom-img" />
                        <img src={story3} alt="story 3" className="story__bottom-img" />
                        <img src={story4} alt="story 4" className="story__bottom-img" />
                        <img src={story5} alt="story 5" className="story__bottom-img" />
                    </div>
            </div>
        </section>
    )
}

export default Story