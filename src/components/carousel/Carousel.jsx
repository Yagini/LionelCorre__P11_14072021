import React from "react";

import "./Carousel.css";

import ChevronLeft from "../../assets/icons/chevron-left.svg";
import ChevronRight from "../../assets/icons/chevron-right.svg";

class Carousel extends React.Component {
  state = { currentPicture: 0 };

  nextPicture = () => {
    this.setState((prevState) => ({
      currentPicture: prevState.currentPicture === this.props.pictures.length - 1 ? 0 : prevState.currentPicture + 1,
    }));
  };

  prevPicture = () => {
    this.setState((prevState) => ({
      currentPicture: prevState.currentPicture === 0 ? this.props.pictures.length - 1 : prevState.currentPicture - 1,
    }));
  };

  render() {
    const { pictures, title } = this.props;
    const { currentPicture } = this.state;

    return (
      <div className="carousel">
        <img src={ChevronLeft} alt="previous" className="carousel__left-arrow" onClick={this.prevPicture} />
        <img src={ChevronRight} alt="next" className="carousel__right-arrow" onClick={this.nextPicture} />
        <img src={pictures[currentPicture]} alt={title} className="carousel__img"></img>
      </div>
    );
  }
}

export default Carousel;
