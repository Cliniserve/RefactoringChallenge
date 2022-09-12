import React from 'react';
import ListItem from '../../components/list-item';
import styles from './home.module.css';
import type { Area } from './types';
import checkToggled from './helpers/checkToggled';

interface Props {
  areaList: Area[];
  setAreaList: (areaList: Area[]) => void;
}

const Home: React.FC<Props> = ({ areaList, setAreaList }) => {
  return (
    <div className={styles.container}>
      {areaList.map((area) => (
        <React.Fragment key={area.id}>
          <ListItem
            name={area.name}
            checked={area.isChecked}
            hasCheckedChildren={area.hasCheckedChildren}
            checkToggled={() => setAreaList(checkToggled(area.id, areaList))}
          />
          <div className={styles.childContainer}>
            {area.rooms.map((room) => (
              <React.Fragment key={room.id}>
                <ListItem
                  name={room.name}
                  checked={room.isChecked}
                  hasCheckedChildren={room.hasCheckedChildren}
                  checkToggled={() => setAreaList(checkToggled(room.id, areaList))}
                />
                <div className={styles.childContainer}>
                  {room.beds.map((bed) => (
                    <ListItem
                      key={bed.id}
                      name={bed.name}
                      checked={bed.isChecked}
                      checkToggled={() => setAreaList(checkToggled(bed.id, areaList))}
                    />
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Home;
