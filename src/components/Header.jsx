import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>Yoga Snipps by Sneha.</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>Who's Sneha?</HashLink>
        <HashLink to={"/#brands"}>Batches</HashLink>
        <Link to={"/services"}>Gallery</Link>
      </main>
    </nav>
  );
};

export default Header;
