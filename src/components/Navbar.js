import React from 'react';
import {Link} from 'react-router-dom';
import './css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaMoon } from 'react-icons/fa';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import resumeFile from "./resume/Tomas_Canavilhas_Resume.pdf";
import DownloadButton from "./APIs/DownloadButton";

const Navbar = ({darkMode, toggleDarkMode}) => {
    return (
        <div className={`background ${darkMode ? 'dark' : ''}`}>
            <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
                <Link to="/portfolio" className={`brand ${darkMode ? 'dark' : ''} font-black`}>
                     Tomás<span className="highlight">&nbsp;PORTFOLIO</span>
                </Link>
                <ul className="menu">
                    <li className={`menu-item ${darkMode ? 'dark' : ''}`}>
                        <Link to="/portfolio" className="menu-link">
                            Home
                        </Link>
                    </li>
                    {/*
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
                    */}
                    <li className={`menu-item ${darkMode ? 'dark' : ''} dwn-btn`}>
                        <DownloadButton url={resumeFile} darkMode={darkMode}/>
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
