import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Logo from "../../assets/logo.png";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        <Link exact to="/">
          <img src={Logo} alt="Logo Kasa" className="nav__logo"></img>
        </Link>
        <div className="nav__main">
          <Link exact to="/" className="nav__link nav__link--home">
            Accueil
          </Link>
          <Link exact to="/a-propos" className="nav__link">
            A Propos
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navigation;
