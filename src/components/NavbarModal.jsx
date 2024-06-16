/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import logo from "../assets/icons/logo.svg"
import clsx from "clsx"

const NavbarModal = ({ isNavbarOpen, closeNavbar }) => {
    const clsxSidebar = clsx("sidebar", {"active": isNavbarOpen});

    return (
        <aside className={clsxSidebar} onClick={closeNavbar}>
            <nav className="sidebar__nav" onClick={e => e.stopPropagation()}>
                <button className="sidebar__close-btn" onClick={closeNavbar}>+</button>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <NavLink className="sidebar__link" to="/">Home</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink className="sidebar__link" to="/service">Service</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink className="sidebar__link" to="/company">Company</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink className="sidebar__link" to="/career">Career</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink className="sidebar__link" to="/blog">Blog</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink className="sidebar__link" to="/contact">Contact us</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink className="sidebar__link" to="/policy">Clone project</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default NavbarModal