import {useState, useContext} from 'react';
import GlobalContext from '../state/globalContext';
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    const user = useContext(GlobalContext).user
    return(
<nav
  className="navbar navbar-expand-lg bg-success bg-gradient"
  data-bs-theme="dark"
>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Healthy Store
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/contact">
            Contact
          </a>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/catalog">
            Catalog
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </li>
      </ul>
    </div>
    <div >{user.name}-{user.cohort}</div>
  </div>
</nav>
    )
}
export default Navbar