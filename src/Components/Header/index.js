import React from 'react';
import Nav from '../Nav';

function Header({ currentPage, setCurrentPage }) {
    return (
        <header>
            <h1>
                Nicholas Perel
            </h1>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </header>
    );
}

export default Header;