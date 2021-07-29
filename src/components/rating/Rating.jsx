import React from "react";
import "./Rating.css";
import { FaRegStar, FaStar } from "react-icons/fa";

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    const range = [1, 2, 3, 4, 5];

    return (
      <div className="rating">
        {range.map((rangeNumber, index) =>
          rating >= rangeNumber ? (
            <FaStar key={index} className="rating__star rating__star-isfill" />
          ) : (
            <FaRegStar key={index} className="rating__star" />
          )
        )}
      </div>
    );
  }
}

export default Rating;
