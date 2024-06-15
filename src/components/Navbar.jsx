import { Link, NavLink } from "react-router-dom";
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
            <NavLink to="/" className="header__link">Home</NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/service" className="header__link">Service</NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/company" className="header__link">Company</NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/career" className="header__link">Career</NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/blog" className="header__link">Blog</NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/contact" className="header__link">Contact us</NavLink>
          </li>
          <li className="header__item">
            <NavLink to="*" className="header__link">
              <span>Clone project</span>
              <img src={arrowRightIcon} alt="arrow right icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar