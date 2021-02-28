import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Beers from './components/Beers'
import MyNav from './components/MyNav';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

class App extends Component {

  state = {
    beers: [],
  }

  handleChange = (event) => {
    let searchText = event.target.value.toLowerCase()
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchText}`)
      .then((response) => {
        this.setState({
          beers: response.data,
        });
      })
      .catch ((err) => {
        console.log("Search failed", err)
      })
  }

  addNewBeer = (event) => {
    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value,
    };
    
    event.preventDefault()
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then(() => {
      console.log("You've successfully added a new Beer")
      })
      .catch(() => {
        
      })
  }
  
  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        this.setState({
          beers: response.data,
        });
      })
      .catch((err) => {
        console.log('Fetching data from API failer', err)
      })
  }



  render() {
    const { beers } = this.state;
    return (
      <div>
        <Route exact path="/" render={() => {
          return <Home />;
        }} />
        <MyNav />
        <Switch>
          <Route exact path="/beers" render={(routeProps) => {
            return <Beers myChange={this.handleChange} beers={beers} {...routeProps} />;
          }} />
          <Route path="/beers/:beerId" render={(routeProps) => {
            return <SingleBeer beers={beers} {...routeProps} />;
          }} />
          <Route path="/random-beer" render={(routeProps) => {
            return <RandomBeer beers={beers} {...routeProps} />;
          }} />
          <Route path="/random-beer" render={(routeProps) => {
            return <RandomBeer beers={beers} {...routeProps} />;
          }} />
          <Route path="/new-beer" render={(routeProps) => {
            return <NewBeer onAdd={this.addNewBeer}{...routeProps} />;
          }} />
        </Switch>
      </div>
    )
  }
}

export default App