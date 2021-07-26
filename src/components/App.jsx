import "../styles/App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from "react";

import Navigation from "./nav/Navigation";
import Homepage from '../pages/homepage/Homepage';
import About from '../pages/about/About';
import Rental from '../pages/rental/Rental';
import Error from '../pages/error/Error';
import Footer from './footer/Footer';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>          
          <Route path="/" exact component={Homepage} />
          <Route path="/a-propos" component={About} />
          <Route path="/location/:id" render={(props) => <Rental {...props} />}/>
          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
