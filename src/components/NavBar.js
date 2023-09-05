import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "80px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white"
};

function NavBar() {
return (   

   <div>
        <header className="header">
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{background: "darkorange"}}
            >Home</NavLink>
            <NavLink
                to="/addform"
                exact
                style={linkStyles}
                activeStyle={{background: "darkorange"}}
            >Add Stock</NavLink>
            <NavLink
                to="/dashboard"
                exact
                style={linkStyles}
                activeStyle={{background: "darkorange"}}
            >Stock</NavLink>
        </header>
    </div>


    )
}

export default NavBar;