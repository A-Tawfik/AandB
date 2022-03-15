import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";
import { useState } from 'react'

// Components
import Hamburger from '../nav_hamburger'

// Images
import { ReactComponent as LogoNoDate } from '../../images/logo_no_date.svg'


const NavBar = () => {
    const [showNav, setShowNav] = useState(false)
    const toggleShowNav = () => {
        setShowNav(!showNav)
    }



    return (
        <div className="nav-bar">
            <div className="nav-bar__content">
                <LogoNoDate />
                <Hamburger onClickCallback={toggleShowNav} />
                <nav className={showNav ? 'show' : ''}>
                    <div className='close-nav' onClick={() => toggleShowNav()}><div className="inner"></div></div>
                    <CustomLink onClick={() => setShowNav(false)} to="/">Home</CustomLink>
                    <CustomLink onClick={() => setShowNav(false)} to="details">Details</CustomLink>
                    <CustomLink onClick={() => setShowNav(false)} to="registry">Registry</CustomLink>
                    <CustomLink onClick={() => setShowNav(false)} to="rsvp">RSVP</CustomLink>
                    <CustomLink onClick={() => setShowNav(false)} to="contact">Contact</CustomLink>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className={match ? "active" : ""}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
}
