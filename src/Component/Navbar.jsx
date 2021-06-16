import React from "react";
import pic1 from "../image/logo.png";

const Navbar = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-default kojo">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <img src={pic1} className="img-responsive pic" />
          </div>

          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">ABOUT US</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
