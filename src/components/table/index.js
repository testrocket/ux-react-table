import React from 'react';
import TableHeader from './table-header';
import TableBody from './table-body';
import styles from './index.module.css';

export default class Table extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      model: this.props.model,
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.table}>
          <TableHeader rows={this.props.model.rows} />
          <TableBody model={this.props.model}/>
        </div>
      </div>
    )
  }
}