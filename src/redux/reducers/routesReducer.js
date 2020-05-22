/* eslint-disable */
import { GET_ALL_ROUTES } from "../actions/routesActions";

const initialState= {
  rooms: [],
  room: null,
  filter: {
    address: "",
    startDate: "",
    endDate: ""
  }
}

export default function(state = initialState, action){

  switch (action.type) {
    case GET_ALL_ROUTES:
      return {
        routes: action.data
      }
    // case CHANGE_DIRECTION_TO_RTL:
    //   return { direction: 'rtl' };
    default:
      return state;
  }

}
