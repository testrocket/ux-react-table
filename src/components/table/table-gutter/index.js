import React from 'react';
import styles from './index.module.css';
import { times } from 'lodash';

const TableGutter = ({ rows }) => (
  <div className={styles.gutter}>
    {times(rows.length, index => 
      <div key={index}>{index + 1}</div>
    )}
  </div>
);

export default TableGutter;
