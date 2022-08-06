import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper bg-success">
          <a href="#" className="brand-logo ms-5">
       REACT-APP
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">product</a>
            </li>
            <li>
              <a href="#">list</a>
            </li>
            <li>
              <a href="#">extra</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
