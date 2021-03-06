import React from "react";
import "./stl.css"
const NavBar = () => {
  return (
  <>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"/>
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" 
       data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbarBasicExample" class="navbar-menu">
    <div
      class="navbar-center">
    
      <a class="navbar-item">Articles</a>
      <a class="navbar-item">Projects</a>
      <a class="navbar-item">Contact</a>
      <a class="navbar-item">About</a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          <i class="fas fa-search"></i>Topics</a>
        <div class="navbar-dropdown">
          <a class="navbar-item">About</a>
          <a class="navbar-item">Jobs</a>
          <a class="navbar-item">Contact</a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">Report an issue</a>
        </div>
      </div>
    </div>
  </div>
</nav>
  </>
  )
};
export default NavBar;
