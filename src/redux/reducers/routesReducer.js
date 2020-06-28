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
    default:
      return state
  }

}
