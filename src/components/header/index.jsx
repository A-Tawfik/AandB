import { useLocation } from "react-router-dom";


const Header = () => {
    const { pathname } = useLocation()
    const className = pathname.slice(1) || 'home'
    const innerCopy = className === 'home' ? '' : className.toUpperCase()

    return (
        <div className={`header ${className}-img`}>
            <h1>{innerCopy}</h1>
        </div>
    );
}

export default Header;
