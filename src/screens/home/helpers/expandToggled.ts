import { Area } from "../types";

const expandToggled = (locationId: string, areaList: Area[]) => {
  return areaList.map((area) => {
    if (area.id === locationId)
      return {
        ...area,
        isExpanded: !area.isExpanded,
      };
    if ('rooms' in area && area.rooms !== undefined) {
      return {
        ...area,
        rooms: area.rooms.map((room) => {
          if (room.id === locationId)
            return {
              ...room,
              isExpanded: !room.isExpanded,
            }
          return room;
        }),
      }
    }
    return area;
  })
};

export default expandToggled;
