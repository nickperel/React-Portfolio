import React from 'react';
import About from '../About';

function Nav({ setCurrentPage }) {
    return (
        <nav>
            <a href="#"onClick={() => {
                setCurrentPage('About');
            }}>About Me</a>
            <a href="#"onClick={() => {
                setCurrentPage('Portfolio');
            }}>Portfolio</a>
            <a href="#"onClick={() => {
                setCurrentPage('Contact')
            }}>Contact</a>
        </nav>
    );
}

export default Nav;