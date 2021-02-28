import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'

class MyNav extends Component {
    render() {
        return (
          <div>
            <Nav>
            <Link to='/'>
              <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="navbar" />
            </Link>
            </Nav>
          </div>
        );
    }
}

export default MyNav