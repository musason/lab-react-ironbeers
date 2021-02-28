import React, { Component } from 'react'
import axios from 'axios';

export default class RandomBeer extends Component {
    state = {
        details: {}
    }

    contributedSlice = (str) => {
        str = str?.slice(0, str.lastIndexOf('<'))
        return str
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response) => {
                this.setState({
                  details: response.data,
                });   
            })
            .catch((err) => {
                console.log('There has been an Error while fetching data for the API',err)
            })
    }
    

    render() {
        const { details } = this.state
        return (
          <div className="single-beer">
            <img className="single-beer-image" src={details.image_url} alt="beer" />
            <div className="description">
              <div>
                <h2>{details.name}</h2>
                <h4 className="beer-tagline">{details.tagline}</h4>
              </div>
              <div>
                <h4 className="beer-tagline">{details.attenuation_level}</h4>
                <h5>{details.first_brewed}</h5>
              </div>
            </div>
            <h6 className="text">{details.description}</h6>
            <h6 className="beer-tagline">{this.contributedSlice(details.contributed_by)}</h6>
          </div>
        );
    }

}
