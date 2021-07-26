import React from "react";
import {FaChevronRight, FaChevronLeft} from "react-icons/fa"
import "./Carousel.css";

class Carousel extends React.Component {
  state = { currentPicture: 0 };  

  nextPicture = () => {
    this.setState((newState) => ({
      currentPicture : newState.currentPicture === this.props.pictures.length -1 ? 0 : newState.currentPicture + 1
    }));
  }

  prevPicture = () => {
    this.setState((newState) => ({
      currentPicture: newState.currentPicture === 0 ? this.props.pictures.length -1 : newState.currentPicture - 1
    }))
  }

  render() {
    const { pictures, title } = this.props;
    const { currentPicture } = this.state;

    return (
      <div className="carousel">
        <FaChevronLeft className="carousel__left-arrow" onClick={this.prevPicture}/>
        <FaChevronRight className="carousel__right-arrow" onclick={this.nextPicture}/>
        <img src={pictures[currentPicture]} alt={title}></img>        
      </div>
    );
  }
}
//pourquoi pas d'appel de la fonction dans le Fa??

export default Carousel;
