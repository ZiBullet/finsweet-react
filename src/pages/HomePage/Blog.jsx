import arrowRightIcon from "./assets/icons/arrow-right-black.svg";

const Blog = ({blog}) => {
    return (
        <div className="blogs__box">
            <div className="blogs__box-img">
                <img src={blog.img} alt="blog1" />
            </div>
            <div className="blogs__box-desc">
                <p className="blogs__box-date">{blog.date}</p>
                <h3 className="blogs__box-title">{blog.title}</h3>
                <a href="#" className="blogs__box-link">
                    <span>Read More</span>
                    <img src={arrowRightIcon} alt="arrow-right icon" />
                </a>
            </div>
        </div>
    )
}

export default Blog