/* eslint-disable */
import { GET_ALL_ROUTES } from "../actions/routesActions";

const initialState = {
  routes: [{

  }],
  loaded: false
}

export default function(state = initialState, action){

  switch (action.type) {
    case GET_ALL_ROUTES:
      return {
        ...state,
        routes: action.routes,
        loaded: true
      }
    // case CHANGE_DIRECTION_TO_RTL:
    //   return { direction: 'rtl' };
    default:
      return state
  }

}
