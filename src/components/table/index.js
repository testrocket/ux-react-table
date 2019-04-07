import React from 'react';
import TableRow from './table-row';
import styles from './index.module.css';

export default class Table extends React.Component {

  renderRows() {
    return this.props.model.rows.map((row, i) =>
      <TableRow key={i} row={row} />);
  }

  render() {
    return (
      <div className={styles.table}>
        {this.renderRows()}
      </div>
    )
  }
}