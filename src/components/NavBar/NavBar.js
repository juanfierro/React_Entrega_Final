import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <nav className="container my-5" style={{ backgroundColor: "#f9f4e8" }}>
            
            <div className="is-flex is-align-items-center is-justify-content-space-around">
                <Link to="/">
                    <h3 className="title has-text-centered p-5">Inicio&nbsp; <FontAwesomeIcon icon={faHome} /></h3>
                </Link>
                <NavLink to={`/category/ramos`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>Ramos</NavLink>
                <NavLink to={`/category/coronas`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>Coronas</NavLink>
                <NavLink to={`/category/flores`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>Flores de solapa</NavLink>
                <CartWidget />
            </div>

        </nav>
    );
}

export default NavBar;