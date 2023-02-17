import React from "react";
import './Header.css';
import { useState, useEffect } from "react";

function HeaderText() {
    const [userIsDesktop, setUserIsDesktop] = useState(window.innerWidth > 900);
    const updateSize = () => {
        setUserIsDesktop(window.innerWidth > 900);
    }

      useEffect(() => {
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
      });

    return (
        userIsDesktop ? <span id="header-text">LOREM</span> :
        <span id="header-text">LOREM IPSUM</span>
    )
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