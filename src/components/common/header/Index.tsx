import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
    return (
        <div className="headerWrapper">
            <Logo/>
            <Navigation/>
        </div>
    );
}

export default Header;