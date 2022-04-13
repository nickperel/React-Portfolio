import React from 'react';
import Nav from '../Nav';
import './style.css';

function Header({ currentPage, setCurrentPage }) {
    return (
        <header>
            <a id='title-name' className={currentPage == 'About' ? 'active-page' : 'inactive-page'} title-name href="#"onClick={() => {
                setCurrentPage('About');
            }}>Nicholas Perel</a>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </header>
    );
}

export default Header;