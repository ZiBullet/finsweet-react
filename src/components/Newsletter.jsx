
const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="newsletter__container container">
                <div className="newsletter__wrap">
                    <div className="newsletter__desc">
                        <h5 className="newsletter__title-mini">NEWSLETTER</h5>
                        <h3 className="newsletter__title">Subscribe our News Letter
                            to get Latest Updates.</h3>
                    </div>
                    <form className="newsletter__form">
                        <label className="newsletter__field">
                            <input type="email" className="newsletter__field-input" />
                            <span>Email</span>
                        </label>
                    </form>
                <div className="newsletter__decor decor">
                    <div className="decor__line line-orange"></div>
                    <div className="decor__line line-beige"></div>
                    <div className="decor__line line-blue"></div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter