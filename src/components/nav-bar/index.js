import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="nav-bar">
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="details">Details</Link> |{" "}
                <Link to="registry">Registry</Link> |{" "}
                <Link to="rsvp">RSVP</Link> |{" "}
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export default NavBar;
