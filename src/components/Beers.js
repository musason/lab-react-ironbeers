import React, { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';


class Beers extends Component {

    contributedSlice = (str) => {
        str = str?.slice(0, str.lastIndexOf('<'))
        return str
    }


    render() {
        const { beers, myChange } = this.props

        return (
          <div>
            <Form.Control onChange={myChange} type="text" placeholder="Search for IronBeers" />
            <Container>
              {beers.map((beer) => {
                return (
                  <div key={beer._id}>
                    <Row>
                      <Col>
                        <img src={beer.image_url} alt="beer" />
                      </Col>
                      <Col>
                        <Link to={`beers/${beer._id}`} beers={beers}>
                          <h2>{beer.name}</h2>
                        </Link>
                        <h4 className="beer-tagline">{beer.tagline}</h4>
                        <h5>
                          <strong>Create by:</strong>{' '}
                          {this.contributedSlice(beer.contributed_by)}
                        </h5>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Container>
          </div>
        );
    }
}

export default Beers
  
    
    

