import infoTech1 from "./assets/images/info-tech1.png";

const InformationTechnology = () => {
    return (
        <section className="info-tech" id="information-technology">
            <div className="info-tech__wrap container">
                <div className="info-tech__desc">
                    <h4 className="info-tech__title-mini title-h4">Information Technology</h4>
                    <h3 className="info-tech__title title-h3">We want to get local identification in every corner of the world in this era of global citizenship.</h3>
                    <p className="info-tech__text text-p">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
                </div>
                <img src={infoTech1} alt="info-tech1" className="info-tech__img" />
            </div>
        </section>
    )
}

export default InformationTechnology