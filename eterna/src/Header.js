import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo">
        <h1>
          <a href="index.html">Eterna</a>
        </h1>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <NavLink to="/index.html" activeStyle={{color: "red"}}>Home</NavLink>
          </li>

          <li>
            <NavLink to="/services.html" activeStyle={{color: "red"}}>Services</NavLink>
          </li>

          <li>
            <NavLink to="/contact.html" activeStyle={{color: "red"}}>Contact</NavLink>
          </li>

          <li>
            <NavLink to="/about.html">About</NavLink>
          </li>
          <li>
            <a href="team.html">Team</a>
          </li>
          <li>
            <a href="pricing.html">Pricing</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li class="dropdown">
            <a href="#">
              <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
            </a>
            <ul>
              <li>
                <a href="#">Drop Down 1</a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Deep Drop Down</span>{" "}
                  <i class="bi bi-chevron-right"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Drop Down 2</a>
              </li>
              <li>
                <a href="#">Drop Down 3</a>
              </li>
              <li>
                <a href="#">Drop Down 4</a>
              </li>
            </ul>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>
);

export default Header;
