import { Link } from 'react-router-dom';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout.js';

const NavBar = () => {
    // const { user } = useAuthContext();
    // const { logout } = useLogout();

    // const handleClick = () => logout();

    return (
        <header>
            <nav>
 
                <div>
                    <Link to="/"> home </Link>
                    <Link to="/newPost"> Make New posts </Link>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;