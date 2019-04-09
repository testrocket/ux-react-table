import React from 'react';
import styles from './index.module.css';
import TableCell from '../table-cell';

export default class Table extends React.Component {

  renderCells() {
    return this.props.row.cells.map(cell =>
      <TableCell key={cell.key} cell={cell} />);
  }

  render() {
    return (
      <div className={styles.row}>
        {this.renderCells()}
      </div>
    )
  };
}