import { Link } from "react-router-dom";
import logoIcon from "../assets/icons/logo.svg";
import arrowRightIcon from "../assets/icons/arrow-right.svg";


const Navbar = () => {
  return (
    <header className="header">
      <nav className="header__nav container">
        <Link to="/" className="header__logo">
          <img src={logoIcon} alt="logoIcon-finsweet" />
        </Link>
        <ul className="header__list">
          <li className="header__item">
            <Link to="/" className="header__link">Home</Link>
          </li>
          <li className="header__item">
            <Link to="/service" className="header__link">Service</Link>
          </li>
          <li className="header__item">
            <Link to="/company" className="header__link">Company</Link>
          </li>
          <li className="header__item">
            <Link to="/career" className="header__link">Career</Link>
          </li>
          <li className="header__item">
            <Link to="/blog" className="header__link">Blog</Link>
          </li>
          <li className="header__item">
            <Link to="/contact" className="header__link">Contact us</Link>
          </li>
          <li className="header__item">
            <Link to="/" className="header__link">
              <span>Clone project</span>
              <img src={arrowRightIcon} alt="arrow right icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar