import React from "react";
import "./Dropdown.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

class Dropdown extends React.Component {
  state = { isVisible: false };

  showDropdown = () => {
    this.setState((newState) => ({ isVisible: newState.isVisible ? false : true }));
  };

  render() {
    const { name, content, ArrayCheck } = this.props;
    const { isVisible } = this.state;

    return (
      <div className="dropdown">
        <div onClick={this.showDropdown} className={`dropdown__title ${isVisible ? "dropdown__title--open" : ""}`}>
          {name}
          {isVisible ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <ul className={`dropdown__content ${isVisible ? "dropdown__content--open" : ""}`}>
          {ArrayCheck ? content.map((content, index) => <li key={index} className="dropdown__list">{content}</li>) : <p className="dropdown__text">{content}</p>}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
