import type { Area } from '../../home/types';

const checkToggled = (locationId: string, areaList: Area[]) => {
  return areaList.map((area) => {
    if (locationId === area.id) {
      const isAreaChecked = !area.isChecked;
      const newArea = {
        ...area,
        isChecked: isAreaChecked,
        ...('rooms' in area && area.rooms !== undefined ? {
          rooms: area.rooms.map((room) => {
            const newRoom = {
              ...room,
              isChecked: isAreaChecked,
              beds: room.beds.map((bed) => ({
                ...bed,
                isChecked: isAreaChecked,
              })),
            };
            newRoom.hasCheckedChildren = newRoom.beds.every((bed) => bed.isChecked);
            return newRoom;
          }),
        } : {})
      };
      newArea.hasCheckedChildren = newArea.rooms?.every((room) => room.isChecked || room.hasCheckedChildren) ?? false;
      return newArea;
    }
    const newArea = {
      ...area,
      ...('rooms' in area && area.rooms !== undefined ? {
        rooms: area.rooms.map((room) => {
          if (locationId === room.id) {
            const isRoomChecked = !room.isChecked;
            const newRoom = {
              ...room,
              isChecked: isRoomChecked,
              beds: room.beds.map((bed) => ({
                ...bed,
                isChecked: isRoomChecked,
              })),
            };
            newRoom.hasCheckedChildren = newRoom.beds.every((bed) => bed.isChecked);
            return newRoom;
          }
          const newRoom = {
            ...room,
            beds: room.beds.map((bed) => ({
              ...bed,
              isChecked: locationId === bed.id ? !bed.isChecked : bed.isChecked,
            })),
          };
          newRoom.hasCheckedChildren = newRoom.beds.every((bed) => bed.isChecked);
          return newRoom;
        }),
      } : {})
    }
    newArea.hasCheckedChildren = newArea.rooms?.every((room) => room.isChecked || room.hasCheckedChildren) ?? false;
    return newArea;
  });
};

export default checkToggled;
