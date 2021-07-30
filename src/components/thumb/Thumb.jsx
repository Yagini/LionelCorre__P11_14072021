import React from "react";
import { Link } from "react-router-dom";

import "./Thumb.css";

class Thumb extends React.Component {
  render() {
    //destructuring title.props, cover.props, id.props
    const { title, cover, id } = this.props;

    return (
      <div className="thumb">
        <Link to={`/location/${id}`}>
          <div className="thumb__cover"></div>
          <img src={cover} alt={title} className="thumb__img"></img>
          <h2 className="thumb__text">{title}</h2>
        </Link>
      </div>
    );
  }
}

export default Thumb;
