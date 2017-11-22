let todayData = {
  notice1: {
    id: '3',
    serial: '2017-256',
    company: 'WE',
    numbers: ['WE684', 'WE685'],
    planeIds: [],
    types: ['A320', 'A320'],
    routes: [
      { //route1
        startStation: 'BKK',
        nextStations: [
          { //station1
            depTime: '13:30',
            depStep: 0,
            arrTime: '17:40',
            arrStep: 0,
            station: 'CKG'
          },
        ],
      },
      { //route2
        startStation: 'CKG',
        nextStations: [
          { //station1
            depTime: '19:30',
            depStep: 0,
            arrTime: '20:30',
            arrStep: 0,
            station: 'KMG'
          },
          { //station1
            depTime: '23:00',
            depStep: 0,
            arrTime: '01:40',
            arrStep: 1,
            station: 'BKK'
          },
        ],
      }
    ],
  },
  notice2: {
    id: '1',
    serial: '2017-254',
    company: 'O3',
    numbers: ['O36904', 'O36909', 'O36503'],
    planeIds: [],
    types: ['B737', 'B737', 'B757'],
    routes: [
      { //route1
        startStation: 'PVG',
        nextStations: [
          { //station1
            depTime: '07:30',
            depStep: 0,
            arrTime: '09:40',
            arrStep: 0,
            station: 'CKG'
          },
        ],
      },
      { //route2
        startStation: 'CKG',
        nextStations: [
          { //station1
            depTime: '12:30',
            depStep: 0,
            arrTime: '14:40',
            arrStep: 0,
            station: 'KMG'
          }
        ],
      },
      { //route3
        startStation: 'PVG',
        nextStations: [
          { //station1
            depTime: '13:30',
            depStep: 0,
            arrTime: '15:40',
            arrStep: 0,
            station: 'KMG'
          }
        ],
      }
    ],
  },
}
