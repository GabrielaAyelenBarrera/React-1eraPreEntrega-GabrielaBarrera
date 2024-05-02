import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/open-delta.jpg";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-black p-3">
                <div className="col"></div>
                <div className="col-md text-center">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <img src={logo} alt="OPEN" width={100} style={{ filter: 'invert(1)', color: 'white' }} />
                        <p style={{ color: 'white' }}>DetoxiK</p>
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to="/category/romanticpanties">ROMANTIC PANTIES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to="/category/nigthcollection">NIGHT COLLECTION</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to="/category/bra&pantysets">BRA & PANTY SETS</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
