export interface Area {
  id: string;
  name: string;
  isChecked: boolean;
  isExpanded: boolean;
  hasCheckedChildren: boolean;
  rooms: {
    id: string;
    name: string;
    isChecked: boolean;
    isExpanded: boolean;
    hasCheckedChildren: boolean;
    beds: {
      id: string;
      name: string;
      isChecked: boolean;
    }[];
  }[];
}
