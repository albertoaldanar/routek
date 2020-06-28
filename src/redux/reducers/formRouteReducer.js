/* eslint-disable */
import { FORM_ROUTE } from "../actions/routesActions";

const initialState = {
  duplicateRoute: false,
  multipleDays: false,
  multipleDrivers: false,
  routeName: "",
  startDate: null,
  endDate: null,
  routeDriver: null
}

export default function(state = initialState, action){

  switch (action.type) {
    case FORM_ROUTE:
      console.log("ACTION => ", action.payload)
      return {...state, [action.payload.prop]: action.payload.value}
    case "reset_info":
      return initialState;
    default:
      return state
  }
}

// export default (state= INITIAL_STATE, action)=> {
//   switch(action.type){
//     case "employee_update":
//       return {...state, [action.payload.prop]: action.payload.value}
//     case "reset_info":
//       return INITIAL_STATE;
//     default:
//       return state;
//   }
