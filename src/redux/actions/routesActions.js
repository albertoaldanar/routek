/* eslint-disable */
export const GET_ALL_ROUTES = 'GET_ALL_ROUTES';
export const CREATE_ROUTE = 'CREATE_ROUTE';
export const UPDATE_ROUTE = 'UPDATE_ROUTE';
export const FILTER_ROUTE = 'FILTER_ROUTE';

export function getAllRoutes(data) {
  return {
    type: GET_ALL_ROUTES,
    data,
  };
}

export function createRoute(data, index) {
  return {
    type: CREATE_ROUTE,
    data,
    index,
  };
}

export function updateRoute(items) {
  return {
    type: UPDATE_ROUTE,
    items,
  };
}

export function getRoutes(){
  return(dispatch) => {
    var json = [
      {
        id: 1,
        startDate: new Date(2020, 6, 12),
        endDate: new Date(2020, 6, 12),
        fixedRoute: true,
        name: "ruta-primavera-2020-6-12*01",
        key: "2020-6-12*01",
        driver: {
          id: 2,
          color: "#6495ED",
          name: "Alfonso",
          lastName: "Bermudez",
          onDutty: true,
          locations: {
            lat: 57.109410,
            lng: 93.3921619,
          },
          car: {
            name: "Cangu",
            color: "white",
            number: "A-F67C42"
          }
        },
        status: 0,
        paradas: [
          {
            id: 0,
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2018, 3, 0),
            end: new Date(2018, 3, 1),
            project: "0",
            priority: 'high',
            lat: 57.009410,
            lng: 93.8621612,
            done: false,
            working: false,
            driverId: 2,
            client: "DAFI"
          },
          {
            id: 1,
            title: 'Escape from the Dragon',
            start: new Date(2018, 3, 7, 12, 0, 0),
            end: new Date(2018, 3, 10),
            priority: 'high',
            lat: 57.004441,
            lng: 93.8921619,
            done: true,
            working: false
          },

          {
            id: 2,
            title: 'DTS STARTS',
            start: new Date(2018, 2, 13, 0, 0, 0),
            end: new Date(2018, 2, 20, 0, 0, 0),
            priority: 'high',
            lat: 57.002140,
            lng: 93.7321617,
            done: false,
            working: true
          },

          {
            id: 3,
            title: 'DTS ENDS',
            start: new Date(2018, 10, 6, 0, 0, 0),
            end: new Date(2018, 10, 13, 0, 0, 0),
            priority: 'high',
            lat: 57.007433,
            lng: 93.8121610,
            done: true,
            working: false
          },
        ]
      },
      {
        id: 2,
        driver: "Pablo Hernandez",
          color: "#DC143C",
          paradas: [
            {
              id: 0,
              title: 'UNo',
              allDay: true,
              start: new Date(2018, 3, 0),
              end: new Date(2018, 3, 1),
              priority: 'high',
              lat: 56.009410,
              lng: 92.8121612,
              done: true,
              working: false
            },
            {
              id: 1,
              title: 'Dos',
              start: new Date(2018, 3, 7, 12, 0, 0),
              end: new Date(2018, 3, 10),
              priority: 'high',
              lat: 56.009441,
              lng: 92.8121619,
              done: true,
              working: false
            },

            {
              id: 2,
              title: 'Tres',
              start: new Date(2018, 2, 13, 0, 0, 0),
              end: new Date(2018, 2, 20, 0, 0, 0),
              priority: 'high',
              lat: 56.009140,
              lng: 92.8121617,
              done: false,
              working: true
            },

            {
              id: 3,
              title: 'Cuatro',
              start: new Date(2018, 10, 6, 0, 0, 0),
              end: new Date(2018, 10, 13, 0, 0, 0),
              priority: 'high',
              lat: 56.007433,
              lng: 92.8121610,
              done: false,
              working: false
            },

            {
              id: 4,
              title: 'Cinco',
              start: new Date(2018, 3, 9, 0, 0, 0),
              end: new Date(2018, 3, 9, 0, 0, 0),
              priority: 'family',
              lat: 56.006412,
              lng: 92.8121612,
              done: false,
              working: false
            },
          ]
        },
    ]

    dispatch(getAllRoutes(json));
  }


    // return fetch(`${HOST}/api/v1/rooms?address=${filter.address}&start_date=${filter.startDate}&end_date=${filter.endDate}}`)
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log("Response",json);
    //     if(json.is_success){
    //       dispatch(setRooms(normalizeRooms(json.rooms)));
    //     } else{
    //       alert(json.error)
    //     }
    //   })
    // .catch(e => alert("Ha ocurrido un error en la petición de la API"));
}
