import React from 'react';
import TableHeader from './table-header';
import TableBody from './table-body';
import styles from './index.module.css';
import * as tableService from '../../services/table';

export default class Table extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      model: this.props.model,
    };

    this.onTableUpdated = this.onTableUpdated.bind(this);
  }

  onTableUpdated(rowKey, cellKey, value) {
    const model = tableService.updateTableCell(this.state.model, rowKey, cellKey, value);
    this.setState({ model });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.table}>
          <TableHeader rows={this.state.model.rows} />
          <TableBody model={this.state.model} onTableUpdated={this.onTableUpdated}/>
        </div>
      </div>
    );
  }
}