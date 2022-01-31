import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="hero md:px-0">
      <div className="mx-auto header">
        <h1>
          Welcome To
          <br /> My Personal Portfolio
        </h1>
        <p className="header_desc">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
        </p>
        <button className="btn-grad text-left">Learn more</button>
      </div>
    </div>
  );
}

export default Header;
