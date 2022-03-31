import React from "react";
import "../css/Navbar.css";
import { Button } from "@mui/material";

function Navbar() {
  let url = window.location.href;

  const Reset = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="navbar">
          <div className="navbar_content col-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid navbar" id="navbar-content">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse col-6"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <Button
                        className="nav-link"
                        variant="outlined"
                        href="https://geektrust.sgp1.cdn.digitaloceanspaces.com/assets/v2/website/coding-challenges/Geektrust-UI-Problems1.pdf"
                      >
                        The Challenge
                      </Button>
                    </li>
                    <li className="nav-item">
                      {console.log(url)}
                      {url === "http://localhost:3000/Result" ? (
                        <></>
                      ) : (
                        <Button
                          className="nav-link"
                          variant="outlined"
                          onClick={Reset}
                        >
                          Reset
                        </Button>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="heading">Finding Falcone</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
