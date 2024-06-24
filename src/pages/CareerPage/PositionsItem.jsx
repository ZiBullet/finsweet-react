import { Link } from "react-router-dom"

import arrowRightBlackIcon from "../../assets/icons/arrow-right-black.svg";

const PositionsItem = ({ job }) => {
    return (
        <div className="positions__box">
            <div className="positions__box-desc">
                <h4 className="positions__box-title">{job.title}</h4>
                <p className="positions__box-text">{`${job.city} · ${job.type}`}</p>
                <p className="positions__box-text">{`${job.salaryRange} · ${job.equity}`}</p>
            </div>
            <Link className="positions__box-link" to={`/career/${job.id}`}>
                <span>Apply Now</span>
                <img src={arrowRightBlackIcon} alt="arrow-right-black icon" />
            </Link>
        </div>
    )
}

export default PositionsItem