import React from "react";

import { rentalList } from "../../datas/rentalList";

import "./Homepage.css";

import Banner from "../../components/banner/Banner";
import Thumb from "../../components/thumb/Thumb";

import BackgroundImg from "../../assets/homepage-background.png";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Banner textContent="Chez vous, partout et ailleurs" imgSrc={BackgroundImg} altSrc="Bord de mer" />
        <main className="layout">
          {rentalList.map((rental) => (
            <article key={rental.id} className="rental__block">
              <Thumb title={rental.title} cover={rental.cover} id={rental.id} />
            </article>
          ))}
        </main>
      </div>
    );
  }
}

export default Homepage;
