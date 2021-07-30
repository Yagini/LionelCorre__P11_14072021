import React from "react";

import { aboutData } from "../../datas/aboutData";

import "./About.css";

import Banner from "../../components/banner/Banner";
import Dropdown from "../../components/dropdown/Dropdown";
import aboutBackground from "../../assets/about-background.png";

class About extends React.Component {
  state = {};
  render() {
    return (
      <div className="about">
        <Banner imgSrc={aboutBackground} />
        <div className="about__informations">
          {aboutData.map((about) => (
            <Dropdown name={about.title} content={about.text} key={about.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default About;
