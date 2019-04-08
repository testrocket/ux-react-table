import React from 'react';
import styles from './index.module.css';
import { times } from 'lodash';

const TableHeader = ({ rows }) => (
  <div className={styles.header}>
    {times(rows[0].length, index => 
      <div key={index}>{index + 1}</div>
    )}
  </div>
);

export default TableHeader;
