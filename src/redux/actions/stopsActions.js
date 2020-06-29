/* eslint-disable */
// export const GET_ALL_ROUTES = 'GET_ALL_ROUTES';
// export const CREATE_ROUTE = 'CREATE_ROUTE';
// export const UPDATE_ROUTE = 'UPDATE_ROUTE';
// export const FILTER_ROUTE = 'FILTER_ROUTE';
export const FORM_STOP = 'FORM_STOP';
export const RESET_INFO = 'RESET_INFO';

// export function getAllRoutes(routes) {
//   return {
//     type: GET_ALL_ROUTES,
//     routes,
//   };
// }

// export function formRoute({prop, value}) {
//   return {
//     type: prop == null && value == null ? RESET_INFO : FORM_ROUTE,
//     payload: {prop, value},
//     multipleStates: false,
//   }
// }

export function selectStop(stateObject) {
  return {
    type: FORM_STOP,
    payload: stateObject,
    multipleStates: true,
  }
}

export function formStop({prop, value}) {
  return {
    type: prop == null && value == null ? RESET_INFO : FORM_STOP,
    payload: {prop, value},
    multipleStates: false,
  }
}
// export function createRoute(data) {
//   return {
//     type: CREATE_ROUTE,
//     data
//   };
// }
