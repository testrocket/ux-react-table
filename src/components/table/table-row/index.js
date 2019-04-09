import React from 'react';
import styles from './index.module.css';
import TableCell from '../table-cell';

export default class TableRow extends React.Component {

  constructor(props) {
    super(props);

    this.onCellUpdated = this.onCellUpdated.bind(this);
  }

  onCellUpdated(rowKey, cellKey, value) {
    this.props.onRowUpdated(rowKey, cellKey, value);
  }

  renderCells() {
    return this.props.row.cells.map(cell =>
      <TableCell key={cell.key}
        rowKey={this.props.row.key}
        cell={cell}
        onCellUpdated={this.onCellUpdated}/>
    );
  }

  render() {
    return (
      <div className={styles.row}>
        {this.renderCells()}
      </div>
    );
  }
}