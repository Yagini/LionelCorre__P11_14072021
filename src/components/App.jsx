import React from "react";
import { BrowserRouter } from "react-router-dom";

import "../styles/App.css";

import Navigation from "./nav/Navigation";

import Footer from "./footer/Footer";
import Router from "./Router";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Router />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
