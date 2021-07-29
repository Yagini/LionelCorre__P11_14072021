import React from "react";
import "./Rental.css";
import { rentalList } from "../../datas/rentalList";
import Carousel from "../../components/carousel/Carousel";
import Tag from "../../components/tag/Tag";
import User from "../../components/users/User";
import Dropdown from "../../components/dropdown/Dropdown";
import Rating from "../../components/rating/Rating";

class Rental extends React.Component {
  render() {
    const idMatch = this.props.match.params.id;
    const filteredRental = rentalList.find((rental) => rental.id === idMatch);

    const { title, pictures, description, host, rating, location, equipments, tags } = filteredRental;

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
            <Dropdown name="Description" content={description} ArrayCheck={Array.isArray(description)} />
          </div>
          <div className="rental__equipements">
            <Dropdown name="Equipements" content={equipments} ArrayCheck={Array.isArray(equipments)} />
          </div>
        </section>
      </main>
    );
  }
}

export default Rental;
