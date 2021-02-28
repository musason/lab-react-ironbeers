import React, { Component } from 'react'
import axios from 'axios'
class SingleBeer extends Component {

    state = {
        details: {}
    }

    contributedSlice = (str) => {
        str = str?.slice(0, str.lastIndexOf('<'))
        return str
    }

    componentDidMount() {
        const beerId = this.props.match.params.beerId

        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                const beerDetails = response.data.find((beer) => beer._id === beerId);

                this.setState({
                  details: beerDetails,
                });   
            })
            .catch((err) => {
                console.log('There has been an Error while fetching data for the API',err)
            })
    }
    

    render() {
        const { details } = this.state
        console.log(this.props)
        return (
          <div className="single-beer">
            <img className="single-beer" src={details.image_url} alt="beer" />
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

export default SingleBeer