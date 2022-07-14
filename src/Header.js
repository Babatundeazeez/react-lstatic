import React from "react";


const NavHead = {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    backgroundColor: "lighgrey"
  }
const ImgLogo = {
  width: "100px"
  }

export default function Header() {
    return (
             <header>
               
               <nav style={NavHead}>
               <img src="./image/react.png" style={ImgLogo} alt="logo" />
               <ul className="nav-items">
                 <li>Menu</li>
                 <li>About us</li>
                 <li>Contact</li>
                 <li>Our service</li>
               </ul>
               </nav>
             </header>
    )
  }
  