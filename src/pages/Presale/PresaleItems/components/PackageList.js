import React from 'react';
import kebabCase from 'lodash/kebabCase';

import styles from './PackageList.module.scss';

const PackageList = ({ items, id, title = null }) => {
  if (!items) {
    return null;
  }

  return (
    <div className={styles.details}>
      {title && <span className={styles.title}>{title}</span>}
      {items && (
        <ul>
          {items.map(item => (
            <li key={`${id}_${kebabCase(item)}`}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PackageList;
