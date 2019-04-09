import React, { Component } from 'react';
import './App.css';
import Table from './components/table';
import sampleModel from './models/SampleModel';
import * as exporterService from './services/exporter';
import * as tableService from './services/table';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      model: sampleModel
    };

    this.rowIndexRef = React.createRef();
    this.columnIndexRef = React.createRef();
  }

  exportAsCSVFile = () => {
    exporterService.downloadContent(exporterService.exportToCSV(this.state.model));
  }

  insertRow = () => {
    const model = tableService.insertTableRow(this.state.model, this._parseRowIndex());
    this.setState({ model });
  }

  removeRow = () => {
    const model = tableService.removeTableRow(this.state.model, this._parseRowIndex());
    this.setState({ model });
  }

  insertColumn = () => {
    const model = tableService.insertTableColumn(this.state.model, this._parseColumnIndex());
    this.setState({ model });
  }

  removeColumn = () => {
    const model = tableService.removeTableColumn(this.state.model, this._parseColumnIndex());
    this.setState({ model });
  }

  _parseRowIndex() {
    return parseInt(this.rowIndexRef.current.value, 10) || 0;
  }

  _parseColumnIndex() {
    return parseInt(this.columnIndexRef.current.value, 10) || 0;
  }

  render() {
    return (
      <div className="App">
        <div className="help">Add or remove rows / columns (type row or column index)</div>
        <div className="table-controls">
          <div>
            <div>
              <input type="text" ref={this.rowIndexRef} placeholder="0" />
              <button onClick={this.insertRow}>Add</button>
              <button onClick={this.removeRow}>Remove</button>
            </div>
            <div>
              <input type="text" ref={this.columnIndexRef} placeholder="0" />
              <button onClick={this.insertColumn}>Add</button>
              <button onClick={this.removeColumn}>Remove</button>
            </div>

          </div>
        </div>
        <div className="help">Double click on cell to edit</div>
        <Table model={this.state.model}
          onInsertRow={this.onInsertRow}
          onInsertColumn={this.onInsertColumn} />
        <div className="export-container">
          <button className="export-button" onClick={this.exportAsCSVFile}>Export to CSV</button>
        </div>
      </div>
    );
  }
}

export default App;
