import React from 'react';
import styles from './list-item.module.css';

interface Props {
  name: string;
  checked: boolean;
  expandable?: boolean;
  expanded?: boolean;
  hasCheckedChildren?: boolean;
  expandToggled?: () => void;
  checkToggled: () => void;
}

const ListItem: React.FC<Props> = ({ name, expanded, expandable, checked, hasCheckedChildren, expandToggled, checkToggled }) => {
  return (
    <div className={styles.container}>
      <div className={styles.expandable}>
        {expandable && <button onClick={expandToggled}>{expanded ? 'collapse' : 'uncollapse'}</button>}
      </div>
      <input type="checkbox" defaultChecked={checked || hasCheckedChildren} onChange={checkToggled} />
      <span className={styles.name}>{name}</span>
    </div>
  );
};

export default ListItem;
