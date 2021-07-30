import React from "react";

import "./User.css";

class User extends React.Component {
  render() {
    const { name, picture } = this.props;

    return (
      <div className="user">
        <p className="user__name">{name}</p>
        <img src={picture} alt={name} className="user__img" />
      </div>
    );
  }
}

export default User;
