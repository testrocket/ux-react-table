import React from 'react';
import TableRow from '../table-row'

export default class TableBody extends React.Component {

  constructor(props) {
    super(props);

    this.onRowUpdated = this.onRowUpdated.bind(this);
  }

  onRowUpdated(rowKey, cellKey, value) {
    this.props.onTableUpdated(rowKey, cellKey, value);
  }

  renderRows() {
    return this.props.model.rows.map(row =>
      <TableRow key={row.key} row={row} onRowUpdated={this.onRowUpdated}/>
    );
  }

  render() {
    return (
      <div>
        {this.renderRows()}
      </div>
    )
  };
}


