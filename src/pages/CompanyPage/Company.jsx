import AboutSlider from "../HomePage/AboutSlider";


const Company = ({ images, parentClass }) => {
    return (
        <section className="company">
            <div className="company__wrap container">
                <div className="company__desc">
                    <h5 className="company__title-mini title-mini">Company</h5>
                    <h2 className="company__title title-h2">Award-winning Company seen and used by millions around the world.</h2>
                    <p className="company__text text-p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized.</p>
                </div>
                {images && <AboutSlider images={images} parentClass={parentClass} />}
            </div>
        </section>
    )
}

export default Company