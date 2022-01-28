import { NavLink } from "react-router-dom";

const pages = [
    { title: 'All repositories', href: "/" },
    { title: 'Favorites', href: "/favorites" }
];

const NavBar = () => {
    return <nav className="NavBar__Container">
        <ul className="NavBar__List">
            {pages && pages.map((page) => <li key={page.href} className='NavBar__List--Item'>
                <NavLink to={page.href} style={({ isActive }) => isActive ? { color: 'black' } : undefined} >
                    {page.title}
                </NavLink>
            </li>
            )}
        </ul>
    </nav>;
};

export default NavBar;