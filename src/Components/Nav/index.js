import React from 'react';
import './style.css';

function Nav({ currentPage, setCurrentPage }) {
    return (
        <nav>
            <a className={currentPage == 'About' ? 'active-page' : 'inactive-page'} href="#"onClick={() => {
                setCurrentPage('About');
            }}>About Me</a>
            <a className={currentPage == 'Portfolio' ? 'active-page' : 'inactive-page'} href="#"onClick={() => {
                setCurrentPage('Portfolio');
            }}>Portfolio</a>
            <a className={currentPage == 'Resume' ? 'active-page' : 'inactive-page'} href="#"onClick={() => {
                setCurrentPage('Resume')
            }}>Resume</a>
        </nav>
    );
}

export default Nav;