/* eslint-disable */
import { FORM_ROUTE, RESET_INFO } from "../actions/routesActions";

const initialState = {
  displayFormModal: false,
  modalType: null,
  duplicatedRoute: false,
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
      if(action.multipleStates == false) {
          console.log("Actions => ", action)
          return {...state, [action.payload.prop]: action.payload.value}
      } else {
          console.log("ACTION => ", action.payload)
          const {routeName, duplicatedRoute, multipleDays, startDate, endDate, multipleDrivers} = action.payload
          return {...state, displayFormModal: true, routeName, multipleDays, endDate, startDate, multipleDrivers, modalType: "EDIT"}
      }

      // }
    case RESET_INFO:
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
