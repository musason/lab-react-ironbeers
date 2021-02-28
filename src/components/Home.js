import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
            
    render() {

        return (
          <div>
            <div className="all-beers">
                <Link to='/beers' >
                <img src={require('../assets/beers.png')} alt="beers" />
                <h3>All Beers</h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="random-beer">
              <Link to="/random-beer">
                <img src={require('../assets/random-beer.png')} alt="randombeer"/>
                <h3>Random Beer</h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="new-beer">
              <Link to="/new-beer">
                <img src={require('../assets/new-beer.png')} alt="newbeer" />
                <h3>New Beer</h3>
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        );
    }
}

export default Home