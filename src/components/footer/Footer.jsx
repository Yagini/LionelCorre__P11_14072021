import React from "react";

import "./Footer.css";

import FooterLogo from "../../assets/footer-logo.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <img src={FooterLogo} alt="Logo Kasa blanc" className="footer__logo" />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    );
  }
}

export default Footer;
