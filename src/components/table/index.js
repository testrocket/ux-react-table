import React from 'react';
import TableRow from './table-row';
import TableHeader from './table-header';
import styles from './index.module.css';

export default class Table extends React.Component {

  renderRows() {
    return this.props.model.rows.map((row, i) =>
      <TableRow key={i} row={row} />);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.table}>
          <TableHeader rows={this.props.model.rows}/>
          {this.renderRows()}
        </div>
      </div>
    )
  }
}