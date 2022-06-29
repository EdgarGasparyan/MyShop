import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/ttlogo.png";
import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";

const Navigationbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const state = useSelector((state) => state.handleCart);

  const Login = () => {
    return (
      <NavLink to="/login" className="btn btn-outline-dark ms-2">
        <i className="fa fa-sign-in me-1"></i> Login
      </NavLink>
    );
  };
  const Register = () => {
    return (
      <NavLink to="/register" className="btn btn-outline-dark ms-2">
        <i className="fa fa-user-plus me-1"></i> Register
      </NavLink>
    );
  };
  const MyAccaount = () => {
    return (
      <NavLink to="/useraccout" className="btn btn-outline-dark ms-2">
        <i className="fa fa-sign-in me-1"></i> My Account
      </NavLink>
    );
  };

  return (
    <>
      <>
        <Navbar
          bg="light"
          variant="light"
          sticky="top"
          expand="md"
          collapseOnSelect
        >
          <Navbar.Brand>
            <NavLink className="navbar-brand fw-bold fs-4" to="/">
              <img src={logo} alt="ՏՆԱՅԻՆ ՏՆՏԵՍՈՒՀԻ" width={130} height={60} />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
              <NavLink className="nav-link" to="/admin">
                Admin
              </NavLink>
              {isLogin ? (
                <MyAccaount />
              ) : (
                <>
                  <Login />
                  <Register />
                </>
              )}
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart(
                {state.length})
              </NavLink>
              {/*<Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>*/}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>

      {/*<div id="navbarToggleExternalContent">
        <nav
          className="navbar navbar-expand-lg  bg-white  py-3 shadow-sm ">
          <div className="container-fluid">
            <NavLink className="navbar-brand fw-bold fs-4" to="/">
              <img src={logo} alt="ՏՆԱՅԻՆ ՏՆՏԵՍՈՒՀԻ" width={130} height={60} />
            </NavLink>
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="buttons">
                <NavLink to="/login" className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1"></i> Login
                </NavLink>
                <NavLink to="/register" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1"></i> Register
                </NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-1"></i> Cart(
                  {state.length})
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>*/}
    </>
  );
};

export default Navigationbar;
