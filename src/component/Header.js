import MobileNav from "./MobileNav";
import Navbar from './NavBar';
import { Link } from 'react-router-dom';
import logo from './logo_v1.svg';

const Header = () => {
    return (
        <header>
            <div className='nav-area'>
                <Link to="/" className='logo'>
                    <img src={logo} alt='Logo' width="50px"/>
                </Link>
                {/* for large screens */}
                <Navbar />
                {/* for small screens */}
                <MobileNav />
            </div>
        </header>
    );
};

export default Header;