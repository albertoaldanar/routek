/* eslint-disable */
export const GET_ALL_ROUTES = 'GET_ALL_ROUTES';
export const CREATE_ROUTE = 'CREATE_ROUTE';
export const UPDATE_ROUTE = 'UPDATE_ROUTE';
export const FILTER_ROUTE = 'FILTER_ROUTE';

export function getAllRoutes(routes) {
  return {
    type: GET_ALL_ROUTES,
    routes,
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
    var json = {
      routes: [
        {
          id: 1,
          startDate: new Date(2020, 6, 12),
          endDate: new Date(2020, 6, 12),
          fixedRoute: true,
          name: "Ruta la primavera",
          key: "2020-6-12*01",
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
              destination: "Col. Privada Colinas del parque #322 Culiacan, SIN.",
              pictures: [
                "https://image.freepik.com/foto-gratis/tecnico-reparacion-aire-acondicionado-destornillador-instale-cables-electricos-aire-acondicionado_29285-1775.jpg",
                "https://rainaldihomeservices.com/wp-content/uploads/ee/stock-photos/air-conditioning-repair-orlando-fl.jpg",
                "https://guysac.com/wp-content/uploads/Air-Conditioning-Repair-near-me-Atascocita.jpeg",
              ],
              signature: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Signature-WangBowen.png",
              comments: "Se continuara mañana debido a que no nos abrio el guardia la casa para instalar.",
              done: false,
              working: false,
              client: "DAFI",
              status: 0,
              driver: {
                id: 1,
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
              }
            },
            {
              id: 1,
              title: 'Escape from the Dragon',
              start: new Date(2018, 3, 7, 12, 0, 0),
              end: new Date(2018, 3, 10),
              priority: 'high',
              client: "DAFI",
              status: 0,
              lat: 57.004441,
              lng: 93.8921619,
              destination: "Col. Privada Colinas del parque #322 Culiacan, SIN.",
              pictures: [
                "https://image.freepik.com/foto-gratis/tecnico-reparacion-aire-acondicionado-destornillador-instale-cables-electricos-aire-acondicionado_29285-1775.jpg",
                "https://rainaldihomeservices.com/wp-content/uploads/ee/stock-photos/air-conditioning-repair-orlando-fl.jpg",
                "https://guysac.com/wp-content/uploads/Air-Conditioning-Repair-near-me-Atascocita.jpeg",
              ],
              signature: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Signature-WangBowen.png",
              comments: "Se continuara mañana debido a que no nos abrio el guardia la casa para instalar.",
              done: true,
              working: false,
              driver: {
                id: 1,
                color: "#6495ED",
                name: "Alfonso",
                lastName: "Bermudez",
                onDutty: true,
                locations: {
                  lat: 57.409410,
                  lng: 93.2921619,
                },
                car: {
                  name: "Cangu",
                  color: "white",
                  number: "A-F67C42"
                }
              }
            },
            {
              id: 2,
              title: 'DTS STARTS',
              start: new Date(2018, 2, 13, 0, 0, 0),
              end: new Date(2018, 2, 20, 0, 0, 0),
              priority: 'high',
              lat: 57.002140,
              lng: 93.7321617,
              destination: "Col. Privada Colinas del parque #322 Culiacan, SIN.",
              pictures: [
                "https://image.freepik.com/foto-gratis/tecnico-reparacion-aire-acondicionado-destornillador-instale-cables-electricos-aire-acondicionado_29285-1775.jpg",
                "https://rainaldihomeservices.com/wp-content/uploads/ee/stock-photos/air-conditioning-repair-orlando-fl.jpg",
                "https://guysac.com/wp-content/uploads/Air-Conditioning-Repair-near-me-Atascocita.jpeg",
              ],
              signature: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Signature-WangBowen.png",
              comments: "Se continuara mañana debido a que no nos abrio el guardia la casa para instalar.",
              done: false,
              client: "DAFI",
              status: 0,
              working: true,
              driver: {
                id: 3,
                color: "#8A2BE2",
                name: "Raul",
                lastName: "Bermudez",
                onDutty: true,
                locations: {
                  lat: 57.209410,
                  lng: 93.1921619,
                },
                car: {
                  name: "Tsuru",
                  color: "white",
                  number: "A-F67C42"
                }
              }
            }
          ]
        },
        {
          id: 2,
          startDate: new Date(2020, 6, 12),
          endDate: new Date(2020, 6, 12),
          fixedRoute: true,
          name: "Ruta las quintas",
          key: "2020-6-12*01",
          status: 0,
          paradas: [
              {
                id: 12,
                title: 'Cambiar filtros DAFI',
                allDay: true,
                start: new Date(2018, 3, 0),
                end: new Date(2018, 3, 1),
                priority: 'high',
                lat: 56.109410,
                lng: 92.9121612,
                destination: "Col. Privada Colinas del parque #322 Culiacan, SIN.",
                pictures: [
                  "https://image.freepik.com/foto-gratis/tecnico-reparacion-aire-acondicionado-destornillador-instale-cables-electricos-aire-acondicionado_29285-1775.jpg",
                  "https://rainaldihomeservices.com/wp-content/uploads/ee/stock-photos/air-conditioning-repair-orlando-fl.jpg",
                  "https://guysac.com/wp-content/uploads/Air-Conditioning-Repair-near-me-Atascocita.jpeg",
                ],
                signature: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Signature-WangBowen.png",
                comments: "Se continuara mañana debido a que no nos abrio el guardia la casa para instalar.",
                done: true,
                client: "Ingeniero Sebastian De la Vega Felix De la Vega Felix",
                status: 1,
                working: false,
                driver: {
                  id: 4,
                  color: "#5F9EA0",
                  name: "Sebastian",
                  lastName: "Bermudez",
                  onDutty: true,
                  locations: {
                    lat: 57.209410,
                    lng: 93.1921619,
                  },
                  car: {
                    name: "Sentra",
                    color: "white",
                    number: "A-F67C42"
                  }
                }
              },
              {
                id: 1,
                title: 'Instalar Minisplit casa primavera',
                start: new Date(2018, 3, 7, 12, 0, 0),
                end: new Date(2018, 3, 10),
                priority: 'high',
                lat: 56.009441,
                lng: 92.8121619,
                destination: "Col. Privada Colinas del parque #322 Culiacan, SIN.",
                pictures: [

                ],
                signature: "",
                comments: "",
                done: true,
                working: false,
                client: "DAFI",
                status: 2,
                driver: {
                  id: 5,
                  color: "#FF7F50",
                  name: "Octavio",
                  lastName: "Bermudez",
                  onDutty: true,
                  locations: {
                    lat: 57.209410,
                    lng: 93.1921619,
                  },
                  car: {
                    name: "Sentra",
                    color: "white",
                    number: "A-F67C42"
                  }
                }
              }

              // {
              //   id: 2,
              //   title: 'Tres',
              //   start: new Date(2018, 2, 13, 0, 0, 0),
              //   end: new Date(2018, 2, 20, 0, 0, 0),
              //   priority: 'high',
              //   lat: 56.009140,
              //   lng: 92.8121617,
              //   done: false,
              //   working: true
              // },

              // {
              //   id: 3,
              //   title: 'Cuatro',
              //   start: new Date(2018, 10, 6, 0, 0, 0),
              //   end: new Date(2018, 10, 13, 0, 0, 0),
              //   priority: 'high',
              //   lat: 56.007433,
              //   lng: 92.8121610,
              //   done: false,
              //   working: false
              // },

              // {
              //   id: 4,
              //   title: 'Cinco',
              //   start: new Date(2018, 3, 9, 0, 0, 0),
              //   end: new Date(2018, 3, 9, 0, 0, 0),
              //   priority: 'family',
              //   lat: 56.006412,
              //   lng: 92.8121612,
              //   done: false,
              //   working: false
              // },
          ]
        },
      ],

    drivers: [
      {
        id: 1,
        color: "#8A2BE2",
        name: "Alfonso",
        lastName: "Bermudez",
        onDutty: true,
        status: "active",
        profile: 'https://allswellproductions.ca/wp-content/uploads/2018/05/Jeroen-Van-Dalen-circle-profile.png',
        location: {
          lat: 57.109410,
          lng: 93.3921619,
        },
        car: {
          name: "Cangu",
          color: "white",
          number: "A-F67C42"
        }
      },
      {
        id: 2,
        color: "#6495ED",
        name: "Raul",
        lastName: "Bermudez",
        onDutty: true,
        status: "active",
        profile: 'https://logan-marshall.com/wp-content/uploads/2016/08/Circle-Profile-No-Background-PNG-120dpi-page001.png',
        location: {
          lat: 57.004441,
          lng: 93.8921619,
        },
        car: {
          name: "Cangu",
          color: "white",
          number: "A-F67C42"
        }
      },
      {
        id: 3,
        color: "#D2691E",
        name: "Pedro",
        lastName: "Bermudez",
        onDutty: true,
        status: "brake",
        profile: 'https://www.scripturaengage.com/wp-content/uploads/2018/01/Profile-Picture-Jim-Verbist-2-Circle.png',
        location: {
          lat: 57.209410,
          lng: 93.1921619,
        },
        car: {
          name: "Cangu",
          color: "white",
          number: "A-F67C42"
        }
      },
      {
        id: 3,
        color: "#BDB76B",
        name: "Fernando",
        lastName: "Bermudez",
        onDutty: true,
        status: "active",
        profile: 'https://camg242.hotglue.me/?TECH.head.153143598539',
        location: {
          lat: 57.119410,
          lng: 93.1621619,
        },
        car: {
          name: "Cangu",
          color: "white",
          number: "A-F67C42"
        }
      },
      {
        id: 3,
        color: "#BDB76B",
        name: "Fernando",
        lastName: "Bermudez",
        onDutty: true,
        status: "active",
        profile: 'https://camg242.hotglue.me/?TECH.head.153143598539',
        location: {
          lat: 57.119410,
          lng: 93.1621619,
        },
        car: {
          name: "Cangu",
          color: "white",
          number: "A-F67C42"
        }
      },

    ],
  }

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
