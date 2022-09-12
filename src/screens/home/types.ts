export interface Area {
  id: string;
  name: string;
  isChecked: boolean;
  hasCheckedChildren: boolean;
  rooms: {
    id: string;
    name: string;
    isChecked: boolean;
    hasCheckedChildren: boolean;
    beds: {
      id: string;
      name: string;
      isChecked: boolean;
    }[];
  }[];
}
