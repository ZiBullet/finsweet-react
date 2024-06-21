import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        
    }

    return (
        <section className="newsletter">
            <div className="newsletter__container container">
                <div className="newsletter__wrap">
                    <div className="newsletter__desc">
                        <h5 className="newsletter__title-mini">NEWSLETTER</h5>
                        <h3 className="newsletter__title">Subscribe our News Letter
                            to get Latest Updates.</h3>
                    </div>
                    <form className="newsletter__form" onSubmit={(e) => submitHandler(e)}>
                        <label className="newsletter__field">
                            <input
                                type="email"
                                className="newsletter__field-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
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