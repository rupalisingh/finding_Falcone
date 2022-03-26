import React from "react";
import '../css/Navbar.css'

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                GeekTrust
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Reset
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0"></form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
