import React from 'react'
import logo from '../resources/images/logo.png';
import search from '../resources/images/search-icon.png';
import cart from '../resources/images/cart.png';
import { Link } from 'react-router-dom';
import NavbarList from './NavbarList';

function Header() {
  return (
    <>
    <div className="HDcontener internal-contener  fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="/"
            ><img src={logo}
          /></Link>

          <div className="navbar-collapse header collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              
             <NavbarList linkUrl ="/mac/" linkName ="Mac" />
             <NavbarList linkUrl ="/ipad/" linkName ="Ipad" />
             <NavbarList linkUrl ="/iphone/" linkName ="Iphone" />
             <NavbarList linkUrl ="/Watch/" linkName ="Watch" />
             <NavbarList linkUrl ="/Vision/" linkName ="Vision" />
             <NavbarList linkUrl ="/airpods/" linkName ="AirPods" />
             <NavbarList linkUrl ="/tv&home/" linkName ="TV&Home" />
             <NavbarList linkUrl ="/entertainment/" linkName ="Entertainment" />
             <NavbarList linkUrl ="/accessories/" linkName ="Accessories" />
             <NavbarList linkUrl ="/support/" linkName ="Support" />
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/search/"
                  ><img src={search}
                /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/cart/"
                  ><img src={cart}
                /></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    </>
    )
}

export default Header