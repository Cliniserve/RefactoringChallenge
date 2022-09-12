import type { Area } from '../screens/home/types';

const areas: Area[] = [
  {
    id: 'area-1',
    name: 'Area 1',
    isChecked: false,
    hasCheckedChildren: false,
    rooms: [
      {
        id: 'room-1.1',
        name: 'Room 1.1',
        isChecked: false,
        hasCheckedChildren: false,
        beds: [
          {
            id: 'bed-1.1.1',
            name: 'Bed 1.1.1',
            isChecked: false,
          }, {
            id: 'bed-1.1.2',
            name: 'Bed 1.1.2',
            isChecked: false,
          },
        ],
      },
      {
        id: 'room-1.2',
        name: 'Room 1.2',
        isChecked: false,
        hasCheckedChildren: false,
        beds: [
          {
            id: 'bed-1.2.1',
            name: 'Bed 1.2.1',
            isChecked: false,
          }, {
            id: 'bed-1.2.2',
            name: 'Bed 1.2.2',
            isChecked: false,
          },
        ],
      },
    ],
  }, {
    id: 'area-2',
    name: 'Area 2',
    isChecked: false,
    hasCheckedChildren: false,
    rooms: [
      {
        id: 'room-2.1',
        name: 'Room 2.1',
        isChecked: false,
        hasCheckedChildren: false,
        beds: [
          {
            id: 'bed-2.1.1',
            name: 'Bed 2.1.1',
            isChecked: false,
          }, {
            id: 'bed-2.1.2',
            name: 'Bed 2.1.2',
            isChecked: false,
          }
        ],
      },
    ],
  },
];

export default areas;
