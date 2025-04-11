import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <nav className="nav">
        <Link to="/">
          <div className="logo">&lt; TrendBazaar /&gt;</div>
        </Link>

        <div className="pages">
          <li className="list">
            <Link to="/">
              <i class="ri-home-3-fill"></i>
            </Link>
          </li>
          <li className="list">
            <Link to="/cart">
              <i class="ri-shopping-cart-fill"></i>{" "}
              <span className="cartCount">
                <span className="cartCount2">{cart.length}</span>
              </span>
            </Link>
          </li>
          <li className="list">
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </li>
          <div className="menu">
            <i class="ri-menu-2-line"></i>
            <div className="dropdown">
              <div className="dropdown2">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <hr />
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <hr />
                <li>
                  <button onClick={handleLogout} className="dd-logout">
                    Logout
                  </button>
                </li>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
