import React from "react";
import '../css/Navbar.css'

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a className ="nav-link" href="https://geektrust.sgp1.cdn.digitaloceanspaces.com/assets/v2/website/coding-challenges/Geektrust-UI-Problems1.pdf">
                GeekTrust
              </a>
            </li>
            <li class="nav-item">
              <a className = "nav-link" href="#">
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
