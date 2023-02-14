import React from "react";
import './Header.css';

function HeaderText() {
    return <text id="header-text">LOREM</text>
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