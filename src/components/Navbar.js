import React from "react";

const NavbarApp = () => {
  return (
    <>
      <div id="mainNav" class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-default fixed-top text-uppercase navbar-shrink">
          <a class="navbar-brand d-md-none" href="index.html">
            ANAS QAZI Portfolio
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fas fa-bars"></span>
          </button>

          <div id="navbarNavDropdown" class="navbar-collapse collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">
                  <i class="fa fa-home"></i> Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://github.com/ianasqazi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="./resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#skillSetSection">
                  Skill Set
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolioSection">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#footerSection">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarApp;
