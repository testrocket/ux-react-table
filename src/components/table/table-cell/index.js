import React from 'react';
import styles from './index.module.css';

const TableCell = ({ cell }) => (
  <div className={styles.cell}>
    {cell.value}
  </div>
);

export default TableCell;
