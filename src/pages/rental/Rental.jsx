import React from "react";
import { rentalList } from "../../datas/rentalList";
import Carousel from "../../components/carousel/Carousel";
import Tag from "../../components/tag/Tag";
import User from "../../components/users/User";
import Dropdown from "../../components/dropdown/Dropdown";

class Rental extends React.Component {
  render() {
    const idMatch = this.props.match.params.id;
    const filteredRental = rentalList.find((rental) => rental.id === idMatch);

    const { title, pictures, description, host, rating, location, equipements, tags } = filteredRental;

    return (
      <main className="rental">
        <Carousel pictures={pictures} title={title} />
        <section className="rental__mains-informations">
          <div className="rental__presentation">
            <h1 className="rental__title">{title}</h1>
            <h2 className="rental__location">{location}</h2>
            {tags.map((tag) => (
              <Tag tagText={tag} key={tag} />
            ))}
          </div>
          <div className="rental__host">
            <User name={host.name} picture={host.picture} />
          </div>
        </section>
        <section className="rental__details-informations">
          <div className="rental__description">
            <Dropdown name="Description" content={description}/>
          </div>
          <div className="rental__equipements">
            <Dropdown name="Equipements" content={equipements}/>
          </div>
        </section>
      </main>
    );
  }
}

export default Rental;
