import { useState } from "react";
import clsx from "clsx";

const CareerInnerContent = ({ selectedJobContent, showInnerContentHandler }) => {
    const { details, requirements, resp } = selectedJobContent;
    const [info, setInfo] = useState(details);




    const selectContent = (e) => {
        const attr = e.target.getAttribute("data-content");
        setInfo(selectedJobContent[attr]);
    }

    return (
        <section className="career__inner-content inner__content">
            <div className="inner__content-wrap container">
                <div className="inner__content-top content__top">
                    <div className="content__top-btns">
                        <button className="content__top-btn title-h4 active" data-content="details" onClick={(e) => selectContent(e)}>
                            Details
                        </button>
                        <button className="content__top-btn title-h4" data-content="requirements" onClick={(e) => selectContent(e)}>
                            Requirements
                        </button>
                        <button className="content__top-btn title-h4" data-content="resp" onClick={(e) => selectContent(e)}>
                            Responsibilities
                        </button>
                    </div>
                </div>
                <div className="inner__content-body content__body">
                    <ul className="content__body-list">
                        {
                            info ? showInnerContentHandler(info).map((item, i) => (
                                <li key={i} className="content__body-item">
                                    {item.trim()}
                                </li>
                            )) : (
                                <h4 className="content__body-empty">No info</h4>
                            )
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CareerInnerContent