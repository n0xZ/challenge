import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router";
type Search = {
  name: String;
};
const Navbar: React.FC = ({ children }) => {
  const INITIAL_VALUE: Search = {
    name: "",
  };

  let history = useHistory();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between align-items-center text-dark px-3">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand font-weight-bold">
          Home
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/characterlist" className="navbar-brand">
                Lista de personajes
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/search" className="navbar-brand">
                Buscar personaje
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg-dark" style={{ height: "100vh" }}>
        {children}
      </div>
    </div>
  );
};

export default Navbar;
