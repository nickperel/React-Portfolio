import React from 'react';
import Nav from '../Nav';

function Header({ setCurrentPage }) {
    return (
        <header>
            <h1>
                Nicholas Perel
            </h1>
            <Nav setCurrentPage={setCurrentPage}/>
        </header>
    );
}

export default Header;