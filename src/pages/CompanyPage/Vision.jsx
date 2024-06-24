import company1 from "./assets/images/company1.png";

const Vision = () => {
    return (
        <section className="vision">
            <div className="vision__wrap container">
                <div className="vision__desc">
                    <h5 className="vision__title-mini title-mini">
                        Our VISION
                    </h5>
                    <h2 className="vision__title title-h2">
                        We want to get local identification in every corner of the world in this era of global citizenship.
                    </h2>
                    <p className="vision__text text-p">
                        Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
                    </p>
                </div>
                <img src={company1} alt="company1" className="vision__img" />
            </div>
        </section>
    )
}

export default Vision