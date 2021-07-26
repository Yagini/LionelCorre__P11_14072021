import React from "react";
import "./Dropdown.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

class Dropdown extends React.Component {
  state = { isVisible: false };

  showDropdown = (event) => {
    event.preventDefault();
    this.setState({ isVisible: true });
  };

  render() {
    const { name, contents } = this.props;
    const isVisible = this.state;

    return (
      <div className="dropdown">
        <button onClick={this.showDropdown}>{name}</button>
        {isVisible ? (
          <ul>
            {contents.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        ) : (
            null
        )}
      </div>
    );
  }
}

export default Dropdown;
