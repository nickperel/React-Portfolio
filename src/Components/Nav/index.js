import React from 'react';

function Nav(props) {
    return (
        <header>
            <h1>
                Nicholas Perel
            </h1>
            <nav>
                <a href="#about">About Me</a>
                <a href="#work">My Work</a>
                <a href="#contact-me">Contact Me</a>
            </nav>
        </header>
    );
}

export default Nav;