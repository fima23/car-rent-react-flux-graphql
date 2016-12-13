import React, { Component } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import CarStore from '../stores/carStores';
import {
    Accordion,
    Panel,
    Well,
    ListGroupItem,
    ListGroup,
    Button,
    Row,
    Col,
    ButtonToolbar
} from 'react-bootstrap';

class Cars extends Component {
    static getStores() {
				return [CarStore];
		}

		static getPropsFromStores() {
	    	return CarStore.getState();
	  }
    render() {
			console.log(this.props);
			  return (
					<div>
              <Well>Here is cars</Well>
              <div>
                  <Accordion>
                      {
                          this.props.cars.get('cars').map((car, index) => {
                          const panelHeader = (
                              <Row>
                                  <Col xs={8}><h3>${car.name}</h3></Col>
                              </Row>
                          );
                              return <Panel bsStyle="success" header={panelHeader} eventKey={panelHeader} key={index}>
                                <ListGroup>
                                      <ListGroupItem header="dors" bsStyle="info">{car.doors}</ListGroupItem>
                                      <ListGroupItem header="cost" bsStyle="info">{car.cost}</ListGroupItem>
                                      <ListGroupItem header="airCondition" bsStyle="info">{car.airCondition}</ListGroupItem>
                                      <ListGroupItem header="transmission" bsStyle="info">{car.transmission}</ListGroupItem>
                                      <ListGroupItem header="engineType" bsStyle="info">{car.engineType}</ListGroupItem>
                                      <ListGroupItem header="year" bsStyle="info">{car.year}</ListGroupItem>
                                  </ListGroup>
                              </Panel>
                          })
                      }
                  </Accordion>
              </div>
          </div>
        );
    }
}
export default connectToStores(Cars);
