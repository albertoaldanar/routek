/* eslint-disable */
import { FORM_STOP, RESET_INFO } from "../actions/stopsActions";

const initialState = {
    displayStopFormModal: null,
    id: 0,
    stopName: '',
    allDay: true,
    startDate: null,
    endDate: null,
    project: "0",
    lat: 0,
    lng: 0,
    destination: "",
    pictures: [],
    signature: "",
    comments: "",
    done: false,
    working: false,
    client: "",
    status: 0,
    driver: {}
}

export default function(state = initialState, action){

  switch (action.type) {

    case FORM_STOP:
      if(action.multipleStates == false) {
          // console.log("Actions => ", action)
          return {...state, [action.payload.prop]: action.payload.value}
      } else {
          console.log("ACTION => ", action.payload)
          const {id, stopName, allDay, startDate, endDate, project, lat, lng, destination, pictures, signature, comments, done, working, client, status, driver} = action.payload
          return {...state, displayStopFormModal: true, stopName, allDay, startDate, endDate, project, lat, lng, destination, pictures, signature, comments, done, working, client, status, driver}
      }
    case RESET_INFO:
      return initialState;
    default:
      return state
  }

}
