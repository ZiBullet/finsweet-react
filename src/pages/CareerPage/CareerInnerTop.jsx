import arrowRightWhiteIcon from "../../assets/icons/arrow-right.svg";

const CareerInnerTop = ({ selectedJob }) => {
    return (
        <section className="career-inner inner-top">
            <div className="inner-top__wrap container">
                <div className="inner-top__desc">
                    <h5 className="inner-top__title-mini title-mini">
                        CAREER AT Ether
                    </h5>
                    <h2 className="inner-top__title title-h2">
                        {selectedJob.title}
                    </h2>
                    <p className="inner-top__text">
                        Through True Rich Attended does no end it his mother since real had half every him case in packages.
                    </p>
                    <button className="inner-top__btn btn-request">
                        <span>Apply Now</span>
                        <img src={arrowRightWhiteIcon} alt="arrow-right-white icon" />
                    </button>
                </div>
                <div className="inner-top__info">
                    <h4 className="inner-top__info-title title-h4">
                        Job Description
                    </h4>
                    <p className="inner-top__info-text">
                        {selectedJob.salaryRange}, {selectedJob.city}, {selectedJob.equity}
                    </p>
                    <p className="inner-top__info-text">
                        Department: Product Engineering
                    </p>
                    <p className="inner-top__info-text">
                        {selectedJob.type} {selectedJob.placesAvailable} Position Available
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CareerInnerTop