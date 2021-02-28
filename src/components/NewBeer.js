import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'

export default class NewBeer extends Component {
    render() {
        return (
          <div>
            <Form onSubmit={this.props.onAdd}>
              <Form.Group className="text-input" controlId="formBasicEmail">
                <Form.Label><strong>Name</strong></Form.Label>
                <Form.Control name="name" type="text" />
                <Form.Label><strong>Tagline</strong></Form.Label>
                <Form.Control name="tagline" type="text"/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1" className="text-input">
                <Form.Label><strong>Description</strong></Form.Label>
                <Form.Control name="description" as="textarea" rows={5} />
              </Form.Group>
              <Form.Group className="text-input" controlId="formBasicEmail">
              <Form.Label><strong>First Brewed</strong></Form.Label>
                <Form.Control name="first_brewed" type="text"/>
                <Form.Label><strong>Brewer Tips</strong></Form.Label>
                <Form.Control name="brewers_tips" type="text"/>
                <Form.Label><strong>Attenuation Level</strong></Form.Label>
                <Form.Control name="attenuation_level" type="number"/>
                <Form.Label><strong>Contributed By</strong></Form.Label>
                <Form.Control name="contributed_by" type="text"/>
               </Form.Group> 
              <Button className="add-new-button" type="submit" variant="primary" size="lg" block>ADD NEW</Button>
            </Form>
          </div>
        );
    }
}
