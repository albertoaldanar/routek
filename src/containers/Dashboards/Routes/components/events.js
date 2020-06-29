/* eslint-disable */
// export default [
//   {
//     id: 0,
//     title: 'All Day Event very long title',
//     allDay: true,
//     start: new Date(2018, 3, 0),
//     end: new Date(2018, 3, 1),
//     priority: 'high',
//     lat: 56.009410,
//     lng: 92.8121612
//   },
//   {
//     id: 1,
//     title: 'Escape from the Dragon',
//     start: new Date(2018, 3, 7, 12, 0, 0),
//     end: new Date(2018, 3, 10),
//     priority: 'high',
//     lat: 56.009441,
//     lng: 92.8121619
//   },

//   {
//     id: 2,
//     title: 'DTS STARTS',
//     start: new Date(2018, 2, 13, 0, 0, 0),
//     end: new Date(2018, 2, 20, 0, 0, 0),
//     priority: 'high',
//     lat: 56.009140,
//     lng: 92.8121617
//   },

//   {
//     id: 3,
//     title: 'DTS ENDS',
//     start: new Date(2018, 10, 6, 0, 0, 0),
//     end: new Date(2018, 10, 13, 0, 0, 0),
//     priority: 'high',
//     lat: 56.007433,
//     lng: 92.8121610
//   },

//   {
//     id: 4,
//     title: 'Find blacksmith',
//     start: new Date(2018, 3, 9, 0, 0, 0),
//     end: new Date(2018, 3, 9, 0, 0, 0),
//     priority: 'family',
//     lat: 56.006412,
//     lng: 92.8121612
//   },
  // {
  //   id: 5,
  //   title: 'Learn more about princesses',
  //   start: new Date(2018, 3, 11),
  //   end: new Date(2018, 3, 13),
  //   priority: 'high',
  // },
  // {
  //   id: 6,
  //   title: 'Get a new mail',
  //   start: new Date(2018, 3, 12, 10, 30, 0, 0),
  //   end: new Date(2018, 3, 12, 12, 30, 0, 0),
  //   priority: 'non',
  // },
  // {
  //   id: 7,
  //   title: 'Lunch with ghoul',
  //   start: new Date(2018, 3, 12, 12, 0, 0, 0),
  //   end: new Date(2018, 3, 12, 13, 0, 0, 0),
  //   priority: 'non',
  // },
  // {
  //   id: 8,
  //   title: 'Meeting',
  //   start: new Date(2018, 4, 12, 14, 0, 0, 0),
  //   end: new Date(2018, 4, 12, 15, 0, 0, 0),
  //   priority: 'high',
  // },
  // {
  //   id: 9,
  //   title: 'Training of the squire',
  //   start: new Date(2018, 3, 12, 17, 0, 0, 0),
  //   end: new Date(2018, 3, 12, 17, 30, 0, 0),
  //   priority: 'family',
  // },
  // {
  //   id: 10,
  //   title: 'Dinner with King',
  //   start: new Date(2018, 3, 12, 20, 0, 0, 0),
  //   end: new Date(2018, 3, 12, 21, 0, 0, 0),
  //   priority: 'non',
  // },
  // {
  //   id: 11,
  //   title: 'Duel',
  //   start: new Date(2018, 3, 13, 7, 0, 0),
  //   end: new Date(2018, 3, 13, 10, 30, 0),
  //   priority: 'family',
  // },
  // {
  //   id: 12,
  //   title: 'Masked ball',
  //   start: new Date(2018, 3, 17, 19, 30, 0),
  //   end: new Date(2018, 3, 18, 2, 0, 0),
  //   priority: 'family',
  // },
  // {
  //   id: 13,
  //   title: 'Save the Princess from the Dragon',
  //   start: new Date(2018, 3, 20, 19, 30, 0),
  //   end: new Date(2018, 3, 22, 2, 0, 0),
  //   priority: 'high',
  // },
  // {
  //   id: 14,
  //   title: 'Find information about magic',
  //   start: new Date(2018, 3, 9, 0, 0, 0),
  //   end: new Date(2018, 3, 11, 0, 0, 0),
  //   priority: 'non',
  // },
  // {
  //   id: 14,
  //   title: 'Get drink with the Dragon at the wedding',
  //   start: new Date(2018, 3, 26, 0, 0, 0),
  //   end: new Date(2018, 3, 26, 0, 0, 0),
  //   priority: 'non',
  // },
// ];


export default [
  {
    id: 1,
    driver: "Carlos Gutierrez",
    color: "#6495ED",
    paradas: [
      {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2018, 3, 0),
        end: new Date(2018, 3, 1),
        priority: 'high',
        lat: 57.009410,
        lng: 93.8621612,
        done: false,
        working: false
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

      // {
      //   id: 4,
      //   title: 'Find blacksmith',
      //   start: new Date(2018, 3, 9, 0, 0, 0),
      //   end: new Date(2018, 3, 9, 0, 0, 0),
      //   priority: 'family',
      //   lat: 57.006412,
      //   lng: 93.8121612
      // },
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
