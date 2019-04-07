import React from 'react';
import styles from './index.module.css';
import TableCell from '../table-cell';

export default class Table extends React.Component {

  renderCells() {
    return this.props.row.map((cell, index) =>
      <TableCell key={index} cell={cell} />);
  }

  render() {
    return (
      <div className={styles.row}>
        {this.renderCells()}
      </div>
    )
  };
}