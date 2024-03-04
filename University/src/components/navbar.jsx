import {Link, createBrowserRouter } from "react-router-dom";

import style from "./navbar.module.css"

export default function Navbar() {
  return (
    <>
    <nav className={`navbar navbar-expand-sm shadow`}>
        
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          پرتوپژوهان
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav fw-medium">
            <li className="nav-item dropdown ">
              <a
                className=" nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                محصولات
              </a>
              <ul className="dropdown-menu dropdown-menu-end fw-medium">
                <li>
                  <Link
                    className="dropdown-item d-flex justify-content-start"
                    to="/products/PPK-100"
                  >
                    PPK-100
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item d-flex justify-content-start"
                    to="/products/PPK-101"
                  >
                    PPK-101
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item d-flex justify-content-start"
                    to="/products/PPK-102"
                  >
                    PPK-102
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/results">
                نتایج
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/guide">
                راهنمای مصرف
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUs">
                درباره ما
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs">
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/login">
          <button className="btn btn-warning">
                  ورود/عضویت
          </button>
        </Link>
      </div>
    </nav>
    </>
  );
}