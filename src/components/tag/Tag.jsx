import "./Tag.css";
import React from "react";

class Tag extends React.Component {
  render() {
    const { tagText } = this.props;

    return <div className="tag">{tagText}</div>;
  }
}

export default Tag;