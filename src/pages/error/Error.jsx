import React from "react";
import { Link } from "react-router-dom";

import "./Error.css";

class Error extends React.Component {
  render() {
    return (
      <div>
        <h1 className="error__title">404</h1>
        <h2 className="error__subtitle">Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className="link error__link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    );
  }
}

export default Error;
