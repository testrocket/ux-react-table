import React from 'react';
import styles from './index.module.css';

export default class TableCell extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.cellRef = React.createRef();
  }

  handleDoubleClick = () => {
    this.setState({
      editing: true
    }, () => {
      this.cellRef.current.focus();
    });
  }

  onBlur = () => {
    this.setState({ editing: false });
  }

  render() {
    return (
      <div className={styles.cell}
        ref={this.cellRef}
        contentEditable={this.state.editing}
        suppressContentEditableWarning={true}
        onBlur={this.onBlur}
        onDoubleClick={this.handleDoubleClick}>
        {this.props.cell.value}
      </div>
    )
  }
}

