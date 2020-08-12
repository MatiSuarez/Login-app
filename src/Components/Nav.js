import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const Token = localStorage.getItem("Token");
  const tokenParse = JSON.parse(Token);

  const logout = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + tokenParse,
    },
  };
  const handleClickLogout = () => {
    localStorage.removeItem("Token");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/home">
                <a className="nav-link" href="#">
                  Home <span className="sr-only"></span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login">
                <a className="nav-link" href="#">
                  Login
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <a className="nav-link" href="#">
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
