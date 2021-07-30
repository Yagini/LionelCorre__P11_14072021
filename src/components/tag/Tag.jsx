import React from "react";

import "./Tag.css";

class Tag extends React.Component {
  render() {
    const { tagText } = this.props;

    return <div className="tag">{tagText}</div>;
  }
}

export default Tag;
