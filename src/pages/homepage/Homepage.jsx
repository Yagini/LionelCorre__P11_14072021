import React, {Component} from 'react';
import Banner from '../../components/banner/Banner';
import Thumb from '../../components/thumb/Thumb';
import { rentalList } from '../../datas/rentalList';
import BackgroundImg from '../../assets/homepage-background.png'
import "./Homepage.css"

class Homepage extends Component {
  render() {
    return (      
      <div className="homepage">              
        <Banner textContent="Chez vous, partout et ailleurs" imgSrc={BackgroundImg} altSrc="Bord de mer"/>         
        <main className="layout">
          {rentalList.map((rental) => (
            <article key={rental.id} className="rental__block"> 
              <Thumb title={rental.title} cover={rental.cover} id={rental.id}/>
            </article>
          ))}       
        </main>         
      </div>
    );
  }
}

export default Homepage;