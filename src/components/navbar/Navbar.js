import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>My Blog</h2>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </nav>
    );
}

export default Navbar;