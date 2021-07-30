import React from "react";

import "./Banner.css";

class Banner extends React.Component {
  render() {
    const { textContent, imgSrc, imgAlt } = this.props;

    return (
      <div className="banner">
        <div className="banner__cover"></div>
        <img src={imgSrc} alt={imgAlt} className="banner__background" />
        {textContent ? <h2 className="banner__text">{textContent}</h2> : null}
      </div>
    );
  }
}

export default Banner;
