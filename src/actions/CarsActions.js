import alt from '../alt';
import request from '../request';
import types from '../constants/ActionTypes/cars';
class CarsActions {
	constructor() {

	}
  getAllCars() {
		const query = `query{cars  {
								        _id
												name
												doors
												cost
												airCondition
												transmission
												engineType
												year
								    }}`;
		return dispatch => {
        request.get('/', {query}).then(({data}) => {
            dispatch({cars: data.cars });
        });
    };
  }
}

export default alt.createActions(CarsActions);
