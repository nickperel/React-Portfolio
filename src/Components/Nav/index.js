import React from 'react';
import About from '../About';

function Nav({ setCurrentPage }) {
    return (
        <nav>
            <a href="#"onClick={() => {
                setCurrentPage('About');
            }}>About Me</a>
            <a href="#"onClick={() => {
                setCurrentPage('MyWork');
            }}>My Work</a>
            <a href="#contact-me">Contact Me</a>
        </nav>
    );
}

export default Nav;