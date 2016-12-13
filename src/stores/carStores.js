import alt from '../alt';
import CarsActions from '../actions/CarsActions';
import Request from 'react-http-request';
import Immutable from 'immutable';

class CarStore {
    constructor() {
        this.bindListeners({
          getAllCars: CarsActions.GET_ALL_CARS
        });

        this.state = {
            cars: []
        }

        alt.actions.CarsActions.getAllCars();
    }

    getAllCars(data) {
        this.setState({ cars: Immutable.fromJS({cars : data.cars})})
    }
}

export default alt.createStore(CarStore, 'CarStore');
