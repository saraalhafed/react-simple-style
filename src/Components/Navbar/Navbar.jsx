import React from 'react';
//how we import css style sheet ,in navbar.css no export
import "./Navbar.css";
export default function Navbar() {
  //if i want to make aktive link : if click on home i will go to home and home linke will be red (as in css file)
  //i have to access the location of the window
  const currentPath = window.location.pathname
  return (
    <div>
      <div className="navs">
        <a className={currentPath === "/" ? "active" : ""} href="/">Home</a>
        <a className={currentPath === "/about" ? "active" : ""} href="/about">About</a>
        {/* && it will be give same effect like ? 
                             true      true  it will  give secound part(classname =active) wich true
                              true && true =true(last one) ==> active */}
        <a className={currentPath === "/contact" && "active"} href="/contact">Contact</a>
      </div>
    </div>
  )
}
