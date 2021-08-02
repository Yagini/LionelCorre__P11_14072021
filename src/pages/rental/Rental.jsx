import React from "react";

import { rentalList } from "../../datas/rentalList";

import "./Rental.css";

import Carousel from "../../components/carousel/Carousel";
import Tag from "../../components/tag/Tag";
import User from "../../components/users/User";
import Dropdown from "../../components/dropdown/Dropdown";
import Rating from "../../components/rating/Rating";

class Rental extends React.Component {
  constructor(props) {
    super(props);
    const idMatch = this.props.match.params.id;
    const filteredRental = rentalList.find((rental) => rental.id === idMatch);
    this.state = { filteredRental: filteredRental };
  }

  render() {
    const { title, pictures, description, host, rating, location, equipments, tags } = this.state.filteredRental;

    return (
      <main className="rental">
        <Carousel pictures={pictures} title={title} />
        <section className="rental__mains-informations">
          <div className="rental__presentation">
            <h1 className="rental__title">{title}</h1>
            <h2 className="rental__location">{location}</h2>
            <div className="rental__tag-body">
              {tags.map((tag) => (
                <Tag tagText={tag} key={tag} />
              ))}
            </div>
          </div>
          <div className="rental__host">
            <Rating rating={rating} />
            <User name={host.name} picture={host.picture} />
          </div>
        </section>
        <section className="rental__details-informations">
          <div className="rental__description">
            <Dropdown name="Description" content={description} />
          </div>
          <div className="rental__equipments">
            <Dropdown
              name="Equipements"
              content={
                <ul>
                  {equipments.map((equipment, index) => (
                    <li key={index} className="dropdown__list">
                      {equipment}
                    </li>
                  ))}
                </ul>
              }
            />
          </div>
        </section>
      </main>
    );
  }
}

export default Rental;
