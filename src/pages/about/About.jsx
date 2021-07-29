import React from "react";
import aboutBackground from "../../assets/about-background.png";
import "./About.css";
import Banner from "../../components/banner/Banner";
import Dropdown from "../../components/dropdown/Dropdown";
import { aboutData } from "../../datas/aboutData";

class About extends React.Component {
  state = {};
  render() {
    return (
      <div className="about">
        <Banner imgSrc={aboutBackground} />
        {aboutData.map((about) => (
          <Dropdown name={about.title} content={about.text} key={about.id} />
        ))}
      </div>
    );
  }
}

export default About;
