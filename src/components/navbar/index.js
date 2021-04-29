import React from "react";
import { Bars, Nav, NavLink, NavMenu } from "./navbar.styled";
function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/home" activeStyle>
          UserDirectory
        </NavLink>

        <NavMenu></NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
