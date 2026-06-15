import {useState, useContext} from 'react';
import GlobalContext from '../state/globalContext';
import { Link } from "react-router-dom"
import { IconShoppingCart } from '@tabler/icons-react';
import "./Navbar.css"

function Navbar() {
    const user = useContext(GlobalContext).user;
    const cart = useContext(GlobalContext).cart;

    function getTotalItems() {
      let total = 0;

      for(let index=0; index<cart.length; index++) {
        total = total + cart[index].quantity
      }

      return total;
    }
    return(
<nav
  className="navbar navbar-expand-lg bg-primary bg-gradient"
  data-bs-theme="dark"
>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      GameZone
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
    <div className='text-white m-4'>{user.name}-{user.cohort}</div>
    
    <Link className='nav-link text-white border border-white rounded position-relative p-1 me-2' to="/cart">
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {getTotalItems()}
      </span>
    <IconShoppingCart/>
    Cart
    </Link>
  </div>
</nav>
    )
}
export default Navbar