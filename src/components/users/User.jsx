import React from "react";
import "./User.css";

class User extends React.Component {
  render() {
    const { name, picture } = this.props;

    return (
      <div className="host">
        <p>{name}</p>
        <img src={picture} alt={name} />
      </div>
    );
  }
}

export default User;
