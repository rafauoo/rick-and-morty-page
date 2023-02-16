import React from "react";
import './Header.css';

function HeaderText() {
    return <span id="header-text">LOREM</span>
}

function Header() {
        return (
            <header id="header">
                <HeaderText/>
                <div className="arrow-up"></div>
                <div id="header-blue">
                </div>
            </header>
        )
}

export default Header;