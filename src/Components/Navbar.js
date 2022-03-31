import React from "react";
import '../css/Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className ="nav-link" href="https://geektrust.sgp1.cdn.digitaloceanspaces.com/assets/v2/website/coding-challenges/Geektrust-UI-Problems1.pdf">
                GeekTrust
              </a>
            </li>
            <li className="nav-item">
              <a className = "nav-link" href="#">
                Reset
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0"></form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
