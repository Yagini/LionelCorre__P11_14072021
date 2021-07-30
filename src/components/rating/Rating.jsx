import React from "react";

import "./Rating.css";

import FillStar from "../../assets/icons/star-fill.svg";
import Star from "../../assets/icons/star-empty.svg";

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    const range = [1, 2, 3, 4, 5];

    return (
      <div className="rating">
        {range.map((rangeNumber, index) =>
          rating >= rangeNumber ? (
            <img src={FillStar} alt="" key={index} className="rating__star rating__star-isfill" />
          ) : (
            <img src={Star} alt="" key={index} className="rating__star" />
          )
        )}
      </div>
    );
  }
}

export default Rating;
