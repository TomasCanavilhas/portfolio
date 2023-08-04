import React from 'react';
import {Link} from 'react-router-dom';
import './css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaMoon } from 'react-icons/fa';
import { ReactComponent as SunIcon } from './icons/sun.svg';


const Navbar = ({darkMode, toggleDarkMode}) => {
    return (
        <div className={`background ${darkMode ? 'dark' : ''}`}>
            <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
                <Link to="/" className={`brand ${darkMode ? 'dark' : ''}`}>
                     Tomás Canavilhas
                </Link>
                <ul className="menu">
                    <li className={`menu-item ${darkMode ? 'dark' : ''}`}>
                        <Link to="/" className="menu-link">
                            Home
                        </Link>
                    </li>
                    <li className={`menu-item ${darkMode ? 'dark' : ''}`}>
                        <Link to="/about" className="menu-link">
                            About
                        </Link>
                    </li>
                    <li className={`menu-item ${darkMode ? 'dark' : ''}`}>
                        <Link to="/skills" className="menu-link">
                            Skills
                        </Link>
                    </li>
                    <li className={`menu-item ${darkMode ? 'dark' : ''}`}>
                        <Link to="/projects" className="menu-link">
                            Public Projects
                        </Link>
                    </li>
                    <li className="menu-item">
                        <div className={`toggle-switch ${darkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
                            <FaMoon className={`moon-icon ${darkMode ? 'active' : ''}`} />
                            <SunIcon className={`sun-icon ${!darkMode ? 'active' : ''}`} />
                            <div className="toggle-switch-circle" />
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
