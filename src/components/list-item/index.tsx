import React from 'react';
import styles from './list-item.module.css';

interface Props {
  name: string;
  checked: boolean;
  hasCheckedChildren?: boolean;
  checkToggled: () => void;
}

const ListItem: React.FC<Props> = ({ name, checked, hasCheckedChildren, checkToggled }) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" defaultChecked={checked || hasCheckedChildren} onChange={checkToggled} />
      <span className={styles.name}>{name}</span>
    </div>
  );
};

export default ListItem;
